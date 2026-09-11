'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import { useLanguage } from '@/context/LanguageContext';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    const { t, lang } = useLanguage();

    const isId = lang === 'id';

    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-between min-h-screen px-5 pt-28 md:pt-36 pb-0 overflow-hidden"
        >
            {/* Background Grid Pattern */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            {/* Ambient Radial Gradient Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

            {/* Soft Lowered White Blur Base Overlay */}
            <div className="absolute left-0 right-0 bottom-0 z-20 h-16 sm:h-20 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none border-b border-gray-100/60" />

            <div className="text-center max-w-5xl mx-auto flex flex-col items-center flex-grow justify-between z-10 w-full">
                <div>
                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                        className="text-center whitespace-nowrap font-medium text-foreground tracking-tight leading-tight md:leading-snug"
                    >
                        <span className={`text-[clamp(1.25rem,4.5vw,4.5rem)] tracking-tight ${isId ? 'font-playfair italic font-medium text-blue-900' : 'font-medium text-gray-900'}`}>{t.hero.heading1}</span>{' '}
                        <span className={`text-[clamp(1.25rem,4.5vw,4.5rem)] ${isId ? 'font-medium text-gray-900' : 'font-playfair italic font-medium text-blue-900'}`}>
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
                </div>

                {/* Center Mockup Image - Cloud Fog Blended Base */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                    className="relative mt-10 md:mt-12 mx-auto z-10 max-w-md w-full group flex justify-center items-end overflow-visible"
                >
                    <div className="absolute inset-0 bg-blue-500/25 rounded-full blur-3xl -z-10 transform scale-90 group-hover:scale-100 transition-transform duration-500" />

                    {/* Organic Cloud-like White Fog Orbs */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[115%] h-14 bg-white/80 rounded-[100%] blur-xl pointer-events-none z-20" />
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[135%] h-16 bg-white/95 rounded-[100%] blur-2xl pointer-events-none z-20" />

                    <Image
                        src={heroDetails.centerImageSrc}
                        width={384}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="D-BOOST aplikasi manajemen bisnis UMKM — tampilan dashboard mobile kasir digital dan laporan keuangan"
                        className="mx-auto drop-shadow-2xl transition-transform duration-300 group-hover:-translate-y-1 block -mb-1 relative z-10"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
