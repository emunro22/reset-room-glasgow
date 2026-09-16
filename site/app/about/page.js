import ArchImage from "@/components/ArchImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import PhotoStrip from "@/components/PhotoStrip";
import Reveal from "@/components/Reveal";
import { ButtonLink, CheckList, Eyebrow, H2, H3, Prose, Section, TextLink } from "@/components/ui";
import { business } from "@/content/business";
import { services, serviceHref } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Jodi | The Reset Room Glasgow",
  description:
    "Meet Jodi, a massage and holistic therapist in Glasgow with over 10 years' experience, an HND and a BSc. A calm, personal approach. Book your treatment online.",
  path: "/about",
  image: "/images/jodi-massage-therapist-glasgow.jpg",
  type: "profile",
});

const values = [
  { title: "Listen first", desc: "No assumptions and no one-size-fits-all routine. Your treatment starts with what you need today." },
  { title: "Comfort always", desc: "Pressure, positioning, conversation and quiet are all adapted around what helps you feel at ease." },
  { title: "Leave lighter", desc: "The aim is simple: less tension, more space, and a treatment you look forward to coming back to." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      <section className="px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <Eyebrow>Meet your therapist</Eyebrow>
            <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">
              Hi, I&rsquo;m Jodi. This is your space to <em className="italic text-highlight">reset</em>.
            </h1>
            <Prose
              className="mt-6 max-w-xl"
              paragraphs={[
                "I'm a massage and holistic therapist based in Glasgow, working with people who feel tense, overwhelmed, or simply in need of time to properly switch off.",
                "I created The Reset Room to feel professional without feeling formal — a calm, welcoming place where you can put everything down for an hour and leave feeling more like yourself.",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/treatments">Explore treatments</ButtonLink>
              <ButtonLink href="/book" variant="secondary">Book online</ButtonLink>
            </div>
          </div>
          <ArchImage file="jodi-massage-therapist-glasgow.jpg" priority className="mx-auto aspect-[3/4] w-full max-w-sm" />
        </div>
      </section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>What matters here</Eyebrow>
          <H2 text="Care that feels *human*" />
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title}>
              <Reveal index={i} className="h-full rounded-2xl border border-border bg-surface p-7">
                <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{v.desc}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <Eyebrow>A little more about me</Eyebrow>
            <H2 text="A personal approach, not a *routine*" />
            <Prose
              className="mt-6"
              paragraphs={[
                "Many of my clients don't arrive with a clear idea of what treatment they need — they just know something doesn't feel right. That might be physical tension, ongoing stress, trouble switching off, or the feeling of constantly being \u201con\u201d.",
                "Treatments here aren't rushed or one-size-fits-all. Every session is tailored to how you're feeling on the day. Sometimes that means focused work on your back, neck or shoulders. Other times it's about slowing everything down and giving your body space to relax.",
                "Some clients come with something specific — tight shoulders, back discomfort, pregnancy aches or puffiness. Others simply know they're carrying too much and need an hour where nothing is being asked of them. Both are completely valid. I'll talk you through your options, check in about pressure and make sure your session feels comfortable from start to finish.",
              ]}
            />
          </div>
          <div>
            <ArchImage
              file="deep-tissue-massage-treatment-glasgow.jpg"
              className="mx-auto mb-10 aspect-[3/4] w-full max-w-xs"
              sizes="(min-width: 768px) 320px, 80vw"
            />
            <div className="rounded-2xl bg-ink p-8 text-surface">
              <h3 className="font-display text-2xl">My background</h3>
              <p className="mt-4 leading-relaxed text-surface">
                I have over 10 years&rsquo; experience in massage and complementary therapies, with a background in both hands-on treatment and integrative health.
              </p>
              <CheckList dark className="mt-6" items={[...business.qualifications, "Trained and insured therapist", "Ongoing training and CPD"]} />
              {/* TODO(client): professional body membership + insurer — add only once confirmed */}
            </div>
            <H3 text="Treatments I *offer*" className="mt-12" />
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {services.map((s) => (
                <li key={s.slug}><TextLink href={serviceHref(s)}>{s.navName || s.name}</TextLink></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <ArchImage file="massage-room-glasgow-east-end.jpg" className="mx-auto aspect-[4/5] w-full max-w-md" />
          <div>
            <Eyebrow>Glasgow East End</Eyebrow>
            <H2 text="The *space*" />
            <Prose
              className="mt-6"
              paragraphs={[
                "The Reset Room is based in Bridgeton, in Glasgow's East End — a calm, private room away from busy, clinical or high-traffic settings.",
                "It's designed to feel quiet, comfortable and unhurried: somewhere you can fully switch off without distraction. For many clients that's just as important as the treatment itself.",
              ]}
            />
            <H3 text="Inside The Reset *Room*" className="mt-10" />
            <CheckList
              className="mt-5"
              items={["One therapist, one private room", "Treatments tailored on the day", "Massage and holistic therapies", "Simple online booking"]}
              // TODO(client): mockup-only items to confirm — "Conversation or quiet, your choice", "Inclusive, judgment-free care"
            />
            <p className="mt-8"><TextLink href="/areas/bridgeton">Finding the room in Bridgeton</TextLink></p>
          </div>
        </div>
        <PhotoStrip
          className="mt-16 md:mt-24"
          heading="A look around"
          files={[
            "massage-treatment-room-glasgow.jpg",
            "therapy-room-consultation-area-glasgow.jpeg",
            "private-massage-room-glasgow.jpeg",
            "welcoming-therapy-space-glasgow.jpeg",
            "massage-treatment-room-glasgow-east-end.jpeg",
            "therapy-room-glasgow-east-end.jpg",
            "sound-bath-gong-glasgow.jpeg",
            "client-refreshments-reset-room-glasgow.jpeg",
          ]}
        />
      </Section>

      <CtaBand
        heading="Not sure where to *start*?"
        text="You don't need to have it all figured out. Book the treatment that sounds closest and we can tailor the details together when you arrive."
        href="/treatments"
        label="Find your treatment"
      />
    </>
  );
}
