import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import EarlyAccessForm from '@/components/EarlyAccessForm';
import { earlyAccessDetails } from '@/data/earlyAccess';
import { siteDetails } from '@/data/siteDetails';

const baseUrl = siteDetails.siteUrl;

export const metadata: Metadata = {
  title: 'Get Early Access',
  description: earlyAccessDetails.subheading || 'Join the waitlist for D-BOOST and get early access to the digital business platform for entrepreneurs and MSMEs.',
  openGraph: {
    title: 'Get Early Access | D-BOOST',
    description: earlyAccessDetails.subheading,
    url: `${baseUrl}/early-access`,
    type: 'website',
  },
  alternates: { canonical: `${baseUrl}/early-access` },
  robots: { index: true, follow: true },
};

const EarlyAccessPage: React.FC = () => {
    return (
        <section
            id="early-access"
            className="relative flex items-center justify-center min-h-screen px-5 py-20"
        >
            {/* Background Pattern */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 mb-8 text-foreground hover:text-secondary transition-colors duration-300 group"
                >
                    <svg
                        className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    <span className="font-medium">Back to Home</span>
                </Link>

                {/* Icon/Logo */}
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/30">
                        <svg
                            className="w-10 h-10 text-secondary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <div className="flex justify-center w-full mb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-center leading-tight whitespace-nowrap">
                        Get Early Access to <span className="text-blue-900 font-extrabold">D-BOOST</span>
                    </h1>
                </div>

                {/* Subheading */}
                <p className="text-foreground-accent text-center mb-10 text-base md:text-lg max-w-xl mx-auto">
                    {earlyAccessDetails.subheading}
                </p>

                {/* Form */}
                <EarlyAccessForm />

                {/* Additional Info */}
                <p className="text-foreground-accent/70 text-center text-sm mt-8">
                    We respect your privacy. Your email will only be used to notify you about D-BOOST launch.
                </p>
            </div>
        </section>
    );
};

export default EarlyAccessPage;
