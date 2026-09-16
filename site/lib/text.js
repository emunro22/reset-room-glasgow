// Headings mark one accent word as *word*. These helpers strip or split that marker.
export const stripAccent = (s = "") => s.replace(/\*/g, "");
export const splitAccent = (s = "") => s.split(/(\*[^*]+\*)/g).filter(Boolean);
