"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import content from "@/data/content.json";

const { portfolio } = content;

interface PortfolioItem {
    img: string;
    title: string;
    category: string;
    desc: string;
    features?: string[];
}

export default function Portfolio() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });

                tl.fromTo(".portfolio-header",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 }
                )
                    .fromTo(".portfolio-card",
                        { y: 40, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.7, stagger: 0.2 },
                        "-=0.5"
                    );
            });
        });
    }, []);

    return (
        <section id="portfolio" ref={sectionRef} className="portfolio-section bg-white">
            <div className="container px-4 lg:px-8">
                {/* Header */}
                <div className="portfolio-header opacity-0 mb-16 text-center">
                    <span className="inline-block px-3 py-1 bg-accent-primary text-white text-[10px] font-semibold rounded-full uppercase tracking-widest mb-4">
                        {portfolio.tag}
                    </span>
                    <h2 className="text-4xl font-semibold text-accent-primary mb-4">{portfolio.title}</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">{portfolio.description}</p>
                </div>

                {/* Grid */}
                <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(portfolio.items as PortfolioItem[]).map((item, index) => (
                        <div
                            key={index}
                            className={`portfolio-card group relative bg-white border border-slate-100 rounded-3xl overflow-hidden transition-all duration-500 opacity-0 hover:border-accent-primary hover:shadow-2xl ${activeIndex === index ? 'ring-2 ring-accent-primary' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#002B7F]/0 group-hover:bg-[#002B7F]/20 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">{item.category}</span>
                                <h3 className="text-xl font-semibold text-accent-primary mb-3">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>

                                {/* Features Panel (Dynamic) */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                                        {item.features?.map((feature, i) => (
                                            <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Bar */}
                                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                    <span className="text-xs font-bold text-accent-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                                        {activeIndex === index ? 'Tutup Detail' : 'Lihat Detail'}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
