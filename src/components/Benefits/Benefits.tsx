'use client';

import { useLanguage } from "@/context/LanguageContext";
import BenefitSection from "./BenefitSection"
import { IBenefit } from "@/types";
import {
    FiBarChart2, FiPieChart, FiTrendingUp, FiActivity, FiCpu, FiMessageSquare, FiHelpCircle,
    FiDollarSign, FiCreditCard, FiRefreshCw, FiBox, FiList, FiBell, FiFileText, FiDownload,
    FiUser, FiCompass, FiLayout
} from "react-icons/fi";

/** Ordered icon sets matching the 6 benefit sections */
const BULLET_ICONS = [
    // SDA
    [<FiActivity size={26} key="act" />, <FiBarChart2 size={26} key="bar" />, <FiPieChart size={26} key="pie" />],
    // Deby AI
    [<FiCpu size={26} key="cpu" />, <FiMessageSquare size={26} key="msg" />, <FiHelpCircle size={26} key="help" />],
    // Sales & Expenses
    [<FiDollarSign size={26} key="dol" />, <FiCreditCard size={26} key="cc" />, <FiRefreshCw size={26} key="ref" />],
    // Inventory
    [<FiList size={26} key="lst" />, <FiBox size={26} key="box" />, <FiBell size={26} key="bel" />],
    // Reporting
    [<FiTrendingUp size={26} key="trd" />, <FiFileText size={26} key="ftx" />, <FiDownload size={26} key="dl" />],
    // Personalized
    [<FiUser size={26} key="usr" />, <FiCompass size={26} key="cmp" />, <FiLayout size={26} key="lay" />],
];

const IMAGE_SRCS = [
    '/images/mockup-1.webp',
    '/images/mockup-2.webp',
    '/images/mockup-3.webp',
    '/images/mockup-4.webp',
    '/images/mockup-5.webp',
    '/images/mockup-6.webp',
];

const Benefits: React.FC = () => {
    const { t } = useLanguage();
    const b = t.benefits;

    const benefitKeys = ['sda', 'deby', 'sales', 'inventory', 'reporting', 'personalized'] as const;

    const benefits: IBenefit[] = benefitKeys.map((key, sectionIdx) => {
        const section = b[key];
        return {
            title: section.title,
            description: section.description,
            imageSrc: IMAGE_SRCS[sectionIdx],
            bullets: section.bullets.map((bullet, bulletIdx) => ({
                title: bullet.title,
                description: bullet.description,
                icon: BULLET_ICONS[sectionIdx][bulletIdx],
            })),
        };
    });

    return (
        <div id="features">
            <h2 className="sr-only">{t.nav.features}</h2>
            {benefits.map((item, index) => (
                <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            ))}
        </div>
    )
}

export default Benefits