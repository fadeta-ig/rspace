"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import content from "@/data/content.json";

// Import assets directly
import nextLogo from "@/assets/next-js-seeklogo.png";
import wpLogo from "@/assets/wordpress.png";
import laravelLogo from "@/assets/laravel.png";
import vueLogo from "@/assets/vue-js-seeklogo.png";
import flutterLogo from "@/assets/flutter.png";
import cfLogo from "@/assets/cloudflare-color.png";

const { techStack } = content;

const assetMap: Record<string, any> = {
    "WordPress": wpLogo,
    "Laravel": laravelLogo,
    "Next.js": nextLogo,
    "Vue.js": vueLogo,
    "Flutter": flutterLogo,
    "Cloudflare": cfLogo
};

export default function TechStack() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        import("gsap").then(({ gsap }) => {
            const width = scrollContainer.scrollWidth / 2;

            gsap.to(scrollContainer, {
                x: `-${width}px`,
                duration: 45, // Elegant, slow motion
                ease: "none",
                repeat: -1,
            });
        });
    }, []);

    return (
        <section className="py-12 bg-white overflow-hidden border-y border-gray-50/60">
            <div className="relative">
                {/* Enhanced Authority Title */}
                <div className="flex justify-center mb-10">
                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-500 border-b border-slate-200 pb-2">
                        {techStack.title}
                    </span>
                </div>

                {/* Enhanced Contrast Gradients */}
                <div className="absolute inset-y-0 left-0 w-40 md:w-80 bg-gradient-to-r from-white via-white/95 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-40 md:w-80 bg-gradient-to-l from-white via-white/95 to-transparent z-20 pointer-events-none"></div>

                <div
                    ref={scrollRef}
                    className="flex items-center gap-6 md:gap-8 whitespace-nowrap pr-6 md:pr-8"
                >
                    {/* Seamless Loop with Luxury Glass Cards */}
                    {[...techStack.items, ...techStack.items].map((tech, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 px-6 py-3.5 bg-white/40 backdrop-blur-md border border-slate-100/50 rounded-2xl shadow-[0_4px_24px_-12px_rgba(0,0,0,0.08)] grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:border-slate-200 hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)] transition-all duration-700 cursor-default group"
                        >
                            <div className="w-8 h-8 relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                {assetMap[tech.name] ? (
                                    <Image
                                        src={assetMap[tech.name]}
                                        alt={tech.name}
                                        className="object-contain max-h-full max-w-full"
                                    />
                                ) : null}
                            </div>
                            <span className="text-[12px] font-extrabold tracking-tight text-slate-800 uppercase">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
