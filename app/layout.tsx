import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} | ${siteConfig.mainTagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "UK IT services",
    "website development",
    "software development",
    "IT support",
    "cybersecurity support",
    "technology tutoring",
    "NexuzBee ICT"
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.mainTagline}`,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.mainTagline}`,
    description: siteConfig.description
  },
  alternates: {
    canonical: `https://${siteConfig.domain}`
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${manrope.variable} ${sora.variable} font-sans`}>
        <div className="relative min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
