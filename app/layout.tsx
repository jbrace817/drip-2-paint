import type { Metadata } from "next";
import { Lato, Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";
import Banner from "@/components/Banner";
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-openSans-header",
  weight: ["300", "400", "500", "700", "800"],
  preload: false,
  fallback: ["Arial", "sans-serif"], // Added fallback fonts
  adjustFontFallback: true, // Enables automatic font fallback adjustment
});
const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato-body",
  weight: ["100", "300", "400", "700", "900"],
  preload: false,
  fallback: ["Helvetica", "Arial", "sans-serif"], // Added fallback fonts
  adjustFontFallback: true, // Enables automatic font fallback adjustment
});

export const metadata: Metadata = {
  title: "Premier Painting & Remodeling Services in Bucks & Montgomery County",
  description:
    "Drip Painting has over 50 years of experience providing expert interior and exterior painting, custom finishes, and remodeling services throughout Bucks and Montgomery County. Whether you're refreshing your home or enhancing your business, our skilled team delivers high-quality craftsmanship and exceptional service. Contact us today for a free consultation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${lato.variable} antialiased`}>
        <Banner />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
