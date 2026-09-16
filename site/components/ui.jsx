import Link from "next/link";
import { splitAccent } from "@/lib/text";

const tones = {
  cream: "bg-surface",
  white: "bg-white",
  sage: "bg-surface-2",
  ink: "bg-ink text-surface",
};

export function Section({ tone = "cream", id, className = "", inner = "", children, ...rest }) {
  return (
    <section id={id} className={`${tones[tone]} px-5 py-16 md:px-10 md:py-28 ${className}`} {...rest}>
      <div className={`mx-auto max-w-7xl ${inner}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false, className = "" }) {
  return (
    <p className={`mb-4 text-xs font-medium uppercase tracking-[0.2em] ${dark ? "text-surface-2" : "text-ink-soft"} ${className}`}>
      {children}
    </p>
  );
}

// Renders "Choose what your body *needs* today" with the starred word in clay italic.
export function Accent({ text, dark = false }) {
  return splitAccent(text).map((part, i) =>
    part.startsWith("*") ? (
      <em key={i} className={`font-display italic ${dark ? "text-highlight-light" : "text-highlight"}`}>
        {part.slice(1, -1)}
      </em>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function H2({ text, dark = false, className = "", as: Tag = "h2" }) {
  return (
    <Tag className={`font-display text-3xl font-normal leading-tight md:text-5xl ${dark ? "text-surface" : "text-ink"} ${className}`}>
      <Accent text={text} dark={dark} />
    </Tag>
  );
}

export function H3({ text, className = "" }) {
  return (
    <h3 className={`font-display text-2xl font-normal leading-snug text-ink md:text-3xl ${className}`}>
      <Accent text={text} />
    </h3>
  );
}

const variants = {
  primary: "bg-ink text-surface hover:bg-ink-deep",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-surface",
  light: "bg-surface text-ink hover:bg-white",
  outlineLight: "border border-surface/70 text-surface hover:bg-surface hover:text-ink",
};

export function ButtonLink({ href, variant = "primary", className = "", children, ...rest }) {
  const cls = `inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`;
  const external = /^(https?:|tel:|mailto:)/.test(href);
  if (external) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children, className = "", ...rest }) {
  const cls = `py-1.5 font-medium text-highlight-deep underline decoration-highlight-soft/60 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink ${className}`;
  return /^(https?:|tel:|mailto:)/.test(href) ? (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function Prose({ paragraphs = [], className = "" }) {
  return (
    <div className={`space-y-5 text-base leading-relaxed text-ink-soft md:text-lg ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export function CheckList({ items, dark = false, className = "" }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((it) => (
        <li key={it} className={`flex gap-3 leading-relaxed ${dark ? "text-surface" : "text-ink-soft"}`}>
          <span aria-hidden="true" className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${dark ? "bg-highlight-light" : "bg-highlight-soft"}`} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
