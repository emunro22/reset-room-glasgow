import { ButtonLink, Eyebrow, TextLink } from "@/components/ui";
import { business } from "@/content/business";

export const metadata = { title: { absolute: "Page not found | The Reset Room Glasgow" }, robots: { index: false } };

export default function NotFound() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="font-display text-[2rem] font-normal leading-[1.12] text-ink min-[360px]:text-4xl min-[360px]:leading-[1.1] md:text-6xl">This page has taken a <em className="italic text-highlight">breather</em></h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          The page you&rsquo;re looking for has moved or doesn&rsquo;t exist. The site was recently rebuilt, so an old link may have brought you here.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/treatments">See treatments</ButtonLink>
          <ButtonLink href="/book" variant="secondary">Book online</ButtonLink>
        </div>
        <p className="mt-8 text-ink-soft">
          Or <TextLink href="/contact">contact Jodi</TextLink> on <TextLink href={`tel:${business.phoneE164}`}>{business.phone}</TextLink>.
        </p>
      </div>
    </section>
  );
}
