# Site audit — theresetroomglasgow.com

Audited: 16 September 2026 · Old site: WordPress + Elementor + Rank Math · Prepared by MunroStudio

## What this means for you, Jodi

Your current website has a lot going for it. Every treatment page has plenty of genuinely helpful writing and good FAQs, which is exactly what Google looks for, and the pages are already set up to be found. The new site keeps all of that.

What needed fixing was mostly behind the scenes, and a few things were quietly costing you bookings or trust:

- **Your old business name was still on the homepage.** "Lovemore Therapies" appeared twice. Anyone reading it (and Google) could be confused about who you are.
- **One "Book" button was broken.** On the lymphatic drainage page the final booking button had a typo in the link, so anyone who clicked it landed on an error instead of your booking page. A few other buttons (hot stone, sound baths, the "Treatments" menu) went nowhere at all.
- **Some wording could get you into trouble.** UK advertising rules are strict with complementary therapies. Phrases like "detox", "emotional healing", "reduces anxiety", "improves sleep quality" and "balance the energy fields" are the kind the Advertising Standards Authority regularly rules against. The new copy keeps your warm voice but describes how treatments feel and what clients choose them for, rather than promising results.
- **When your pages were shared on Facebook or WhatsApp,** two of them showed a picture from an old test website, and most showed no picture at all.
- **The Swedish massage page had a list copied from the deep tissue page,** including sciatica, which doesn't really fit a relaxation massage.
- **There was no privacy policy or terms page.** Because you collect health information in consultations, you need a privacy policy. The new site has both (please read them over).
- **Your address is written several different ways online** (Park Lane House, Parklane House, Suite 3-14/3-15, and "Brooke Street" on one Facebook post). Google trusts businesses more when the name, address and phone number match everywhere.
- **Two photos were stock images** from a free photo library, one with a description that didn't match. The new site only uses your own photos.

Nothing you've built up is lost. Every old page address automatically forwards to its new home, so links people have saved, and anything Google has already listed, keep working.

---

## How this audit was done

The MunroStudio scanner rule set was applied by hand. The build environment could not reach the live domain with `curl` (host blocked), so all 13 live pages were read in full through a text fetcher that returns the visible copy **and** the `<head>` meta tags. That confirms titles, descriptions, canonicals, robots, Open Graph tags, headings, links and copy. It does **not** expose raw HTML byte-for-byte, JSON-LD blocks, response timings, image weights, `robots.txt`, the sitemap or 404 behaviour — those rows are marked **Run script** and are covered by `npm run audit:legacy` (see `docs/legacy/README.md`). Run it before cutover and paste the output below.

## Findings

| # | Severity | Finding | Status | Evidence | Fix (plain English) | Fixed in new site |
|---|---|---|---|---|---|---|
| 1 | Critical | Host unreachable / 4xx–5xx | Pass | All 13 pages returned content | — | — |
| 2 | Critical | `noindex` | Pass | `meta robots: follow, index` on every page | — | Explicit `index` + canonical everywhere; `/thank-you` noindex |
| 3 | Critical | <80 words crawlable text | Pass | Treatment pages ~600–1,200 words of copy | — | All pages server-rendered, 300+ words in `<main>` (treatments 980–1,320) |
| 4 | Critical | Status regression vs previous scan | Run script | No previous scan on record | Save this scan as the baseline | — |
| 5 | High | Missing title / description / viewport | Pass | Present on all pages | — | — |
| 6 | High | Target keyword absent from title | **Fail (Contact)** | Contact title "Contact The Reset Room Glasgow" has no service keyword | Add "Massage, Bridgeton" | ✓ |
| 7 | High | No clear CTA | Pass | "Book Your Treatment" everywhere, but no `tel:` link on any page (phone is plain text) | Make the phone number tappable | ✓ `tel:` in header, drawer, CTA bands, footer |
| 8 | High | **Broken booking link** | **Fail** | Lymphatic page final CTA: `https://www/vagaro.com/theresetroomglasgow/` | Correct the URL | ✓ every Vagaro link is exactly `https://www.vagaro.com/theresetroomglasgow` (checked by script) |
| 9 | High | 3+ AI-citation signals missing | Run script | See AI readiness below | — | ✓ all five present |
| 10 | Medium | No privacy policy | **Fail** | Footer links: Home, About, Contact, Treatments only | Add privacy page | ✓ `/privacy` |
| 11 | Medium | No JSON-LD / FAQPage / LocalBusiness schema | Run script | Rank Math usually emits basic schema; FAQs are plain Elementor widgets so FAQPage is unlikely | Add schema | ✓ Organization, LocalBusiness+HealthAndBeautyBusiness, Person, WebSite, Service, FAQPage, BreadcrumbList |
| 12 | Medium | Images >400KB | Run script | Full-size WordPress uploads in use | Compress | ✓ `migrate-images.mjs` caps at ~380KB; build fails if any image >400KB |
| 13 | Medium | Thin content (<250 words) | Pass (Contact borderline) | Contact page is short | Add useful copy | ✓ 315 words in `<main>` |
| 14 | Medium | <5 internal links on homepage | Pass | Many, but via `?page_id=` (see 22) | — | ✓ 36 clean internal links |
| 15 | Medium | Homepage >2,500ms | Run script | — | — | Static HTML; no third-party scripts except Vercel Analytics |
| 16 | Low | Title length 15–65 | Pass | Longest: "Lymphatic Drainage Massage Glasgow - The Reset Room Glasgow" (59) | — | ✓ all 30–60 |
| 17 | Low | Canonical | Pass | Present | — | ✓ |
| 18 | Low | **Open Graph incomplete / wrong** | **Fail** | `og:locale en_US` sitewide. `og:image` missing on Home, Contact, Swedish, Pregnancy, Lymphatic, Reflexology, Reiki, Sound Bath. Deep tissue + hot stone `og:image` point at `lovemoretherapies.com/staging/…`. Service pages use `og:type article`. Homepage Twitter card says "Written by Jodi · 7 minutes" | Fix locale, add on-domain images | ✓ `en_GB`, on-domain image on every page (checked by script) |
| 19 | Low | **Favicon** | **Fail** | `cropped-Jodi-01-…png` (a photo of Jodi) | Use the logo mark | ✓ split-circle mark: `icon.png`, `apple-icon.png`, `favicon.ico` |
| 20 | Low | Custom 404 / soft 404 | Run script | — | — | ✓ `app/not-found.js`, real 404 status (checked) |
| 21 | Low | `<html lang>` / About / Terms | About ✓, Terms **Fail**, lang Run script | No terms page | Add terms | ✓ `/terms`, `lang="en-GB"` |
| 22 | Low | Generic filenames / missing alt | Mostly pass | Good descriptive names; stock alts misleading (see 31) | — | ✓ |
| 23 | Low | Sitemap | Run script | — | — | ✓ `/sitemap.xml` (24 URLs) + `/robots.txt` |

