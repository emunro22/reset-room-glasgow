#!/usr/bin/env bash
# Phase 0 scan of the OLD WordPress site. Saves raw HTML to docs/legacy/ and prints the checks used in
# docs/site-audit.md. Run from the repo root: bash scripts/audit-live-site.sh
set -uo pipefail
SITE=${SITE:-https://theresetroomglasgow.com}
OUT=docs/legacy
mkdir -p "$OUT"

echo "== Homepage"
curl -sSL -w '\nHTTP:%{http_code} TIME:%{time_total}\n' "$SITE" > "$OUT/home.html"; tail -1 "$OUT/home.html"
echo "== robots.txt: $(curl -sSI "$SITE/robots.txt" | head -1)"
echo "== 404 check: $(curl -sSI "$SITE/__404-check__" | head -1)"
echo "== sitemap URLs"
for sm in sitemap_index.xml sitemap.xml page-sitemap.xml post-sitemap.xml; do
  curl -sS "$SITE/$sm" | grep -o '<loc>[^<]*' | sed 's/<loc>//' | sed "s/^/  [$sm] /"
done

echo "== Pages"
for p in about contact massage-treatments-in-glasgow deep-tissue-massage-glasgow \
  lymphatic-drainage-massage-glasgow swedish-massage-glasgow pregnancy-massage-glasgow \
  hot-stone-massage-glasgow indian-head-massage-glasgow reflexology-glasgow \
  reiki-glasgow sound-bath-glasgow; do
  curl -sSL "$SITE/$p/" > "$OUT/$p.html"
  words=$(sed -e 's/<script[^>]*>.*<\/script>//g' -e 's/<[^>]*>/ /g' "$OUT/$p.html" | wc -w)
  h1=$(grep -o '<h1' "$OUT/$p.html" | wc -l)
  printf '  %-40s words:%-6s h1:%s\n' "$p" "$words" "$h1"
done

echo "== Known issues"
echo "  old business name mentions:";            grep -il 'lovemor[e]' "$OUT"/*.html | sed 's/^/    /'
echo "  staging og:image:";              grep -l 'lovemor[e]therapies.com/staging' "$OUT"/*.html | sed 's/^/    /'
echo "  broken vagaro link (www/):";     grep -l 'https://www/vagaro' "$OUT"/*.html | sed 's/^/    /'
echo "  href=\"#\" links per page:";     grep -c 'href="#"' "$OUT"/*.html | sed 's/^/    /'
echo "  ?page_id= internal links:";      grep -o 'page_id=[0-9]*' "$OUT"/*.html | sort | uniq -c | sed 's/^/    /'
echo "  og:locale:";                     grep -o 'og:locale" content="[^"]*' "$OUT/home.html" | sed 's/^/    /'
echo "  images over 400KB:"
grep -o 'https://theresetroomglasgow.com/wp-content/uploads/[^" ]*\.\(jpe\?g\|png\|webp\)' "$OUT"/*.html | cut -d: -f2- | sort -u | while read -r u; do
  s=$(curl -sSI "$u" | grep -i content-length | awk '{print $2}' | tr -d '\r'); [ "${s:-0}" -gt 409600 ] && echo "    $u $((s/1024))KB"
done
