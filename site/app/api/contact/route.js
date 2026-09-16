import { Resend } from "resend";
import { business } from "@/content/business";

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const clip = (s, n) => String(s || "").slice(0, n).trim();

function buildEmailHtml({ name, email, phone, treatment, message }) {
  const row = (k, v) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #E3DCD1;color:#56675F;font:14px Arial,sans-serif;width:120px;vertical-align:top">${k}</td><td style="padding:10px 0;border-bottom:1px solid #E3DCD1;color:#173A31;font:15px Arial,sans-serif">${v}</td></tr>`;
  const btn = (href, label) =>
    `<td style="padding:0 8px 8px 0"><a href="${href}" style="display:inline-block;background:#173A31;color:#F6F1EA;font:bold 15px Arial,sans-serif;text-decoration:none;padding:14px 26px;border-radius:999px">${label}</a></td>`;
  return `<!doctype html><html><body style="margin:0;background:#F6F1EA">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F6F1EA;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-radius:16px;overflow:hidden">
<tr><td style="background:#173A31;padding:28px 32px">
<div style="font:12px Arial,sans-serif;letter-spacing:3px;text-transform:uppercase;color:#DDE6DD">New website enquiry</div>
<div style="font:24px Georgia,serif;color:#F6F1EA;margin-top:6px">The Reset Room Glasgow</div></td></tr>
<tr><td style="padding:24px 32px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${row("Name", name)}${row("Email", `<a href="mailto:${email}" style="color:#8A5645">${email}</a>`)}${row("Phone", phone || "—")}${row("Treatment", treatment || "Not sure yet")}
${row("Message", message.replace(/\n/g, "<br>"))}
</table>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px"><tr>
${btn(`mailto:${email}?subject=${encodeURIComponent("Re: your enquiry to The Reset Room Glasgow")}`, "Reply by Email")}
${phone ? btn(`tel:${phone.replace(/[^\d+]/g, "")}`, "Call Back") : ""}
</tr></table>
<p style="font:12px Arial,sans-serif;color:#56675F;margin-top:24px">Sent from the contact form on theresetroomglasgow.com. Replying to this email goes straight to the enquirer.</p>
</td></tr></table></td></tr></table></body></html>`;
}

async function readBody(req) {
  const type = req.headers.get("content-type") || "";
  if (type.includes("application/json")) return { data: await req.json(), isForm: false };
  const fd = await req.formData();
  return { data: Object.fromEntries(fd), isForm: true };
}

export async function POST(req) {
  let data = {};
  let isForm = false;
  try {
    ({ data, isForm } = await readBody(req));
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }

  const redirectTo = (path) => Response.redirect(new URL(path, req.url), 303);
  const name = clip(data.name, 120);
  const email = clip(data.email, 200);
  const phone = clip(data.phone, 40);
  const treatment = clip(data.treatment, 80);
  const message = clip(data.message, 5000);

  if (data.website) return isForm ? redirectTo("/thank-you") : Response.json({ success: true }); // honeypot
  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return isForm ? redirectTo("/contact?error=1#contact-form") : Response.json({ success: false }, { status: 400 });
  }

  try {
    if (!process.env.RESEND_API_KEY || !process.env.ENQUIRY_EMAIL) throw new Error("Missing RESEND_API_KEY or ENQUIRY_EMAIL");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `${business.name} <enquiries@theresetroomglasgow.com>`,
      to: [process.env.ENQUIRY_EMAIL],
      replyTo: email,
      subject: `New enquiry from ${name} — ${treatment && treatment !== "Not sure yet" ? treatment : "general question"}`,
      html: buildEmailHtml({ name: esc(name), email: esc(email), phone: esc(phone), treatment: esc(treatment), message: esc(message) }),
    });
    if (error) throw new Error(error.message || "Resend error");
    return isForm ? redirectTo("/thank-you") : Response.json({ success: true });
  } catch (err) {
    console.error("contact form:", err);
    return isForm ? redirectTo("/contact?error=1#contact-form") : Response.json({ success: false }, { status: 500 });
  }
}
