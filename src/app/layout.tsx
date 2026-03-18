import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne, Barlow } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Nav from "./nav";
import TopControls from "./top-controls";
import MobileNav from "./mobile-nav";
import FooterLinks from "@/components/FooterLinks";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["700", "800"], display: "swap" });
const barlow = Barlow({ variable: "--font-barlow", subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap" });

const siteName = "Leandro Martinez";
const siteDescription =
  "Desarrollador Web Jr. basado en Argentina. HTML5, CSS3, JavaScript, Vue, React, Tailwind, PHP/Laravel, WordPress. Inglés B2.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: siteDescription,
  keywords: [
    "desarrollador web", "frontend developer", "Argentina", "Mendoza",
    "React", "Vue", "Next.js", "Tailwind", "Laravel", "PHP", "WordPress",
    "portfolio", "leandro martinez", "desarrollador junior",
  ],
  authors: [{ name: "Leandro Martinez", url: siteUrl }],
  creator: "Leandro Martinez",
  publisher: "Leandro Martinez",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    locale: "es_AR",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0812",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${barlow.variable} antialiased min-h-dvh themed-bg`}>
      <div className="bg-canvas" aria-hidden />
      <div className="bg-noise" aria-hidden />
      <Providers>
        <div className="top-stripe" aria-hidden />

        <header className="sticky top-0 z-40 bg-transparent backdrop-blur-md relative">
          <div className="w-full py-2 grid grid-cols-[1fr_auto_1fr] items-center" style={{ paddingLeft: "clamp(1.75rem, 3.2vw, 3.2rem)", paddingRight: "clamp(1.75rem, 3.2vw, 3.2rem)" }}>
            <div className="justify-self-start">
              <span style={{ fontFamily: "var(--font-syne, 'Arial Black', sans-serif)", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "-0.03em", color: "var(--accent)" }}>
                LM
              </span>
            </div>
            {/* Desktop nav — hidden on mobile */}
            <nav className="justify-self-center">
              <Nav />
            </nav>
            {/* Right: controls + mobile hamburger */}
            <div className="justify-self-end flex items-center gap-2">
              <TopControls />
              <MobileNav />
            </div>
          </div>
        </header>

        <main className="w-full">
          {children}
        </main>

        <footer className="mt-16 border-t" style={{ borderColor: "var(--panel-border)" }}>
          <div className="w-full py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm muted" style={{ paddingLeft: "clamp(1.75rem, 3.2vw, 3.2rem)", paddingRight: "clamp(1.75rem, 3.2vw, 3.2rem)" }}>
            <span>© {new Date().getFullYear()} Leandro Martinez.</span>
            <FooterLinks />
          </div>
        </footer>
      </Providers>
    </body>
    </html>
  );
}
