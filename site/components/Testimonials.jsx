import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <li key={t.name} className="flex flex-col rounded-2xl border border-border bg-white p-7">
          <p className="text-star" aria-label="Five stars">
            <span aria-hidden="true">★★★★★</span>
          </p>
          <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-ink">
            <p>&ldquo;{t.trimmed ? "\u2026" : ""}{t.quote}&rdquo;</p>
          </blockquote>
          <p className="mt-6 text-sm text-ink-soft">
            <span className="font-medium text-ink">{t.name}</span>, {t.location}
            {t.treatment ? <span className="block text-ink-faint">{t.treatment}</span> : null}
          </p>
        </li>
      ))}
    </ul>
  );
}
