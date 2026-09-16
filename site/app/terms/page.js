import LegalPage from "@/components/LegalPage";
import { business } from "@/content/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Booking Policy | The Reset Room Glasgow",
  description: "Booking, cancellation and health information for treatments at The Reset Room Glasgow, plus terms for using this website. Please read before your visit.",
  path: "/terms",
});

// TODO(client): cancellation notice period + any fee, late arrival policy. Have Jodi review before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms & Booking Policy" path="/terms" updated="September 2026">
      <p>
        These terms cover booking treatments with {business.name} and using this website. By booking an appointment you agree to them. If anything is unclear, please <a href="/contact">get in touch</a> before you book.
      </p>

      <h2>Booking</h2>
      <p>
        Appointments are booked online through <a href={business.bookingUrl}>Vagaro</a>. Your booking is confirmed when you receive a confirmation from Vagaro, which includes the details of your appointment and a link to manage it. Prices and appointment lengths shown in the booking system at the time you book apply.
      </p>

      <h2>Cancelling or changing an appointment</h2>
      <p>
        If you need to cancel or move your appointment, please give as much notice as possible, using the link in your confirmation or by contacting me directly. The current cancellation terms, including any notice period or charge for late cancellations and missed appointments, are shown when you book.
      </p>

      <h2>Arriving for your appointment</h2>
      <p>
        Please arrive at your booked time. If you&rsquo;re running late, let me know as soon as you can. Your treatment may need to be shortened so the next client isn&rsquo;t kept waiting, and the full appointment price may still apply.
      </p>

      <h2>Your health and safety</h2>
      <p>
        Massage and holistic therapies are complementary treatments. They are designed to support relaxation and wellbeing and do not replace medical advice, diagnosis or treatment. Nothing on this website is medical advice.
      </p>
      <p>
        Before your treatment, please tell me about any medical conditions, injuries, recent surgery, medication or pregnancy, and let me know if anything changes. Some treatments may need to be adapted, postponed or declined for your safety. If you have persistent, severe or unexplained symptoms, please speak to your GP or a healthcare professional first. If you&rsquo;re pregnant and unsure whether a treatment is suitable, check with your GP or midwife.
      </p>
      <p>
        You can ask for pressure to be changed, or for a treatment to stop, at any point.
      </p>

      <h2>Sound baths</h2>
      <p>
        Group sound baths are booked as individual places on a specific date. Details for each session, including what to bring and how to book, are shared with the event information. Sound baths are relaxation sessions and aren&rsquo;t suitable as a substitute for medical or psychological care.
      </p>

      <h2>Conduct</h2>
      <p>
        Treatments are professional and non-sexual. Any inappropriate behaviour will result in the treatment ending immediately, with the full appointment price payable.
      </p>

      <h2>Using this website</h2>
      <p>
        I try to keep the information on this website accurate and up to date, but it&rsquo;s provided for general information only. Photos and text on this site belong to {business.name} and shouldn&rsquo;t be reused without permission. Links to other websites are provided for convenience; I&rsquo;m not responsible for their content.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${business.email}`}>{business.email}</a> or call <a href={`tel:${business.phoneE164}`}>{business.phone}</a>. These terms are governed by the law of Scotland. See also the <a href="/privacy">privacy policy</a>.
      </p>
    </LegalPage>
  );
}
