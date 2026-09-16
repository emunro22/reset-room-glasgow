# Legacy site snapshot

Raw HTML of the old WordPress site goes here. It is the content source the new copy in `content/services.js` was written from.

The build sandbox could not reach theresetroomglasgow.com directly, so the copy was pulled through a text
fetcher (all 13 pages read in full, including meta tags). Before DNS cutover, capture the raw HTML for the
record by running from the repo root:

    npm run audit:legacy

That saves `home.html`, `about.html`, `contact.html` and every treatment page in this folder, and prints the
word counts, sitemap URLs, 404 behaviour, image sizes and known-issue greps used in `docs/site-audit.md`.
Do this while WordPress is still live — after cutover these URLs redirect to the new site.
