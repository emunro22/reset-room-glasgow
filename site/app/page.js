import Link from "next/link";
import ArchImage from "@/components/ArchImage";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import TreatmentCard from "@/components/TreatmentCard";
import { Arrow } from "@/components/Icons";
import { ButtonLink, CheckList, Eyebrow, H2, Prose, Section, TextLink } from "@/components/ui";
import { business } from "@/content/business";
import { services } from "@/content/services";
import { areas } from "@/content/areas";
import { homeFaqs } from "@/content/faqs";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Massage Therapy Glasgow | The Reset Room Glasgow",
  description:
    "Massage therapy in Glasgow's East End for tension, stress and deep relaxation. Tailored treatments in a calm, private Bridgeton room. Book your treatment today.",
  path: "/",
  image: "/images/massage-treatment-room-glasgow-east-end.jpeg",
});

const trust = ["Qualified & insured", business.experienceShort, "Calm, private room", "Bridgeton, East End"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <Eyebrow>Massage therapy in Glasgow East End</Eyebrow>
            <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">
              Massage Therapy in Glasgow for Pain Relief &amp; Deep <em className="italic text-highlight">Relaxation</em>
            </h1>
            <p className="mt-6 font-display text-xl text-ink md:text-2xl">Feel lighter. Move easier. Make space to reset.</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              Personalised massage, reflexology, Reiki and sound in a calm, private room in Bridgeton — every treatment shaped around how you feel on the day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={business.bookingUrl}>Book your treatment</ButtonLink>
              <ButtonLink href="/treatments" variant="secondary">Find your treatment</ButtonLink>
            </div>
          </div>
          <ArchImage file="massage-treatment-room-glasgow-east-end.jpeg" priority className="mx-auto aspect-[4/5] w-full max-w-md" sizes="(min-width: 768px) 40vw, 90vw" />
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-border bg-white px-5 md:px-10">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 py-6 text-center text-sm text-ink md:grid-cols-4">
          {trust.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>

      {/* Designed around you */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal>
            <Eyebrow>Designed around you</Eyebrow>
            <H2 text="Massage therapy in Glasgow, shaped around *you*" />
          </Reveal>
          <Reveal index={1}>
            <Prose
              paragraphs={[
                "At The Reset Room Glasgow, every treatment is designed around you — not a routine. Whether you're dealing with muscle tension, stress or simply need time to switch off, each session is tailored to how your body feels on the day.",
                "From deep, targeted work for aches and tightness to calm, restorative sessions, this is a space where you can slow down, reset and feel looked after. The room is in Glasgow's East End and welcomes clients from across the city looking for a more personal, thoughtful approach to massage.",
                "Many people arrive with lower back stiffness, neck and shoulder tension from desk work, tight hips or restricted movement. Others simply want an hour to relax and reconnect with themselves. Either way, your treatment follows how your body responds.",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      {/* Treatments grid */}
      <Section tone="white" id="treatments">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Treatments shaped around you</Eyebrow>
          <H2 text="Choose what your body *needs* today" />
          <p className="mt-5 text-lg text-ink-soft">
            From stubborn tension to deep rest, pregnancy support and space to switch off. Not sure? Pick the closest match — it can be adapted on the day.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal index={i % 3} className="h-full">
                <TreatmentCard service={s} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* A calm space without the fuss */}
      <Section tone="cream">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <ArchImage file="jodi-massage-therapist-glasgow.jpg" className="mx-auto aspect-[4/5] w-full max-w-md" />
          <Reveal>
            <Eyebrow>A calm space without the fuss</Eyebrow>
            <H2 text="You don't need to arrive feeling *zen*" />
            <Prose
              className="mt-6"
              paragraphs={[
                "Come exactly as you are. Jodi runs The Reset Room on her own, so it's a friendly, private experience where your comfort comes first and nothing feels rushed or routine.",
                "Every session begins with listening — to what you're feeling physically and mentally — so the treatment can give you targeted relief, deep relaxation or a bit of both.",
              ]}
            />
            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-ink">
              {["Tailored treatments", "Warm, relaxed welcome", "Bridgeton treatment room", "Simple online booking"].map((t) => (
                <li key={t} className="rounded-xl border border-border bg-white px-4 py-3">{t}</li>
              ))}
            </ul>
            <Link href="/about" className="group mt-8 inline-flex items-center gap-2 font-medium text-highlight-deep">
              Meet Jodi <Arrow />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* First visit */}
      <Section tone="white">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow>Your first visit</Eyebrow>
            <H2 text="What to expect from your *first* treatment" />
          </div>
          <div>
            <Prose
              paragraphs={[
                "If you're new to massage it's completely normal to feel unsure. Your session begins with a short consultation to understand what you need — easing tension, some relief from aches, or simply time to properly relax.",
                "From there, your treatment adapts in real time. Pressure, techniques and focus areas change based on how your body responds, so it feels effective while staying comfortable.",
                "You'll be covered with towels throughout, with only the area being worked on uncovered, so you can feel at ease the whole time. There's no fixed routine — just what your body needs on the day.",
              ]}
            />
            <p className="mt-6 text-sm text-ink-faint">
              Massage and holistic therapies are complementary and don&rsquo;t replace medical care. If you have persistent or unexplained pain, please see your GP first.
            </p>
          </div>
        </div>
      </Section>

      {/* Areas */}
      <Section tone="sage" className="!py-14 md:!py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Where clients come from</Eyebrow>
            <H2 text="In Bridgeton, close to the *whole* city" className="!text-3xl md:!text-4xl" />
            <p className="mt-4 text-ink-soft">
              The Reset Room is in Glasgow&rsquo;s East End, within easy reach of the city centre, the Southside, the West End and neighbouring areas.
            </p>
          </div>
          <TextLink href="/areas">All areas</TextLink>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/areas/${a.slug}`} className="inline-flex min-h-[44px] items-center rounded-full border border-ink/25 bg-surface px-5 text-sm text-ink transition-colors hover:border-ink">
                {a.name} <span className="ml-2 text-ink-faint">{a.postcodes.join("/")}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Testimonials */}
      <Section tone="cream">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow>Real words from local clients</Eyebrow>
          <H2 text="What people say after their *reset*" />
        </div>
        <Reveal><Testimonials /></Reveal>
      </Section>

      {/* FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Eyebrow>A few helpful answers</Eyebrow>
            <H2 text="Before your first *visit*" />
          </div>
          <Faq faqs={homeFaqs} />
          <p className="mt-8 text-center">
            <TextLink href="/faqs">More questions and answers</TextLink>
          </p>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}
