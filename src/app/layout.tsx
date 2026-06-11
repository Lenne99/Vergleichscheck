import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Vergleichcheck.com – Unabhängige Software-Vergleiche für Selbstständige",
    template: "%s | Vergleichcheck.com",
  },
  description:
    "Finde die beste Software für dein Business. Unabhängige Tests & Vergleiche für Freelancer, Solo-Selbstständige und kleine Unternehmen in Deutschland.",
  metadataBase: new URL("https://vergleichcheck.com"),
  openGraph: {
    siteName: "Vergleichcheck.com",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
