import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Vergleichscheck.com – Unabhängige Software-Vergleiche für Selbstständige",
  description:
    "Finde die beste Software für dein Business. Unabhängige Tests & Vergleiche für Freelancer, Solo-Selbstständige und kleine Unternehmen in Deutschland.",
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
