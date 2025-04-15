import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "HONEYPOT GUARD",
  description: "AI-Powered Yield Optimization on Solana",
  generator: "v0.dev",
  applicationName: "HONEYPOT GUARD",
  keywords: ["AI", "DeFi", "Solana", "Yield", "Security", "Blockchain"],
  authors: [{ name: "HONEYPOT GUARD Team", url: "https://HONEYPOT GUARD.io" }],
  creator: "HONEYPOT GUARD",
  themeColor: "#000000",
  manifest: "/site.webmanifest", // Added manifest for better mobile support
  openGraph: {
    title: "HONEYPOT GUARD - AI-Powered DeFi Optimization",
    description: "Automate and optimize yield farming with AI on Solana.",
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
  },
};
