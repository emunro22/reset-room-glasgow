import { notFound } from "next/navigation";
import ArchImage from "@/components/ArchImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import TreatmentCard from "@/components/TreatmentCard";
import { ButtonLink, CheckList, Eyebrow, H2, H3, Prose, Section, TextLink } from "@/components/ui";
import { business } from "@/content/business";
import { getService, treatmentPages } from "@/content/services";
import { buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";
import { ogImageFor } from "@/lib/photo";

export const dynamicParams = false;
export function generateStaticParams() {
  return treatmentPages.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/treatments/${s.slug}`, image: ogImageFor(s.image) });
}

function SuitsCard({ s }) {
  return (
    <div className="rounded-2xl bg-ink p-7 text-surface md:p-8">
      <h2 className="font-display text-2xl font-normal text-surface">This may suit you if&hellip;</h2>
      <ul className="mt-6 space-y-3">
        {s.suitsYouIf.map((it) => (
          <li key={it} className="rounded-xl bg-white/[0.07] px-4 py-3 text-sm leading-relaxed text-surface">{it}</li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-surface-2">
        {s.priceFrom ? `From £${s.priceFrom}` : "See prices and times online"}
        {s.duration ? ` · ${s.duration}` : ""}
      </p>
      <ButtonLink href={business.bookingUrl} variant="light" className="mt-4 w-full">View appointments</ButtonLink>
      <a href={`tel:${business.phoneE164}`} className="mt-3 flex min-h-[44px] items-center justify-center text-sm text-surface underline underline-offset-4">
        Questions first? Call {business.phone}
      </a>
    </div>
  );
}

export default function TreatmentPage({ params }) {
  const s = getService(params.slug);
  if (!s || s.slug === "sound-baths") notFound();
  const related = s.relatedServices.map(getService).filter(Boolean);
  const lowerName = s.name.toLowerCase().replace("indian", "Indian").replace("reiki", "Reiki");
  const words = lowerName.split(" ");
  const accentLast = (prefix) => `${prefix} ${[...words.slice(0, -1), `*${words.at(-1)}*`].join(" ")}`;

  return (
    <>
      <Breadcrumbs items={[{ name: "Treatments", href: "/treatments" }, { name: s.name, href: `/treatments/${s.slug}` }]} />

      {/* Hero */}
      <section className="px-5 pb-12 pt-8 md:px-10 md:pb-20 md:pt-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">{s.h1}</h1>
            <Prose paragraphs={s.intro} className="mt-6 max-w-2xl" />
            {s.reassurance && (
              <p className="mt-5 max-w-2xl rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-relaxed text-ink">{s.reassurance}</p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={business.bookingUrl}>Book {lowerName}</ButtonLink>
              <ButtonLink href="#what-to-expect" variant="secondary">What to expect</ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-ink to-[#5E8574] px-8 pt-12 md:px-12 md:pt-16">
            <ArchImage file={s.image} className="mx-auto aspect-[4/5] w-full max-w-xs" priority />
          </div>
        </div>
      </section>

      {/* Fact strip */}
      <div className="border-y border-border bg-white px-5 md:px-10">
        <dl className="mx-auto grid max-w-7xl gap-6 py-6 text-center sm:grid-cols-3">
          <div>
            <dt className="text-sm font-medium text-ink">{s.duration || "Appointment lengths"}</dt>
            <dd className="text-sm text-ink-soft">{s.duration ? "Choose your pace" : "Shown when you book online"}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-ink">Tailored pressure</dt>
            <dd className="text-sm text-ink-soft">Always led by you</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-ink">Bridgeton treatment room</dt>
            <dd className="text-sm text-ink-soft">Glasgow East End</dd>
          </div>
        </dl>
      </div>

      {/* Body + sticky card */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-20">
          <aside className="lg:order-2">
            <div className="lg:sticky lg:top-24"><SuitsCard s={s} /></div>
          </aside>

          <div className="space-y-16 lg:order-1">
            {s.sections.slice(0, 1).map((sec) => <BodySection key={sec.heading} sec={sec} />)}

            <div>
              <H2 text={s.helpsWith.heading} className="!text-3xl md:!text-4xl" />
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{s.helpsWith.intro}</p>
              <CheckList items={s.helpsWith.items} className="mt-5" />
              <p className="mt-5 leading-relaxed text-ink-soft">{s.helpsWith.outro}</p>
              {s.caveat && (
                <p className="mt-6 border-l-2 border-highlight-soft pl-4 text-sm leading-relaxed text-ink">{s.caveat}</p>
              )}
            </div>

            {s.sections.slice(1).map((sec) => <BodySection key={sec.heading} sec={sec} />)}

            <div id="what-to-expect" className="scroll-mt-24">
              <H2 text="What to *expect*" className="!text-3xl md:!text-4xl" />
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{s.whatToExpect.intro}</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="font-display text-xl text-ink">During your treatment</h3>
                  <CheckList items={s.whatToExpect.during} className="mt-4" />
                </div>
                <div className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="font-display text-xl text-ink">Afterwards, you may feel</h3>
                  <CheckList items={s.whatToExpect.after} className="mt-4" />
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-ink-soft">{s.whatToExpect.note}</p>
            </div>

            <div>
              <H2 text={accentLast("Why clients choose")} className="!text-3xl md:!text-4xl" />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {s.benefits.map((b) => (
                  <li key={b.title} className="rounded-2xl border border-border bg-white p-6">
                    <h3 className="font-display text-xl text-ink">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {s.comparison && (
              <div>
                <H3 text={s.comparison.heading} />
                <dl className="mt-6 divide-y divide-border border-y border-border">
                  {s.comparison.points.map((p) => (
                    <div key={p.label} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                      <dt className="font-medium text-ink">{p.label}</dt>
                      <dd className="text-ink-soft">{p.text}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 leading-relaxed text-ink-soft">{s.comparison.text}</p>
                {s.comparison.link && <p className="mt-3"><TextLink href={s.comparison.link.href}>{s.comparison.link.label}</TextLink></p>}
              </div>
            )}

            <div>
              <H3 text={`Is ${lowerName} right for you?`} />
              <p className="mt-5 leading-relaxed text-ink-soft">{s.rightForYou.intro}</p>
              <CheckList items={s.rightForYou.items} className="mt-4" />
              <p className="mt-5 leading-relaxed text-ink-soft">
                Not sure? You don&rsquo;t need to have it all figured out before you book. <TextLink href="/contact">Ask Jodi a question</TextLink> and she&rsquo;ll help you choose.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section tone="sage">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <H2 text="Three simple *steps*" />
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {s.process.map((p, i) => (
            <li key={p.step}>
              <Reveal index={i} className="h-full rounded-2xl bg-surface p-7">
                <span className="font-display text-4xl text-highlight">{p.step}</span>
                <h3 className="mt-3 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQs */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Eyebrow>Common questions</Eyebrow>
            <H2 text={`${s.name} *FAQs*`} />
          </div>
          <Faq faqs={s.faqs} />
        </div>
      </Section>

      {/* Related */}
      <Section tone="cream">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <H2 text="You might also *like*" />
          <TextLink href="/treatments">See all treatments</TextLink>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((r) => <li key={r.slug}><TreatmentCard service={r} /></li>)}
        </ul>
      </Section>

      <CtaBand
        heading="Your treatment, shaped around *you*"
        text="See live availability online and choose a time that suits you."
        href={business.bookingUrl}
        label={`Book ${lowerName}`}
      />
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />
    </>
  );
}

function BodySection({ sec }) {
  return (
    <div>
      <H2 text={sec.heading} className="!text-3xl md:!text-4xl" />
      <Prose paragraphs={sec.body} className="mt-5" />
      {sec.list && <CheckList items={sec.list} className="mt-5" />}
      {sec.after && <p className="mt-5 leading-relaxed text-ink-soft">{sec.after}</p>}
      {sec.link && <p className="mt-5"><TextLink href={sec.link.href}>{sec.link.label}</TextLink></p>}
      {sec.links && (
        <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {sec.links.map((l) => <TextLink key={l.href} href={l.href}>{l.label}</TextLink>)}
        </p>
      )}
    </div>
  );
}
