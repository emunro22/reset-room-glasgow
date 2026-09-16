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
  { title: "Get comfortable", desc: "Settle in lying down, with support for your head and body so you can stay still without effort." },
  { title: "Let yourself listen", desc: "Sound is introduced gradually — singing bowls, gongs and chimes played slowly in layers. You're free to relax fully or drift in and out." },
  { title: "Leave slowly", desc: "The sound fades and there's time to come back gradually before heading out, without having to rush." },
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
                "If you're feeling mentally busy or simply in need of quiet time, a sound bath gives you space to pause. Lie back, get comfortable and let singing bowls, gongs and chimes help you slow down.",
                "It's a different kind of relaxation — one that doesn't rely on touch. There's nothing to do and nothing to get right.",
              ]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#upcoming">See upcoming sound baths</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">How it works</ButtonLink>
            </div>
          </div>
          <ArchImage file="sound-bath-gong-glasgow.jpeg" priority className="mx-auto aspect-[4/5] w-full max-w-xs" sizes="(min-width: 768px) 320px, 80vw" />
        </div>
      </section>

      {/* Upcoming */}
      <Section tone="white" id="upcoming" className="scroll-mt-20">
        <Eyebrow>Upcoming sessions</Eyebrow>
        <H2 text="Your next chance to *switch off*" />
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
            <H2 text="What is a sound *bath*?" />
            <Prose
              className="mt-6"
              paragraphs={[
                "A sound bath is a guided relaxation session where sound is used to help you rest. Instruments such as singing bowls, gongs and chimes are played slowly and intentionally, creating layers of sound that you simply listen to.",
                "For many people, switching off isn't easy. Even when the body is still, the mind keeps going — thinking, planning, replaying. The tones and rhythm give your mind something gentle to rest on, which can make it easier to let that constant activity fade into the background.",
                "Many people relax more deeply than they expected, sometimes without realising until afterwards.",
              ]}
            />
          </div>
          <div>
            <H3 text="Why people come to a sound *bath*" />
            <CheckList
              className="mt-6"
              items={[
                "Time to slow down mentally",
                "A break from constant screens and stimulation",
                "Deep rest without any effort",
                "No experience needed — nothing to learn or get right",
              ]}
            />
            <H3 text="Who it may *suit*" className="mt-12" />
            <CheckList
              className="mt-6"
              items={[
                "You feel mentally overwhelmed or constantly switched on",
                "You find meditation hard to get into",
                "You'd prefer a treatment with no touch",
                "You're new to wellbeing practices and want something simple",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* How it works — three steps */}
      <Section tone="sage" id="how-it-works" className="scroll-mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>What to expect</Eyebrow>
          <H2 text="Come in, lie down, *exhale*" />
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
          Wear warm, comfortable clothes. Any specific details for a session are shared with the event information.
        </p>
      </Section>

      {/* Sound vs massage + Reiki */}
      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <H3 text="Sound bath vs *massage*" />
            <dl className="mt-6 divide-y divide-border border-y border-border">
              <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-medium text-ink">Massage</dt>
                <dd className="text-ink-soft">Works through physical touch and muscle tension.</dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-medium text-ink">Sound bath</dt>
                <dd className="text-ink-soft">Works through sound and stillness, with no touch at all.</dd>
              </div>
            </dl>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Some clients enjoy both, choosing <TextLink href="/treatments/swedish-massage">massage</TextLink> when their body feels tense and a sound bath when it&rsquo;s their mind that needs a break.
            </p>
          </div>
          <div>
            <H3 text="Prefer it one-to-one? Try Reiki with *sound*" />
            <p className="mt-6 leading-relaxed text-ink-soft">
              If you like the idea of sound but would rather a private session, singing bowls can be brought into a one-to-one Reiki treatment. It keeps the calm, immersive feel of a sound bath in the quiet of the treatment room.
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
