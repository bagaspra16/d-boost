import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Halaman Tidak Ditemukan | D-BOOST',
  description: 'Ops! Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-5 py-20 overflow-hidden text-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Glow Blur Background Objects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          Error 404 — Page Not Found
        </div>

        {/* 404 Big Number Display */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-foreground tracking-tight mb-2">
          4<span className="text-secondary">0</span>4
        </h1>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Ops! Halaman ini terselip di catatan kasir
        </h2>

        {/* Subtitle */}
        <p className="text-foreground-accent text-base sm:text-lg mb-8 max-w-md leading-relaxed">
          Halaman yang Anda cari tidak dapat ditemukan, telah dihapus, atau namanya diubah. Mari kembali ke jalur bisnis Anda!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary text-white font-semibold hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6"
              />
            </svg>
            Kembali ke Beranda
          </Link>

          <Link
            href="/early-access"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-hero-background border border-foreground/15 text-foreground font-semibold hover:bg-foreground/5 transition-all duration-300"
          >
            Daftar Early Access
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
