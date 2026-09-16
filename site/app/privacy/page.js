import LegalPage from "@/components/LegalPage";
import { business, addressOneLine } from "@/content/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | The Reset Room Glasgow",
  description: "How The Reset Room Glasgow collects, uses and protects your personal information when you contact us, book through Vagaro or visit this website.",
  path: "/privacy",
});

// TODO(client): confirm ICO registration (processing health/consultation data usually requires it) and add the
// registration number. Have Jodi review this page before launch — it is a sensible template, not legal advice.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated="September 2026">
      <p>
        This policy explains how {business.name} (&ldquo;I&rdquo;, &ldquo;me&rdquo;) uses personal information when you visit this website, send an enquiry or book a treatment. I&rsquo;m the data controller for the information described here. You can contact me at <a href={`mailto:${business.email}`}>{business.email}</a> or {addressOneLine}.
      </p>

      <h2>Information you send through the contact form</h2>
      <p>
        When you use the contact form I receive your name, email address, phone number (if you give one), the treatment you&rsquo;re interested in and your message. I use this only to reply to your enquiry. The legal basis is my legitimate interest in responding to people who contact me, or taking steps at your request before you book.
      </p>
      <p>
        Form messages are delivered to my inbox by <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend</a>, an email delivery service acting on my behalf. Please don&rsquo;t include detailed medical information in the form — anything relevant to your treatment is discussed privately before your appointment. Enquiry emails are kept for as long as needed to deal with your question and then deleted, normally within 12 months.
      </p>

      <h2>Bookings and consultation information</h2>
      <p>
        Appointments are booked through Vagaro. When you book, Vagaro processes your contact details, appointment history and any payment information on my behalf. Because treatments involve your wellbeing, I may also record health information you choose to share during a consultation — for example medical conditions, medication or pregnancy — so your treatment can be planned safely. This is special category data, and I process it with your explicit consent and only for providing your treatment.
      </p>
      <p>
        Vagaro stores data on servers in the United States. You can read how it handles information in the <a href="https://www.vagaro.com/pro/privacy" target="_blank" rel="noopener noreferrer">Vagaro privacy policy</a>. Treatment and consultation records are kept for as long as is necessary for your care and to meet insurance and legal requirements.
      </p>

      <h2>Website analytics</h2>
      <p>
        This site uses Vercel Web Analytics to count page views and understand which pages are useful. It doesn&rsquo;t use cookies, doesn&rsquo;t track you across other websites and doesn&rsquo;t identify you personally. Because no cookies or similar technologies are used for tracking, there&rsquo;s no cookie banner. The website is hosted by Vercel, which processes technical information such as IP addresses to deliver pages safely.
      </p>

      <h2>Links to other websites</h2>
      <p>
        This site links to Vagaro, Google Maps, Instagram and Facebook. Those services have their own privacy policies, and I&rsquo;m not responsible for how they use your information when you visit them.
      </p>

      <h2>Sharing your information</h2>
      <p>I never sell your information. I only share it with the service providers named above to run the website, handle enquiries and take bookings, or where the law requires it.</p>

      <h2>Your rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li>ask for a copy of the personal information I hold about you</li>
        <li>ask me to correct information that&rsquo;s wrong or incomplete</li>
        <li>ask me to delete your information, where I don&rsquo;t need to keep it</li>
        <li>object to or ask me to restrict how I use it</li>
        <li>withdraw consent at any time, where I rely on consent</li>
        <li>ask for your information in a portable format</li>
      </ul>
      <p>To use any of these rights, email <a href={`mailto:${business.email}`}>{business.email}</a>. I&rsquo;ll respond within one month.</p>

      <h2>Complaints</h2>
      <p>
        If you&rsquo;re unhappy with how your information has been handled, please contact me first so I can put it right. You also have the right to complain to the Information Commissioner&rsquo;s Office (ICO) at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk/make-a-complaint</a> or by calling 0303 123 1113.
      </p>

      <h2>Changes to this policy</h2>
      <p>I may update this policy from time to time. The date at the top shows when it was last changed.</p>
    </LegalPage>
  );
}
