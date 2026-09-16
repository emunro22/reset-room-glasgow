# The Reset Room Glasgow — website

Next.js 14 (App Router, plain JS) · Tailwind · Motion · Resend · Vercel. Built to the MunroStudio house standard.

- `docs/site-audit.md` — audit of the old WordPress site, 301 map, summary for Jodi
- `docs/client-questions.md` — the one batched list of open questions for Jodi
- `docs/legacy/` — raw HTML of the old site (run `npm run audit:legacy` before cutover)

## Quick start

```bash
npm install
cp .env.example .env.local        # add RESEND_API_KEY
npm run images:migrate            # pulls Jodi's real photos from the old site (while WordPress is still live)
npm run dev
```

Pages without a migrated photo show a sage-to-clay arch placeholder, so the site works before the photos arrive.

## How it's put together

Every page is a React Server Component. The only client components are small islands with no indexable copy:

| Component | Why it's client-side |
|---|---|
| `MobileNav` | drawer open state, focus trap, scroll lock |
| `TreatmentsDropdown` | desktop dropdown state |
| `HeaderShell` | border after 10px scroll |
| `Reveal` | scroll-reveal wrapper around server-rendered children |
| `StickyBookPill` | hides itself on `/book`, over the footer, CTA bands and the contact form |
| `ContactForm` | submit state (also works with JS off — posts straight to the API) |

FAQs use native `<details>`, so answers are in the HTML while collapsed and need no JavaScript.

**Dependencies beyond the brief:** `sharp` (dev only) compresses migrated photos. Nothing else.

## Editing content

Everything lives in `/content`. Change a file, commit, and Vercel redeploys.

| File | What's in it |
|---|---|
| `business.js` | Name, phone, email, address, Vagaro link, Google Business links, socials, qualifications |
| `services.js` | Every treatment page: intro, "may suit you if", sections, what to expect, benefits, FAQs |
| `areas.js` | The six area pages |
| `faqs.js` | Homepage and booking FAQs |
| `testimonials.js` | Client quotes (real ones only) |
| `events.js` | Upcoming sound baths |
| `images.js` | Photo filenames and alt text |

**Headings:** wrap one word in asterisks to set it in clay italic — `"Choose what your body *needs* today"`. The asterisks are stripped from page titles and schema automatically.

**Wording rules** (UK CAP Code — the ASA is strict with complementary therapies): never say a treatment treats, cures, heals or detoxes anything, reduces anxiety, improves sleep or balances energy. Use "many clients find…", "may help you feel…", "designed to support relaxation". Keep the GP caveat on anything pain-related. Before committing, run:

```bash
grep -riE 'detox|cure|heal(s|ing)|treats? (anxiety|insomnia)|energy field' content/ app/ components/
```

(Watch for false positives like "se**cure**" — reword those too so the grep stays clean.)

Anything unconfirmed is marked `TODO(client)` in a **code comment** only, never in rendered text. `npm run check` fails if "TODO" ever appears on a page.

### Add a sound bath date

In `content/events.js`:

```js
export const soundBaths = [
  {
    slug: "evening-sound-bath-oct-2026",
    title: "Evening Sound Bath",
    date: "2026-10-18T19:00:00+01:00",   // +01:00 in summer (BST), +00:00 in winter
    durationMinutes: 60,
    venue: "The Reset Room, Park Lane House, Bridgeton",
    price: 20,
    bookingUrl: "https://www.vagaro.com/theresetroomglasgow",
    note: "Wear warm, comfortable clothes.",
  },
];
```

The page shows a card and emits Event schema for each future date. Past dates disappear on their own (the page revalidates hourly). With no future dates it shows the "follow on Instagram and Facebook" message.

### Add a treatment

1. Add an object to `content/services.js` (copy an existing one — every field is used). Write at least 700 words across intro, sections, what to expect and FAQs, all specific to that treatment.
2. Add a photo filename to `content/images.js` and the file to `public/images/` (under 400KB, descriptive name, no stock).
3. `npm run build` — the page, nav, footer, sitemap, cards and schema all pick it up.

### Add an area

