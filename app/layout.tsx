import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://moyo.daizlab.store";
const shareImage = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&h=630&q=85";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MOYO JEWELS — Everyday pieces. Elevated.",
    template: "%s | MOYO JEWELS"
  },
  description: "Discover thoughtfully selected jewelry for everyday elegance. Explore MOYO JEWELS and order directly on WhatsApp.",
  applicationName: "MOYO JEWELS",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MOYO JEWELS — Everyday pieces. Elevated.",
    description: "Jewelry that makes the everyday feel special. Discover your next favourite piece at MOYO JEWELS.",
    url: siteUrl,
    siteName: "MOYO JEWELS",
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: "Elegant everyday jewelry from MOYO JEWELS"
      }
    ],
    locale: "en_NG",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MOYO JEWELS — Everyday pieces. Elevated.",
    description: "Jewelry that makes the everyday feel special. Discover your next favourite piece at MOYO JEWELS.",
    images: [
      {
        url: shareImage,
        alt: "Elegant everyday jewelry from MOYO JEWELS"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f5ef"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
