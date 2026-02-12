"use client";

import { useEffect, useRef } from "react";
import content from "@/data/content.json";

const { process } = content;

export default function Process() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const leftCol = leftColRef.current;
        if (!section || !leftCol) return;

        // Only enable GSAP pinning on desktop (lg breakpoint = 1024px)
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                // 1. PINNING THE LEFT COLUMN — only on desktop
                if (isDesktop) {
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top top",
                        end: "bottom bottom",
                        pin: leftCol,
                        pinSpacing: false,
                    });
                }

                // 2. PROGRESS LINE ANIMATION
                gsap.fromTo(
                    lineRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".process-items-container",
                            start: "top 20%",
                            end: "bottom center",
                            scrub: 0.5,
                        },
                    }
                );

                // 3. INDIVIDUAL ITEM ANIMATIONS
                const items = gsap.utils.toArray(".process-item-trigger");
                items.forEach((item: any) => {
                    const dot = item.querySelector(".process-dot-inner");
                    const stepNum = item.querySelector(".step-number");
                    const title = item.querySelector(".process-item-title");
                    const contentBox = item.querySelector(".process-item-content");

                    gsap.fromTo(contentBox,
                        { opacity: 0, y: 40, scale: 0.98 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: item,
                                start: "top 90%",
                                toggleActions: "play none none none"
                            }
                        }
                    );

                    ScrollTrigger.create({
                        trigger: item,
                        start: "top center-=100",
                        end: "bottom center-=100",
                        onEnter: () => {
                            gsap.to(dot, { scale: 1.8, backgroundColor: "#002B7F", duration: 0.4 });
                            gsap.to(stepNum, { color: "#002B7F", opacity: 1, duration: 0.4 });
                            gsap.to(title, { color: "#002B7F", x: 8, duration: 0.4 });
                            gsap.to(contentBox, {
                                borderColor: "rgba(0, 43, 127, 0.2)",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 30px 60px -20px rgba(0, 43, 127, 0.12)",
                                duration: 0.4
                            });
                        },
                        onLeave: () => {
                            gsap.to(dot, { scale: 1, backgroundColor: "#e2e8f0", duration: 0.4 });
                            gsap.to(stepNum, { color: "#94a3b8", opacity: 0.5, duration: 0.4 });
                            gsap.to(title, { color: "#0f172a", x: 0, duration: 0.4 });
                            gsap.to(contentBox, {
                                borderColor: "transparent",
                                backgroundColor: "rgba(248, 250, 252, 0.5)",
                                boxShadow: "none",
                                duration: 0.4
                            });
                        },
                        onEnterBack: () => {
                            gsap.to(dot, { scale: 1.8, backgroundColor: "#002B7F", duration: 0.4 });
                            gsap.to(stepNum, { color: "#002B7F", opacity: 1, duration: 0.4 });
                            gsap.to(title, { color: "#002B7F", x: 8, duration: 0.4 });
                            gsap.to(contentBox, {
                                borderColor: "rgba(0, 43, 127, 0.2)",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 30px 60px -20px rgba(0, 43, 127, 0.12)",
                                duration: 0.4
                            });
                        },
                        onLeaveBack: () => {
                            gsap.to(dot, { scale: 1, backgroundColor: "#e2e8f0", duration: 0.4 });
                            gsap.to(stepNum, { color: "#94a3b8", opacity: 0.5, duration: 0.4 });
                            gsap.to(title, { color: "#0f172a", x: 0, duration: 0.4 });
                            gsap.to(contentBox, {
                                borderColor: "transparent",
                                backgroundColor: "rgba(248, 250, 252, 0.5)",
                                boxShadow: "none",
                                duration: 0.4
                            });
                        }
                    });
                });

                gsap.fromTo(".process-sticky-header",
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1, x: 0,
                        duration: 1.2,
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
        <section id="process" ref={sectionRef} className="section bg-white overflow-hidden py-0 border-t border-slate-50">
            <div className="container px-4 sm:px-6 lg:px-12 mx-auto py-16 sm:py-20 lg:py-32">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">

                    {/* Left Side: Pinned Headline Container */}
                    <div className="lg:w-1/3 w-full self-start" ref={leftColRef}>
                        <div className="process-sticky-header h-fit lg:pt-8">
                            <span className="inline-block px-3 py-1 bg-[#002B7F] text-white text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-4 sm:mb-6">
                                {process.tag}
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#0f172a] mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                                {process.title}
                            </h2>
                            <div className="w-10 sm:w-12 h-1 bg-[#002B7F] mb-4 sm:mb-8 rounded-full" />
                            <p className="text-sm sm:text-base lg:text-lg text-[#64748b] leading-relaxed max-w-xs font-medium">
                                {process.description}
                            </p>

                            <div className="mt-8 lg:mt-12 hidden lg:block">
                                <div className="flex items-center gap-3 text-[10px] font-bold text-[#002B7F] uppercase tracking-widest opacity-60">
                                    <div className="w-8 h-[1px] bg-[#002B7F]"></div>
                                    The Roadmap to Success
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Vertical Timeline Items */}
                    <div className="lg:w-2/3 w-full relative process-items-container pl-8 sm:pl-10 md:pl-12 lg:pl-0 flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 lg:pb-[20vh]">

                        {/* Connection Line (Static) */}
                        <div className="absolute left-[8px] sm:left-[12px] md:left-[16px] top-6 bottom-6 w-[1px] bg-slate-100" />

                        {/* Progress Line overlay */}
                        <div
                            ref={lineRef}
                            className="absolute left-[8px] sm:left-[12px] md:left-[16px] top-6 bottom-6 w-[1px] bg-[#002B7F] origin-top z-10"
                        />

                        {process.items.map((item, index) => (
                            <div key={index} className="process-item-trigger relative pl-6 sm:pl-8 md:pl-16 lg:pl-20 py-1 group transition-all duration-700">

                                {/* Circle Dot Marker */}
                                <div className="absolute left-[-2px] sm:left-[1px] md:left-[5px] top-6 sm:top-8 w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] bg-white z-20 flex items-center justify-center rounded-full border border-slate-100 shadow-sm">
                                    <div className="process-dot-inner w-2 h-2 rounded-full bg-slate-200 transition-all duration-500" />
                                </div>

                                {/* Step Card */}
                                <div className="process-item-content relative bg-slate-50/50 p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-transparent transition-all duration-700 overflow-hidden">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                                        <span className="step-number text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-[#94a3b8] opacity-50 transition-all duration-500 uppercase">
                                            PHASE {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <div className="h-[1px] w-6 sm:w-8 bg-slate-200" />
                                    </div>

                                    <h3 className="process-item-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-[#0f172a] mb-2 sm:mb-3 md:mb-4 transition-all duration-500">
                                        {item.title}
                                    </h3>

                                    <p className="text-[#64748b] leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl font-medium">
                                        {item.desc}
                                    </p>

                                    <div className="absolute right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-black text-slate-200/20 select-none pointer-events-none group-hover:text-[#002B7F]/5 transition-colors duration-1000 leading-none">
                                        {index + 1}
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
