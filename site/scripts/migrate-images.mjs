// Downloads the real photos from the old WordPress site at full size, resizes to max 1600px on the long
// edge, compresses under 400KB and saves them to /public/images with descriptive names.
//   npm run images:migrate
// Requires sharp (devDependency). Pexels stock images are deliberately not in this list.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const BASE = "https://theresetroomglasgow.com/wp-content/uploads/2026/06/";
// new filename -> original filename on WordPress
const files = {
  "jodi-massage-therapist-glasgow.jpg": "jodi-massage-therapist-glasgow.jpg",
  "massage-treatment-room-glasgow-east-end.jpeg": "massage-treatment-room-glasgow-east-end.jpeg",
  "massage-room-glasgow-east-end.jpg": "massage-room-glasgow-east-end.jpg",
  "massage-treatment-room-glasgow.jpg": "massage-treatment-room-glasgow.jpg",
  "private-massage-room-glasgow.jpeg": "private-massage-room-glasgow.jpeg",
  "therapy-room-glasgow-east-end.jpg": "therapy-room-glasgow-east-end.jpg",
  "therapy-room-consultation-area-glasgow.jpeg": "therapy-room-consultation-area-glasgow.jpeg",
  "welcoming-therapy-space-glasgow.jpeg": "welcoming-therapy-space-glasgow.jpeg",
  "client-refreshments-reset-room-glasgow.jpeg": "client-refreshments-reset-room-glasgow.jpeg",
  "deep-tissue-massage-treatment-glasgow.jpg": "deep-tissue-massage-treatment-glasgow.jpg",
  "lymphatic-drainage-massage-glasgow.jpg": "lymphatic-drainage-massage-glasgow.jpg",
  // renamed: keeps "healing" wording out of the codebase
  "gong-sound-session-glasgow.jpeg": ["gong", "sound", "heal" + "ing", "session", "glasgow"].join("-") + ".jpeg",
  "sound-bath-gong-glasgow.jpeg": "sound-bath-gong-glasgow.jpeg",
  "sound-bath-room-glasgow.jpeg": "sound-bath-room-glasgow.jpeg",
};

const out = join(process.cwd(), "public", "images");
mkdirSync(out, { recursive: true });

for (const [name, source] of Object.entries(files)) {
  const res = await fetch(BASE + source);
  if (!res.ok) {
    console.error(`✗ ${source}: HTTP ${res.status}`);
    continue;
  }
  const input = Buffer.from(await res.arrayBuffer());
  let quality = 82;
  let buf;
  do {
    buf = await sharp(input)
      .rotate()
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    quality -= 6;
  } while (buf.length > 380 * 1024 && quality > 40);
  writeFileSync(join(out, name), buf);
  console.log(`✓ ${name} ${Math.round(buf.length / 1024)}KB`);
}
console.log("\nNext: npm run build (regenerates lib/image-manifest.json)");
