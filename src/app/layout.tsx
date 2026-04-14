import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IT Recruitment & Talent Solutions Singapore | Axiom Rise",
  description: "Axiom Rise is your trusted leader in talent and HR solutions in Singapore. We specialize in Permanent Placement, Contract Staffing, and Payroll Administration.",
  keywords: ["IT Recruitment Singapore", "Talent Solutions Singapore", "HR Solutions", "Axiom Rise", "AxiomRise", "Permanent Placement", "Contract Staffing", "Payroll Administration"],
  authors: [{ name: "Axiom Rise Pte. Ltd." }],
  creator: "Axiom Rise",
  publisher: "Axiom Rise Pte. Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://axiomrise.sg",
    title: "IT Recruitment & Talent Solutions Singapore | Axiom Rise",
    description: "Enabling talent excellence and driving business transformation across Asia Pacific with Axiom Rise.",
    siteName: "Axiom Rise",
    images: [{
      url: "https://axiomrise.sg/logo.png",
      width: 800,
      height: 600,
      alt: "Axiom Rise Identity Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Recruitment & Talent Solutions Singapore | Axiom Rise",
    description: "Enabling talent excellence and driving business transformation across Asia Pacific.",
    images: ["https://axiomrise.sg/logo.png"],
  },
  alternates: {
    canonical: 'https://axiomrise.sg',
  },
};

import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Axiom Rise Pte. Ltd.",
    "alternateName": ["Axiom", "AxiomRise", "Axiom Rise SG"],
    "url": "https://axiomrise.sg",
    "logo": "https://axiomrise.sg/icon.png",
    "image": "https://axiomrise.sg/icon.png",
    "description": "IT Recruitment and Talent Solutions Services in Singapore.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Singapore",
      "addressCountry": "SG"
    },
    "sameAs": [
      "https://axiomrise.sg"
    ]
  };

  const navSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "About Axiom Rise",
        "url": "https://axiomrise.sg/#about"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Our Services",
        "url": "https://axiomrise.sg/#services"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Expertise",
        "url": "https://axiomrise.sg/#industries"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Contact Us",
        "url": "https://axiomrise.sg/#contact"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
