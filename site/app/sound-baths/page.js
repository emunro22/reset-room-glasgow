import Link from "next/link";
import ArchImage from "@/components/ArchImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PhotoStrip from "@/components/PhotoStrip";
import Reveal from "@/components/Reveal";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";
import { ButtonLink, CheckList, Eyebrow, H2, H3, Prose, Section, TextLink } from "@/components/ui";
import { business } from "@/content/business";
import { getService } from "@/content/services";
import { upcomingSoundBaths } from "@/content/events";
import { buildMetadata, eventSchema, faqSchema, serviceSchema } from "@/lib/seo";
import { ogImageFor } from "@/lib/photo";

export const revalidate = 3600;
const s = getService("sound-baths");

export const metadata = buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: "/sound-baths", image: ogImageFor(s.image) });

const fmt = (iso, opts) => new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/London", ...opts }).format(new Date(iso));

const expect = [
  { title: "Get comfortable", desc: "I will help you settle into a comfortable position, usually lying down, with support for your head and body." },
  { title: "Let yourself listen", desc: "I introduce the instruments gradually and play them in layers around the room. You can keep your eyes open or closed and may drift in and out of sleep." },
  { title: "Leave slowly", desc: "The sound fades and there is time to come back gradually before heading out, without having to rush." },
];

