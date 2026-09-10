'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { useLanguage } from '@/context/LanguageContext';
import { Lang } from '@/i18n/translations';

const SECTION_IDS = ['hero', 'about', 'features', 'pricing', 'contact', 'faq', 'cta'];
const HEADER_OFFSET = 120;

// ─── Language Switcher ──────────────────────────────────────────────────────

const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
    const { lang, setLang } = useLanguage();

    return (
        <div className={`relative flex items-center bg-gray-100/90 backdrop-blur-sm border border-gray-200/60 rounded-full p-1 shadow-inner ${className}`}>
            {/* Sliding active indicator pill */}
            <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm border border-gray-200/50 transition-all duration-300 cubic-bezier(0.4,0,0.2,1) ${
                    lang === 'id' ? 'left-1' : 'left-[calc(50%+2px)]'
                }`}
            />
            <button
                type="button"
                onClick={() => setLang('id')}
                title="Bahasa Indonesia"
                aria-label="Switch to Bahasa Indonesia"
                className={`relative z-10 px-3 py-1 text-xs sm:text-sm font-bold tracking-wide transition-colors duration-200 ${
                    lang === 'id' ? 'text-blue-950' : 'text-gray-500 hover:text-gray-900'
                }`}
            >
                ID
            </button>
            <button
                type="button"
                onClick={() => setLang('en')}
                title="English"
                aria-label="Switch to English"
                className={`relative z-10 px-3 py-1 text-xs sm:text-sm font-bold tracking-wide transition-colors duration-200 ${
                    lang === 'en' ? 'text-blue-950' : 'text-gray-500 hover:text-gray-900'
                }`}
            >
                EN
            </button>
        </div>
    );
};

// ─── Header ─────────────────────────────────────────────────────────────────

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('hero');
    const { t } = useLanguage();

    // Build nav items dynamically from translations
    const menuItems = [
        { text: t.nav.about, url: '#about' },
        { text: t.nav.features, url: '#features' },
        { text: t.nav.pricing, url: '#pricing' },
        { text: t.nav.contact, url: '#contact' },
    ];

    const updateActiveSection = useCallback(() => {
        let best: string | null = null;
        let bestTop = -Infinity;
        for (const id of SECTION_IDS) {
            const el = document.getElementById(id);
            if (!el) continue;
            const top = el.getBoundingClientRect().top;
            if (top <= HEADER_OFFSET + 80 && top > bestTop) {
                best = id;
                bestTop = top;
            }
        }
        if (best) setActiveSection(best);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            () => updateActiveSection(),
            { root: null, rootMargin: '-1px 0px 0px 0px', threshold: 0 }
        );
        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        updateActiveSection();
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', updateActiveSection);
        };
    }, [updateActiveSection]);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsOpen(false);
    };

    const linkClass = (url: string, isMobile = false) => {
        const id = url.replace('#', '');
        const isActive = activeSection === id;
        const base = isMobile
            ? 'block py-2 transition-colors'
            : 'transition-colors';
        const active = isActive ? 'text-primary font-semibold' : 'text-foreground hover:text-foreground-accent';
        return `${base} ${active}`;
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/d-boost.png"
                            alt="D-BOOST Logo"
                            width={40}
                            height={40}
                            className="min-w-fit"
                        />
                        <span className="text-moniqa text-xl md:text-2xl lg:text-3xl font-black cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        {menuItems.map((item) => (
                            <li key={item.url}>
                                <a
                                    href={item.url}
                                    onClick={(e) => handleNavClick(e, item.url)}
                                    className={linkClass(item.url)}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                        <li>
                            <LanguageSwitcher />
                        </li>
                        <li>
                            <a
                                href="#cta"
                                onClick={(e) => handleNavClick(e, '#cta')}
                                className={`text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors ${activeSection === 'cta' ? 'ring-2 ring-foreground/20' : ''}`}
                            >
                                {t.nav.download}
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageSwitcher />
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg border-t border-gray-100">
                    <ul className="flex flex-col space-y-1 pt-2 pb-6 px-6">
                        {menuItems.map((item) => (
                            <li key={item.url}>
                                <a
                                    href={item.url}
                                    onClick={(e) => handleNavClick(e, item.url)}
                                    className={`${linkClass(item.url, true)} ${activeSection === item.url.replace('#', '') ? 'border-l-4 border-primary pl-3 -ml-1 rounded-r' : 'pl-4'}`}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <a
                                href="#cta"
                                onClick={(e) => handleNavClick(e, '#cta')}
                                className="text-black bg-primary hover:bg-primary-accent px-5 py-2.5 rounded-full block w-fit font-medium"
                            >
                                {t.nav.getStarted}
                            </a>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
