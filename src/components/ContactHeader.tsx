"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactHeader: React.FC = () => {
    return (
        <div className="text-center mb-16 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-xl md:text-4xl lg:text-5xl font-bold font-bold text-black mb-6">
                    Contact Us
                </h2>
                <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
                    Ready to transform your business? <br className="hidden md:block" />
                    Reach out today and let&apos;s build your <span className="font-semibold text-secondary">Digital Future Together.</span>
                </p>
            </motion.div>
        </div>
    );
};

export default ContactHeader;
