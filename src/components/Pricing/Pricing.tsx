'use client';

import { useLanguage } from "@/context/LanguageContext";
import PricingColumn from "./PricingColumn";

const Pricing: React.FC = () => {
    const { t } = useLanguage();
    const tiers = t.pricing.tiers;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tiers.map((tier, index) => (
                <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
            ))}
        </div>
    )
}

export default Pricing