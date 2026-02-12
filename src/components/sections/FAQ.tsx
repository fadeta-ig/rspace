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
        <section id="faq" ref={sectionRef} className="section bg-white text-[#0f172a] py-16 sm:py-20 lg:py-32 overflow-hidden">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">

                    {/* Left Column: Accordion */}
                    <div ref={leftColRef} className="lg:col-span-7 order-2 lg:order-1 opacity-0">
                        <div className="space-y-3 sm:space-y-4">
                            {faq.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`faq-item-animation opacity-0 group border rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ${openIndex === index ? 'border-[#002B7F] bg-[#002B7F]/[0.02] shadow-xl shadow-blue-500/5' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                                >
                                    <button
                                        className="w-full text-left px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between gap-3 sm:gap-4"
                                        onClick={() => toggleItem(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <span className={`text-sm sm:text-base lg:text-lg font-bold transition-colors duration-300 leading-snug ${openIndex === index ? 'text-[#002B7F]' : 'text-slate-700 group-hover:text-[#002B7F]'}`}>
                                            {item.question}
                                        </span>
                                        <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl sm:rounded-2xl border-2 transition-all duration-500 ${openIndex === index ? 'bg-[#002B7F] border-[#002B7F] text-white rotate-180' : 'border-gray-100 text-gray-400 group-hover:border-gray-200'}`}>
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>
                                    <div
                                        className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-4 sm:px-6 lg:px-8 pb-5 sm:pb-6 lg:pb-8">
                                            <div className="pt-4 sm:pt-5 border-t border-gray-100/50">
                                                <p className="text-slate-500 text-[13px] sm:text-sm lg:text-base leading-relaxed">
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
                    <div ref={rightColRef} className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32 opacity-0">
                        <div className="relative">
                            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#002B7F] text-white text-[10px] sm:text-[11px] font-bold rounded-full uppercase tracking-[0.2em] mb-4 sm:mb-6 shadow-lg shadow-blue-500/20">
                                {faq.tag}
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-4 sm:mb-6 lg:mb-8 tracking-tighter text-[#0f172a] leading-[1.1]">
                                {faq.title}
                            </h2>
                            <p className="text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12 max-w-md">
                                {faq.description}
                            </p>

                            <div className="relative group rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-500/10 hidden sm:block">
                                <Image
                                    src="/images/faq-visual.png"
                                    alt="Professional Support Illustration"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#002B7F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10 blur-3xl opacity-60 animate-pulse hidden sm:block"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
