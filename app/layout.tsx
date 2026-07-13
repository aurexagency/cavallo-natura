import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// ─── Google Fonts ──────────────────────────────────────────────────────────────

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// ─── Metadata (SEO) ───────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Cavallo Natura – Passeggiate a Cavallo in Maremma Toscana",
    template: "%s | Cavallo Natura",
  },
  description:
    "Scopri Cavallo Natura, il centro equestre immerso nella Maremma Toscana a Marina di Grosseto. Passeggiate a cavallo, servizi élite, pensione equina e molto altro.",
  keywords: [
    "passeggiate a cavallo Maremma",
    "centro equestre Grosseto",
    "Marina di Grosseto equitazione",
    "Cavallo Natura",
    "agriturismo equestre Toscana",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Cavallo Natura",
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${playfairDisplay.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {/* ── Sticky top navigation ── */}
        <Navbar />

        {/* ── Page content ── */}
        <main className="flex-1">
          {children}
        </main>

        {/* ── Site footer ── */}
        <Footer />
      </body>
    </html>
  );
}
