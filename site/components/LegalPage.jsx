import Breadcrumbs from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/ui";

export default function LegalPage({ title, path, updated, children }) {
  return (
    <>
      <Breadcrumbs items={[{ name: title, href: path }]} />
      <article className="px-5 pb-24 pt-8 md:px-10 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Last updated {updated}</Eyebrow>
          <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-5xl">{title}</h1>
          <div className="legal mt-10 space-y-5 leading-relaxed text-ink-soft [&_a]:text-highlight-deep [&_a]:underline [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
            {children}
          </div>
        </div>
      </article>
    </>
  );
}
