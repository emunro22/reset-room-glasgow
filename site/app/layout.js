import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookPill from "@/components/StickyBookPill";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, business } from "@/content/business";
import { siteGraph } from "@/lib/seo";
import { DEFAULT_OG } from "@/lib/photo";

const display = Playfair_Display({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Massage Therapy Glasgow | The Reset Room Glasgow", template: "%s | The Reset Room Glasgow" },
  description:
    "Massage and holistic therapy in a calm, private room in Bridgeton, Glasgow East End. Deep tissue, Swedish, pregnancy massage, reflexology and more. Book online.",
  applicationName: business.name,
  openGraph: { type: "website", locale: "en_GB", siteName: business.name, images: [DEFAULT_OG] },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#173A31" };

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-surface">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyBookPill />
        <JsonLd data={siteGraph()} />
        <Analytics />
      </body>
    </html>
  );
}
