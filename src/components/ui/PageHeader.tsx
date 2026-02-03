"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import InteractiveBackground from "@/components/ui/InteractiveBackground";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    eyebrow?: string;
}

export default function PageHeader({ title, subtitle, eyebrow }: PageHeaderProps) {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        import("gsap").then(({ gsap }) => {
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );
        });
    }, []);

    return (
        <div ref={headerRef} className="relative py-24 md:py-32 overflow-hidden bg-white">
            <InteractiveBackground />

            {/* Content Container */}
            <div className="container px-4 lg:px-8 relative z-10 text-center">
                <nav className="flex justify-center items-center gap-2 mb-8 text-[13px] font-semibold tracking-wide text-slate-400 uppercase">
                    <Link href="/" className="hover:text-[#002B7F] transition-colors">Home</Link>
                    <span className="opacity-30">/</span>
                    <span className="text-[#002B7F]">{title}</span>
                </nav>

                {eyebrow && (
                    <span className="inline-block px-4 py-1.5 bg-[#002B7F] text-white text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-8 shadow-lg shadow-blue-500/10">
                        {eyebrow}
                    </span>
                )}

                <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-[#0f172a] leading-tight">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Bottom Border Accent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
        </div>
    );
}