### Pre-scan observations — all verified on the live pages

| # | Severity | Finding | Evidence | Fixed |
|---|---|---|---|---|
| 24 | High | **Old business name in copy** | Home: "Many clients come to Lovemore Therapies for support with:" and FAQ "At Lovemore Therapies in Glasgow…" | ✓ zero occurrences (grep + script) |
| 25 | High | **Staging URLs in social previews** | See 18 | ✓ |
| 26 | High | **Dead CTAs** | Hot stone mid-page "Book Your Treatment" `href="#"`; Sound Bath "View Upcoming Sound Baths" `href="#"` (top) and not a link at all (bottom); "Treatments" nav parent `href="#"` | ✓ script fails on any `href="#"`; "Treatments" links to `/treatments` with a separate dropdown toggle |
| 27 | Medium | **Duplicated section** | Swedish "What Swedish Massage Can Help With" is the deep tissue list, incl. "Sciatica and nerve-related discomfort" and "targeted treatment" | ✓ Swedish-specific list |
| 28 | Low | **Copy errors** | Hot stone benefits intro "…can be particularly beneficial if you:" above statements, last item "…intense pressureList Item"; Indian head "a gentle but effective to allow"; hub "The reset Room Glasgow"; sound bath "the Reset Room Glasgow"; pregnancy "The Reset Room Glasgow, will begin" | ✓ |
| 29 | Medium | **`?page_id=` internal links + mismatched anchors** | Every internal link uses `/?page_id=`. Mismatches include: "release tension" → hot stone; "physical and mental relaxation" → sound bath; "relaxation massage" → Indian head; "physical and emotional wellbeing" → Reiki; "relieve tension" → Swedish; "to pause, breathe" → sound bath; "you can fully relax" → Indian head; "relaxation" → pregnancy; "soothing and restorative experience" → reflexology; "focused touch and rhythmic movement" → lymphatic; "wellbeing" → hot stone; "supportive treatment" → pregnancy; "very gentle" → Swedish; "Glasgow's East End" → contact | ✓ every contextual link points at the page its text describes |
| 30 | Medium | **NAP inconsistency** | Site footer "Suite 3, 14-15 Park Lane House"; contact map embed "Parklane House"; Fresha "Suite 3-14/3-15, Park Lane House"; Facebook post "Suite 3/14 -15 Park Lane House 47 **Brooke** Street" | Single source in `content/business.js`. **Needs Jodi to confirm the GBP spelling**, then update Fresha + Facebook to match |
| 31 | Medium | **Stock photos** | Pregnancy: `pexels-photo-6560304` (alt "pregnancy massage treatment glasgow"). Hot stone: `pexels-photo-6560298` (alt claims it helps "relieve muscle tension, stress and aches through therapeutic heat") | ✓ not migrated; build fails on stock-looking filenames |
| 32 | Low | **Heading order** | Home: "Reiki" is `<h2>` among `<h3>` siblings. Contact page has **no `<h1>`** (starts at `<h2>`) | ✓ one H1 per page, no level skips (checked by script) |
| 33 | High | **Health-claim wording (CAP Code)** | Home card: "Support your body's natural detox process"; home list: "Stress, anxiety and poor sleep"; Reiki: "The aim is to change and balance the 'energy fields'"; Sound bath benefits: "Emotional healing and release", "Reduces stress and anxiety", "Improves sleep quality"; Indian head: "Helps reduce headaches"; image alts "healing sessions"; Claire testimonial outcome claim (swollen knee) | ✓ rewritten to experiential, hedged language; GP caveats on pain-related pages; brief's claims grep is clean |