export default function SoundBathsPage() {
  const events = upcomingSoundBaths();
  return (
    <>
      <Breadcrumbs items={[{ name: "Sound Baths", href: "/sound-baths" }]} />
      <section className="px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">{s.h1}</h1>
            <Prose
              className="mt-6 max-w-2xl"
              paragraphs={[
                "Lie back and listen as gongs, singing bowls and chimes fill the room. Sound baths offer an accessible form of guided relaxation for busy minds, tired bodies and anyone who finds silent meditation difficult.",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#upcoming">View Upcoming Sound Baths</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">How it works</ButtonLink>
            </div>
          </div>
          <ArchImage file="sound-bath-gong-glasgow.jpeg" priority className="mx-auto aspect-[4/5] w-full max-w-xs" sizes="(min-width: 768px) 320px, 80vw" />
        </div>
      </section>

      {/* Upcoming */}
      <Section tone="white" id="upcoming" className="scroll-mt-20">
        <Eyebrow>Upcoming sessions</Eyebrow>
        <H2 text="Upcoming Sound Baths in *Glasgow*" />
        {events.length ? (
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {events.map((e) => (
              <li key={e.slug} className="flex gap-6 rounded-2xl border border-border bg-surface p-6">
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-t-full bg-ink text-surface">
                  <span className="text-xs uppercase tracking-[0.2em]">{fmt(e.date, { month: "short" })}</span>
                  <span className="font-display text-3xl">{fmt(e.date, { day: "numeric" })}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ink">{e.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {fmt(e.date, { weekday: "long", hour: "numeric", minute: "2-digit" })}
                    {e.venue ? ` · ${e.venue}` : ""}
                    {e.price != null ? ` · £${e.price}` : ""}
                  </p>
                  {e.note && <p className="mt-2 text-sm text-ink-soft">{e.note}</p>}
                  <ButtonLink href={e.bookingUrl || business.bookingUrl} className="mt-4">Reserve your place</ButtonLink>
                </div>
                <JsonLd data={eventSchema(e)} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 grid gap-8 rounded-2xl border border-border bg-surface p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-display text-2xl text-ink">New dates are shared regularly on Instagram and Facebook.</p>
              <p className="mt-3 max-w-xl text-ink-soft">
                Sessions are scheduled at different times depending on room availability. Follow along to hear about the next one first, or get in touch to ask about upcoming dates.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={business.socials.instagram} target="_blank" rel="noopener noreferrer" className="gap-2"><InstagramIcon /> Instagram</ButtonLink>
              <ButtonLink href={business.socials.facebook} target="_blank" rel="noopener noreferrer" variant="secondary" className="gap-2"><FacebookIcon /> Facebook</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Ask about dates</ButtonLink>
            </div>
          </div>
        )}
      </Section>

      {/* What is it */}
      <Section tone="cream">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <H2 text="Deep Rest Through Sound and *Stillness*" />
            <Prose
              className="mt-6"
              paragraphs={[
                "You do not need to clear your mind or follow a complicated technique. The changing tones give your attention somewhere to rest while you lie comfortably and allow the session to unfold.",
              ]}
            />
            <p className="mt-6 border-l-2 border-highlight-soft pl-4 text-sm leading-relaxed text-ink">
              A sound bath may feel calming, but it is a complementary wellbeing experience rather than a treatment for
              anxiety, insomnia or another medical condition.
            </p>
          </div>
          <div>
            <H3 text="People often *attend* because they" />
            <CheckList
              className="mt-6"
              items={[
                "Feel stressed or overstimulated",
                "Find it difficult to switch off",
                "Want a non-touch wellbeing experience",
                "Are curious about meditation but struggle with silence",
                "Enjoy gongs, singing bowls and immersive sound",
                "Want protected time to rest",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* How it works — three steps */}
      <Section tone="sage" id="how-it-works" className="scroll-mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>What to expect</Eyebrow>
          <H2 text="What Happens at a Sound *Bath*" />
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {expect.map((st, i) => (
            <li key={st.title}>
              <Reveal index={i} className="h-full rounded-2xl bg-surface p-7">
                <span className="font-display text-4xl text-highlight">{i + 1}</span>
                <h3 className="mt-3 font-display text-xl text-ink">{st.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{st.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-2xl text-center text-ink-soft">
          Every session feels different. Some people notice the vibration physically, while others focus more on the
          tones or simply enjoy being still. Date, time, venue, what to bring and price are shown with each event
          listing.
        </p>
      </Section>

      {/* Sound vs massage + Reiki */}
      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <H3 text="Sound Bath or *Meditation*" />
            <dl className="mt-6 divide-y divide-border border-y border-border">
              <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-medium text-ink">Silent meditation</dt>
                <dd className="text-ink-soft">Often asks you to return attention to the breath or another focus.</dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-medium text-ink">Sound bath</dt>
                <dd className="text-ink-soft">The live sound provides that focus for you.</dd>
              </div>
            </dl>
            <p className="mt-5 leading-relaxed text-ink-soft">
              This can make the experience feel more approachable for beginners, although distraction and wandering
              thoughts are still completely normal. For physical muscle tension, compare{" "}
              <TextLink href="/treatments">massage treatments</TextLink>.
            </p>
          </div>
          <div>
            <H3 text="Prefer it one-to-one? Try Reiki with *sound*" />
            <p className="mt-6 leading-relaxed text-ink-soft">
              For a private one-to-one treatment with little or no touch, consider Reiki. Singing bowls can be brought
              into the session, keeping the calm, immersive feel of a sound bath in the quiet of the treatment room.
            </p>
            <p className="mt-5"><TextLink href="/treatments/reiki">Explore Reiki</TextLink></p>
            {/* TODO(client): private/group sessions (friendship groups, workplaces) — mockup only. Add a section here only if offered. */}
          </div>
        </div>
        <PhotoStrip
          className="mt-16 md:mt-24"
          heading="The instruments and the room"
          files={["gong-sound-session-glasgow.jpeg", "therapy-room-glasgow-east-end.jpg", "sound-bath-room-glasgow.jpeg", "massage-treatment-room-glasgow.jpg"]}
        />
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Eyebrow>Good to know</Eyebrow>
            <H2 text="Sound bath *FAQs*" />
          </div>
          <Faq faqs={s.faqs} />
        </div>
      </Section>

      <CtaBand
        heading="Give your mind a *quieter* evening"
        text="Follow on Instagram or Facebook for new dates, or get in touch with any questions."
        href="/contact"
        label="Ask about the next session"
      />
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />
    </>
  );
}
