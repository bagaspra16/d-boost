export const siteDetails = {
    siteName: 'D-BOOST',
    /** Base URL for production (no trailing slash). Override with NEXT_PUBLIC_SITE_URL on Vercel. */
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://d-boost.vercel.app',
    metadata: {
        title: 'D-BOOST - Digital Empowerment Platform',
        titleTemplate: '%s | D-BOOST',
        description: 'D-BOOST is an integrated digital business platform designed to help entrepreneurs and MSMEs manage, grow, and scale their business with structured systems and AI-powered guidance.',
        keywords: ['D-BOOST', 'UMKM', 'MSME', 'digital business', 'business platform', 'entrepreneur', 'Southeast Asia', 'AI business', 'business management'],
    },
    language: 'en-us',
    locale: 'en-US',
    siteLogo: `${process.env.BASE_PATH || ''}/images/logo.png`, // or use a string for the logo e.g. "TechStartup"
    googleAnalyticsId: '', // e.g. G-XXXXXXX,
    contact: {
        email: 'dboostapp@gmail.com',
        phone: '+62 856-9393-0137',
        instagram: 'https://www.instagram.com/dboost.app/',
        tiktok: 'https://www.tiktok.com/@dboost.app?is_from_webapp=1&sender_device=pc',
        address: 'Jababeka, Cikarang',
        mapEmbedUrl: 'https://maps.google.com/maps?q=-6.3078227,107.1762503&z=15&output=embed',
    }
}