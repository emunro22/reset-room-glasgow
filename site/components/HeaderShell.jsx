"use client";
import { useEffect, useState } from "react";

export default function HeaderShell({ children }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    // The blur lives on a background layer, NOT the <header>: backdrop-filter on an ancestor turns it into the
    // containing block for position:fixed children, which would trap the mobile drawer inside the header.
    <header className={`sticky top-0 z-40 border-b transition-[border-color] duration-300 ${scrolled ? "border-border" : "border-transparent"}`}>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-surface/90 backdrop-blur" />
      {children}
    </header>
  );
}
