import ArchImage from "@/components/ArchImage";
import Reveal from "@/components/Reveal";

// A row of small arch thumbnails, echoing the arch used for the big photos.
// Deliberately small: several of the room photos came off the old site as thumbnails
// (see docs/site-audit.md, "Photo resolution"), so they only stay sharp at this size.
// Two up on phones, four up from sm — never a horizontal scroller, so there's no
// hidden content on mobile.
export default function PhotoStrip({ files, className = "", heading }) {
  return (
    <div className={`mx-auto max-w-3xl ${className}`}>
      {heading && <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">{heading}</p>}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {files.map((file, i) => (
          <li key={file}>
            <Reveal index={i}>
              <ArchImage file={file} className="aspect-[3/4]" sizes="(min-width: 640px) 180px, 44vw" />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
