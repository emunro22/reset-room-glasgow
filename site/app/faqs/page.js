import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { Eyebrow, H2, Section, TextLink } from "@/components/ui";
import { homeFaqs, bookingFaqs } from "@/content/faqs";
import { services, serviceHref } from "@/content/services";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Massage FAQs Glasgow | The Reset Room Glasgow",
  description:
    "Answers to common questions about massage and holistic therapy at The Reset Room Glasgow: what to wear, how to book, cancellations and choosing a treatment.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "FAQs", href: "/faqs" }]} />
      <section className="px-5 pb-12 pt-8 md:px-10 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Helpful answers</Eyebrow>
          <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">Massage &amp; Treatment FAQs</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Everything you might want to know before your first visit. If your question isn&rsquo;t here, <TextLink href="/contact">get in touch</TextLink> and I will be happy to help.
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <H2 text="Massage and your *visit*" className="!text-3xl md:!text-4xl" />
          <Faq faqs={homeFaqs} className="mt-8" />
        </div>
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <H2 text="Booking and *appointments*" className="!text-3xl md:!text-4xl" />
          <Faq faqs={bookingFaqs} className="mt-8" />
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <H2 text="Questions about a *treatment*" className="!text-3xl md:!text-4xl" />
          <p className="mt-5 text-ink-soft">Each treatment page has its own detailed FAQs:</p>
          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <TextLink href={`${serviceHref(s)}`}>{s.navName || s.name} FAQs</TextLink>
                <span className="block text-sm text-ink-faint">{s.faqs.length} questions, including &ldquo;{s.faqs[0].q}&rdquo;</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
      <JsonLd data={faqSchema([...homeFaqs, ...bookingFaqs])} />
    </>
  );
}
