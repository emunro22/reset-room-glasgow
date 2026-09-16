// Native <details>: answers are always in the HTML (crawlable, works without JS), no client JS needed.
export default function Faq({ faqs, className = "" }) {
  return (
    <div className={`divide-y divide-border border-y border-border ${className}`}>
      {faqs.map((f) => (
        <details key={f.q} className="group py-2">
          <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 py-4 text-left font-display text-lg text-ink md:text-xl [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
              <span className="absolute left-0 top-1/2 h-px w-4 bg-ink" />
              <span className="absolute left-1/2 top-0 h-4 w-px bg-ink transition-transform duration-300 group-open:scale-y-0" />
            </span>
          </summary>
          <p className="max-w-prose pb-5 leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
