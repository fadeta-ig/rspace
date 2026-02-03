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
                duration: 25,
                ease: "none",
                repeat: -1,
            });
        });
    }, []);

    return (
        <section className="py-20 bg-white overflow-hidden border-y border-gray-100">
            <div className="container px-4 mb-12 text-center">
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-slate-400 mb-2">
                    {techStack.title}
                </h2>
            </div>

            <div className="relative">
                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div
                    ref={scrollRef}
                    className="flex items-center gap-16 whitespace-nowrap"
                >
                    {techStack.items.map((tech, i) => (
                        <div key={i} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group">
                            <TechIcon type={tech.icon} className="w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
                            <span className="text-lg font-bold tracking-tight text-slate-900">{tech.name}</span>
                        </div>
                    ))}
                    {/* Clones for infinite animation will be appended by GSAP but we can also double map for safety/SSR */}
                    {techStack.items.map((tech, i) => (
                        <div key={`clone-${i}`} className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group">
                            <TechIcon type={tech.icon} className="w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
                            <span className="text-lg font-bold tracking-tight text-slate-900">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
