/** @type {import('next').NextConfig} */
const { renamed } = require("./legacy-redirects");

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Trailing slashes are handled in middleware.js so "/old-page/" reaches its new URL in ONE hop
  // (Next's built-in slash redirect would otherwise add a second hop before these redirects run).
  skipTrailingSlashRedirect: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    // Bare old permalinks. The "/slug/" and "/?page_id=" variants are in middleware.js.
    // TODO(dev): run `npm run audit:legacy` and add any extra URLs from the old sitemap here.
    return Object.entries(renamed).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

module.exports = nextConfig;
