import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { InstagramIcon, FacebookIcon, PhoneIcon } from "@/components/Icons";
import { ButtonLink, Eyebrow, H2, Prose, Section, TextLink } from "@/components/ui";
const sub = "!text-2xl md:!text-3xl";
import { business, addressLines } from "@/content/business";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact The Reset Room Glasgow",
  description:
    "Get in touch with The Reset Room Glasgow for massage therapy and holistic treatments in Glasgow’s East End.",
  path: "/contact",
});

export default function ContactPage({ searchParams }) {
  const initialError = searchParams?.error === "1";
  const row = "flex min-h-[44px] items-center gap-3 text-ink hover:text-highlight-deep";
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <section className="px-5 pb-12 pt-8 md:px-10 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">Contact The Reset Room Glasgow</h1>
          <Prose
            className="mt-6 max-w-2xl"
            paragraphs={[
              "If you have a question before booking, or you're not sure which treatment is right for you, you're always welcome to get in touch.",
              "Whether it's about availability, treatments or anything else, I'll get back to you as soon as I can. If you're ready to book, you can do that directly online.",
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={business.bookingUrl}>Book your treatment</ButtonLink>
            <ButtonLink href={`tel:${business.phoneE164}`} variant="secondary">Call {business.phone}</ButtonLink>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="space-y-12">
            <div>
              <H2 text="How to get in *touch*" className={sub} />
              <ul className="mt-5 space-y-1">
                <li><a className={row} href={`tel:${business.phoneE164}`}><PhoneIcon /> {business.phone}</a></li>
                <li><a className={`${row} break-all`} href={`mailto:${business.email}`}><span aria-hidden="true">@</span> {business.email}</a></li>
                <li><a className={row} href={business.socials.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /> @jodi_theresetroomglasgow</a></li>
                <li><a className={row} href={business.socials.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon /> theresetroomglasgow</a></li>
              </ul>
            </div>
            <div>
              <p className="leading-relaxed text-ink-soft">
                Not sure which treatment to choose? That&rsquo;s one of the most common questions, and there&rsquo;s no need to have it worked out before you get in touch. Tell me a little about how you&rsquo;re feeling — tight shoulders, a busy mind, pregnancy aches — and I&rsquo;ll point you towards what should suit you. You can also <TextLink href="/treatments">browse all treatments</TextLink> or read the <TextLink href="/faqs">FAQs</TextLink>.
              </p>
            </div>
            <div>
              <H2 text="Appointments & *availability*" className={sub} />
              <p className="mt-4 leading-relaxed text-ink-soft">
                Treatments are available by appointment only, with flexible availability through the week. Rather than fixed opening hours, you can see real-time availability and choose a time that suits you in the booking system.
              </p>
            </div>
            <div>
              <H2 text="Where the room is *based*" className={sub} />
              <address className="mt-4 not-italic leading-relaxed text-ink">{addressLines.map((l) => <div key={l}>{l}</div>)}</address>
              <p className="mt-4 leading-relaxed text-ink-soft">
                The treatment room is in Glasgow&rsquo;s East End, easy to reach from the city centre, the Southside and surrounding areas, with free parking nearby and good transport links.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <TextLink href={business.gbp.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</TextLink>
                <TextLink href={business.gbp.reviewUrl} target="_blank" rel="noopener noreferrer">Leave a Google review</TextLink>
              </div>
            </div>
          </div>

          <div id="contact-form" data-hide-pill className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 md:p-10">
            <H2 text="Send a *question*" className="!text-3xl" />
            <p className="mt-3 mb-8 text-ink-soft">This form is for questions. To book an appointment, use <TextLink href={business.bookingUrl}>online booking</TextLink>.</p>
            <ContactForm
              treatments={services.map((s) => s.navName || s.name)}
              phone={business.phone}
              phoneE164={business.phoneE164}
              email={business.email}
              bookingUrl={business.bookingUrl}
              initialError={initialError}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
