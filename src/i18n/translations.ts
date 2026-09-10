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
      badge: '🚀 All-in-One Operating System for Growing Businesses',
      heading1: 'Run Your Business Smarter,',
      heading2: 'Scale with Confidence',
      subheading:
        'Ditch messy spreadsheets and manual bookkeeping. <strong>D-BOOST</strong> unifies POS sales, automated inventory, real-time profit tracking, and AI business coaching into one effortless mobile app.',
      feature1: '📊 Real-Time Profit Analytics',
      feature2: '📦 Automated Inventory',
      feature3: '🤖 AI Deby Business Coach',
    },

    // ─── ABOUT ─────────────────────────────────────────────────────────────
    about: {
      sectionLabel: 'About Us',
      title1: 'Business Made Simple.',
      title2: 'Growth Made Structured.',
      subtitle:
        'D-BOOST is the modern operating system for the next generation of entrepreneurs — combining consulting logic, execution tools, and AI intelligence into one seamless platform.',
      visionTitle: 'Our Vision',
      visionSubtitle: 'Empowering the Future of Digital Entrepreneurs',
      visionBody:
        "To become Southeast Asia's leading pocket business operating system — helping entrepreneurs and MSMEs transform ideas into measurable, lasting growth through digital structure and AI intelligence.",
      missionTitle: 'Our Mission',
      missionBody:
        'We are dedicated to transforming how businesses operate through innovation, intelligence, and intentional design.',
      missionItems: [
        'Smart Digitalization',
        'Structured Frameworks',
        'AI-Driven Insights',
        'Scalable Ecosystem',
      ],
      quote:
        '"We believe success is not about having more tools — it\'s about having the right structure."',
    },

    // ─── BENEFITS ──────────────────────────────────────────────────────────
    benefits: {
      sda: {
        title: 'Smart Data Analysis (SDA)',
        description:
          'Eliminate guesswork in tracking business performance. Our data-driven analytics dashboard displays real-time sales trends, profit & loss, and best-selling products — so you can make confident decisions in seconds.',
        bullets: [
          {
            title: 'Real-Time Summary',
            description: 'Total sales, profit, and customer activity at a single glance.',
          },
          {
            title: 'Interactive Visualization',
            description: 'Dynamic charts for sales trends and performance metrics.',
          },
          {
            title: 'Dead Stock Analysis',
            description: 'Spot unsold inventory before it drains your cash flow.',
          },
        ],
      },
      deby: {
        title: 'Deby AI Assistant',
        description:
          'Meet Deby — your always-on AI business partner. Ask about stock, revenue, or daily expenses in plain language and get instant, context-aware answers drawn from your real business data.',
        bullets: [
          {
            title: 'Contextual Intelligence',
            description: 'Answers grounded in your actual data — stock, revenue, expenses.',
          },
          {
            title: 'Instant Access',
            description: 'Check stock, log expenses, and pull reports just by typing.',
          },
          {
            title: 'FAQ & Navigation',
            description: 'Feature guides and platform help, always one message away.',
          },
        ],
      },
      sales: {
        title: 'Sales & Expenses',
        description:
          'Manage every peso in and out from one unified financial module. Structured recording and automatic categorization keep your cash flow crystal clear.',
        bullets: [
          {
            title: 'Sales Management',
            description: 'Handle invoices, customers, payment methods, and transaction status.',
          },
          {
            title: 'Expense Tracking',
            description: 'Categorize costs, attach receipts, and track payment methods effortlessly.',
          },
          {
            title: 'Recurring Automation',
            description: 'Auto-track daily, weekly, or monthly routine expenses.',
          },
        ],
      },
      inventory: {
        title: 'Inventory Control',
        description:
          'Your stock control center. Monitor availability, create stock-in/out records, and receive instant alerts before supplies run dangerously low.',
        bullets: [
          {
            title: 'Product Catalog',
            description: 'Manage SKUs, categories, and prices all in one place.',
          },
          {
            title: 'Stock Transactions',
            description: 'Record movements by type: purchase, sale, adjustment, or return.',
          },
          {
            title: 'History & Alerts',
            description: 'Detailed movement history and instant low-stock notifications.',
          },
        ],
      },
      reporting: {
        title: 'Comprehensive Reporting',
        description:
          'Bank-grade financial reports ready in seconds — not hours. Access P&L, Cash Flow, and professional PDF exports for any period you choose.',
        bullets: [
          {
            title: 'Profit & Loss',
            description: 'Revenue, COGS, operating costs, and net profit at a glance.',
          },
          {
            title: 'Cash Flow',
            description: 'Track detailed inflows and outflows by payment method.',
          },
          {
            title: 'PDF Export',
            description: 'Professional reports ready for documentation and auditing.',
          },
        ],
      },
      personalized: {
        title: 'Personalized Business',
        description:
          'A platform that adapts to YOU. Dashboards and recommendations are tailored to your specific business stage — whether you are just starting, stagnating, or ready to scale.',
        bullets: [
          {
            title: 'Business Profile',
            description: 'Set your identity, category, contact details, and payment info.',
          },
          {
            title: 'Contextual Insights',
            description: 'Curated tips for Starting, Stagnant, or Growing stages.',
          },
          {
            title: 'Dynamic Widgets',
            description: 'Quick actions and metrics auto-adjusted to your business needs.',
          },
        ],
      },
    },

    // ─── FEATURES (stats bar) ───────────────────────────────────────────────
    features: [
      { title: 'Modules', value: '6+', description: 'Complete tools for daily business operations.' },
      { title: 'Platform', value: '2', description: 'Web & mobile — manage anywhere, anytime.' },
      { title: 'Support', value: '24/7', description: 'Real-time & active client support.' },
    ],

    // ─── PRICING ────────────────────────────────────────────────────────────
    pricing: {
      sectionLabel: 'Pricing',
      title: 'Pricing',
      subtitle:
        'Unlock premium business tools without the premium price tag.',
      subtitleAccent: 'Built for growth — from Day 1 to global scale.',
      tiers: [
        {
          name: 'FREE',
          price: 'Rp 0',
          description: 'Full access to core features with fair usage limits.',
          tagline: 'Perfect for early-stage businesses starting their digital journey.',
          features: [
            'Core business tools',
            'Financial & inventory system',
            'CRM & dashboard',
            'DEBY AI (limited usage)',
          ],
          cta: 'Get Started Free',
        },
        {
          name: 'MAX',
          price: 'Rp 100.000',
          description: 'Unlimited access. Zero limits. Maximum results.',
          tagline: 'One price. Full power. Maximum growth.',
          features: [
            'Everything in Free',
            'Unlimited DEBY AI',
            'Unlimited data & automation',
            'Advanced analytics & reporting',
          ],
          cta: 'Go MAX Now',
        },
      ],
    },

    // ─── FAQ ────────────────────────────────────────────────────────────────
    faq: {
      sectionLabel: "FAQ's",
      title: 'Frequently Asked Questions',
      subtitle: 'Have more questions? Reach us at',
      items: [
        {
          question: 'What is D-BOOST?',
          answer:
            'D-BOOST (Digital Business Optimization & Operations System) is a business intelligence and management platform for Small and Medium Enterprises (MSMEs/UMKM). It covers sales, expenses, inventory, reporting, and AI assistance — all in one app — to help you run and grow your business digitally.',
        },
        {
          question: 'Is D-BOOST free to use?',
          answer:
            'Yes! D-BOOST offers a FREE tier that gives you full access to core features with fair usage limits — no credit card required. For unlimited access and advanced analytics, upgrade to MAX at Rp 100.000/month.',
        },
        {
          question: 'What can Deby AI help me with?',
          answer:
            'Deby AI is your always-on business assistant. Ask about current stock levels, daily sales totals, expenses, profit, top-selling products, and customer activity in plain language. Deby can also guide you through app features and answer common questions.',
        },
        {
          question: 'Is my business data secure?',
          answer:
            'Absolutely. We use secure authentication, end-to-end encrypted connections, and industry-standard data protection practices. Role-based access control ensures that only authorized users can view or modify sensitive information.',
        },
        {
          question: 'How does the Smart Data Analysis (SDA) dashboard work?',
          answer:
            'The SDA dashboard aggregates your business metrics in real time: total sales, profit trends, top-performing products, active customers, daily/monthly sales charts, and dead stock detection. It surfaces patterns and performance insights so you can make faster, smarter decisions.',
        },
        {
          question: 'Can I use D-BOOST on my phone?',
          answer:
            'Yes! D-BOOST is available on both Android and iOS, as well as web browsers. Your data syncs instantly across all devices so you can manage your business from anywhere.',
        },
        {
          question: 'Is D-BOOST suitable for my type of business?',
          answer:
            'D-BOOST is designed for any Indonesian MSME or entrepreneur — from food & beverage stalls, retail shops, and service providers to growing brands. The Personalized Business feature adapts the platform to your specific industry stage and needs.',
        },
        {
          question: 'How do I get started with D-BOOST?',
          answer:
            'Download the app from the App Store or Google Play, register for a free account, and complete your business profile. The onboarding flow will guide you through your first sales record, inventory setup, and Deby AI introduction in under 5 minutes.',
        },
      ],
    },

    // ─── CTA ────────────────────────────────────────────────────────────────
    cta: {
      heading: 'Be Among the First to Experience',
      headingAccent: 'D-BOOST',
      subheading:
        'Join our pre-launch community and be first in line when we officially launch. Download D-BOOST now and get ready to transform your business operations — early access coming soon!',
    },

    // ─── CONTACT ────────────────────────────────────────────────────────────
    contact: {
      sectionTitle: 'Contact Us',
      sectionSubtitle: "Ready to transform your business?",
      sectionSubtitleAccent: "Let's build your Digital Future together.",
      getInTouch: 'Get in Touch',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      followUs: 'Follow Us',
    },

    // ─── FOOTER ─────────────────────────────────────────────────────────────
    footer: {
      subheading:
        'Revolutionizing business growth for entrepreneurs and MSMEs across Southeast Asia. Unlock your full potential with our intelligent, all-in-one management platform.',
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
      badge: '🚀 Platform Operasional Bisnis & UMKM Modern',
      heading1: 'Kelola Bisnis Lebih Rapi,',
      heading2: 'Untung Jelas & Terukur',
      subheading:
        'Tinggalkan pencatatan manual yang menyita waktu. <strong>D-BOOST</strong> menyatukan kasir digital, kontrol stok otomatis, laporan laba-rugi instan, serta pendampingan AI cerdas — agar bisnis Anda tumbuh lebih cepat dan terorganisir.',
      feature1: '📊 Laporan Laba-Rugi Real-Time',
      feature2: '📦 Kontrol Stok Otomatis',
      feature3: '🤖 Asisten AI Bisnis Deby',
    },

    // ─── ABOUT ─────────────────────────────────────────────────────────────
    about: {
      sectionLabel: 'Tentang Kami',
      title1: 'Bisnis Lebih Mudah.',
      title2: 'Pertumbuhan Lebih Terstruktur.',
      subtitle:
        'D-BOOST adalah sistem operasi bisnis modern untuk generasi pengusaha berikutnya — menggabungkan logika konsultasi, alat eksekusi, dan kecerdasan AI dalam satu platform yang seamless.',
      visionTitle: 'Visi Kami',
      visionSubtitle: 'Memberdayakan Masa Depan Pengusaha Digital Indonesia',
      visionBody:
        'Menjadi sistem operasi bisnis genggam terdepan di Asia Tenggara — membantu pengusaha dan UMKM mengubah ide menjadi pertumbuhan yang terukur dan berkelanjutan melalui struktur digital dan kecerdasan AI.',
      missionTitle: 'Misi Kami',
      missionBody:
        'Kami berkomitmen mengubah cara bisnis beroperasi melalui inovasi, kecerdasan, dan desain yang penuh tujuan.',
      missionItems: [
        'Digitalisasi Cerdas',
        'Kerangka Kerja Terstruktur',
        'Wawasan Berbasis AI',
        'Ekosistem yang Dapat Berkembang',
      ],
      quote:
        '"Kami percaya kesuksesan bukan tentang memiliki lebih banyak alat — melainkan tentang memiliki struktur yang tepat."',
    },

    // ─── BENEFITS ──────────────────────────────────────────────────────────
    benefits: {
      sda: {
        title: 'Analisis Data Cerdas (SDA)',
        description:
          'Hilangkan kebingungan dalam memantau performa bisnis. Dashboard analitik berbasis data kami menampilkan tren penjualan real-time, laba & rugi, serta produk terlaris — agar Anda bisa mengambil keputusan tepat dalam hitungan detik.',
        bullets: [
          {
            title: 'Ringkasan Real-Time',
            description: 'Total penjualan, keuntungan, dan aktivitas pelanggan dalam satu tampilan.',
          },
          {
            title: 'Visualisasi Interaktif',
            description: 'Grafik dinamis untuk tren penjualan dan metrik performa bisnis.',
          },
          {
            title: 'Analisis Stok Mati',
            description: 'Deteksi produk yang tidak terjual sebelum menggerus arus kas Anda.',
          },
        ],
      },
      deby: {
        title: 'Asisten AI Deby',
        description:
          'Kenalkan Deby — mitra bisnis AI Anda yang selalu siap. Tanyakan soal stok, omzet, atau pengeluaran harian dalam bahasa sehari-hari, dan dapatkan jawaban instan yang akurat berdasarkan data bisnis Anda sendiri.',
        bullets: [
          {
            title: 'Kecerdasan Kontekstual',
            description: 'Jawaban berdasarkan data Anda yang nyata — stok, pendapatan, pengeluaran.',
          },
          {
            title: 'Akses Instan',
            description: 'Cek stok, catat pengeluaran, dan lihat laporan hanya dengan mengetik.',
          },
          {
            title: 'Panduan & Navigasi',
            description: 'Bantuan fitur dan panduan platform, selalu satu pesan dari Anda.',
          },
        ],
      },
      sales: {
        title: 'Penjualan & Pengeluaran',
        description:
          'Kelola setiap rupiah masuk dan keluar dari satu modul keuangan yang terintegrasi. Pencatatan terstruktur dan kategorisasi otomatis membuat arus kas bisnis Anda selalu transparan.',
        bullets: [
          {
            title: 'Manajemen Penjualan',
            description: 'Kelola faktur, pelanggan, metode pembayaran, dan status transaksi.',
          },
          {
            title: 'Pelacakan Pengeluaran',
            description: 'Kategorikan biaya, lampirkan bukti pembayaran, dan pantau metode bayar.',
          },
          {
            title: 'Otomasi Rutin',
            description: 'Lacak otomatis pengeluaran rutin harian, mingguan, atau bulanan.',
          },
        ],
      },
      inventory: {
        title: 'Kontrol Inventaris',
        description:
          'Pusat kendali stok produk Anda. Pantau ketersediaan, buat transaksi stok masuk/keluar, dan terima notifikasi instan sebelum stok Anda habis.',
        bullets: [
          {
            title: 'Katalog Produk',
            description: 'Kelola SKU, kategori, dan harga produk dalam satu tempat.',
          },
          {
            title: 'Transaksi Stok',
            description: 'Catat pergerakan stok berdasarkan jenisnya: pembelian, penjualan, penyesuaian, atau retur.',
          },
          {
            title: 'Riwayat & Notifikasi',
            description: 'Riwayat pergerakan detail per produk dan notifikasi stok rendah secara instan.',
          },
        ],
      },
      reporting: {
        title: 'Laporan Komprehensif',
        description:
          'Laporan keuangan berkualitas profesional siap dalam hitungan detik — bukan jam. Akses Laba Rugi, Arus Kas, dan ekspor PDF untuk periode mana pun yang Anda pilih.',
        bullets: [
          {
            title: 'Laba & Rugi',
            description: 'Pendapatan, HPP, biaya operasional, dan laba bersih dalam satu pandangan.',
          },
          {
            title: 'Arus Kas',
            description: 'Lacak arus masuk dan keluar secara detail berdasarkan metode pembayaran.',
          },
          {
            title: 'Ekspor PDF',
            description: 'Laporan profesional siap cetak untuk dokumentasi dan kebutuhan audit.',
          },
        ],
      },
      personalized: {
        title: 'Bisnis yang Dipersonalisasi',
        description:
          'Platform yang beradaptasi dengan ANDA. Dashboard dan rekomendasi disesuaikan dengan tahap bisnis spesifik Anda — baik yang baru mulai, sedang stagnan, maupun siap untuk ekspansi.',
        bullets: [
          {
            title: 'Profil Bisnis',
            description: 'Atur identitas bisnis, kategori, kontak, dan informasi pembayaran Anda.',
          },
          {
            title: 'Wawasan Kontekstual',
            description: 'Tips dan langkah selanjutnya yang dikurasi khusus untuk tahap Mulai, Stagnan, atau Berkembang.',
          },
          {
            title: 'Widget Dinamis',
            description: 'Aksi cepat dan metrik yang otomatis disesuaikan dengan kebutuhan bisnis Anda.',
          },
        ],
      },
    },

    // ─── FEATURES (stats bar) ───────────────────────────────────────────────
    features: [
      { title: 'Modul', value: '6+', description: 'Fitur lengkap untuk operasional bisnis harian.' },
      { title: 'Platform', value: '2', description: 'Web & mobile — kelola bisnis di mana saja.' },
      { title: 'Dukungan', value: '24/7', description: 'Dukungan pelanggan real-time & aktif.' },
    ],

    // ─── PRICING ────────────────────────────────────────────────────────────
    pricing: {
      sectionLabel: 'Harga',
      title: 'Harga',
      subtitle: 'Dapatkan fitur bisnis premium tanpa harga yang premium.',
      subtitleAccent: 'Dirancang untuk pertumbuhan Anda — dari hari pertama hingga skala global.',
      tiers: [
        {
          name: 'GRATIS',
          price: 'Rp 0',
          description: 'Akses penuh ke fitur inti dengan batas penggunaan yang wajar.',
          tagline: 'Sempurna untuk bisnis tahap awal yang memulai perjalanan digital mereka.',
          features: [
            'Alat bisnis inti',
            'Sistem keuangan & inventaris',
            'CRM & dashboard',
            'DEBY AI (penggunaan terbatas)',
          ],
          cta: 'Mulai Gratis',
        },
        {
          name: 'MAX',
          price: 'Rp 100.000',
          description: 'Akses tanpa batas. Tanpa restriksi. Hasil maksimal.',
          tagline: 'Satu harga. Fitur penuh. Pertumbuhan maksimal.',
          features: [
            'Semua fitur Gratis',
            'DEBY AI tanpa batas',
            'Data & otomasi tanpa batas',
            'Analitik & laporan lanjutan',
          ],
          cta: 'Upgrade ke MAX',
        },
      ],
    },

    // ─── FAQ ────────────────────────────────────────────────────────────────
    faq: {
      sectionLabel: 'FAQ',
      title: 'Pertanyaan yang Sering Diajukan',
      subtitle: 'Masih punya pertanyaan? Hubungi kami di',
      items: [
        {
          question: 'Apa itu D-BOOST?',
          answer:
            'D-BOOST (Digital Business Optimization & Operations System) adalah platform manajemen dan kecerdasan bisnis untuk Usaha Mikro, Kecil, dan Menengah (UMKM). Platform ini mencakup penjualan, pengeluaran, inventaris, pelaporan keuangan, dan asisten AI — semua dalam satu aplikasi — untuk membantu Anda menjalankan dan mengembangkan bisnis secara digital.',
        },
        {
          question: 'Apakah D-BOOST gratis?',
          answer:
            'Ya! D-BOOST menawarkan paket GRATIS yang memberi Anda akses penuh ke fitur inti dengan batas penggunaan yang wajar — tanpa perlu kartu kredit. Untuk akses tak terbatas dan analitik lanjutan, upgrade ke MAX dengan harga Rp 100.000/bulan.',
        },
        {
          question: 'Apa yang bisa dibantu oleh Deby AI?',
          answer:
            'Deby AI adalah asisten bisnis Anda yang selalu aktif. Tanyakan soal level stok saat ini, total penjualan harian, pengeluaran, keuntungan, produk terlaris, dan aktivitas pelanggan dalam bahasa sehari-hari. Deby juga bisa memandu Anda menggunakan fitur aplikasi dan menjawab pertanyaan umum.',
        },
        {
          question: 'Apakah data bisnis saya aman?',
          answer:
            'Tentu saja. Kami menggunakan autentikasi aman, koneksi terenkripsi, dan praktik perlindungan data standar industri. Kontrol akses berbasis peran (role-based access) memastikan hanya pengguna yang berwenang yang dapat melihat atau mengubah informasi sensitif.',
        },
        {
          question: 'Bagaimana cara kerja dashboard Smart Data Analysis (SDA)?',
          answer:
            'Dashboard SDA mengumpulkan metrik bisnis Anda secara real-time: total penjualan, tren keuntungan, produk terlaris, pelanggan aktif, grafik penjualan harian/bulanan, dan deteksi stok mati. Platform ini menampilkan pola dan wawasan performa agar Anda bisa mengambil keputusan lebih cepat dan lebih cerdas.',
        },
        {
          question: 'Apakah D-BOOST bisa digunakan di HP?',
          answer:
            'Ya! D-BOOST tersedia di Android dan iOS, serta browser web. Data Anda tersinkronisasi secara instan di semua perangkat sehingga Anda bisa mengelola bisnis dari mana saja.',
        },
        {
          question: 'Apakah D-BOOST cocok untuk jenis bisnis saya?',
          answer:
            'D-BOOST dirancang untuk semua jenis UMKM dan pengusaha Indonesia — mulai dari warung makan, toko ritel, penyedia jasa, hingga merek yang sedang berkembang. Fitur Bisnis yang Dipersonalisasi menyesuaikan platform dengan industri dan tahap spesifik Anda.',
        },
        {
          question: 'Bagaimana cara memulai D-BOOST?',
          answer:
            'Unduh aplikasi dari App Store atau Google Play, daftar akun gratis, dan lengkapi profil bisnis Anda. Alur onboarding akan memandu Anda mencatat penjualan pertama, menyiapkan inventaris, dan berkenalan dengan Deby AI dalam waktu kurang dari 5 menit.',
        },
      ],
    },

    // ─── CTA ────────────────────────────────────────────────────────────────
    cta: {
      heading: 'Jadilah yang Pertama Merasakan',
      headingAccent: 'D-BOOST',
      subheading:
        'Bergabunglah dengan komunitas pre-launch kami dan jadilah yang pertama saat kami resmi diluncurkan. Unduh D-BOOST sekarang dan bersiaplah mengubah cara Anda menjalankan bisnis — early access segera hadir!',
    },

    // ─── CONTACT ────────────────────────────────────────────────────────────
    contact: {
      sectionTitle: 'Hubungi Kami',
      sectionSubtitle: 'Siap mengubah bisnis Anda?',
      sectionSubtitleAccent: 'Mari bangun Masa Depan Digital Anda bersama kami.',
      getInTouch: 'Hubungi Kami',
      email: 'Email',
      phone: 'Telepon',
      location: 'Lokasi',
      followUs: 'Ikuti Kami',
    },

    // ─── FOOTER ─────────────────────────────────────────────────────────────
    footer: {
      subheading:
        'Merevolusi pertumbuhan bisnis untuk pengusaha dan UMKM di seluruh Asia Tenggara. Raih potensi penuh Anda dengan platform manajemen cerdas all-in-one kami.',
      quickLinks: 'Tautan Cepat',
      contactUs: 'Hubungi Kami',
      copyright: 'Hak cipta dilindungi.',
    },
  },
} as const;

export type Translations = typeof translations['en'];
