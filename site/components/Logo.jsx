import Image from "next/image";
import Link from "next/link";

export function HeaderLogo() {
  return (
    // The header row has to hold the logo, two social icons and the menu button. Below 360px the
    // wordmark is dropped and the mark stands alone — the link keeps its aria-label, so the name is
    // still announced. Tracking tightens on small screens because 0.25em is what makes it overflow.
    <Link href="/" className="flex min-h-[44px] shrink-0 items-center gap-2 sm:gap-3" aria-label="The Reset Room Glasgow — home">
      <Image src="/brand/logo-mark-dark.png" alt="" width={390} height={400} priority className="h-8 w-auto sm:h-9" />
      <span className="hidden flex-col leading-none min-[360px]:flex">
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.12em] text-ink sm:text-[0.8rem] sm:tracking-[0.25em]">
          The Reset Room
        </span>
        <span className="mt-1 text-[0.5rem] uppercase tracking-[0.3em] text-ink-soft sm:text-[0.6rem] sm:tracking-[0.35em]">
          Glasgow
        </span>
      </span>
    </Link>
  );
}

export function FooterLogo() {
  return (
    <Image src="/brand/logo-stacked-cream.png" alt="The Reset Room Glasgow" width={1200} height={757} className="h-auto w-40 sm:w-48" />
  );
}
