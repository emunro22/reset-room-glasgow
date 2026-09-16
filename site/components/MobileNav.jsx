"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function MobileNav({ treatments, links, phone, phoneE164 }) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const pathname = usePathname();
  const panel = useRef(null);
  const button = useRef(null);
  const reduce = useReducedMotion();

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) requestAnimationFrame(() => button.current?.focus());
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll lock + flag for the sticky Book pill
  useEffect(() => {
    const body = document.body;
    if (open) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      body.dataset.drawerOpen = "true";
      return () => {
        body.style.overflow = prev;
        delete body.dataset.drawerOpen;
      };
    }
  }, [open]);

  // Escape + focus trap
  useEffect(() => {
    if (!open) return;
    const focusables = () =>
      panel.current ? [...panel.current.querySelectorAll('a[href], button:not([disabled])')].filter((el) => el.offsetParent !== null) : [];
    requestAnimationFrame(() => focusables()[0]?.focus());
    const onKey = (e) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      const els = focusables();
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const t = reduce ? { duration: 0 } : { duration: 0.3, ease: [0.4, 0, 0.2, 1] };
  const linkCls = "block border-b border-border py-3.5 font-display text-[1.75rem] leading-tight text-ink min-[360px]:text-3xl";

  return (
    <>
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
      >
        <span className="relative block h-3.5 w-6" aria-hidden="true">
          <span className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${open ? "top-1/2 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 top-1/2 h-px w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 h-px w-6 bg-current transition-all duration-300 ${open ? "top-1/2 -rotate-45" : "top-full"}`} />
        </span>
      </button>

      <motion.div
        aria-hidden="true"
        onClick={() => close(false)}
        className={`fixed inset-0 z-50 touch-none bg-ink/40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={t}
      />

      <motion.nav
        id="mobile-drawer"
        ref={panel}
        aria-label="Mobile"
        aria-hidden={!open}
        inert={open ? undefined : ""}
        className={`fixed inset-y-0 left-0 z-50 flex w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain bg-surface pt-5 shadow-2xl lg:hidden pl-[max(1.5rem,env(safe-area-inset-left))] pr-6 pb-[calc(2rem+env(safe-area-inset-bottom))] ${open ? "" : "invisible"}`}
        initial={false}
        animate={{ x: open ? 0 : "-100%" }}
        transition={t}
      >
        <div className="mb-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={() => close(false)}>
            <Image src="/brand/logo-mark-dark.png" alt="" width={390} height={400} className="h-9 w-auto" />
            <span className="text-[0.75rem] font-medium uppercase tracking-[0.25em] text-ink">The Reset Room</span>
          </Link>
          <button type="button" onClick={() => close()} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full text-ink">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.4" /></svg>
          </button>
        </div>

        <ul>
          <li><Link href="/" className={linkCls} onClick={() => close(false)}>Home</Link></li>
          <li className="border-b border-border">
            <div className="flex items-center justify-between">
              <Link href="/treatments" className="block py-3.5 font-display text-[1.75rem] leading-tight text-ink min-[360px]:text-3xl" onClick={() => close(false)}>Treatments</Link>
              <button
                type="button"
                aria-expanded={subOpen}
                aria-controls="drawer-treatments"
                aria-label="Show all treatments"
                onClick={() => setSubOpen((s) => !s)}
                className="flex h-11 w-11 items-center justify-center text-ink"
              >
                <svg width="14" height="8" viewBox="0 0 10 6" aria-hidden="true" className={`transition-transform duration-300 ${subOpen ? "rotate-180" : ""}`}><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
              </button>
            </div>
            <ul id="drawer-treatments" className={`pb-4 ${subOpen ? "" : "hidden"}`}>
              {treatments.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="block py-2 text-base text-ink-soft" onClick={() => close(false)}>{it.label}</Link>
                </li>
              ))}
              <li><Link href="/treatments" className="block py-2 text-base font-medium text-ink" onClick={() => close(false)}>All treatments</Link></li>
            </ul>
          </li>
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} className={linkCls} onClick={() => close(false)}>{l.label}</Link></li>
          ))}
        </ul>

        <div className="mt-8 space-y-3">
          <a href={`tel:${phoneE164}`} className="flex min-h-[48px] w-full items-center justify-center rounded-full border border-ink px-6 text-sm font-medium text-ink">
            Call {phone}
          </a>
          <Link href="/book" onClick={() => close(false)} className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-surface">
            Book online
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
