import React from 'react';
import { siteDetails } from '@/data/siteDetails';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 items-stretch max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="flex-1 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-8 text-foreground">Get in Touch</h3>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-secondary">
                            <MdEmail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Email</p>
                            <a href={`mailto:${siteDetails.contact.email}`} className="text-lg font-semibold hover:text-secondary transition-colors">
                                {siteDetails.contact.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-secondary">
                            <MdPhone size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Phone</p>
                            <a href={`tel:${siteDetails.contact.phone}`} className="text-lg font-semibold hover:text-secondary transition-colors">
                                {siteDetails.contact.phone}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-secondary">
                            <MdLocationOn size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Location</p>
                            <p className="text-lg font-semibold text-foreground">
                                {siteDetails.contact.address}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-500 font-medium mb-4">Follow Us</p>
                    <div className="flex gap-4">
                        <Link href={siteDetails.contact.instagram} target="_blank" className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-foreground hover:bg-secondary hover:text-white transition-all duration-300">
                            <FaInstagram size={24} />
                        </Link>
                        <Link href={siteDetails.contact.tiktok} target="_blank" className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-foreground hover:bg-secondary hover:text-white transition-all duration-300">
                            <FaTiktok size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Map Preview */}
            <div className="flex-1 w-full min-h-[400px] lg:min-h-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative bg-gray-100">
                <iframe
                    src={siteDetails.contact.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '100%' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
            </div>
        </div>
    );
};

export default Contact;
