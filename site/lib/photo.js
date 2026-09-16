import manifest from "@/lib/image-manifest.json";
import { images } from "@/content/images";

// Returns { src, width, height, alt } if the photo has been migrated into /public/images, else null.
export function getPhoto(file, altOverride) {
  if (!file || !manifest[file]) return null;
  const { width, height } = manifest[file];
  return { src: `/images/${file}`, width, height, alt: altOverride || images[file] || "" };
}

export const DEFAULT_OG = "/images/the-reset-room-glasgow-og.jpg";
export const ogImageFor = (file) => (getPhoto(file) ? `/images/${file}` : DEFAULT_OG);
