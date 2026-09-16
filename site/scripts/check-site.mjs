// Acceptance checks against a running build.
//   npm run build && npm start   (in another terminal)
//   npm run check                (or BASE=https://preview-url.vercel.app npm run check)
const BASE = (process.env.BASE || "http://localhost:3000").replace(/\/$/, "");
const VAGARO = "https://www.vagaro.com/theresetroomglasgow";
const ALLOWED_VAGARO = new Set([VAGARO, "https://www.vagaro.com/pro/privacy"]);
let failures = 0;
const fail = (page, msg) => { failures++; console.log(`  ✗ ${page}: ${msg}`); };

const visibleText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
const attr = (html, re) => (html.match(re) || [])[1];

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const pages = [...urls, "/thank-you"];
const titles = new Map();
const descs = new Map();

console.log(`\nPages (${pages.length})`);
for (const path of pages) {
  const res = await fetch(BASE + path, { redirect: "manual" });
  const html = await res.text();
  if (res.status !== 200) { fail(path, `HTTP ${res.status}`); continue; }
  const text = visibleText(html);
  const words = text.split(" ").length;
  const mainHtml = (html.match(/<main[\s\S]*?<\/main>/) || [""])[0];
  const mainWords = visibleText(mainHtml).split(" ").length;
  const title = attr(html, /<title>([^<]*)<\/title>/)?.replace(/&amp;/g, "&");
  const desc = attr(html, /<meta name="description" content="([^"]*)"/)?.replace(/&amp;/g, "&").replace(/&#x27;/g, "'");
  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const ogImage = attr(html, /<meta property="og:image" content="([^"]*)"/);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  const isTreatment = path.startsWith("/treatments/");
  const min = isTreatment ? 700 : 300;
  const noindex = /<meta name="robots" content="noindex/.test(html);

  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  const skip = levels.findIndex((l, i) => i > 0 && l > levels[i - 1] + 1);

  console.log(`  ${path.padEnd(42)} words:${String(words).padEnd(5)} main:${String(mainWords).padEnd(5)} title:${title?.length} desc:${desc?.length}`);
  if (mainWords < min && !noindex) fail(path, `only ${mainWords} words in <main> (need ${min})`);
  if (h1s !== 1) fail(path, `${h1s} <h1> elements`);
  if (skip > 0) fail(path, `heading jumps h${levels[skip - 1]} → h${levels[skip]}`);
  if (!title || title.length < 30 || title.length > 60) fail(path, `title length ${title?.length}: "${title}"`);
  if (!noindex && (!desc || desc.length < 140 || desc.length > 160)) fail(path, `description length ${desc?.length}`);
  if (!canonical || canonical.replace(/\/$/, "") !== `https://theresetroomglasgow.com${path === "/" ? "" : path}`) fail(path, `canonical ${canonical}`);
  if (!ogImage || !ogImage.startsWith("https://theresetroomglasgow.com/")) fail(path, `og:image ${ogImage}`);
  if (!/og:locale" content="en_GB"/.test(html)) fail(path, "og:locale not en_GB");
  if (!/<html lang="en-GB"/.test(html)) fail(path, "html lang");
  if (!/href="tel:\+447737171101"/.test(html)) fail(path, "no tel: link");
  if (!/>(Book[^<]*|Continue to Vagaro|View appointments|Reserve your place)</.test(html)) fail(path, "no Book CTA");
  if (/lovemor[e]/i.test(html)) fail(path, "contains old business name");
  if (/TODO/.test(text)) fail(path, "TODO rendered visibly");
  if (/staging/.test(html)) fail(path, "staging URL");
  if (/pexels/i.test(html)) fail(path, "stock image reference");
  if (/\b(detox\w*|cures?|heal(s|ing)|energy fields?|reduces anxiety|improves sleep quality|emotional healing)\b/i.test(text)) fail(path, `health-claim wording: ${text.match(/\b(detox\w*|cures?|heal(s|ing)|energy fields?|reduces anxiety|improves sleep quality)\b/i)[0]}`);
  for (const m of html.matchAll(/href="(https?:\/\/[^"]*vagaro[^"]*)"/g)) if (!ALLOWED_VAGARO.has(m[1])) fail(path, `bad Vagaro link ${m[1]}`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt=/.test(m[0])) fail(path, `img without alt: ${m[0].slice(0, 80)}`);
  for (const m of html.matchAll(/href="#"/g)) fail(path, 'dead href="#"');
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(m[1]);
      const s = JSON.stringify(j);
      if (/aggregateRating|"review"/.test(s)) fail(path, "self-serving review markup");
    } catch { fail(path, "invalid JSON-LD"); }
  }
  if (/FAQ/.test(text) && /<details/.test(html) && !/"FAQPage"/.test(html)) fail(path, "FAQs rendered without FAQPage schema");
  if (titles.has(title)) fail(path, `duplicate title with ${titles.get(title)}`); else titles.set(title, path);
  if (desc && descs.has(desc)) fail(path, `duplicate description with ${descs.get(desc)}`); else descs.set(desc, path);
}

