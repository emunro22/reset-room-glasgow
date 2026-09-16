import { abs } from "@/lib/seo";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] }],
    sitemap: abs("/sitemap.xml"),
    host: abs("/"),
  };
}
