import { InstagramIcon, FacebookIcon } from "@/components/Icons";
import { ButtonLink, Eyebrow, Prose, Section, TextLink } from "@/components/ui";
import { business } from "@/content/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank You | The Reset Room Glasgow",
  description: "Thanks for getting in touch with The Reset Room Glasgow. I will reply as soon as I can — or book your treatment online now to choose a time.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <Section tone="cream">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Message sent</Eyebrow>
        <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">Thank you for getting in touch</h1>
        <Prose
          className="mt-6"
          paragraphs={[
            "Your message has reached me, and I'll get back to you as soon as I can — usually by email, or by phone if you left a number.",
            "If you already know what you'd like, you don't need to wait for a reply. Online booking shows live availability and confirms your appointment straight away.",
          ]}
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={business.bookingUrl}>Ready to book? Go to Vagaro</ButtonLink>
          <ButtonLink href="/treatments" variant="secondary">Browse treatments</ButtonLink>
        </div>
        <div className="mt-12 border-t border-border pt-10">
          <p className="text-ink-soft">Follow along for sound bath dates and news from the treatment room.</p>
          <div className="mt-5 flex justify-center gap-3">
            <a href={business.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink hover:border-ink"><InstagramIcon /></a>
            <a href={business.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in a new tab)" className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink hover:border-ink"><FacebookIcon /></a>
          </div>
          <p className="mt-8 text-sm text-ink-faint">
            Need a quicker answer? Call <TextLink href={`tel:${business.phoneE164}`}>{business.phone}</TextLink>.
          </p>
        </div>
      </div>
    </Section>
  );
}
