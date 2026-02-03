"use client";

import { useEffect, useRef } from "react";
import content from "@/data/content.json";
import { TechIcon } from "@/components/ui/Icons";

const { techStack } = content;

export default function TechStack() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        import("gsap").then(({ gsap }) => {
            const width = scrollContainer.scrollWidth / 2;

            gsap.to(scrollContainer, {
                x: `-${width}px`,
                duration: 40, // Very slow for premium smooth feel
                ease: "none",
                repeat: -1,
            });
        });
    }, []);

    return (
        <section className="py-12 bg-white overflow-hidden border-y border-gray-50/50">
            <div className="relative max-w-7xl mx-auto">
                {/* Minimalist Title */}
                <div className="flex justify-center mb-10">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-300 border-b border-slate-100 pb-2">
                        {techStack.title}
                    </span>
                </div>

                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                <div
                    ref={scrollRef}
                    className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
                >
                    {/* Double the list for seamless loop */}
                    {[...techStack.items, ...techStack.items].map((tech, i) => (
                        <div key={i} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default group">
                            <TechIcon type={tech.icon} className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 group-hover:scale-110" />
                            <span className="text-[11px] font-black tracking-tighter text-slate-900 uppercase">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
