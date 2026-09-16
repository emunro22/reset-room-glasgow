"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function TreatmentsDropdown({ items }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const btn = useRef(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => wrap.current && !wrap.current.contains(e.target) && setOpen(false);
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrap}
      className="relative flex items-center"
      onBlur={(e) => wrap.current && !wrap.current.contains(e.relatedTarget) && setOpen(false)}
    >
      <Link href="/treatments" className="nav-link">
        Treatments
      </Link>
      <button
        ref={btn}
        type="button"
        aria-expanded={open}
        aria-controls="treatments-menu"
        aria-label="Show all treatments"
        onClick={() => setOpen((o) => !o)}
        className="ml-0.5 flex h-11 w-8 items-center justify-center rounded-full text-ink hover:text-highlight-deep"
      >
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>
      <div
        id="treatments-menu"
        className={`absolute left-0 top-full w-72 rounded-2xl border border-border bg-surface p-3 shadow-[0_12px_32px_-12px_rgba(23,58,49,0.25)] ${open ? "" : "hidden"}`}
      >
        <ul>
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                aria-current={pathname === it.href ? "page" : undefined}
                className="block rounded-xl px-3 py-2.5 text-sm text-ink-soft hover:bg-surface-2 hover:text-ink aria-[current=page]:text-ink aria-[current=page]:font-medium"
              >
                {it.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 border-t border-border pt-2">
            <Link href="/treatments" className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-surface-2">
              All treatments
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
