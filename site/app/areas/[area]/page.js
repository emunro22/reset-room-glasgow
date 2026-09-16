import Link from "next/link";
import { notFound } from "next/navigation";
import ArchImage from "@/components/ArchImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { Arrow } from "@/components/Icons";
import { ButtonLink, Eyebrow, H2, H3, Prose, Section, TextLink } from "@/components/ui";
import { business, addressLines } from "@/content/business";
import { areas, getArea } from "@/content/areas";
import { services, serviceHref } from "@/content/services";
import { areaPageSchema, buildMetadata, faqSchema } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => areas.map((a) => ({ area: a.slug }));

export function generateMetadata({ params }) {
  const a = getArea(params.area);
  if (!a) return {};
  return buildMetadata({ title: a.metaTitle, description: a.metaDescription, path: `/areas/${a.slug}` });
}

export default function AreaPage({ params }) {
  const a = getArea(params.area);
  if (!a) notFound();
  const nearby = a.nearby.map(getArea).filter(Boolean);

  return (
    <>
      <Breadcrumbs items={[{ name: "Areas", href: "/areas" }, { name: a.shortName || a.name, href: `/areas/${a.slug}` }]} />
      <section className="px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>{a.isHome ? "Where the room is" : `Clients from ${a.postcodes.join(" / ")}`}</Eyebrow>
            <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">{a.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{a.blurb}</p>
            {!a.isHome && (
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
                To be clear: The Reset Room has one location, in <Link href="/areas/bridgeton" className="underline underline-offset-4">Bridgeton</Link>, and welcomes clients from {a.name} and across Glasgow.
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={business.bookingUrl}>Book your treatment</ButtonLink>
              <ButtonLink href={business.gbp.directionsUrl} target="_blank" rel="noopener noreferrer" variant="secondary">Get directions</ButtonLink>
            </div>
          </div>
          <ArchImage file={a.isHome ? "massage-room-glasgow-east-end.jpg" : "therapy-room-glasgow-east-end.jpg"} priority className="mx-auto aspect-[4/5] w-full max-w-sm" />
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <H2 text={a.isHome ? "A calm room in *Bridgeton*" : `From ${a.shortName || a.name} to a *quieter* room`} />
            <Prose className="mt-6" paragraphs={a.body} />
          </div>
          <div>
            <H3 text={a.arriving.heading} />
            <Prose className="mt-6" paragraphs={a.arriving.body} />
            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">Address</p>
              <address className="mt-2 not-italic leading-relaxed text-ink">{addressLines.map((l) => <div key={l}>{l}</div>)}</address>
              <p className="mt-3 text-sm text-ink-soft">{business.hoursNote}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <TextLink href={business.gbp.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</TextLink>
                <TextLink href={`tel:${business.phoneE164}`}>Call {business.phone}</TextLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <Eyebrow>Treatments</Eyebrow>
        <H2 text="Every treatment, *one* room" />
        <ul className="mt-10 grid gap-x-10 divide-y divide-border border-y border-border md:grid-cols-2 md:divide-y-0">
          {services.map((s) => (
            <li key={s.slug} className="md:border-b md:border-border">
              <Link href={serviceHref(s)} className="group flex items-start justify-between gap-6 py-5">
                <span>
                  <span className="block font-display text-xl text-ink">{s.navName || s.name}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{s.shortDesc}</span>
                </span>
                <span className="mt-1 text-highlight-deep"><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
          <div>
            <H2 text={`Questions from *${a.shortName || a.name}*`} className="!text-3xl md:!text-4xl" />
            <Faq faqs={a.faqs} className="mt-8" />
          </div>
          <div>
            <H3 text="Nearby *areas*" />
            <ul className="mt-6 space-y-3">
              {nearby.map((n) => (
                <li key={n.slug}><TextLink href={`/areas/${n.slug}`}>{n.name}</TextLink></li>
              ))}
              <li><TextLink href="/areas">All areas</TextLink></li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={areaPageSchema(a)} />
      <JsonLd data={faqSchema(a.faqs)} />
    </>
  );
}
