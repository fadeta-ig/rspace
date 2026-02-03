"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import content from "@/data/content.json";

const { clientDashboard } = content;

export default function ClientDashboard() {
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
                        start: "top 70%",
                        toggleActions: "play none none none"
                    }
                });

                tl.fromTo(".dashboard-content",
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
                )
                    .fromTo(".dashboard-visual",
                        { x: 50, opacity: 0, scale: 0.95 },
                        { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
                        "-=0.8"
                    )
                    .fromTo(".dash-feature-item",
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                        "-=0.6"
                    );
            });
        });
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#FAFAFA] overflow-hidden">
            <div className="container px-4 lg:px-8 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Content Side */}
                    <div className="dashboard-content lg:w-1/2 opacity-0">
                        <div className="mb-8">
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#002B7F] mb-3 block">
                                {clientDashboard.tag}
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                                {clientDashboard.title}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                {clientDashboard.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                            {clientDashboard.features.map((feature, i) => (
                                <div key={i} className="dash-feature-item opacity-0 group">
                                    <h4 className="text-base font-bold text-slate-900 mb-2 border-l-2 border-[#002B7F] pl-4 group-hover:pl-6 transition-all duration-300">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 leading-relaxed pl-4">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="dashboard-visual lg:w-1/2 opacity-0 relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#002B7F]/5 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#002B7F]/5 rounded-full blur-3xl"></div>

                        <div className="relative p-2 md:p-3 bg-white rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] border border-slate-100 backdrop-blur-sm z-10">
                            <div className="rounded-xl overflow-hidden border border-slate-50">
                                <Image
                                    src={clientDashboard.image}
                                    alt="Client Dashboard Mockup"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Floating Card Overlay */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-50 max-w-[200px] hidden md:block">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[10px] uppercase font-bold text-slate-400">System Live</span>
                                </div>
                                <p className="text-sm font-bold text-slate-800">100% Data Secured</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
