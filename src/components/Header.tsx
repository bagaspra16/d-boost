'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const SECTION_IDS = ['hero', 'about', 'features', 'pricing', 'contact', 'faq', 'cta'];
const HEADER_OFFSET = 120;

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('hero');

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
                            <li key={item.text}>
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
                            <a
                                href="#cta"
                                onClick={(e) => handleNavClick(e, '#cta')}
                                className={`text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors ${activeSection === 'cta' ? 'ring-2 ring-foreground/20' : ''}`}
                            >
                                Download
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
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
                            <li key={item.text}>
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
                                Get Started
                            </a>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
