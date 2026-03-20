import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atraelab.com"),
  title: {
    default: "AtraeLab — Encendé tu Demanda | Agencia de Performance Marketing",
    template: "%s | AtraeLab",
  },
  description:
    "AtraeLab es una agencia de performance marketing especializada en Meta Ads, Google Ads y TikTok Ads. Generamos leads de calidad, optimizamos tu ROAS y escalamos tu negocio con estrategia data-driven.",
  keywords: [
    "agencia marketing digital",
    "performance marketing",
    "meta ads",
    "google ads",
    "tiktok ads",
    "generación de leads",
    "ROAS",
    "pauta digital",
    "marketing latinoamerica",
    "atraelab",
  ],
  authors: [{ name: "AtraeLab", url: "https://atraelab.com" }],
  creator: "AtraeLab",
  publisher: "AtraeLab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://atraelab.com",
    siteName: "AtraeLab",
    title: "AtraeLab — Encendé tu Demanda",
    description:
      "Agencia de performance marketing. Meta Ads · Google Ads · TikTok Ads · CRM LeadShield. Escalamos tu negocio con datos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AtraeLab — Agencia de Performance Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AtraeLab — Encendé tu Demanda",
    description:
      "Agencia de performance marketing. Meta Ads · Google Ads · TikTok Ads · CRM LeadShield.",
    images: ["/og-image.png"],
    creator: "@atraelab",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "AtraeLab",
    url: "https://atraelab.com",
    description:
      "Agencia de performance marketing especializada en Meta Ads, Google Ads y TikTok Ads.",
    founder: {
      "@type": "Person",
      name: "AtraeLab Team",
    },
    areaServed: ["Argentina", "Latinoamérica", "España"],
    serviceType: [
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "Performance Marketing",
      "Lead Generation",
      "CRM",
    ],
    sameAs: [
      "https://www.instagram.com/atraelab",
      "https://www.youtube.com/@atraelab",
      "https://www.tiktok.com/@atraelab",
    ],
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
