import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

const moniqa = localFont({
  src: [
    {
      path: './fonts/Moniqa-BlackCondensedDisplay.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-moniqa',
});

const baseUrl = siteDetails.siteUrl;

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteDetails.metadata.title,
    template: siteDetails.metadata.titleTemplate ?? '%s | D-BOOST',
  },
  description: siteDetails.metadata.description,
  keywords: siteDetails.metadata.keywords,
  authors: [{ name: siteDetails.siteName, url: baseUrl }],
  creator: siteDetails.siteName,
  publisher: siteDetails.siteName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: siteDetails.locale,
    url: baseUrl,
    siteName: siteDetails.siteName,
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: baseUrl },
};

function JsonLd() {
  const baseUrl = siteDetails.siteUrl;
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteDetails.siteName,
    url: baseUrl,
    logo: `${baseUrl}/images/d-boost.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteDetails.contact.email,
      telephone: siteDetails.contact.phone,
      areaServed: 'ID',
      contactType: 'customer service',
    },
    sameAs: [siteDetails.contact.instagram, siteDetails.contact.tiktok].filter(Boolean),
  };
  const webSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteDetails.siteName,
    url: baseUrl,
    description: siteDetails.metadata.description,
    publisher: { '@id': `${baseUrl}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', url: `${baseUrl}/#features` },
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }} />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${sourceSans.className} ${moniqa.variable} antialiased`}
      >
        <JsonLd />
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
