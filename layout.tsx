import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "HONEYPOT GUARD | AI-Powered Yield Optimization",
  description: "Optimize your yield farming strategy on Solana with AI-powered insights and DeFi tools.",
  generator: "v0.dev",
  applicationName: "HONEYPOT GUARD",
  keywords: ["AI", "DeFi", "Solana", "Yield Optimization", "Blockchain", "Farming", "Security", "DeFi Protection"],
  authors: [{ name: "HONEYPOT GUARD Team", url: "https://HONEYPOT GUARD.io" }],
  creator: "HONEYPOT GUARD",
  themeColor: "#000000",
  openGraph: {
    title: "HONEYPOT GUARD — AI-Powered Yield Optimization",
    description: "Optimize your yield farming strategy with AI-powered insights and DeFi tools on Solana.",
    url: "https://HONEYPOT GUARD.io",
    siteName: "HONEYPOT GUARD",
    type: "website",   
    images: [
      {
        url: "https://HONEYPOT GUARD-public-assets.vercel.app/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "HONEYPOT GUARD OpenGraph Preview",
      },
    ],
    locale: "en_US",
    site_name: "HONEYPOT GUARD"
  },
  manifest: "/site.webmanifest",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const userLanguage = "en"; // You can fetch user's language preference dynamically here

  return (
    <html lang={userLanguage}>
      <body className={inter.className}>
        <div className="layout-container">
          <main className="max-w-screen-lg mx-auto px-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
