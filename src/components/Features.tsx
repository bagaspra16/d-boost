"use client"
import { features } from "@/data/features";

const Features: React.FC = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="text-center group hover:scale-105 transition-transform duration-300"
                    >
                        <div className="mb-4">
                            <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-2 group-hover:text-secondary/80 transition-colors">
                                {feature.value}
                            </h3>
                            <p className="text-xl lg:text-2xl font-semibold text-foreground">
                                {feature.title}
                            </p>
                        </div>
                        <p className="text-foreground-accent text-base lg:text-lg max-w-xs mx-auto">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
