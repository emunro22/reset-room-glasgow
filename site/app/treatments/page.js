import ArchImage from "@/components/ArchImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import TreatmentCard from "@/components/TreatmentCard";
import { ButtonLink, Eyebrow, H2, Prose, Section, TextLink } from "@/components/ui";
import { business } from "@/content/business";
import { services } from "@/content/services";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Massage & Holistic Treatments Glasgow | The Reset Room",
  description:
    "Explore massage and holistic treatments in Glasgow: deep tissue, Swedish, pregnancy, lymphatic, hot stone, reflexology, Reiki and sound baths. Book online.",
  path: "/treatments",
  image: "/images/massage-treatment-room-glasgow.jpg",
});

const hubFaqs = [
  {
    q: "Which treatment is best for me?",
    a: "It depends on how you're feeling. For specific tightness in your back, neck or shoulders, deep tissue massage is a good starting point. If your goal is to relax and switch off, Swedish or hot stone massage may suit you better. If your mind is busier than your body is tense, try reflexology, Reiki or a sound bath. If you're unsure, your treatment can be guided by how you feel on the day.",
  },
  {
    q: "Do I need to choose a treatment before booking?",
    a: "No. Book the one that sounds closest and it can be adapted after your consultation. Many clients arrive with a general feeling — tension, stress or tiredness — rather than a specific treatment in mind.",
  },
  {
    q: "What treatments do you offer at The Reset Room Glasgow?",
    a: "Deep tissue massage, Swedish massage, hot stone massage, pregnancy and postnatal massage, lymphatic drainage massage, reflexology, Reiki, Indian head massage and group sound baths. Each offers a different experience, from focused work on tension to deep relaxation and a quieter mind.",
  },
  {
    q: "Are your treatments suitable for relaxation and stress relief?",
    a: "Yes — every treatment is designed to support relaxation in its own way. Some focus more on easing physical tension, while others offer a quieter, more mental sense of calm. They're complementary treatments, so if stress is affecting your health please speak to your GP too.",
  },
  {
    q: "Can treatments be adapted to my needs?",
    a: "Yes. Every session is tailored to your level of tension, your comfort and what you want from it, whether that's focused work on one area or a more general, relaxing treatment.",
  },
  {
    q: "How often should I book a massage or holistic treatment?",
    a: "Some people book regularly to stay on top of tension; others book whenever they feel they need to reset. Jodi can talk through what might suit you.",
  },
];

const choose = [
  { need: "Stubborn, targeted tension", picks: [["Deep tissue massage", "/treatments/deep-tissue-massage"], ["Indian head massage", "/treatments/indian-head-massage"]] },
  { need: "Relax and switch off", picks: [["Swedish massage", "/treatments/swedish-massage"], ["Hot stone massage", "/treatments/hot-stone-massage"]] },
  { need: "Feeling puffy, heavy or pregnant", picks: [["Lymphatic drainage", "/treatments/lymphatic-drainage-massage"], ["Pregnancy massage", "/treatments/pregnancy-massage"]] },
  { need: "A busy mind, not sore muscles", picks: [["Reflexology", "/treatments/reflexology"], ["Reiki", "/treatments/reiki"], ["Sound baths", "/sound-baths"]] },
];

export default function TreatmentsHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Treatments", href: "/treatments" }]} />
      <section className="px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>Massage and holistic therapy</Eyebrow>
            <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">Massage &amp; Holistic Treatments in Glasgow</h1>
            <Prose
              className="mt-6 max-w-2xl"
              paragraphs={[
                "Choosing a massage isn't always straightforward. Some people arrive knowing exactly what they need; others simply know they need time to slow down and reset.",
                "At The Reset Room Glasgow every treatment is tailored to how you're feeling on the day — physically and mentally — in a calm, private room in Bridgeton, away from the noise of everyday life.",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={business.bookingUrl}>Book your treatment</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Ask a question</ButtonLink>
            </div>
          </div>
          <ArchImage file="massage-treatment-room-glasgow.jpg" priority className="mx-auto aspect-[4/5] w-full max-w-sm" />
        </div>
      </section>

      <Section tone="white">
        <div className="max-w-3xl">
          <Eyebrow>All treatments</Eyebrow>
          <H2 text="Choose what your body *needs*" />
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Some treatments focus more on easing physical tension; others are designed around relaxation and a quieter mind. Explore each one in detail below.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal index={i % 3} className="h-full"><TreatmentCard service={s} headingLevel="h3" /></Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow>Not sure where to start?</Eyebrow>
            <H2 text="Start with how you *feel*" />
            <Prose
              className="mt-6"
              paragraphs={[
                "It's completely normal not to know exactly what you need. Most clients come in with a general feeling — tension, stress or tiredness — and that's taken into account in every session.",
                "Use this as a rough guide, book the closest match, and your treatment can be adjusted after a short consultation.",
              ]}
            />
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {choose.map((c) => (
              <div key={c.need} className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="font-display text-xl text-ink">{c.need}</dt>
                <dd className="flex flex-wrap gap-x-5 gap-y-2">
                  {c.picks.map(([label, href]) => <TextLink key={href} href={href}>{label}</TextLink>)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Eyebrow>Good to know</Eyebrow>
            <H2 text="Treatment *questions*" />
          </div>
          <Faq faqs={hubFaqs} />
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={faqSchema(hubFaqs)} />
    </>
  );
}
