export const siteDetails = {
    siteName: 'D-BOOST',
    /** Base URL for production (no trailing slash). Override with NEXT_PUBLIC_SITE_URL on Vercel. */
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://d-boost.vercel.app',
    metadata: {
        title: 'D-BOOST – Aplikasi Manajemen Bisnis Digital untuk UMKM',
        titleTemplate: '%s | D-BOOST',
        description: 'D-BOOST adalah platform bisnis digital all-in-one untuk UMKM dan pengusaha Indonesia. Kelola penjualan, inventaris, laporan keuangan, dan dapatkan panduan AI dari Deby — semua dalam satu aplikasi. Coba gratis sekarang!',
        keywords: [
            // Brand
            'D-BOOST', 'dboost', 'dboost app',
            // Indonesian UMKM terms
            'aplikasi UMKM', 'aplikasi manajemen bisnis', 'aplikasi kasir digital',
            'manajemen bisnis digital', 'sistem bisnis digital', 'platform UMKM Indonesia',
            'aplikasi bisnis Indonesia', 'software kasir UMKM', 'laporan keuangan UMKM',
            'aplikasi stok barang', 'manajemen inventaris', 'AI untuk UMKM',
            'asisten bisnis AI', 'digitalisasi UMKM', 'aplikasi pengusaha',
            'sistem manajemen usaha', 'analisis data bisnis', 'laporan laba rugi UMKM',
            // English terms
            'MSME platform', 'digital business platform', 'business management app',
            'AI business assistant', 'inventory management', 'sales tracking app',
            'small business software', 'entrepreneur app', 'business analytics',
            'Southeast Asia MSME', 'Indonesia business app',
        ],
    },
    language: 'id',
    locale: 'id-ID',
    siteLogo: `${process.env.BASE_PATH || ''}/images/logo.png`,
    googleAnalyticsId: '', // e.g. G-XXXXXXX
    contact: {
        email: 'dboostapp@gmail.com',
        phone: '+62 856-9393-0137',
        instagram: 'https://www.instagram.com/dboost.app/',
        tiktok: 'https://www.tiktok.com/@dboost.app?is_from_webapp=1&sender_device=pc',
        address: 'Jababeka, Cikarang',
        mapEmbedUrl: 'https://maps.google.com/maps?q=-6.3078227,107.1762503&z=15&output=embed',
    }
}