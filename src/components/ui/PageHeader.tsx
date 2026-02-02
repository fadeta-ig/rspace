"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

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
        <div ref={headerRef} className="bg-[#002B7F] text-white py-24 md:py-32 relative overflow-hidden">
            {/* Background pattern/decor */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container px-4 lg:px-8 relative z-10 text-center">
                <nav className="flex justify-center items-center gap-2 mb-6 text-sm text-blue-200/80">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-white font-medium">{title}</span>
                </nav>

                {eyebrow && (
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-[10px] font-semibold rounded-full uppercase tracking-widest mb-4 backdrop-blur-sm border border-white/10">
                        {eyebrow}
                    </span>
                )}

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
