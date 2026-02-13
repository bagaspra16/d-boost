import {
    FiBarChart2, FiPieChart, FiTrendingUp, FiActivity, FiCpu, FiMessageSquare, FiHelpCircle,
    FiDollarSign, FiCreditCard, FiRefreshCw, FiBox, FiList, FiBell, FiFileText, FiDownload,
    FiUser, FiCompass, FiLayout
} from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Smart Data Analysis (SDA)",
        description: "Eliminate confusion in tracking business performance. Our data-driven analytics dashboard displays real-time sales trends, profit & loss, and best-selling products for faster decision-making.",
        bullets: [
            {
                title: "Real-time Summary",
                description: "Total sales, profit, and customer activity in a single view.",
                icon: <FiActivity size={26} />
            },
            {
                title: "Interactive Visualization",
                description: "Chart.js graphs for sales trends and performance metrics.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Dead Stock Analysis",
                description: "Detect unsold products to optimize your inventory and reduce waste.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Deby AI Assistant",
        description: "An AI assistant that helps manage your business through conversation. Deby understands your context and provides instant information on inventory, finance, sales, and customers.",
        bullets: [
            {
                title: "Contextual Support",
                description: "Get answers based on your actual business data (stock, revenue, expenses).",
                icon: <FiCpu size={26} />
            },
            {
                title: "Quick Access",
                description: "Check stock, record expenses, and view reports simply by typing.",
                icon: <FiMessageSquare size={26} />
            },
            {
                title: "FAQ & Navigation",
                description: "Access feature guides and solutions for common platform questions instantly.",
                icon: <FiHelpCircle size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Sales & Expenses",
        description: "Manage sales and expenses in one unified financial module. Structured transaction recording and automatic categorization ensure clear cash flow transparency.",
        bullets: [
            {
                title: "Sales Management",
                description: "Handle invoices, customers, payment methods, and transaction status efficiently.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Expense Management",
                description: "Track categories, payment methods, and attach receipts or invoices easily.",
                icon: <FiCreditCard size={26} />
            },
            {
                title: "Recurring Tracking",
                description: "Monitor and automate tracking for daily, weekly, or monthly routine expenses.",
                icon: <FiRefreshCw size={26} />
            }
        ],
        imageSrc: "/images/mockup-3.webp"
    },
    {
        title: "Inventory Control",
        description: "The control center for your products and stock. Monitor availability, create stock in/out transactions, and receive alerts when supplies run low.",
        bullets: [
            {
                title: "Product Catalog",
                description: "Manage product data, SKUs, categories, and prices all in one place.",
                icon: <FiList size={26} />
            },
            {
                title: "Stock Transactions",
                description: "Record stock movements with specific types (purchase, sale, adjustment, return).",
                icon: <FiBox size={26} />
            },
            {
                title: "History & Alerts",
                description: "View detailed history per product and get instant low-stock notifications.",
                icon: <FiBell size={26} />
            }
        ],
        imageSrc: "/images/mockup-4.webp"
    },
    {
        title: "Comprehensive Reporting",
        description: "Financial reports ready for deep analysis and decision-making. Access Profit & Loss, Cash Flow, and PDF downloads for any selected period.",
        bullets: [
            {
                title: "Profit & Loss",
                description: "Analyze revenue, COGS, operating costs, and net profit clearly.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Cash Flow",
                description: "Track detailed cash inflows and outflows by payment method.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Download PDF",
                description: "Export professional reports for documentation and auditing purposes.",
                icon: <FiDownload size={26} />
            }
        ],
        imageSrc: "/images/mockup-5.webp"
    },
    {
        title: "Personalized Business",
        description: "Adapt the platform to your specific business stage and type. Dashboards and recommendations are customized based on your MSME profile and preferences.",
        bullets: [
            {
                title: "Business Profile",
                description: "Manage your business identity, category, contact data, and payment info.",
                icon: <FiUser size={26} />
            },
            {
                title: "Contextual Insights",
                description: "Receive tips and next steps tailored specially for Starting, Stagnant, or Growing stages.",
                icon: <FiCompass size={26} />
            },
            {
                title: "Dynamic Widgets",
                description: "Access quick actions and metrics automatically adjusted to your business needs.",
                icon: <FiLayout size={26} />
            }
        ],
        imageSrc: "/images/mockup-6.webp"
    }
]