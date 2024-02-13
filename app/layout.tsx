import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Je t’aime ❤️",
  description: "Créé avec amour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossOrigin="" />
        <Script src="https://kit.fontawesome.com/042d4f2146.js" crossOrigin="anonymous" />
      </head>
      <body className={raleway.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
