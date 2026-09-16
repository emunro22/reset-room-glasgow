// Single source of truth for NAP, links and trust facts.
// Anything marked TODO(client) is never rendered as the literal string — see lib/client-safe.js.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://theresetroomglasgow.com";

export const business = {
  name: "The Reset Room Glasgow",
  shortName: "The Reset Room",
  legalName: null, // TODO(client): legal/trading name if different
  owner: {
    firstName: "Jodi",
    lastName: null, // TODO(client): surname — needed for Person schema + About
    jobTitle: "Massage and Holistic Therapist",
  },
  phone: "07737 171101",
  phoneE164: "+447737171101",
  email: "hello@theresetroomglasgow.com",
  address: {
    // TODO(client): confirm exact Google Business Profile spelling. Variants found in the wild:
    //   "Suite 3, 14-15 Park Lane House" (live site footer)
    //   "Parklane House" (live contact map embed)
    //   "Suite 3-14/3-15, Park Lane House" (Fresha listing)
    //   "Suite 3/14-15 Park Lane House" (Facebook "how to find us" post)
    line1: "Suite 3, 14-15 Park Lane House",
    line2: "47 Broad Street",
    locality: "Glasgow",
    area: "Bridgeton",
    postcode: "G40 2QW",
    region: "Scotland",
    country: "GB",
  },
  geo: null, // TODO(client): { lat, lng } from the GBP pin — omitted from schema until set
  hoursNote: "By appointment only, with flexible availability throughout the week.",
  bookingUrl: "https://www.vagaro.com/theresetroomglasgow",
  gbp: {
    placeId: "ChIJQWfXtIFHiEgRWpdl4cSrr34",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJQWfXtIFHiEgRWpdl4cSrr34",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJQWfXtIFHiEgRWpdl4cSrr34",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=The+Reset+Room+Glasgow&destination_place_id=ChIJQWfXtIFHiEgRWpdl4cSrr34",
  },
  socials: {
    instagram: "https://www.instagram.com/jodi_theresetroomglasgow",
    facebook: "https://www.facebook.com/theresetroomglasgow",
    // tiktok: TODO(client) — omit until confirmed
  },
  qualifications: ["HND in Complementary Therapies", "BSc in Integrative Health Care"],
  experience: "Over 10 years in massage and complementary therapies",
  experienceShort: "10+ years' experience",
  insured: true, // stated on live site. TODO(client): insurer name
  professionalBody: null, // TODO(client): FHT / CThA etc. — never name one until confirmed
  reviewSummary: null, // TODO(client): verify "5-star from 40+ clients" against GBP before rendering
  priceRange: null, // TODO(client): e.g. "££"
  locationNotes: [
    "Free parking nearby", // stated on live Contact page
    "Good transport links into the city centre", // live Contact page says "excellent transport links"
    // TODO(client): the business Facebook page mentions: third floor with lift, side-door entrance after
    // 5.30pm weekdays and on Sundays, step-free access via side door, short walk from Bridgeton Station.
    // Confirm before adding any of these.
  ],
  cancellationNotice: null, // TODO(client): notice period + any fee
};

export const addressLines = [
  business.address.line1,
  business.address.line2,
  `${business.address.area}, ${business.address.locality} ${business.address.postcode}`,
];

export const addressOneLine = `${business.address.line1}, ${business.address.line2}, ${business.address.locality} ${business.address.postcode}`;
