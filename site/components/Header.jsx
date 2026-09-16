import Link from "next/link";
import HeaderShell from "@/components/HeaderShell";
import TreatmentsDropdown from "@/components/TreatmentsDropdown";
import MobileNav from "@/components/MobileNav";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";
import { HeaderLogo } from "@/components/Logo";
import { business } from "@/content/business";
import { services, serviceHref } from "@/content/services";

const treatmentItems = services.map((s) => ({ href: serviceHref(s), label: s.navName || s.name }));
const links = [
  { href: "/sound-baths", label: "Sound Baths" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <>
      <div className="bg-ink px-3 py-2 text-center text-[11px] leading-snug text-surface sm:text-xs sm:tracking-wide">
        Now welcoming new clients
        <span aria-hidden="true" className="mx-1.5 hidden text-highlight-light min-[340px]:inline sm:mx-2">•</span>
        <span className="block min-[340px]:inline">Bridgeton, Glasgow East End</span>
      </div>
      <HeaderShell>
        <div className="px-4 sm:px-5 md:px-10"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 sm:gap-4 lg:gap-6">
          <HeaderLogo />
          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            <TreatmentsDropdown items={treatmentItems} />
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
            <a href={`tel:${business.phoneE164}`} className="nav-link whitespace-nowrap">
              {business.phone}
            </a>
            <Link href="/book" className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-5 text-sm font-medium text-surface transition-colors hover:bg-ink-deep">
              Book online
            </Link>
          </nav>
          <div className="flex items-center gap-0.5 lg:hidden">
            <a
              href={business.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:text-highlight-deep"
            >
              <InstagramIcon width="19" height="19" />
            </a>
            <a
              href={business.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook (opens in a new tab)"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:text-highlight-deep"
            >
              <FacebookIcon width="19" height="19" />
            </a>
            <MobileNav treatments={treatmentItems} links={links} phone={business.phone} phoneE164={business.phoneE164} />
          </div>
        </div></div>
      </HeaderShell>
    </>
  );
}
