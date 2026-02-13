'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-60"></div>
            </div>

            <Container>
                {/* Intro Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-3xl mx-auto text-center mb-20 relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-8">
                        Business Made Simple. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-800">
                            Growth Made Structured.
                        </span>
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto text-foreground-accent">
                        D-BOOST is the modern operating system for the next generation of entrepreneurs, combining consulting logic, execution tools, and AI into one seamless platform.
                    </p>
                </motion.div>

                {/* Floating Cards Layout - centered and balanced */}
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="bg-white text-foreground rounded-[2rem] p-10 md:p-12 shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-3xl font-bold tracking-tight">Our Vision</h3>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-primary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>

                        <div className="flex-grow flex flex-col justify-center">
                            <h4 className="text-xl font-medium text-foreground mb-6 border-l-4 border-primary pl-4">
                                Empowering the Future of Digital Entrepreneurs
                            </h4>
                            <p className="text-foreground-accent text-lg leading-relaxed">
                                To become Southeast Asia’s leading pocket business operating system, helping entrepreneurs and MSMEs transform ideas into measurable growth through digital structure and AI intelligence.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="bg-white rounded-[2rem] p-10 md:p-12 border border-gray-100 shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-3xl font-bold text-foreground tracking-tight">Our Mission</h3>
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                        </div>

                        <div className="flex-grow">
                            <p className="text-foreground-accent text-lg mb-8 leading-relaxed">
                                We are dedicated to transforming how businesses operate through innovation and intelligence.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Smart Digitalization",
                                    "Structured Frameworks",
                                    "AI-Driven Insights",
                                    "Scalable Ecosystem"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-4">
                                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span className="text-foreground font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Bottom Quote / Philosophy - Full Width centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="lg:col-span-2 mt-8"
                    >
                        <div className="bg-white rounded-2xl p-10 md:p-14 border-2 border-gray-100 shadow-sm flex flex-col items-center justify-center gap-6 text-center">
                            <p className="text-2xl md:text-3xl font-serif italic text-foreground max-w-5xl leading-relaxed">
                                &ldquo;We believe success is not about having more tools, it&apos;s about having the right structure.&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
