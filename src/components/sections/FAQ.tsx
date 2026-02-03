"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import content from "@/data/content.json";

const { faq } = content;

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const sectionRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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

                tl.fromTo(rightColRef.current,
                    { x: 50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
                )
                    .fromTo(leftColRef.current,
                        { x: -50, opacity: 0 },
                        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
                        "-=0.8"
                    )
                    .fromTo(".faq-item-animation",
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                        "-=0.5"
                    );
            });
        });
    }, []);

    return (
        <section id="faq" ref={sectionRef} className="section bg-white text-[#0f172a] py-24 lg:py-32 overflow-hidden">
            <div className="container px-4 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Accordion */}
                    <div ref={leftColRef} className="lg:col-span-7 order-2 lg:order-1 opacity-0">
                        <div className="space-y-4">
                            {faq.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`faq-item-animation opacity-0 group border rounded-3xl overflow-hidden transition-all duration-500 ${openIndex === index ? 'border-[#002B7F] bg-[#002B7F]/[0.02] shadow-xl shadow-blue-500/5' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                                >
                                    <button
                                        className="w-full text-left px-6 lg:px-10 py-6 lg:py-8 flex items-center justify-between gap-6"
                                        onClick={() => toggleItem(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <span className={`text-base lg:text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-[#002B7F]' : 'text-slate-700 group-hover:text-[#002B7F]'}`}>
                                            {item.question}
                                        </span>
                                        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-2xl border-2 transition-all duration-500 ${openIndex === index ? 'bg-[#002B7F] border-[#002B7F] text-white rotate-180' : 'border-gray-100 text-gray-400 group-hover:border-gray-200'}`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>
                                    <div
                                        className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-6 lg:px-10 pb-8 lg:pb-10">
                                            <div className="pt-6 border-t border-gray-100/50">
                                                <p className="text-slate-500 text-[15px] lg:text-base leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Title & Image */}
                    <div ref={rightColRef} className="lg:col-span-5 order-1 lg:order-2 sticky top-32 opacity-0">
                        <div className="relative">
                            <span className="inline-block px-4 py-1.5 bg-[#002B7F] text-white text-[11px] font-bold rounded-full uppercase tracking-[0.2em] mb-6 shadow-lg shadow-blue-500/20">
                                {faq.tag}
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter text-[#0f172a] leading-[1.1]">
                                {faq.title}
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-md">
                                {faq.description}
                            </p>

                            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-500/10">
                                <Image
                                    src="/C:/Users/IT WIG/.gemini/antigravity/brain/dcc9bad9-76d0-4c07-89b0-e18a00342434/faq_modern_visual_1770102012340.png"
                                    alt="Professional Support Illustration"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002B7F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10 blur-3xl opacity-60 animate-pulse"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
