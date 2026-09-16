import Link from "next/link";
import { FooterLogo } from "@/components/Logo";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";
import { business, addressLines } from "@/content/business";
import { services, serviceHref } from "@/content/services";
import { areas } from "@/content/areas";

const h = "mb-4 text-xs font-medium uppercase tracking-[0.2em] text-highlight-light";
const a = "py-1 text-surface/85 transition-colors hover:text-surface hover:underline underline-offset-4";

export default function Footer() {
  return (
    <footer data-hide-pill className="bg-ink-deep px-5 pb-10 pt-16 text-surface md:px-10 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr_1.1fr_1.4fr]">
          <div>
            <FooterLogo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-surface/85">
              Massage and holistic therapy in Bridgeton, Glasgow East End.
            </p>
          </div>
          <div>
            <h2 className={h}>Treatments</h2>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}><Link className={a} href={serviceHref(s)}>{s.navName || s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={h}>Areas</h2>
            <ul className="space-y-2 text-sm">
              {areas.map((ar) => (
                <li key={ar.slug}><Link className={a} href={`/areas/${ar.slug}`}>{ar.shortName || ar.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={h}>Visit</h2>
            <address className="space-y-1 text-sm not-italic text-surface/85">
              {addressLines.map((l) => <div key={l}>{l}</div>)}
            </address>
            <p className="mt-3 text-sm text-surface/85">By appointment</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className={a} href={business.gbp.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</a></li>
              <li><a className={a} href={business.gbp.reviewUrl} target="_blank" rel="noopener noreferrer">Leave a Google review</a></li>
            </ul>
          </div>
          <div>
            <h2 className={h}>Contact</h2>
            <ul className="space-y-2 text-sm">
              <li><a className={a} href={`tel:${business.phoneE164}`}>{business.phone}</a></li>
              <li><a className={a} href={`mailto:${business.email}`}>hello@<wbr />theresetroomglasgow.com</a></li>
              <li>
                <a className={`${a} inline-flex items-center gap-2`} href={business.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon /> Instagram
                </a>
              </li>
              <li>
                <a className={`${a} inline-flex items-center gap-2`} href={business.socials.facebook} target="_blank" rel="noopener noreferrer">
                  <FacebookIcon /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-surface/15 pt-6 text-xs text-surface/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}</p>
          <ul className="flex gap-6">
            <li><Link className={a} href="/privacy">Privacy</Link></li>
            <li><Link className={a} href="/terms">Terms</Link></li>
            <li><Link className={a} href="/areas">Areas</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
