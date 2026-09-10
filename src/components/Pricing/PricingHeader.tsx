"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const PricingHeader: React.FC = () => {
    const { t } = useLanguage();
    const p = t.pricing;

    return (
        <div className="text-center mb-16 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                    {p.title}
                </h2>
                <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
                    {p.subtitle} <br className="hidden md:block" />
                    <span className="font-semibold text-secondary">{p.subtitleAccent}</span>
                </p>
            </motion.div>
        </div>
    );
};

export default PricingHeader;
