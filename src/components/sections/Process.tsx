"use client";

import { useEffect, useRef } from "react";
import content from "@/data/content.json";

const { process } = content;

export default function Process() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                // Timeline for the vertical line progress
                gsap.fromTo(
                    lineRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".process-items-container",
                            start: "top center",
                            end: "bottom center",
                            scrub: 1,
                        },
                    }
                );

                // Animate each item
                const itemTriggers = gsap.utils.toArray(".process-item-trigger");
                itemTriggers.forEach((item: any) => {
                    gsap.fromTo(
                        item,
                        {
                            opacity: 0.2,
                            y: 20,
                            filter: "blur(4px)"
                        },
                        {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            scrollTrigger: {
                                trigger: item,
                                start: "top 80%",
                                end: "top 40%",
                                scrub: 1,
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    );

                    // Animate the dot inside the item
                    const dot = item.querySelector(".process-dot");
                    if (dot) {
                        gsap.fromTo(
                            dot,
                            {
                                scale: 0.5,
                                backgroundColor: "var(--border-color, #e2e8f0)"
                            },
                            {
                                scale: 1,
                                backgroundColor: "var(--accent-primary, #002B7F)",
                                scrollTrigger: {
                                    trigger: item,
                                    start: "top center",
                                    end: "bottom center",
                                    scrub: 1,
                                },
                            }
                        );
                    }
                });
            });
        });
    }, []);

    return (
        <section id="process" ref={sectionRef} className="section bg-white overflow-hidden py-24 md:py-32">
            <div className="container px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Side: Sticky Info */}
                    <div className="lg:w-2/5">
                        <div className="lg:sticky lg:top-32">
                            <div className="reveal">
                                <span className="inline-block px-3 py-1 bg-accent-primary text-white text-[10px] font-semibold rounded-full uppercase tracking-widest mb-6">
                                    {process.tag}
                                </span>
                                <h2 className="text-4xl lg:text-6xl font-bold text-accent-primary mb-8 leading-tight tracking-tight">
                                    {process.title}
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-md mb-10">
                                    {process.description}
                                </p>

                                <div className="flex items-center gap-6 group cursor-default">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-accent-primary transition-all duration-500 group-hover:bg-accent-primary group-hover:text-white group-hover:scale-110">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-accent-primary font-bold text-sm">High Standard QC</h4>
                                        <p className="text-slate-400 text-xs">Pengecekan kualitas di setiap fase</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Timeline Process */}
                    <div className="lg:w-3/5 relative process-items-container pb-12">
                        {/* Vertical Line Background */}
                        <div className="absolute left-[15px] top-6 bottom-0 w-[1px] bg-slate-100 hidden md:block" />

                        {/* Vertical Progress Line (Animated) */}
                        <div
                            ref={lineRef}
                            className="absolute left-[15px] top-6 bottom-0 w-[1px] bg-accent-primary origin-top hidden md:block"
                        />

                        <div className="space-y-16 md:space-y-32">
                            {process.items.map((item, index) => (
                                <div key={index} className="process-item-trigger relative pl-0 md:pl-20 group">
                                    {/* Point Indicator */}
                                    <div className="process-dot absolute left-[7px] top-1.5 w-[17px] h-[17px] rounded-full bg-white border border-slate-200 z-10 hidden md:flex items-center justify-center transition-all duration-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                    </div>

                                    {/* Step Number Badge */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-sm font-black text-accent-primary/20 tracking-tighter">
                                            STEP {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <div className="h-[1px] w-8 bg-slate-100" />
                                    </div>

                                    <div className="relative">
                                        <h3 className="text-2xl md:text-3xl font-bold text-accent-primary mb-4 transition-all duration-500 group-hover:translate-x-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed max-w-xl text-base md:text-lg">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Visual Accent */}
                                    <div className="absolute -right-4 -bottom-8 text-8xl font-black text-slate-50/50 select-none -z-10 group-hover:text-accent-primary/5 transition-colors duration-700">
                                        {index + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
