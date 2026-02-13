import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen px-5 py-20"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center pt-16 md:pt-20">
                <h1 className="text-3xl md:text-5xl md:leading-tight font-extrabold text-foreground max-w-3xl md:max-w-4xl mx-auto">
                    <span className="font-bold text-black text-foreground-accent tracking-tight">Your Pocket</span> <br className="md:hidden" />
                    <span className="font-moniqa text-blue-900 text-5xl md:text-7xl font-normal block md:inline mt-2 md:mt-0 leading-none">Business Consultant</span>
                </h1>
                <p
                    className="mt-4 text-foreground max-w-2xl md:max-w-3xl mx-auto"
                    dangerouslySetInnerHTML={{
                        __html: heroDetails.subheading.replace('D-BOOST', '<strong>D-BOOST</strong>')
                    }}
                />
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div>
                <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-8 md:mt-10 mx-auto z-10'
                />
            </div>
        </section>
    );
};

export default Hero;
