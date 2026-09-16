import ArchImage from "@/components/ArchImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import { ButtonLink, Eyebrow, H2, Prose, Section, TextLink } from "@/components/ui";
import { business } from "@/content/business";
import { getService, serviceHref } from "@/content/services";
import { buildMetadata, faqSchema } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Massage Treatments Glasgow - The Reset Room Glasgow",
  description:
    "Explore massage and holistic treatments in Glasgow including deep tissue, Swedish massage, reflexology, Reiki and sound baths.",
  path: "/treatments",
  image: "/images/massage-treatment-room-glasgow.jpg",
});

const hubFaqs = [
  {
    q: "Is deep tissue always the best massage for back pain?",
    a: "No. The right approach depends on your symptoms, preference and whether massage is appropriate at all. Deep tissue uses focused pressure for muscular tightness; Swedish or hot stone massage may feel better if you want gentler full-body relaxation. New, severe or unexplained pain needs medical assessment.",
  },
  {
    q: "What if I want to stay fully clothed?",
    a: "Reflexology, Reiki and sound baths usually allow you to remain clothed. Reflexology focuses on the feet, Reiki uses light touch or no touch, and a sound bath is a group experience without massage.",
  },
  {
    q: "Can I change the treatment after booking?",
    a: "Pressure and focus can be adjusted during an appointment. Changing to a different service may need a different time slot or preparation, so contact me before your visit if you think you have chosen the wrong one.",
  },
  {
    q: "Where can I see prices and sound bath dates?",
    a: "The online booking system shows current prices, treatment lengths and one-to-one availability. Sound bath dates, venues and what to bring appear on the sound bath page and each event listing.",
  },
];

// Grouped by what you want from the appointment, per the copy brief. Every treatment page is linked
// from here, so this hub carries the detailed comparison the homepage points at.
const groups = [
  {
    heading: "Focused Massage for Muscle *Tension*",
    items: [
      {
        slug: "deep-tissue-massage",
        blurb:
          "Slow, targeted work for stubborn muscular tightness in areas such as the back, hips, neck and shoulders. Pressure is adjusted to your comfort; it does not have to hurt to be useful.",
        label: "Explore deep tissue massage",
      },
      {
        slug: "indian-head-massage",
        blurb:
          "Focused work on the scalp, neck, shoulders and upper back. Choose this when most of your tension sits above the shoulders and you want attention on that area rather than a full-body massage.",
        label: "Explore Indian head massage",
      },
    ],
  },
  {
    heading: "Full Body Massage for *Relaxation*",
    items: [
      {
        slug: "swedish-massage",
        blurb:
          "Long, flowing strokes with light-to-moderate pressure across the agreed areas. A comfortable starting point if you are new to massage or feel generally tense rather than sore in one place.",
        label: "Explore Swedish massage",
      },
      {
        slug: "hot-stone-massage",
        blurb:
          "Flowing massage with heated stones for sustained warmth. Choose this if heat helps you settle and you would like a slower experience without relying on very firm pressure.",
        label: "Explore hot stone massage",
      },
    ],
  },
  {
    heading: "Adapted and Very Light *Treatments*",
    items: [
      {
        slug: "pregnancy-massage",
        blurb:
          "Massage adapted to your stage of pregnancy, with supportive positioning and pressure that can change as you need it. Tell me about any complications or maternity advice before booking.",
        label: "Explore pregnancy massage",
      },
      {
        slug: "lymphatic-drainage-massage",
        blurb:
          "Very light, rhythmic movements for people interested in a gentler approach to temporary puffiness or heaviness. New, painful or unexplained swelling needs medical assessment first.",
        label: "Explore lymphatic drainage massage",
      },
    ],
  },
  {
    heading: "Relaxation Without a Full Body *Massage*",
    items: [
      {
        slug: "reflexology",
        blurb:
          "A quiet, structured treatment focused on the feet while you remain clothed. A good option when you want to rest without a full-body massage.",
        label: "Explore reflexology",
      },
      {
        slug: "reiki",
        blurb:
          "A still, fully clothed session with light touch or hands held above the body. Choose this if you prefer little or no physical pressure.",
        label: "Explore Reiki",
      },
      {
        slug: "sound-baths",
        blurb:
          "A scheduled group session using gongs, singing bowls and chimes. You listen while resting comfortably; dates, venues and what to bring are shown with each event.",
        label: "Explore sound baths",
      },
    ],
  },
];

function TreatmentEntry({ slug, blurb, label }) {
  const s = getService(slug);
  const href = serviceHref(s);
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
      <ArchImage file={s.image} alt="" className="aspect-[4/3]" sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 88vw" />
      <h3 className="mt-5 font-display text-2xl text-ink">{s.navName || s.name}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{blurb}</p>
      {/* duration / priceFrom stay null until confirmed — the booking system is the live source. */}
      <p className="mt-4 text-sm text-ink-faint">
        {s.priceFrom ? `From £${s.priceFrom}` : "Prices and times shown when you book"}
        {s.duration ? ` · ${s.duration}` : ""}
      </p>
      <Link href={href} className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-highlight-deep">
        {label} <Arrow />
      </Link>
    </div>
  );
}

export default function TreatmentsHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Treatments", href: "/treatments" }]} />
      <section className="px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>Massage and holistic therapy</Eyebrow>
            <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">
              Massage and Holistic Treatments in Glasgow
            </h1>
            <Prose
              className="mt-6 max-w-2xl"
              paragraphs={[
                "Not sure which treatment to book? Start with what you want from the appointment: focused work on tight muscles, full-body relaxation, a very light touch or time to rest without a full-body massage. Compare the options below, then open a treatment page for more detail.",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={business.bookingUrl}>View Prices and Availability</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Ask a question</ButtonLink>
            </div>
          </div>
          <ArchImage file="massage-treatment-room-glasgow.jpg" priority className="mx-auto aspect-[4/5] w-full max-w-sm" />
        </div>
      </section>

      {groups.map((g, gi) => (
        <Section key={g.heading} tone={gi % 2 === 0 ? "white" : "cream"}>
          <H2 text={g.heading} className="!text-3xl md:!text-4xl" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((it, i) => (
              <li key={it.slug}>
                <Reveal index={i % 3} className="h-full">
                  <TreatmentEntry {...it} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Section tone="sage">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Still deciding?</Eyebrow>
          <H2 text="Ready to *Choose*" />
          <Prose
            className="mt-6 text-left sm:text-center"
            paragraphs={[
              "I can adjust the pressure and focus within your booked treatment. If you are unsure which service is suitable, contact me before choosing a slot. Current prices and appointment lengths are shown in the online booking system.",
              "Most one-to-one treatments take place at The Reset Room in Bridgeton, Glasgow's East End. Check each sound bath listing for its venue and booking details.",
            ]}
          />
          <p className="mt-8">
            <ButtonLink href={business.bookingUrl}>View Prices and Availability</ButtonLink>
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Eyebrow>Good to know</Eyebrow>
            <H2 text="Treatment *FAQs*" />
          </div>
          <Faq faqs={hubFaqs} />
          <p className="mt-8 text-center">
            <TextLink href="/sound-baths">Sound bath dates and venues</TextLink>
          </p>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={faqSchema(hubFaqs)} />
    </>
  );
}
