import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { Arrow } from "@/components/Icons";
import { ButtonLink, Eyebrow, H2, Prose, Section, TextLink } from "@/components/ui";
import { business, addressLines } from "@/content/business";
import { areas } from "@/content/areas";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Areas Served | Massage Therapy Glasgow | The Reset Room",
  description:
    "The Reset Room is a private massage and holistic therapy room in Bridgeton, welcoming clients from Dennistoun, the city centre, Parkhead, Rutherglen and more.",
  path: "/areas",
});

export default function AreasHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Areas", href: "/areas" }]} />
      <section className="px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>One room, open to the whole city</Eyebrow>
          <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">Massage Therapy Across Glasgow&rsquo;s East End and Beyond</h1>
          <Prose
            className="mt-6"
            paragraphs={[
              "The Reset Room Glasgow is a single, private treatment room in Bridgeton, run by Jodi. There's one location — so rather than travelling to you, it's a calm place you come to, a short trip from much of the city.",
              "Clients visit from neighbouring East End areas, from the city centre and from across the river. Below you'll find a little about getting here from each area, and every page links to the full range of treatments.",
              `You'll find the room at ${addressLines.join(", ")}. Free parking is available nearby, with good transport links into the city centre.`,
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={business.gbp.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</ButtonLink>
            <ButtonLink href="/book" variant="secondary">Book online</ButtonLink>
          </div>
        </div>
      </section>

      <Section tone="white">
        <H2 text="Where clients *visit* from" />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/areas/${a.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-highlight-soft">
                <span className="text-xs uppercase tracking-[0.2em] text-ink-faint">{a.postcodes.join(" / ")}</span>
                <h2 className="mt-2 font-display text-2xl text-ink">{a.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{a.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-highlight-deep">
                  {a.isHome ? "About the Bridgeton room" : `Visiting from ${a.shortName || a.name}`} <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-ink-soft">
          Clients also visit from the West End, Calton, Shettleston and the streets around Glasgow Green. Wherever you&rsquo;re coming from, you can <TextLink href="/contact">get in touch</TextLink> if you have a question about finding the room.
        </p>
      </Section>
      <CtaBand />
    </>
  );
}
