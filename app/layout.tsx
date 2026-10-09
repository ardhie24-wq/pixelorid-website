import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import JsonLd from "./_components/JsonLd";
import PaddleInit from "../components/PaddleInit";
import { GoogleAnalytics } from "@next/third-parties/google";

const SITE_URL = "https://www.pixelorid.biz.id";
const DEFAULT_TITLE = "Pixelorid \u2014 Simple Technology for Growing Businesses";
const DEFAULT_DESCRIPTION =
  "Pixelorid builds simple, practical SaaS tools and digital products for growing small businesses.";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Pixelorid",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Pixelorid",
  alternates: { canonical: "./" },
  robots: { index: true, follow: true },
  other: { "p:domain_verify": "670c462fc7b3bc7d4f6bda4abc91063a" },
  openGraph: {
    type: "website",
    siteName: "Pixelorid",
    locale: "en_US",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Pixelorid",
      url: SITE_URL,
      logo: `${SITE_URL}/pixelorid-logo.png`,
      description: DEFAULT_DESCRIPTION,
      sameAs: [
        "https://pixelorid.etsy.com",
        "https://pixelorid.gumroad.com/",
        "https://payhip.com/pixelorid",
        "https://id.pinterest.com/pixelorid/",
        "https://www.instagram.com/pixelorid/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Pixelorid",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <JsonLd data={siteJsonLd} />
        <PaddleInit />
        {children}
        <GoogleAnalytics gaId="G-DEW1HBBZ3Z" />
      </body>
    </html>
  );
}
