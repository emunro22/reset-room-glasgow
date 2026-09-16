import Image from "next/image";
import { getPhoto } from "@/lib/photo";

// Arch-topped frame — the site's one signature shape, echoing the logo's circle.
// Renders the real photo if migrated; otherwise a soft sage→clay gradient (decorative).
export default function ArchImage({ file, alt, className = "aspect-[4/5]", sizes = "(min-width: 768px) 40vw, 90vw", priority = false, hoverZoom = false }) {
  const photo = getPhoto(file, alt);
  return (
    <div className={`relative overflow-hidden rounded-t-[999px] bg-surface-2 ${className}`}>
      {photo ? (
        <Image
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          sizes={sizes}
          priority={priority}
          className={`h-full w-full object-cover ${hoverZoom ? "transition-transform duration-300 group-hover:scale-[1.03]" : ""}`}
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#C9D6CB] via-[#DCCFC2] to-highlight-soft/70">
          <div className="absolute inset-x-[18%] bottom-0 top-[22%] rounded-t-[999px] bg-surface/35" />
        </div>
      )}
    </div>
  );
}
