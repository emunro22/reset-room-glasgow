import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export default function Breadcrumbs({ items }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="px-5 pt-6 md:px-10">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-xs text-ink-faint">
          {all.map((it, i) => (
            <li key={it.href} className="flex items-center gap-2">
              {i < all.length - 1 ? (
                <>
                  <Link href={it.href} className="hover:text-ink hover:underline underline-offset-4">{it.name}</Link>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span aria-current="page" className="text-ink-soft">{it.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
