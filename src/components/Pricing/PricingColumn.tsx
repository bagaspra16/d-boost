import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { "shadow-lg": highlight })}>
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-3xl md:text-5xl font-bold mb-6">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-lg font-normal text-gray-600">/mo</span>}
                    {(price === 'Rp 100.000' || price === 'Rp 0') && <span className="text-lg font-normal text-gray-600"> / month</span>}
                </p>
                <button className={clsx("w-full py-3 px-4 rounded-full transition-colors font-semibold", { "bg-primary hover:bg-primary-accent": highlight, "bg-gray-100 hover:bg-gray-200": !highlight })}>
                    {highlight ? "Get Started" : "Start for Free"}
                </button>
            </div>
            <div className="p-6 mt-1 flex flex-col flex-grow">
                <p className="font-bold mb-2">FEATURES</p>
                {tier.description && <p className="text-foreground-accent mb-5 text-sm">{tier.description}</p>}

                <ul className="space-y-4 mb-8 flex-grow">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground-accent text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>

                {tier.tagline && (
                    <div className="pt-6 border-t border-gray-100 mt-auto">
                        <p className="text-sm font-medium text-center italic text-gray-600">&ldquo;{tier.tagline}&rdquo;</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PricingColumn