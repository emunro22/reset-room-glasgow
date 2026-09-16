import { treatmentPages } from "@/content/services";
import { areas } from "@/content/areas";
import { abs } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();
  const page = (path, priority, changeFrequency = "monthly") => ({ url: abs(path), lastModified: now, changeFrequency, priority });
  return [
    page("/", 1),
    page("/treatments", 0.9),
    ...treatmentPages.map((s) => page(`/treatments/${s.slug}`, 0.9)),
    page("/sound-baths", 0.8, "weekly"),
    page("/about", 0.7),
    page("/book", 0.7),
    page("/contact", 0.7),
    page("/faqs", 0.6),
    page("/areas", 0.6),
    ...areas.map((a) => page(`/areas/${a.slug}`, 0.6)),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
