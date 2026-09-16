import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { ButtonLink, CheckList, Eyebrow, H2, Section, TextLink } from "@/components/ui";
import { business, addressLines } from "@/content/business";
import { services, serviceHref } from "@/content/services";
import { bookingFaqs } from "@/content/faqs";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Massage in Glasgow | The Reset Room Glasgow",
  description:
    "Book massage, reflexology or Reiki at The Reset Room Glasgow in Bridgeton. See live availability on Vagaro and get instant confirmation. Book online now.",
  path: "/book",
});

export default function BookPage() {
  const bookable = services.filter((s) => s.slug !== "sound-baths");
  return (
    <>
      <Breadcrumbs items={[{ name: "Book", href: "/book" }]} />
      <section className="px-5 pb-12 pt-8 md:px-10 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>Choose your reset</Eyebrow>
          <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">Book Your Massage Appointment in Glasgow</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Browse live availability and book online through Vagaro. Appointments are by booking only, and your confirmation includes everything you need for your visit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={business.bookingUrl}>Continue to Vagaro</ButtonLink>
            <ButtonLink href={`tel:${business.phoneE164}`} variant="secondary">Call {business.phone}</ButtonLink>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <Eyebrow>Treatments</Eyebrow>
            <H2 text="What would *help* today?" />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {bookable.map((s) => (
                <li key={s.slug} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-xl text-ink">{s.name}</p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {s.shortDesc}
                      {s.duration ? ` · ${s.duration}` : ""}
                    </p>
                    <TextLink href={serviceHref(s)} className="mt-1 inline-block text-sm">About this treatment</TextLink>
                  </div>
                  {/* TODO(client): per-treatment Vagaro deep links if Jodi wants them; all go to the main page for now */}
                  <ButtonLink href={business.bookingUrl} variant="secondary" className="shrink-0">Book</ButtonLink>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-soft">
              Not sure? Choose the closest match — I can adapt the treatment after your consultation. Looking for a sound bath? See <TextLink href="/sound-baths">upcoming sessions</TextLink>.
            </p>
          </div>

          <aside>
            <div className="rounded-2xl bg-surface-2 p-8 lg:sticky lg:top-24">
              <h2 className="font-display text-2xl text-ink">Your visit</h2>
              <address className="mt-4 not-italic leading-relaxed text-ink">{addressLines.map((l) => <div key={l}>{l}</div>)}</address>
              <CheckList className="mt-6" items={[business.hoursNote, ...business.locationNotes, "Arrive at your booked time"]} />
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href={business.bookingUrl}>Continue to Vagaro</ButtonLink>
                <ButtonLink href={business.gbp.directionsUrl} target="_blank" rel="noopener noreferrer" variant="secondary">Get directions</ButtonLink>
              </div>
              <p className="mt-6 text-sm text-ink-soft">
                Have a question before booking? <TextLink href="/contact">Get in touch</TextLink>.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Eyebrow>Booking questions</Eyebrow>
            <H2 text="Before you *confirm*" />
          </div>
          <Faq faqs={bookingFaqs} />
        </div>
      </Section>

      <section data-hide-pill className="bg-surface-2 px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <H2 text="Your hour starts *here*" className="!text-3xl md:!text-4xl" />
            <p className="mt-3 text-ink-soft">Choose a treatment, find a time and let the rest be easy.</p>
          </div>
          <ButtonLink href={business.bookingUrl}>View live availability</ButtonLink>
        </div>
      </section>
      <JsonLd data={faqSchema(bookingFaqs)} />
    </>
  );
}
