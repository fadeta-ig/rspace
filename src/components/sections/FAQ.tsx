"use client";

import { useState, useEffect, useRef } from "react";
import content from "@/data/content.json";

const { faq } = content;

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const sectionRef = useRef<HTMLElement>(null);

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

                tl.fromTo(".faq-header",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 }
                )
                    .fromTo(".faq-item-animation",
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                        "-=0.4"
                    );
            });
        });
    }, []);

    return (
        <section id="faq" ref={sectionRef} className="section bg-white text-accent-primary py-24">
            <div className="container px-4 lg:px-8">
                <div className="faq-header text-center mb-16 opacity-0">
                    <span className="inline-block px-3 py-1 bg-[#002B7F] text-white text-[10px] font-semibold rounded-full uppercase tracking-widest mb-4">
                        {faq.tag}
                    </span>
                    <h2 className="text-4xl font-semibold mb-6">{faq.title}</h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
                        {faq.description}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {faq.items.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item-animation opacity-0 group border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-accent-primary bg-slate-50/50' : 'hover:border-slate-300'}`}
                            >
                                <button
                                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                                    onClick={() => toggleItem(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className={`text-base font-semibold transition-colors duration-300 ${openIndex === index ? 'text-accent-primary' : 'text-slate-700 group-hover:text-accent-primary'}`}>{item.question}</span>
                                    <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-300 ${openIndex === index ? 'bg-accent-primary border-accent-primary text-white' : 'border-slate-200 text-slate-400 group-hover:border-accent-primary group-hover:text-accent-primary'}`}>
                                        <svg
                                            className={`w-3 h-3 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-8 pb-8">
                                        <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-6">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
