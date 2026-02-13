"use client";
import React from "react";
import { motion } from "framer-motion";

const PricingHeader: React.FC = () => {
    return (
        <div className="text-center mb-16 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-xl md:text-4xl lg:text-5xl font-bold font-bold text-black mb-6">
                    Pricing
                </h2>
                <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
                    Unlock premium business tools without the premium price tag. <br className="hidden md:block" />
                    Designed for your success, from <span className="font-semibold text-secondary">Day 1 to Global Scale.</span>
                </p>
            </motion.div>
        </div>
    );
};

export default PricingHeader;
