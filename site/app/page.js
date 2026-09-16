import Link from "next/link";
import ArchImage from "@/components/ArchImage";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { Arrow } from "@/components/Icons";
import { ButtonLink, Eyebrow, H2, Prose, Section, TextLink } from "@/components/ui";
import { business } from "@/content/business";
import { areas } from "@/content/areas";
import { homeFaqs } from "@/content/faqs";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Massage Therapy Glasgow - The Reset Room Glasgow",
  description:
    "Massage therapy in Glasgow for relaxation, pain relief and wellbeing. Deep tissue, Swedish and holistic treatments in a calm private setting.",
  path: "/",
  image: "/images/massage-treatment-room-glasgow-east-end.jpeg",
});

const trust = ["Qualified and insured", "More than 10 years' experience", "Calm private room", "Easy online booking"];

// The four "what do you actually want?" routes from the copy brief. Between them these carry links to
// all nine treatments, which is why a separate treatment card grid no longer needs to repeat them here.
const routes = [
  {
    title: "My back or shoulders feel tight",
    body: (
      <>
        If one area keeps drawing your attention, explore{" "}
        <TextLink href="/treatments/deep-tissue-massage">deep tissue massage</TextLink>. For tension mainly around your
        scalp, neck and shoulders, see{" "}
        <TextLink href="/treatments/indian-head-massage">Indian head massage</TextLink>.
      </>
    ),
  },
  {
    title: "I need time to switch off",
    body: (
      <>
        Choose <TextLink href="/treatments/swedish-massage">Swedish massage</TextLink> for flowing, full-body
        relaxation, or <TextLink href="/treatments/hot-stone-massage">hot stone massage</TextLink> if you enjoy warmth.
      </>
    ),
  },
  {
    title: "I need a different approach",
    body: (
      <>
        <TextLink href="/treatments/pregnancy-massage">Pregnancy massage</TextLink> uses supportive positioning and
        adapted pressure.{" "}
        <TextLink href="/treatments/lymphatic-drainage-massage">Lymphatic drainage massage</TextLink> is a much lighter
        treatment. If you have unexplained swelling or a medical concern, check suitability before booking.
      </>
    ),
  },
  {
    title: "I prefer little or no full body massage",
    body: (
      <>
        <TextLink href="/treatments/reflexology">Reflexology</TextLink> focuses on the feet.{" "}
        <TextLink href="/treatments/reiki">Reiki</TextLink> involves light touch or no touch.{" "}
        <TextLink href="/sound-baths">Sound baths</TextLink> use live sound at scheduled events.
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <Eyebrow>Massage therapy in Glasgow East End</Eyebrow>
            <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">
              Massage Therapy in Glasgow for Tension and <em className="italic text-highlight">Relaxation</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Personalised massage and holistic treatments in Bridgeton, Glasgow&rsquo;s East End. Whether you are
              dealing with an aching back, tight shoulders, everyday stress or a mind that will not switch off, I will
              shape your appointment around how you feel on the day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={business.bookingUrl}>Book Your Treatment</ButtonLink>
              <ButtonLink href="/treatments" variant="secondary">View Treatments</ButtonLink>
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

      {/* A massage shaped around you */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <Reveal>
            <Eyebrow>Designed around you</Eyebrow>
            <H2 text="A Massage Shaped Around *You*" />
          </Reveal>
          <Reveal index={1}>
            <Prose
              paragraphs={[
                "You do not need to arrive knowing exactly which technique you need. I begin with a short conversation about what feels uncomfortable, what pressure you enjoy and what you would like from the appointment.",
                "Your session might include focused work for stubborn muscular tension, slower massage for relaxation, or a balance of both. I adjust the pressure, pace and focus areas as we go. You will always be able to ask for a change.",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      {/* Find your way to a treatment — accessible grid on desktop, stacked on mobile */}
      <Section tone="white" id="treatments">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Not sure where to start?</Eyebrow>
          <H2 text="Find Your Way to a *Treatment*" />
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {routes.map((r, i) => (
            <li key={r.title}>
              <Reveal index={i % 2} className="h-full rounded-2xl border border-border bg-surface p-7">
                <h3 className="font-display text-2xl leading-snug text-ink">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{r.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-ink-soft">
          If you are still unsure, the <TextLink href="/treatments">full treatment guide</TextLink> compares what each
          option feels like.
        </p>
        <p className="mt-8 text-center">
          <ButtonLink href="/treatments">Compare Treatments</ButtonLink>
        </p>
      </Section>

      {/* Back pain, neck tension and stress */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow>Everyday tension</Eyebrow>
            <H2 text="Massage for Back Pain, Neck Tension and *Stress*" />
          </div>
          <div>
            <Prose
              paragraphs={[
                "Long hours at a desk, physical work, training, driving and everyday stress can all leave muscles feeling tight or uncomfortable. Massage may help ease muscle-related discomfort, improve your sense of movement and make it easier to relax.",
                "If the problem keeps returning, tell me where you feel it and what you have already tried. I can adapt the pressure and focus during your appointment. When discomfort is new, severe or unexplained, seek medical advice before booking.",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Meet Jodi */}
      <Section tone="white">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <ArchImage file="jodi-massage-therapist-glasgow.jpg" className="mx-auto aspect-[4/5] w-full max-w-md" />
          <Reveal>
            <Eyebrow>Your therapist</Eyebrow>
            <H2 text="Meet *Jodi*" />
            <Prose
              className="mt-6"
              paragraphs={[
                "Hi, I am Jodi, a qualified and insured massage and holistic therapist with more than 10 years' experience, an HND in Complementary Therapies and a BSc in Integrative Health Care.",
                "I created The Reset Room Glasgow for people who want knowledgeable treatment in a calm, personal setting. Some clients want focused work on one uncomfortable area. Others mainly need an hour in which nobody needs anything from them. Both are welcome, and I never expect you to endure painful pressure or make conversation throughout your treatment.",
              ]}
            />
            <Link href="/about" className="group mt-8 inline-flex items-center gap-2 font-medium text-highlight-deep">
              Meet Jodi and learn about The Reset Room <Arrow />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* What your appointment feels like */}
      <Section tone="cream">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <Eyebrow>Your first visit</Eyebrow>
            <H2 text="What Your Appointment *Feels* Like" />
          </div>
          <div>
            <Prose
              paragraphs={[
                "Your appointment begins with a short consultation. We agree the areas to focus on, the pressure you prefer and anything that should be avoided. During massage, I keep you covered with towels and uncover only the area being worked on.",
                "You can ask for a change of pressure, more warmth, less conversation or anything else that helps you settle. Your comfort matters throughout the session.",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* East End location */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Where to find me</Eyebrow>
          <H2 text="Massage in the East End of *Glasgow*" />
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            The Reset Room is in Park Lane House on Broad Street in Bridgeton, close to Glasgow city centre. You can
            find the full address, arrival guidance and transport information on the contact page.
          </p>
          <p className="mt-8">
            <ButtonLink href="/contact" variant="secondary">Get Directions</ButtonLink>
          </p>
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
          <H2 text="What Clients *Say*" />
        </div>
        <Reveal><Testimonials /></Reveal>
      </Section>

      {/* Ready to book */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Simple online booking</Eyebrow>
          <H2 text="Ready to *Book*" />
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Choose your treatment and view my live availability online. Your booking is confirmed straight away, so
            there is no need to wait for an email reply.
          </p>
          <p className="mt-8">
            <ButtonLink href={business.bookingUrl}>Book Your Treatment</ButtonLink>
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Eyebrow>A few helpful answers</Eyebrow>
            <H2 text="Massage in Glasgow *FAQs*" />
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
