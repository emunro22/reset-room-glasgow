// Upcoming sound baths. Leave empty to show the "follow on Instagram/Facebook" state.
// Past dates are filtered out automatically (the page revalidates hourly).
//
// Example:
// {
//   slug: "evening-sound-bath-oct-2026",
//   title: "Evening Sound Bath",
//   date: "2026-10-18T19:00:00+01:00",   // ISO with UK offset (+00:00 in winter, +01:00 in summer)
//   durationMinutes: 60,
//   venue: "The Reset Room, Park Lane House, Bridgeton",
//   price: 20,                           // number, GBP
//   spaces: 8,                            // optional
//   bookingUrl: "https://www.vagaro.com/theresetroomglasgow",
//   note: "Wear warm, comfortable clothes.",
// }
//
// TODO(client): real upcoming dates. The mockup's "Oct 18, 7pm" is a placeholder and must not be used.
export const soundBaths = [];

export function upcomingSoundBaths(now = new Date()) {
  return soundBaths
    .filter((e) => new Date(e.date) > now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}
