export type Lang = 'en' | 'id';

export const translations = {
  en: {
    // ─── NAV ───────────────────────────────────────────────────────────────
    nav: {
      about: 'About',
      features: 'Features',
      pricing: 'Pricing',
      contact: 'Contact',
      download: 'Download',
      getStarted: 'Get Started',
    },

    // ─── HERO ──────────────────────────────────────────────────────────────
    hero: {
      heading1: 'Your Pocket ',
      heading2: 'Business Consultant.',
      subheading:
        'Simplify your daily operations. <strong>D-BOOST</strong> integrates POS sales, automated inventory, real-time profit tracking, and AI business coaching into one intuitive mobile app.',
    },

    // ─── ABOUT ─────────────────────────────────────────────────────────────
    about: {
      sectionLabel: 'About Us',
      title1: 'Simpler Operations.',
      title2: 'Structured Growth.',
      subtitle:
        'D-BOOST provides a modern operating platform for growing businesses, combining financial tracking, inventory control, and AI guidance into one unified experience.',
      visionTitle: 'Our Vision',
      visionSubtitle: 'Empowering the Future of Digital Entrepreneurship',
      visionBody:
        'To become the trusted mobile business operating system in Southeast Asia, helping MSMEs achieve sustainable growth through digital structure and intelligent tools.',
      missionTitle: 'Our Mission',
      missionBody:
        'We empower local business owners by delivering intuitive, practical, and intelligent management tools.',
      missionItems: [
        'Smart Digitalization',
        'Structured Operations',
        'AI-Driven Insights',
        'Scalable Platform',
      ],
      quote:
        '"True business growth comes from clarity, consistency, and structured execution."',
    },

    // ─── BENEFITS ──────────────────────────────────────────────────────────
    benefits: {
      sda: {
        title: 'Smart Data Analysis',
        description:
          'Eliminate guesswork from your business decisions. Our analytics dashboard highlights real-time sales trends, profit & loss, and top-selling products clearly.',
        bullets: [
          {
            title: 'Real-Time Summary',
            description: 'View total revenue, net profit, and customer activity in a single glance.',
          },
          {
            title: 'Interactive Visualization',
            description: 'Dynamic charts that display sales trends and key performance metrics.',
          },
          {
            title: 'Slow Stock Detection',
            description: 'Identify unsold inventory early to protect your cash flow.',
          },
        ],
      },
      deby: {
        title: 'Deby AI Assistant',
        description:
          'Deby is your intelligent digital assistant ready 24/7. Ask questions about stock levels, daily revenue, or expenses in plain language for instant answers.',
        bullets: [
          {
            title: 'Contextual Intelligence',
            description: 'Instant answers generated directly from your actual business data.',
          },
          {
            title: 'Quick Actions',
            description: 'Check inventory, record expenses, and generate reports simply by typing.',
          },
          {
            title: 'Platform Guidance',
            description: 'Get instant answers to common questions and feature tutorials.',
          },
        ],
      },
      sales: {
        title: 'Sales & Expenses',
        description:
          'Manage incoming and outgoing funds from one unified module. Clear transaction tracking ensures complete financial transparency.',
        bullets: [
          {
            title: 'Sales Management',
            description: 'Record invoices, customer details, payment methods, and transaction status.',
          },
          {
            title: 'Expense Tracking',
            description: 'Categorize operating costs and keep digital receipts neatly organized.',
          },
          {
            title: 'Routine Automation',
            description: 'Track recurring daily, weekly, or monthly expenses automatically.',
          },
        ],
      },
      inventory: {
        title: 'Inventory Control',
        description:
          'Your central hub for product and stock management. Monitor availability, log stock movements, and receive alerts before supplies run low.',
        bullets: [
          {
            title: 'Product Catalog',
            description: 'Organize SKUs, product categories, and pricing in one central place.',
          },
          {
            title: 'Stock Transactions',
            description: 'Track items received, sold, adjusted, or returned with clear logs.',
          },
          {
            title: 'Minimum Stock Alerts',
            description: 'Automatic notifications as soon as stock levels reach minimum thresholds.',
          },
        ],
      },
      reporting: {
        title: 'Comprehensive Reporting',
        description:
          'Generate accurate financial reports in seconds. Access Profit & Loss, Cash Flow summaries, and export professional PDF files whenever needed.',
        bullets: [
          {
            title: 'Profit & Loss',
            description: 'Review gross revenue, cost of goods sold, operating expenses, and net profit.',
          },
          {
            title: 'Cash Flow',
            description: 'Track detailed cash inflows and outflows by payment method.',
          },
          {
            title: 'PDF Export',
            description: 'Download print-ready reports for accounting and audit purposes.',
          },
        ],
      },
      personalized: {
        title: 'Personalized Business',
        description:
          'A system tailored to your specific industry and growth phase. Dashboards and recommendations adapt as your business expands.',
        bullets: [
          {
            title: 'Business Profile',
            description: 'Manage your company identity, industry category, and contact information.',
          },
          {
            title: 'Contextual Guidance',
            description: 'Receive tactical tips tailored to your current stage of growth.',
          },
          {
            title: 'Dynamic Widgets',
            description: 'Customize shortcut actions and key metrics to match your daily workflow.',
          },
        ],
      },
    },

    // ─── FEATURES (stats bar) ───────────────────────────────────────────────
    features: [
      { title: 'Modules', value: '6+', description: 'Integrated tools for daily business operations.' },
      { title: 'Platforms', value: '2', description: 'Web and mobile access from anywhere.' },
      { title: 'Support', value: '24/7', description: 'Responsive guidance and assistance.' },
    ],

    // ─── PRICING ────────────────────────────────────────────────────────────
    pricing: {
      sectionLabel: 'Pricing',
      title: 'Transparent Pricing',
      subtitle:
        'Access modern business management tools at an affordable rate.',
      subtitleAccent: 'Built to support your business at every stage.',
      tiers: [
        {
          name: 'FREE',
          price: 'Rp 0',
          description: 'Full access to core tools with standard usage limits.',
          tagline: 'Ideal for new businesses establishing their digital workflow.',
          features: [
            'Core business tools',
            'Sales & inventory system',
            'CRM dashboard',
            'Deby AI standard access',
          ],
          cta: 'Get Started Free',
        },
        {
          name: 'MAX',
          price: 'Rp 100.000',
          description: 'Unlimited access with zero restrictions for maximum speed.',
          tagline: 'One simple price for full operational power.',
          features: [
            'Everything in Free',
            'Unlimited Deby AI',
            'Unlimited transactions & data',
            'Advanced analytics & PDF export',
          ],
          cta: 'Upgrade to MAX',
        },
      ],
    },

    // ─── FAQ ────────────────────────────────────────────────────────────────
    faq: {
      sectionLabel: "FAQ",
      title: 'Frequently Asked Questions',
      subtitle: 'Have questions? Reach out to us at',
      items: [
        {
          question: 'What is D-BOOST?',
          answer:
            'D-BOOST is an integrated business management platform for small and medium enterprises. It combines POS sales, expense tracking, inventory management, financial reporting, and AI assistance into one mobile app.',
        },
        {
          question: 'Is D-BOOST free to use?',
          answer:
            'Yes. D-BOOST offers a Free tier with access to core features without requiring a credit card. Upgrade to the MAX plan for Rp 100.000/month for unlimited access and advanced analytics.',
        },
        {
          question: 'How does Deby AI help my business?',
          answer:
            'Deby AI acts as your digital assistant. You can ask about current inventory levels, daily sales totals, expense summaries, and top-selling items using conversational language.',
        },
        {
          question: 'Is my business data secure?',
          answer:
            'Yes. We protect your data using encrypted connections, secure authentication, and strict privacy controls so only authorized users have access.',
        },
        {
          question: 'How does the Smart Data Analysis dashboard work?',
          answer:
            'The SDA dashboard compiles your operational metrics in real time. It presents sales charts, profit margins, product trends, and slow-moving stock alerts clearly.',
        },
        {
          question: 'Can I use D-BOOST on mobile devices?',
          answer:
            'Yes. D-BOOST is available on Android, iOS, and web browsers with instant cloud synchronization across your devices.',
        },
        {
          question: 'Is D-BOOST suitable for my business type?',
          answer:
            'D-BOOST is built for retail stores, food and beverage outlets, service providers, and growing digital brands throughout Indonesia.',
        },
        {
          question: 'How do I start using D-BOOST?',
          answer:
            'Download the app, create your account, and set up your business profile. You can record your first sale and set up inventory in under 5 minutes.',
        },
      ],
    },

    // ─── CTA ────────────────────────────────────────────────────────────────
    cta: {
      heading: 'Start Your Journey with',
      headingAccent: 'D-BOOST',
      subheading:
        'Download the D-BOOST app today and experience seamless business operations in the palm of your hand.',
    },

    // ─── CONTACT ────────────────────────────────────────────────────────────
    contact: {
      sectionTitle: 'Contact Us',
      sectionSubtitle: 'Have questions or want to learn more?',
      sectionSubtitleAccent: 'Our team is ready to support your business.',
      getInTouch: 'Get in Touch',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      followUs: 'Follow Us',
    },

    // ─── FOOTER ─────────────────────────────────────────────────────────────
    footer: {
      subheading:
        'Integrated digital business management platform for entrepreneurs and MSMEs. Streamline daily operations and achieve structured growth.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      copyright: 'All rights reserved.',
    },
  },

  // ════════════════════════════════════════════════════════════════
  // BAHASA INDONESIA
  // ════════════════════════════════════════════════════════════════
  id: {
    // ─── NAV ───────────────────────────────────────────────────────────────
    nav: {
      about: 'Tentang',
      features: 'Fitur',
      pricing: 'Harga',
      contact: 'Kontak',
      download: 'Unduh',
      getStarted: 'Mulai Sekarang',
    },

    // ─── HERO ──────────────────────────────────────────────────────────────
    hero: {
      heading1: 'Konsultan Bisnis ',
      heading2: 'di Genggamanmu.',
      subheading:
        'Tinggalkan pencatatan manual. <strong>D-BOOST</strong> menyatukan kasir digital, kontrol stok otomatis, laporan laba rugi instan, dan asisten bisnis AI dalam satu aplikasi mobile yang praktis.',
    },

    // ─── ABOUT ─────────────────────────────────────────────────────────────
    about: {
      sectionLabel: 'Tentang Kami',
      title1: 'Bisnis Lebih Rapi.',
      title2: 'Pertumbuhan Terstruktur.',
      subtitle:
        'D-BOOST menghadirkan platform operasional modern bagi UMKM dan pengusaha muda, menggabungkan pengelolaan keuangan, manajemen stok, dan kecerdasan AI dalam satu sistem terpadu.',
      visionTitle: 'Visi Kami',
      visionSubtitle: 'Memberdayakan Generasi Pengusaha Digital Indonesia',
      visionBody:
        'Menjadi platform operasional bisnis pilihan di Asia Tenggara yang membantu UMKM membangun usaha yang efisien, terukur, dan berkelanjutan melalui teknologi digital.',
      missionTitle: 'Misi Kami',
      missionBody:
        'Mendampingi pemilik usaha lokal dengan menyediakan alat manajemen bisnis yang praktis, cerdas, dan terjangkau.',
      missionItems: [
        'Digitalisasi Praktis',
        'Struktur Keuangan Rapi',
        'Wawasan Berbasis AI',
        'Ekosistem Bisnis Terpadu',
      ],
      quote:
        '"Kesuksesan bisnis berawal dari struktur operasional yang rapi dan terukur."',
    },

    // ─── BENEFITS ──────────────────────────────────────────────────────────
    benefits: {
      sda: {
        title: 'Analisis Data Cerdas',
        description:
          'Pantau performa usaha secara langsung. Dashboard analitik menyajikan tren penjualan, laporan laba rugi, dan produk terlaris secara visual agar keputusan bisnis dapat diambil dengan tepat.',
        bullets: [
          {
            title: 'Ringkasan Real-Time',
            description: 'Pantau total penjualan, laba bersih, dan aktivitas harian dalam satu tampilan.',
          },
          {
            title: 'Visualisasi Grafis',
            description: 'Grafik interaktif yang memudahkan pemantauan tren omzet dari waktu ke waktu.',
          },
          {
            title: 'Analisis Stok Mati',
            description: 'Identifikasi produk slow-moving lebih awal untuk menjaga kelancaran arus kas.',
          },
        ],
      },
      deby: {
        title: 'Asisten AI Deby',
        description:
          'Deby hadir sebagai asisten digital yang memahami data bisnis Anda. Tanyakan stok barang, angka penjualan, hingga pengeluaran harian kapan saja dengan bahasa sehari-hari.',
        bullets: [
          {
            title: 'Respon Kontekstual',
            description: 'Jawaban langsung berdasarkan data riil persediaan, pendapatan, dan biaya usaha.',
          },
          {
            title: 'Akses Cepat',
            description: 'Cek ketersediaan produk dan catat pengeluaran harian cukup dengan mengetik pesan.',
          },
          {
            title: 'Panduan Operasional',
            description: 'Petunjuk penggunaan fitur dan solusi pertanyaan umum seputar platform.',
          },
        ],
      },
      sales: {
        title: 'Penjualan & Pengeluaran',
        description:
          'Kelola transaksi masuk dan keluar dalam satu modul terpadu. Pencatatan yang rapi membuat arus kas usaha selalu transparan.',
        bullets: [
          {
            title: 'Manajemen Penjualan',
            description: 'Catat faktur, data pelanggan, metode pembayaran, dan status transaksi.',
          },
          {
            title: 'Pelacakan Biaya',
            description: 'Kategorikan pengeluaran harian dan simpan bukti pembayaran dengan rapi.',
          },
          {
            title: 'Otomasi Pengeluaran Rutin',
            description: 'Pantau biaya tetap seperti sewa, gaji, dan operasional berkala secara otomatis.',
          },
        ],
      },
      inventory: {
        title: 'Kontrol Inventaris',
        description:
          'Pusat kendali stok barang usaha Anda. Lacak ketersediaan produk, catat barang masuk dan keluar, serta dapatkan notifikasi saat persediaan mulai menipis.',
        bullets: [
          {
            title: 'Katalog Produk',
            description: 'Atur SKU, kategori barang, dan harga jual dalam satu tempat.',
          },
          {
            title: 'Pencatatan Pergerakan Stok',
            description: 'Rekam setiap perubahan persediaan untuk pembelian, penjualan, maupun retur.',
          },
          {
            title: 'Notifikasi Stok Minimum',
            description: 'Peringatan otomatis saat stok produk mencapai batas minimum.',
          },
        ],
      },
      reporting: {
        title: 'Laporan Komprehensif',
        description:
          'Hasilkan laporan keuangan yang akurat dalam hitungan detik. Akses laporan laba rugi, arus kas, dan ekspor dokumen PDF kapan pun dibutuhkan.',
        bullets: [
          {
            title: 'Laba Rugi',
            description: 'Lihat rincian pendapatan, HPP, biaya operasional, dan keuntungan bersih.',
          },
          {
            title: 'Arus Kas',
            description: 'Pantau aliran dana masuk dan keluar berdasarkan metode pembayaran.',
          },
          {
            title: 'Ekspor Dokumen PDF',
            description: 'Unduh laporan siap cetak untuk keperluan pembukuan dan analisis.',
          },
        ],
      },
      personalized: {
        title: 'Bisnis Dipersonalisasi',
        description:
          'Fitur dan rekomendasi yang disesuaikan dengan jenis serta tahap perkembangan usaha Anda.',
        bullets: [
          {
            title: 'Profil Usaha',
            description: 'Atur identitas bisnis, kategori industri, dan informasi kontak usaha Anda.',
          },
          {
            title: 'Rekomendasi Kontekstual',
            description: 'Saran langkah taktis yang relevan untuk tahap rintisan, stabil, maupun ekspansi.',
          },
          {
            title: 'Widget Dinamis',
            description: 'Tampilan ringkas yang menyesuaikan prioritas operasional harian Anda.',
          },
        ],
      },
    },

    // ─── FEATURES (stats bar) ───────────────────────────────────────────────
    features: [
      { title: 'Modul', value: '6+', description: 'Fitur lengkap untuk operasional bisnis harian.' },
      { title: 'Platform', value: '2', description: 'Akses web dan mobile dari mana saja.' },
      { title: 'Dukungan', value: '24/7', description: 'Layanan bantuan dan panduan responsif.' },
    ],

    // ─── PRICING ────────────────────────────────────────────────────────────
    pricing: {
      sectionLabel: 'Harga',
      title: 'Pilihan Paket',
      subtitle: 'Akses fitur manajemen bisnis modern dengan harga terjangkau.',
      subtitleAccent: 'Dirancang untuk mendukung pertumbuhan bisnis Anda.',
      tiers: [
        {
          name: 'GRATIS',
          price: 'Rp 0',
          description: 'Akses fitur inti untuk memulai digitalisasi usaha Anda.',
          tagline: 'Cocok untuk bisnis rintisan yang ingin merapikan pencatatan harian.',
          features: [
            'Fitur bisnis dasar',
            'Sistem penjualan & stok',
            'Dashboard aktivitas',
            'Deby AI standar',
          ],
          cta: 'Mulai Gratis',
        },
        {
          name: 'MAX',
          price: 'Rp 100.000',
          description: 'Fitur lengkap tanpa batasan untuk akselerasi bisnis.',
          tagline: 'Satu harga terjangkau untuk operasional maksimal.',
          features: [
            'Semua fitur Gratis',
            'Deby AI tanpa batas',
            'Transaksi & data tanpa batas',
            'Analitik & ekspor laporan',
          ],
          cta: 'Pilih Paket MAX',
        },
      ],
    },

    // ─── FAQ ────────────────────────────────────────────────────────────────
    faq: {
      sectionLabel: 'FAQ',
      title: 'Pertanyaan Umum',
      subtitle: 'Punya pertanyaan lain? Hubungi kami di',
      items: [
        {
          question: 'Apa itu D-BOOST?',
          answer:
            'D-BOOST adalah platform manajemen bisnis terpadu untuk UMKM. Aplikasi ini menggabungkan kasir digital, pelacakan pengeluaran, kontrol stok, laporan keuangan, dan asisten AI dalam satu tempat.',
        },
        {
          question: 'Apakah D-BOOST gratis?',
          answer:
            'Ya. D-BOOST menyediakan paket Gratis dengan akses ke fitur-fitur inti tanpa perlu kartu kredit. Untuk kapasitas tanpa batas dan fitur analitik lengkap, Anda dapat memilih paket MAX seharga Rp 100.000/bulan.',
        },
        {
          question: 'Apa yang bisa dibantu oleh Deby AI?',
          answer:
            'Deby AI berfungsi sebagai asisten bisnis digital Anda. Anda dapat menanyakan jumlah stok persediaan, total penjualan harian, pengeluaran, dan produk terlaris menggunakan bahasa sehari-hari.',
        },
        {
          question: 'Apakah data bisnis saya aman?',
          answer:
            'Tentu saja. Kami melindungi data Anda menggunakan enkripsi koneksi, autentikasi aman, dan kontrol privasi sesuai standar industri.',
        },
        {
          question: 'Bagaimana cara kerja dashboard Smart Data Analysis (SDA)?',
          answer:
            'Dashboard SDA mengumpulkan data operasional Anda secara real-time. Tampilan visual menyajikan grafik penjualan, persentase keuntungan, dan notifikasi stok mati dengan jelas.',
        },
        {
          question: 'Apakah D-BOOST bisa digunakan di HP?',
          answer:
            'Ya. D-BOOST dapat diakses melalui perangkat Android, iOS, dan browser web dengan sinkronisasi cloud otomatis.',
        },
        {
          question: 'Apakah D-BOOST cocok untuk jenis bisnis saya?',
          answer:
            'D-BOOST dirancang untuk berbagai jenis usaha seperti toko ritel, usaha kuliner, penyedia jasa, hingga merek berkembang di seluruh Indonesia.',
        },
        {
          question: 'Bagaimana cara memulai D-BOOST?',
          answer:
            'Unduh aplikasi, buat akun gratis, dan isi profil usaha Anda. Anda dapat mulai mencatat penjualan dan mengelola stok dalam waktu kurang dari 5 menit.',
        },
      ],
    },

    // ─── CTA ────────────────────────────────────────────────────────────────
    cta: {
      heading: 'Mulai Langkah Pertama Bersama',
      headingAccent: 'D-BOOST',
      subheading:
        'Unduh aplikasi D-BOOST sekarang dan rasakan kemudahan mengelola bisnis dalam satu genggaman.',
    },

    // ─── CONTACT ────────────────────────────────────────────────────────────
    contact: {
      sectionTitle: 'Hubungi Kami',
      sectionSubtitle: 'Punya pertanyaan atau ingin tahu lebih banyak?',
      sectionSubtitleAccent: 'Tim kami siap membantu perjalanan bisnis Anda.',
      getInTouch: 'Get in Touch',
      email: 'Email',
      phone: 'Telepon',
      location: 'Lokasi',
      followUs: 'Ikuti Kami',
    },

    // ─── FOOTER ─────────────────────────────────────────────────────────────
    footer: {
      subheading:
        'Platform manajemen bisnis digital terpadu untuk UMKM dan pengusaha Indonesia. Tingkatkan efisiensi dan raih pertumbuhan bisnis yang lebih rapi.',
      quickLinks: 'Tautan Cepat',
      contactUs: 'Hubungi Kami',
      copyright: 'Hak cipta dilindungi.',
    },
  },
} as const;

export type Translations = typeof translations['en'];
