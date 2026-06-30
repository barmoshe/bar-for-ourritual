import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import OurRitualApp from "@/src/marketing/ourritual/OurRitualApp";

// Type pair chosen to match ourritual.com: a warm editorial serif for display
// (Fraunces — soft bracketed serifs, the high-contrast headline voice the
// OurRitual marketing site uses) and a clean humanist sans for body (Mulish).
// Exposed as --font-or-* for ourritual.css.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-or-display",
  display: "swap",
});
const body = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-or-body",
  display: "swap",
});

// Ad-hoc, personalized application page for Bar Moshe's "Generative AI Engineer"
// application to OurRitual (Tel Aviv, Hybrid). Built in OurRitual's own visual
// language — warm cream surface, the signature coral #E5654B, editorial serif
// headlines, rounded pills, soft photography-style cards. Not part of the public
// site map, noindex so it stays a private, shareable link sent to the OurRitual team.
const ogTitle = "Bar Moshe × OurRitual · Generative AI Engineer";
const ogDescription =
  "Bar Moshe, Generative AI and full-stack engineer. I build and ship LLM systems in production: MCP tooling, agents, and retrieval pipelines. A few I have shipped, mapped to this role.";

export const metadata: Metadata = {
  title: ogTitle,
  description: ogDescription,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "Bar Moshe",
    title: ogTitle,
    description: ogDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@barmoshe1",
    creator: "@barmoshe1",
    title: ogTitle,
    description: ogDescription,
  },
};

export default function OurRitualPage() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <OurRitualApp />
    </div>
  );
}
