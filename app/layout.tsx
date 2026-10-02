import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Image from "next/image";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { WhatsAppDock } from "@/components/layout/WhatsAppDock";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const display = Big_Shoulders({ variable: "--font-big-shoulders", subsets: ["latin"], weight: ["800", "900"], adjustFontFallback: false });
const serif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Gym, Aerobics & Personal Training in Accra`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GH",
    images: [{ url: "/media/og.jpg", width: 1200, height: 630, alt: "PayneKiller leading an outdoor group session" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/media/og.jpg`,
  telephone: site.phones.map((p) => p.tel),
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "GH" },
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${serif.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <noscript>
          <style>{`.reveal,.word>span{opacity:1;transform:none}.intro{display:none}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-bone focus:px-5 focus:py-3 focus:text-ink"
        >
          Skip to content
        </a>
        <div className="intro" aria-hidden>
          <Image src="/media/emblem-white.png" alt="" width={150} height={160} className="h-24 w-auto" priority />
        </div>
        <SmoothScroll />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppDock />
        <div className="grain" aria-hidden />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
