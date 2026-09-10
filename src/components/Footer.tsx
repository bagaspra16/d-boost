'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { getPlatformIconByName } from '@/utils';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const f = t.footer;

    const quickLinks = [
        { text: t.nav.features, url: '#features' },
        { text: t.nav.pricing, url: '#pricing' },
        { text: t.nav.contact, url: '#contact' },
    ];

    const socials = {
        instagram: 'https://www.instagram.com/dboost.app',
        tiktok: 'https://www.tiktok.com/@dboost.app',
    };

    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/images/d-boost.png"
                                alt="D-BOOST Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-moniqa text-lg md:text-xl lg:text-2xl font-black cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {f.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">{f.quickLinks}</h4>
                    <ul className="text-foreground-accent">
                        {quickLinks.map(link => (
                            <li key={link.url} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">{f.contactUs}</h4>

                    {siteDetails.contact.email && (
                        <a href={`mailto:${siteDetails.contact.email}`} className="block text-foreground-accent hover:text-foreground">
                            Email: {siteDetails.contact.email}
                        </a>
                    )}

                    {siteDetails.contact.phone && (
                        <a href={`tel:${siteDetails.contact.phone}`} className="block text-foreground-accent hover:text-foreground">
                            {t.contact.phone}: {siteDetails.contact.phone}
                        </a>
                    )}

                    <div className="mt-5 flex items-center gap-5 flex-wrap">
                        {Object.keys(socials).map(platformName => {
                            const url = socials[platformName as keyof typeof socials];
                            if (url) {
                                return (
                                    <Link
                                        href={url}
                                        key={platformName}
                                        aria-label={platformName}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {getPlatformIconByName(platformName)}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. {f.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
