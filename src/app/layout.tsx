import type { Metadata } from "next";
import { Geist, Geist_Mono, Bad_Script } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';

import LoadingScreen from "./components/LoadingScreen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const badScript = Bad_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bad-script",
});

export const metadata: Metadata = {
  title: "Sardaar Niamotullah",
  description: "Software Enginner",
  icons: {
    icon: "/icon/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${badScript.variable} antialiased`}
      >
        <LoadingScreen />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
