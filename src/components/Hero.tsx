'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import { useLanguage } from '@/context/LanguageContext';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen px-5 py-20 overflow-hidden"
        >
            {/* Background Grid Pattern */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            {/* Ambient Radial Gradient Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

            {/* Bottom Gradient Fade */}
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] pointer-events-none" />

            <div className="text-center pt-16 md:pt-20 max-w-5xl mx-auto">
                {/* Animated Badge Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md"
                >
                    {t.hero.badge}
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground max-w-4xl mx-auto tracking-tight leading-tight md:leading-snug"
                >
                    <span className="font-bold text-gray-900 tracking-tight block sm:inline">{t.hero.heading1}</span>{' '}
                    <span className="font-moniqa text-blue-900 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal block sm:inline mt-1 sm:mt-0 leading-none">
                        {t.hero.heading2}
                    </span>
                </motion.h1>

                {/* Subheading Copy */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-normal px-2"
                    dangerouslySetInnerHTML={{ __html: t.hero.subheading }}
                />

                {/* Feature Chips Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto px-2"
                >
                    <span className="px-3.5 py-1.5 rounded-full bg-white/80 border border-gray-200/80 shadow-sm text-xs sm:text-sm font-medium text-gray-700 backdrop-blur-md">
                        {t.hero.feature1}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/80 border border-gray-200/80 shadow-sm text-xs sm:text-sm font-medium text-gray-700 backdrop-blur-md">
                        {t.hero.feature2}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/80 border border-gray-200/80 shadow-sm text-xs sm:text-sm font-medium text-gray-700 backdrop-blur-md">
                        {t.hero.feature3}
                    </span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-fit mx-auto"
                >
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </motion.div>

                {/* Center Mockup Image with Glow & Glass Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                    className="relative mt-12 md:mt-14 mx-auto z-10 max-w-md group"
                >
                    <div className="absolute inset-0 bg-blue-500/25 rounded-full blur-3xl -z-10 transform scale-90 group-hover:scale-100 transition-transform duration-500" />
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={384}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="D-BOOST app mockup"
                        className="mx-auto drop-shadow-2xl transition-transform duration-300 group-hover:-translate-y-1"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