Add an object to `content/areas.js`. Only do this if you can write 300+ words that are genuinely about that area and honest about the room being in Bridgeton — near-duplicate area pages are treated by Google as doorway pages and pull down the treatment pages.

**Scale guard:** there is deliberately no `/areas/[area]/[treatment]` matrix. It's one room in one place. Revisit only if Search Console shows real "treatment + area" demand.

## Colours

Sampled from Jodi's mockups, nudged for contrast (see `tailwind.config.js` comments):

| Token | Hex | Use |
|---|---|---|
| `ink` | #173A31 | headings, primary buttons, dark card |
| `ink-deep` | #12302A | footer |
| `ink-soft` | #3F5A52 | body text |
| `ink-faint` | #56675F | captions |
| `surface` | #F6F1EA | cream background |
| `surface-2` | #DDE6DD | sage bands |
| `highlight` | #A8735D | italic heading word only (large text) |
| `highlight-soft` | #B9826B | decoration only — never text (2.9:1) |
| `highlight-deep` | #8A5645 | text links |

## Verifying a build

```bash
npm run build && npm start
npm run check                                   # in a second terminal
BASE=https://your-preview.vercel.app npm run check
```

`scripts/check-site.mjs` checks every page in the sitemap for: 300+ words in `<main>` (700+ on treatment pages), exactly one H1 and no heading skips, title 30–60 and description 140–160 characters, unique titles and descriptions, canonical, on-domain `og:image`, `en_GB` locale, `lang="en-GB"`, a `tel:` link and a Book CTA, no old business name, no rendered TODOs, no staging or stock references, no claim wording, exact Vagaro links, alt on every image, no `href="#"`, valid JSON-LD with no review markup, FAQPage schema wherever FAQs render, no orphan pages, a genuine 404, and all 25 legacy redirect variants as a single permanent hop.

Last run: **all checks passed.**

### Redirect note

The brief expected `next.config.js` to handle everything. It can't cleanly: Next's trailing-slash redirect runs first (so `/old-page/` took two hops), and `has`-query redirects append `?page_id=` to the destination. So bare old permalinks are in `next.config.js`, while slash and `?page_id=` variants are in `middleware.js` with `skipTrailingSlashRedirect: true`. Both read `legacy-redirects.js`.

## Environment variables

Set in Vercel for Production, Preview and Development:

```
RESEND_API_KEY=re_…
ENQUIRY_EMAIL=hello@theresetroomglasgow.com
NEXT_PUBLIC_SITE_URL=https://theresetroomglasgow.com
```

Verify `theresetroomglasgow.com` in Resend before going live — the form sends from `enquiries@theresetroomglasgow.com`. Use `onboarding@resend.dev` for smoke tests only.

## Deploy

```bash
git init && git add -A && git commit -m "Initial build: The Reset Room Glasgow"
gh repo create reset-room-glasgow-site --private --source=. --push
vercel --prod
```

Auto-deploys from `main`.

### DNS cutover — email is live on this domain

1. `npm run audit:legacy` while WordPress is still up; commit `docs/legacy/`.
2. Export the full DNS zone from the registrar and save it as `docs/dns-before.txt`.
3. Note the **MX, SPF, DKIM and verification TXT** records for hello@. Keep them exactly. Only change the apex `A` and `www` `CNAME` to Vercel.
4. Add Resend's DKIM, SPF and MX records exactly as its dashboard lists them. Resend normally puts its SPF/MX on a `send.` subdomain, so the apex SPF for hello@ stays untouched. If any provider needs an include on the apex, **merge it into the existing record** — never two `v=spf1` TXT records on the same name.
5. Run `npm run check` against the Vercel preview URL — redirects must pass before cutover.
6. Lower TTLs 24h ahead, cut over, confirm SSL.
7. Send a test email **to** hello@ from an outside address. Submit the contact form end to end.
8. Keep WordPress hosting for 30 days as a rollback.

### After launch

- Search Console: submit `/sitemap.xml`; URL-inspect a few old WordPress URLs to confirm the redirects.
- Google Business Profile: update the website link; add treatment page links under Services; make the address match the site exactly.
- Update links in Vagaro, Instagram and Facebook bios.
- Align the address on Fresha and the Facebook "how to find us" post (it says "Brooke Street").
