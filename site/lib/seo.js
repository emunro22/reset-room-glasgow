import { SITE_URL, business, addressLines } from "@/content/business";
import { areas } from "@/content/areas";
import { services, serviceHref } from "@/content/services";
import { DEFAULT_OG } from "@/lib/photo";
import { stripAccent } from "@/lib/text";

export const abs = (path = "/") => (/^https?:/.test(path) ? path : path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);
export const ids = {
  organization: `${SITE_URL}/#organization`,
  business: `${SITE_URL}/#business`,
  person: `${SITE_URL}/#jodi`,
  website: `${SITE_URL}/#website`,
};

export function buildMetadata({ title, description, path, image = DEFAULT_OG, noindex = false, type = "website" }) {
  const url = abs(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_GB",
      type,
      images: [{ url: abs(image), alt: business.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [abs(image)] },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${business.address.line1}, ${business.address.line2}`,
  addressLocality: business.address.locality,
  addressRegion: business.address.region,
  postalCode: business.address.postcode,
  addressCountry: business.address.country,
};

export function siteGraph() {
  const sameAs = [business.socials.instagram, business.socials.facebook, business.bookingUrl, business.gbp.mapsUrl];
  const localBusiness = {
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": ids.business,
    name: business.name,
    url: abs("/"),
    image: abs(DEFAULT_OG),
    logo: abs("/brand/logo-stacked-dark.png"),
    telephone: business.phoneE164,
    email: business.email,
    address: postalAddress,
    hasMap: business.gbp.mapsUrl,
    areaServed: [
      { "@type": "City", name: "Glasgow" },
      ...areas.map((a) => ({ "@type": "Place", name: `${a.name}, Glasgow` })),
    ],
    sameAs,
    founder: { "@id": ids.person },
    parentOrganization: { "@id": ids.organization },
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: business.bookingUrl, actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"] },
      result: { "@type": "Reservation", name: "Treatment appointment" },
    },
  };
  if (business.geo) localBusiness.geo = { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng };
  if (business.priceRange) localBusiness.priceRange = business.priceRange;
  // Deliberately no openingHoursSpecification (by appointment) and no aggregateRating/review (self-serving).

  const person = {
    "@type": "Person",
    "@id": ids.person,
    name: [business.owner.firstName, business.owner.lastName].filter(Boolean).join(" "),
    jobTitle: business.owner.jobTitle,
    worksFor: { "@id": ids.business },
    hasCredential: business.qualifications.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      name: q,
      credentialCategory: q.startsWith("HND") ? "Higher National Diploma" : "degree",
    })),
    knowsAbout: services.map((s) => s.name),
    url: abs("/about"),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ids.organization,
        name: business.name,
        url: abs("/"),
        logo: abs("/brand/logo-stacked-dark.png"),
        email: business.email,
        telephone: business.phoneE164,
        sameAs,
      },
      localBusiness,
      person,
      { "@type": "WebSite", "@id": ids.website, url: abs("/"), name: business.name, inLanguage: "en-GB", publisher: { "@id": ids.organization } },
    ],
  };
}

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.href) })),
});

export const serviceSchema = (s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${abs(serviceHref(s))}#service`,
  name: s.name,
  serviceType: s.name,
  description: s.metaDescription,
  url: abs(serviceHref(s)),
  provider: { "@id": ids.business },
  areaServed: { "@type": "City", name: "Glasgow" },
  ...(s.priceFrom
    ? { offers: { "@type": "Offer", priceCurrency: "GBP", price: s.priceFrom, url: business.bookingUrl } }
    : {}),
});

export const eventSchema = (e) => {
  const start = new Date(e.date);
  const end = e.durationMinutes ? new Date(start.getTime() + e.durationMinutes * 60000) : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    startDate: e.date,
    ...(end ? { endDate: end.toISOString() } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Place", name: e.venue || business.name, address: postalAddress },
    organizer: { "@id": ids.organization },
    description: e.note || "A group sound bath at The Reset Room Glasgow using singing bowls, gongs and chimes.",
    image: [abs(DEFAULT_OG)],
    ...(e.price != null
      ? { offers: { "@type": "Offer", price: e.price, priceCurrency: "GBP", url: e.bookingUrl || business.bookingUrl, availability: "https://schema.org/InStock" } }
      : {}),
  };
};

export const areaPageSchema = (a) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${abs(`/areas/${a.slug}`)}#webpage`,
  url: abs(`/areas/${a.slug}`),
  name: stripAccent(a.h1),
  inLanguage: "en-GB",
  isPartOf: { "@id": ids.website },
  about: { "@id": ids.business },
  spatialCoverage: { "@type": "Place", name: `${a.name}, Glasgow`, address: { "@type": "PostalAddress", postalCode: a.postcodes.join(", "), addressCountry: "GB" } },
});

export { addressLines };
