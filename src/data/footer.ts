import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Revolutionizing business growth for entrepreneurs and MSMEs. Unlock your full potential with our intelligent, all-in-one management platform.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Contact",
            url: "#contact"
        }
    ],
    email: 'dboostapp@gmail.com',
    telephone: '+62 812-3456-7890',
    socials: {
        instagram: 'https://www.instagram.com/dboost.app',
        tiktok: 'https://www.tiktok.com/@dboost.app',
        // facebook: 'https://facebook.com/dboost',
        // twitter: 'https://twitter.com/dboost',
        // linkedin: 'https://www.linkedin.com/company/dboost',
    }
}