console.log("\nHomepage internal links");
const home = await (await fetch(`${BASE}/`)).text();
const internal = new Set([...home.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]));
console.log(`  ${internal.size} unique internal links`);
if (internal.size < 5) fail("/", "fewer than 5 internal links");

console.log("\nOrphans (sitemap pages not linked from any other page)");
const linkedFrom = new Set();
for (const p of pages) {
  const h = await (await fetch(BASE + p)).text();
  for (const m of h.matchAll(/href="(\/[^"#?]*)"/g)) if (m[1] !== p) linkedFrom.add(m[1]);
}
for (const p of urls) if (p !== "/" && !linkedFrom.has(p)) fail(p, "orphan page");

console.log("\n404");
const nf = await fetch(`${BASE}/__404-check__`);
if (nf.status !== 404) fail("/__404-check__", `status ${nf.status}`); else console.log("  ✓ genuine 404");

console.log("\nRedirects (must be a single permanent hop)");
const redirects = {
  "/massage-treatments-in-glasgow/": "/treatments",
  "/deep-tissue-massage-glasgow/": "/treatments/deep-tissue-massage",
  "/lymphatic-drainage-massage-glasgow/": "/treatments/lymphatic-drainage-massage",
  "/swedish-massage-glasgow/": "/treatments/swedish-massage",
  "/pregnancy-massage-glasgow/": "/treatments/pregnancy-massage",
  "/hot-stone-massage-glasgow/": "/treatments/hot-stone-massage",
  "/indian-head-massage-glasgow/": "/treatments/indian-head-massage",
  "/reflexology-glasgow/": "/treatments/reflexology",
  "/reiki-glasgow/": "/treatments/reiki",
  "/sound-bath-glasgow/": "/sound-baths",
  "/deep-tissue-massage-glasgow": "/treatments/deep-tissue-massage",
  "/sound-bath-glasgow": "/sound-baths",
  "/?page_id=2803": "/treatments/deep-tissue-massage",
  "/?page_id=2975": "/treatments/swedish-massage",
  "/?page_id=3351": "/treatments/lymphatic-drainage-massage",
  "/?page_id=3551": "/treatments/pregnancy-massage",
  "/?page_id=3780": "/treatments/hot-stone-massage",
  "/?page_id=3451": "/treatments/indian-head-massage",
  "/?page_id=3192": "/treatments/reiki",
  "/?page_id=3100": "/sound-baths",
  "/?page_id=3267": "/treatments/reflexology",
  "/?page_id=3919": "/treatments",
  "/?page_id=16": "/contact",
  "/about/": "/about",
  "/contact/": "/contact",
};
for (const [from, to] of Object.entries(redirects)) {
  const r = await fetch(BASE + from, { redirect: "manual" });
  const loc = r.headers.get("location") || "";
  const locPath = loc ? new URL(loc, BASE).pathname + new URL(loc, BASE).search : "";
  const ok = [301, 308].includes(r.status) && locPath === to;
  let hop2 = "";
  if (ok) {
    const r2 = await fetch(new URL(loc, BASE), { redirect: "manual" });
    if (r2.status !== 200) { hop2 = ` then ${r2.status}`; }
  }
  if (!ok || hop2) fail(from, `${r.status} → ${locPath || "(none)"}${hop2} (want ${to})`);
  else console.log(`  ✓ ${from.padEnd(40)} ${r.status} → ${to}`);
}

console.log(failures ? `\n${failures} problem(s) found\n` : "\nAll checks passed\n");
process.exit(failures ? 1 : 0);
