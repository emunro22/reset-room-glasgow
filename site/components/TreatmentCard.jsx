import Link from "next/link";
import ArchImage from "@/components/ArchImage";
import { Arrow } from "@/components/Icons";
import { serviceHref } from "@/content/services";

export default function TreatmentCard({ service, headingLevel = "h3" }) {
  const H = headingLevel;
  return (
    <Link href={serviceHref(service)} className="group flex h-full flex-col rounded-2xl border border-border bg-white p-4 transition-colors duration-300 hover:border-highlight-soft">
      <ArchImage file={service.image} alt="" className="aspect-[4/3]" sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw" hoverZoom />
      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <H className="font-display text-2xl font-normal text-ink">{service.navName || service.name}</H>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.shortDesc}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-highlight-deep">
          {service.slug === "sound-baths" ? "Explore sound baths" : "Explore treatment"} <Arrow />
        </span>
      </div>
    </Link>
  );
}
