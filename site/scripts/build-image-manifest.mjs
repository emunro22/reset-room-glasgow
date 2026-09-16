// Runs before every build (npm "prebuild"). Records which photos exist in /public/images and their
// dimensions, so server components can render real photos or fall back to the arch placeholder
// without touching the filesystem at request time (safe for ISR on Vercel).
import { readdirSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sizeOf = require("next/dist/compiled/image-size");

const dir = join(process.cwd(), "public", "images");
const manifest = {};
const warnings = [];

for (const file of readdirSync(dir)) {
  if (!/\.(jpe?g|png|webp|avif)$/i.test(file)) continue;
  const full = join(dir, file);
  const { width, height } = sizeOf(full);
  const kb = Math.round(statSync(full).size / 1024);
  if (kb > 400) warnings.push(`${file} is ${kb}KB (limit 400KB)`);
  if (/pexels|unsplash|stock/i.test(file)) warnings.push(`${file} looks like stock — remove it`);
  manifest[file] = { width, height, kb };
}

mkdirSync(join(process.cwd(), "lib"), { recursive: true });
writeFileSync(join(process.cwd(), "lib", "image-manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`image manifest: ${Object.keys(manifest).length} images`);
if (warnings.length) {
  console.error("\nImage problems:\n  " + warnings.join("\n  "));
  process.exit(1);
}
