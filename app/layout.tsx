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
    default: "AtraeLab | Sistema de Leads para Network Marketing",
    template: "%s | AtraeLab",
  },
  description:
    "AtraeLab ayuda a equipos de network marketing a generar prospectos calificados, hacer seguimiento rapido y convertir mas presentaciones con pauta, funnel y CRM.",
  keywords: [
    "network marketing",
    "leads network marketing",
    "prospectos multinivel",
    "crm network marketing",
    "generacion de leads mlm",
    "meta ads",
    "google ads",
    "tiktok ads",
    "embudos de captacion",
    "whatsapp seguimiento",
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
    title: "AtraeLab | Sistema de Leads para Network Marketing",
    description:
      "Pauta, funnel y CRM para equipos de network marketing que necesitan mas prospectos calificados y mejor seguimiento.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AtraeLab para Network Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AtraeLab | Sistema de Leads para Network Marketing",
    description:
      "Pauta, funnel y CRM para captar y seguir prospectos de network marketing.",
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
      "Sistema de captacion y seguimiento para equipos de network marketing con Meta Ads, Google Ads, TikTok Ads y CRM propio.",
    founder: {
      "@type": "Person",
      name: "AtraeLab Team",
    },
    areaServed: ["Argentina", "Latinoamérica", "España"],
    serviceType: [
      "Network Marketing Lead Generation",
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "WhatsApp Follow-Up",
      "CRM para Leads",
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
