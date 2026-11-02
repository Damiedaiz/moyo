import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOYO JEWELS — Everyday pieces. Elevated.",
  description: "Discover thoughtfully selected jewelry for everyday elegance. Shop MOYO JEWELS and order directly on WhatsApp.",
  applicationName: "MOYO JEWELS",
  openGraph: { title: "MOYO JEWELS — Everyday pieces. Elevated.", description: "Jewelry that makes the everyday feel special.", type: "website" }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f8f5ef" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}