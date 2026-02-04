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

                // Progress line animation
                gsap.fromTo(
                    lineRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".process-items-container",
                            start: "top 25%",
                            end: "bottom 75%",
                            scrub: 0.5,
                        },
                    }
                );

                // Individual item animations
                const items = gsap.utils.toArray(".process-item-trigger");
                items.forEach((item: any) => {
                    const dot = item.querySelector(".process-dot-inner");
                    const stepNum = item.querySelector(".step-number");
                    const title = item.querySelector(".process-item-title");

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start: "top 40%",
                            end: "bottom 40%",
                            toggleActions: "play reverse play reverse",
                            onEnter: () => {
                                gsap.to(dot, { scale: 1.5, backgroundColor: "#002B7F", duration: 0.3 });
                                gsap.to(stepNum, { color: "#002B7F", opacity: 1, duration: 0.3 });
                                gsap.to(title, { x: 10, color: "#002B7F", duration: 0.3 });
                            },
                            onLeave: () => {
                                gsap.to(dot, { scale: 1, backgroundColor: "#e2e8f0", duration: 0.3 });
                                gsap.to(stepNum, { color: "#94a3b8", opacity: 0.5, duration: 0.3 });
                                gsap.to(title, { x: 0, color: "#002B7F", duration: 0.3 });
                            },
                            onEnterBack: () => {
                                gsap.to(dot, { scale: 1.5, backgroundColor: "#002B7F", duration: 0.3 });
                                gsap.to(stepNum, { color: "#002B7F", opacity: 1, duration: 0.3 });
                                gsap.to(title, { x: 10, color: "#002B7F", duration: 0.3 });
                            },
                            onLeaveBack: () => {
                                gsap.to(dot, { scale: 1, backgroundColor: "#e2e8f0", duration: 0.3 });
                                gsap.to(stepNum, { color: "#94a3b8", opacity: 0.5, duration: 0.3 });
                                gsap.to(title, { x: 0, color: "#002B7F", duration: 0.3 });
                            }
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
            <div className="container px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Side: Sticky Headline */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-40 process-sticky-header">
                            <span className="inline-block px-3 py-1 bg-accent-primary/10 text-accent-primary text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-6">
                                {process.tag}
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#002B7F] mb-8 leading-[1.1] tracking-tight">
                                {process.title}
                            </h2>
                            <div className="w-16 h-1 bg-accent-primary mb-8 rounded-full" />
                            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                                {process.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Vertical Timeline */}
                    <div className="lg:w-2/3 relative process-items-container pl-4 md:pl-0">

                        {/* Background Line (Static) */}
                        <div className="absolute left-[8px] md:left-[16px] top-4 bottom-4 w-[2px] bg-slate-100 hidden sm:block" />

                        {/* Animated Progress Line */}
                        <div
                            ref={lineRef}
                            className="absolute left-[8px] md:left-[16px] top-4 bottom-4 w-[2px] bg-accent-primary origin-top hidden sm:block z-10"
                        />

                        <div className="space-y-24 md:space-y-32">
                            {process.items.map((item, index) => (
                                <div key={index} className="process-item-trigger relative pl-10 md:pl-24 group">

                                    {/* Dot Marker */}
                                    <div className="absolute left-[-1px] md:left-[7px] top-1.5 w-[20px] h-[20px] bg-white z-20 hidden sm:flex items-center justify-center">
                                        <div className="process-dot-inner w-2 h-2 rounded-full bg-slate-200 transition-all duration-500" />
                                    </div>

                                    {/* Content Box */}
                                    <div className="relative">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="step-number text-xs font-black tracking-widest text-slate-400 opacity-50 transition-all duration-500">
                                                STEP {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                        </div>

                                        <h3 className="process-item-title text-2xl md:text-3xl font-bold text-slate-800 mb-5 transition-all duration-500">
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-500 leading-relaxed text-base md:text-lg max-w-2xl bg-white/50 backdrop-blur-sm">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Aesthetic Number Background */}
                                    <div className="absolute -right-4 top-0 text-[120px] font-black text-slate-50/70 select-none -z-10 transition-colors duration-700 pointer-events-none">
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
