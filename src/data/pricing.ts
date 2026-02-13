import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'FREE',
        price: 'Rp 0',
        description: 'Access all features with usage limits.',
        tagline: 'Perfect for early-stage businesses starting their digital journey.',
        features: [
            'Core business tools',
            'Financial & inventory system',
            'CRM & dashboard',
            'DEBY AI (limited usage)',
        ],
    },
    {
        name: 'MAX',
        price: 'Rp 100.000',
        description: 'Unlimited access. Zero limits.',
        tagline: 'One price. Full power. Maximum growth.',
        features: [
            'Unlimited features',
            'Unlimited DEBY AI',
            'Unlimited data & automation',
            'Advanced analytics',
        ],
    },
]