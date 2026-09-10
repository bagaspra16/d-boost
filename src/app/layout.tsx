import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';
import { LanguageProvider } from '@/context/LanguageContext';

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
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    url: baseUrl,
    siteName: siteDetails.siteName,
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteDetails.siteName} – Aplikasi Manajemen Bisnis UMKM Digital`,
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
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'id-ID': `${baseUrl}`,
      'en-US': `${baseUrl}`,
    },
  },
  category: 'business',
};

// ─── Structured Data ─────────────────────────────────────────────────────────

function JsonLd() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}#organization`,
    name: siteDetails.siteName,
    url: baseUrl,
    logo: `${baseUrl}/images/d-boost.png`,
    description: siteDetails.metadata.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteDetails.contact.email,
      telephone: siteDetails.contact.phone,
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English'],
      contactType: 'customer service',
    },
    sameAs: [siteDetails.contact.instagram, siteDetails.contact.tiktok].filter(Boolean),
    foundingLocation: {
      '@type': 'Place',
      name: 'Cikarang, Indonesia',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Southeast Asia',
    },
  };

  const webSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteDetails.siteName,
    url: baseUrl,
    description: siteDetails.metadata.description,
    publisher: { '@id': `${baseUrl}#organization` },
    inLanguage: ['id-ID', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', url: `${baseUrl}/#features` },
      'query-input': 'required name=search_term_string',
    },
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'D-BOOST',
    operatingSystem: 'Android, iOS',
    applicationCategory: 'BusinessApplication',
    description:
      'D-BOOST adalah platform bisnis digital all-in-one untuk UMKM Indonesia — mencakup manajemen penjualan, inventaris, laporan keuangan, dan asisten AI Deby.',
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'IDR',
        name: 'Free Plan',
      },
      {
        '@type': 'Offer',
        price: '100000',
        priceCurrency: 'IDR',
        name: 'MAX Plan',
        billingDuration: 'P1M',
      },
    ],
    publisher: { '@id': `${baseUrl}#organization` },
    url: baseUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Apa itu D-BOOST?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'D-BOOST adalah platform manajemen bisnis digital untuk UMKM yang mencakup penjualan, pengeluaran, inventaris, laporan keuangan, dan asisten AI Deby — semua dalam satu aplikasi.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is D-BOOST?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'D-BOOST (Digital Business Optimization & Operations System) is an all-in-one business management platform for MSMEs covering sales, expenses, inventory, financial reporting, and AI assistance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah D-BOOST gratis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, D-BOOST tersedia secara gratis dengan akses ke semua fitur inti. Paket MAX tersedia seharga Rp 100.000/bulan untuk akses tak terbatas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is D-BOOST free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! D-BOOST offers a FREE tier with full access to core features. The MAX plan at Rp 100,000/month unlocks unlimited access and advanced analytics.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah D-BOOST bisa digunakan di HP Android dan iPhone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, D-BOOST tersedia di Android dan iOS serta browser web. Data Anda tersinkronisasi otomatis di semua perangkat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah data bisnis saya aman di D-BOOST?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya. D-BOOST menggunakan autentikasi aman, koneksi terenkripsi, dan kontrol akses berbasis peran untuk melindungi data bisnis Anda.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

// ─── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${manrope.className} ${sourceSans.className} ${moniqa.variable} antialiased`}
      >
        <JsonLd />
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <LanguageProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
