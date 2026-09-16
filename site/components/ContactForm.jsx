"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const input =
  "mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20";
const label = "block text-sm font-medium text-ink";

export default function ContactForm({ treatments, phone, phoneE164, email, bookingUrl, initialError = false }) {
  const router = useRouter();
  const [status, setStatus] = useState(initialError ? "error" : "idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) router.push("/thank-you");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    // action/method make the form work without JavaScript too (the API redirects to /thank-you).
    <form action="/api/contact" method="post" onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>Name <span aria-hidden="true">*</span></label>
          <input id="cf-name" name="name" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>Email <span aria-hidden="true">*</span></label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={input} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className={label}>Phone <span className="font-normal text-ink-faint">(optional)</span></label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={input} />
        </div>
        <div>
          <label htmlFor="cf-treatment" className={label}>Treatment you&rsquo;re interested in</label>
          <select id="cf-treatment" name="treatment" className={input} defaultValue="Not sure yet">
            <option>Not sure yet</option>
            {treatments.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>Message <span aria-hidden="true">*</span></label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          className={input}
          placeholder="Any questions before booking? Let me know what's bothering you or what you'd like from a session."
        />
      </div>
      {/* Honeypot — hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="text-sm leading-relaxed text-ink-soft">
        Please don&rsquo;t include detailed medical information here — I will go through anything relevant with you privately before your treatment.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-surface transition-colors hover:bg-ink-deep disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <a href={bookingUrl} className="text-sm font-medium text-highlight-deep underline underline-offset-4">Or book online now</a>
      </div>
      <div role="status" aria-live="polite">
        {status === "error" && (
          <div className="rounded-2xl border border-highlight-soft/60 bg-white p-5 text-sm leading-relaxed text-ink">
            <p className="font-medium">Your message didn&rsquo;t send.</p>
            <p className="mt-1 text-ink-soft">
              Please try again, or get in touch directly: call <a className="underline" href={`tel:${phoneE164}`}>{phone}</a>, email{" "}
              <a className="underline" href={`mailto:${email}`}>{email}</a>, or{" "}
              <a className="underline" href={bookingUrl}>book online</a>.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
