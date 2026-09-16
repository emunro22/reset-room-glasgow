"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Mobile-only "Book" pill. Hidden on /book, while the drawer is open (CSS in globals.css), and whenever
// an element marked data-hide-pill (footer, contact form, CTA bands) is on screen, so it never covers them.
export default function StickyBookPill() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-hide-pill]");
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const visible = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        setHidden(visible.size > 0);
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  if (pathname === "/book") return null;
  return (
    <Link
      href="/book"
      className={`book-pill fixed right-4 z-30 flex h-14 items-center rounded-full bg-ink px-7 text-sm font-medium text-surface shadow-[0_8px_24px_-8px_rgba(18,48,42,0.5)] transition-[opacity,transform] duration-300 bottom-[calc(1rem+env(safe-area-inset-bottom))] md:hidden ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : ""
      }`}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      Book
    </Link>
  );
}
