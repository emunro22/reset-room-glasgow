import { ButtonLink, H2 } from "@/components/ui";
import { business } from "@/content/business";

export default function CtaBand({
  heading = "Ready to make space for feeling *better*?",
  text = "Choose your treatment and book a time that works for you.",
  href = "/book",
  label = "Book your treatment",
}) {
  return (
    <section data-hide-pill className="bg-surface-2 px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <H2 text={heading} className="!text-3xl md:!text-4xl" />
          <p className="mt-3 text-ink-soft">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={href}>{label}</ButtonLink>
          <ButtonLink href={`tel:${business.phoneE164}`} variant="secondary">
            Call {business.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
