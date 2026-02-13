import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `What is ${siteDetails.siteName}?`,
        answer: 'D-BOOST (Digital Business Optimization & Operations System) is a business intelligence and management platform for Small and Medium Enterprises (UMKM). It supports sales, expenses, inventory, reporting, and AI assistance to help you run and grow your business digitally.',
    },
    {
        question: `What can Deby AI help me with?`,
        answer: 'Deby AI is an assistant that helps you manage your business through chat. You can ask about stock levels, today’s sales and expenses, profit, top-selling products, customers, and basic analytics. Deby can also explain features, guide you through the app, and answer common questions.',
    },
    {
        question: `Is my data secure on ${siteDetails.siteName}?`,
        answer: `We use secure authentication, encrypted connections, and industry-standard practices to protect your business data. Access is controlled through login and role-based permissions so only authorized users can view or change sensitive information.
`
    },
    {
        question: 'How does the Smart Data Analysis dashboard work?',
        answer: 'The Smart Data Analysis dashboard shows your main business metrics in real time: total sales, profit trends, top products, active customers, sales charts, and dead stock. It helps you see patterns, performance, and problems quickly so you can make better decisions.',
    },
    {
        question: 'Can I customize D-BOOST for my business?',
        answer: 'Yes. In Profile you can set your business name, category, contact details, and payment information. The Personalize Business feature uses your profile and UMKM stage (e.g., Starting, Growing) to suggest modules, widgets, tips, and next steps that fit your business.'
    }
];