### New findings not in the brief

| # | Severity | Finding | Action |
|---|---|---|---|
| 34 | Medium | Mockup accent colour `#B9826B` is **2.9:1** on cream — fails even the 3:1 large-text threshold. Mockup caption grey `#7A8C85` is 3.2:1 | Clay nudged to `#A8735D` (3.5:1) for large italic words only; text links use `#8A5645` (5.3:1); captions `#56675F` (4.7:1 on sage) |
| 35 | Low | Next.js adds a **second redirect hop** for `/old-slug/` (trailing-slash redirect runs first) and **carries `?page_id=` onto the destination** | Slash and `page_id` variants handled in `middleware.js`; all 25 variants verified as one clean 308 hop |
| 36 | Low | Supplied logo PNG is 3000×3000, not 1920×1920 | Trimmed; transparent dark + cream variants generated |
| 37 | Info | A Fresha listing exists for the business with a different address format | Confirm whether it's still used; align NAP or close it |

## AI citation readiness

| Signal | Old site | New site |
|---|---|---|
| Organization / LocalBusiness schema | Run script (likely basic Rank Math) | ✓ |
| FAQPage schema | Unlikely (Elementor accordions) | ✓ on every page with FAQs |
| Server-rendered content | ✓ (WordPress) | ✓ (React Server Components; FAQ answers in HTML while collapsed) |
| `<html lang>` | Run script | ✓ `en-GB` |
| About page | ✓ | ✓ |
| **Score** | 2–4 / 5 pending script | **5 / 5** |

## 301 map

All permanent (Next.js sends 308, which Google treats the same as 301). Every row verified as a single hop by `npm run check`.

| Old URL | New URL | Where |
|---|---|---|
| `/massage-treatments-in-glasgow` and `/…/` | `/treatments` | `next.config.js` / `middleware.js` |
| `/deep-tissue-massage-glasgow` and `/…/` | `/treatments/deep-tissue-massage` | " |
| `/lymphatic-drainage-massage-glasgow` and `/…/` | `/treatments/lymphatic-drainage-massage` | " |
| `/swedish-massage-glasgow` and `/…/` | `/treatments/swedish-massage` | " |
| `/pregnancy-massage-glasgow` and `/…/` | `/treatments/pregnancy-massage` | " |
| `/hot-stone-massage-glasgow` and `/…/` | `/treatments/hot-stone-massage` | " |
| `/indian-head-massage-glasgow` and `/…/` | `/treatments/indian-head-massage` | " |
| `/reflexology-glasgow` and `/…/` | `/treatments/reflexology` | " |
| `/reiki-glasgow` and `/…/` | `/treatments/reiki` | " |
| `/sound-bath-glasgow` and `/…/` | `/sound-baths` | " |
| `/?page_id=2803` | `/treatments/deep-tissue-massage` | `middleware.js` |
| `/?page_id=2975` | `/treatments/swedish-massage` | " |
| `/?page_id=3351` | `/treatments/lymphatic-drainage-massage` | " |
| `/?page_id=3551` | `/treatments/pregnancy-massage` | " |
| `/?page_id=3780` | `/treatments/hot-stone-massage` | " |
| `/?page_id=3451` | `/treatments/indian-head-massage` | " |
| `/?page_id=3192` | `/treatments/reiki` | " |
| `/?page_id=3100` | `/sound-baths` | " |
| `/?page_id=3267` | `/treatments/reflexology` | " |
| `/?page_id=3919` | `/treatments` | " |
| `/?page_id=16` | `/contact` | " |
| `/about/`, `/contact/`, any `/path/` | slash-less path | `middleware.js` |

**Still to do before cutover:** run `npm run audit:legacy`, check the sitemap output for anything not above (Rank Math category, author or attachment URLs) and add 301s to `legacy-redirects.js` or let them 404.

## Content parity

Every live treatment page's topics and FAQs are covered at equal or greater depth. Sections carried over include: "Swedish massage as part of your routine", "A gentle approach that still feels effective", Swedish vs deep tissue, "Is pregnancy massage safe?", postnatal support, pregnancy cross-links to reflexology and lymphatic, "Why heat makes a difference", "A slower, more immersive experience", "A different kind of relaxation treatment", reflexology during pregnancy, reflexology vs massage, "Reiki and sound", Indian head vs full-body, sound bath vs massage, and every FAQ question from every page (answers rewritten where claims needed fixing).
