import { NextResponse } from "next/server";
import { renamed, pageIds } from "./legacy-redirects";

export function middleware(req) {
  const url = req.nextUrl;
  const { pathname, searchParams } = url;

  // /?page_id=2803 -> /treatments/deep-tissue-massage (query dropped)
  if (pathname === "/" && searchParams.has("page_id")) {
    const to = pageIds[searchParams.get("page_id")];
    if (to) return NextResponse.redirect(new URL(to, req.url), 308);
  }

  // Trailing slash: legacy permalink straight to its new URL, anything else to the slash-less path.
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const bare = pathname.replace(/\/+$/, "");
    const dest = new URL(renamed[bare] || bare, req.url);
    if (!renamed[bare]) dest.search = url.search;
    return NextResponse.redirect(dest, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals, the API and files with extensions (images, icons, sitemap.xml, robots.txt).
  matcher: ["/((?!_next/|api/|.*\\.[a-zA-Z0-9]+$).*)"],
};
