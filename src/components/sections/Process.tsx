"use client";

import { useEffect, useRef } from "react";
import content from "@/data/content.json";

const { process } = content;

export default function Process() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                // Progress line animation
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
                            scrub: 0.5,
                        },
                    }
                );

                // Individual item animations - Discrete entry, Scrubbed highlight
                const items = gsap.utils.toArray(".process-item-trigger");
                items.forEach((item: any) => {
                    const dot = item.querySelector(".process-dot-inner");
                    const stepNum = item.querySelector(".step-number");
                    const title = item.querySelector(".process-item-title");
                    const contentBox = item.querySelector(".process-item-content");

                    // 1. Entry Animation (Matches Pricing Section logic)
                    gsap.fromTo(contentBox,
                        { opacity: 0, y: 40, scale: 0.98 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: item,
                                start: "top 90%",
                                toggleActions: "play none none none"
                            }
                        }
                    );

                    // 2. Active State Highlights (Scrubbed for interactive feel)
                    ScrollTrigger.create({
                        trigger: item,
                        start: "top center",
                        end: "bottom center",
                        onEnter: () => {
                            gsap.to(dot, { scale: 1.5, backgroundColor: "#002B7F", duration: 0.4 });
                            gsap.to(stepNum, { color: "#002B7F", opacity: 1, duration: 0.4 });
                            gsap.to(title, { color: "#002B7F", x: 5, duration: 0.4 });
                            gsap.to(contentBox, { borderColor: "rgba(0, 43, 127, 0.15)", backgroundColor: "#ffffff", boxShadow: "0 20px 40px -15px rgba(0, 43, 127, 0.08)", duration: 0.4 });
                        },
                        onLeave: () => {
                            gsap.to(dot, { scale: 1, backgroundColor: "#e2e8f0", duration: 0.4 });
                            gsap.to(stepNum, { color: "#94a3b8", opacity: 0.5, duration: 0.4 });
                            gsap.to(title, { color: "#0f172a", x: 0, duration: 0.4 });
                            gsap.to(contentBox, { borderColor: "transparent", backgroundColor: "rgba(248, 250, 252, 0.3)", boxShadow: "none", duration: 0.4 });
                        },
                        onEnterBack: () => {
                            gsap.to(dot, { scale: 1.5, backgroundColor: "#002B7F", duration: 0.4 });
                            gsap.to(stepNum, { color: "#002B7F", opacity: 1, duration: 0.4 });
                            gsap.to(title, { color: "#002B7F", x: 5, duration: 0.4 });
                            gsap.to(contentBox, { borderColor: "rgba(0, 43, 127, 0.15)", backgroundColor: "#ffffff", boxShadow: "0 20px 40px -15px rgba(0, 43, 127, 0.08)", duration: 0.4 });
                        },
                        onLeaveBack: () => {
                            gsap.to(dot, { scale: 1, backgroundColor: "#e2e8f0", duration: 0.4 });
                            gsap.to(stepNum, { color: "#94a3b8", opacity: 0.5, duration: 0.4 });
                            gsap.to(title, { color: "#0f172a", x: 0, duration: 0.4 });
                            gsap.to(contentBox, { borderColor: "transparent", backgroundColor: "rgba(248, 250, 252, 0.3)", boxShadow: "none", duration: 0.4 });
                        }
                    });
                });

                // Sticky left column fade in
                gsap.fromTo(".process-sticky-header",
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1, x: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });
        });
    }, []);

    return (
        <section id="process" ref={sectionRef} className="section bg-white overflow-hidden py-32 border-t border-slate-50">
            <div className="container px-4 lg:px-12 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Side: Sticky Headline */}
                    <div className="lg:w-1/3">
                        <div className="process-sticky-header lg:sticky lg:top-32 h-fit">
                            <span className="inline-block px-4 py-1.5 bg-[#002B7F] text-white text-[11px] font-bold rounded-full uppercase tracking-[0.2em] mb-6">
                                {process.tag}
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-6 leading-[1.1]">
                                {process.title}
                            </h2>
                            <div className="w-16 h-1 bg-[#002B7F] mb-8 rounded-full" />
                            <p className="text-lg text-[#64748b] leading-relaxed max-w-sm">
                                {process.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Vertical Timeline with Sliding items */}
                    <div className="lg:w-2/3 relative process-items-container pl-4 md:pl-0 flex flex-col gap-12 lg:gap-24" ref={containerRef}>

                        {/* Background Line (Static) */}
                        <div className="absolute left-[8px] md:left-[16px] top-4 bottom-4 w-[1px] bg-slate-100 hidden sm:block" />

                        {/* Animated Progress Line */}
                        <div
                            ref={lineRef}
                            className="absolute left-[8px] md:left-[16px] top-4 bottom-4 w-[1px] bg-accent-primary origin-top hidden sm:block z-10"
                        />

                        {process.items.map((item, index) => (
                            <div key={index} className="process-item-trigger relative pl-10 md:pl-24 py-8 group transition-luxury">

                                {/* Dot Marker */}
                                <div className="absolute left-[-1px] md:left-[7px] top-10 w-[20px] h-[20px] bg-white z-20 hidden sm:flex items-center justify-center">
                                    <div className="process-dot-inner w-2 h-2 rounded-full bg-slate-200 transition-all duration-500" />
                                </div>

                                {/* Content Box */}
                                <div className="process-item-content relative bg-slate-50/30 p-8 md:p-10 rounded-3xl border border-transparent hover:border-[#002B7F]/20 hover:bg-white hover:shadow-xl transition-luxury">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="step-number text-[11px] font-black tracking-[0.2em] text-[#94a3b8] opacity-50 transition-all duration-500 uppercase">
                                            STEP {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <div className="h-[1px] w-8 bg-slate-200" />
                                    </div>

                                    <h3 className="process-item-title text-2xl md:text-3xl font-black text-[#0f172a] mb-5 transition-all duration-500">
                                        {item.title}
                                    </h3>

                                    <p className="text-[#64748b] leading-relaxed text-base md:text-lg max-w-2xl">
                                        {item.desc}
                                    </p>

                                    {/* Visual Accent */}
                                    <div className="absolute right-8 top-8 text-6xl font-black text-slate-100/50 select-none pointer-events-none group-hover:text-[#002B7F]/5 transition-colors duration-700">
                                        {(index + 1).toString().padStart(2, '0')}
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
