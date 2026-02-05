"use client";

import { useEffect, useRef } from "react";
import content from "@/data/content.json";

const { pricing, site } = content;

interface Package {
    id: string;
    tier: string;
    tierClass: string;
    name: string;
    tagline: string;
    priceFrom: string;
    priceTo: string;
    featured: boolean;
    premium: boolean;
    specs: {
        teknis: string;
        server: string;
        waktu: string;
        revisi: string;
        garansi: string;
        online: string;
    };
    features: string[];
    buttonText: string;
    buttonStyle: string;
}

const tierColors: { [key: string]: string } = {
    "tier-1": "bg-slate-100 text-slate-600 px-2 py-0.5",
    "tier-2": "bg-slate-200 text-slate-700 px-2 py-0.5",
    "tier-3": "bg-slate-800 text-white px-2 py-0.5",
    "tier-4": "bg-slate-900 text-white px-2 py-0.5",
    "tier-5": "bg-[#002B7F] text-white px-2 py-0.5",
};

export default function Pricing() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                // Animate Header on Scroll
                gsap.fromTo(".pricing-header-sticky",
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );

                // Animate Cards Individually
                const cards = gsap.utils.toArray(".pricing-card-vertical");
                cards.forEach((card: any, i: number) => {
                    gsap.fromTo(card,
                        { opacity: 0, y: 50, scale: 0.95 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });
            });
        });
    }, []);

    return (
        <section id="pricing" ref={sectionRef} className="pricing-section-vertical">
            <div className="container mx-auto px-4 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Side: Sticky Header */}
                    <div className="lg:w-1/3">
                        <div className="pricing-header-sticky lg:sticky lg:top-32 h-fit">
                            <span className="inline-block px-4 py-1.5 bg-[#002B7F] text-white text-[11px] font-bold rounded-full uppercase tracking-[0.2em] mb-6">
                                {pricing.tag}
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-6 leading-[1.1]">
                                {pricing.title}
                            </h2>
                            <p className="text-lg text-[#64748b] leading-relaxed max-w-sm">
                                {pricing.description}
                            </p>

                            <div className="hidden lg:block mt-12">
                                <div className="flex items-center gap-4 text-sm font-semibold text-[#002B7F]">
                                    <div className="w-12 h-[2px] bg-[#002B7F]"></div>
                                    Scroll ke bawah untuk melihat paket
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Vertical Pricing Cards */}
                    <div className="lg:w-2/3 flex flex-col gap-12 lg:gap-20">
                        {(pricing.packages as Package[]).map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`pricing-card-vertical w-full ${pkg.featured ? "featured" : ""}`}
                            >
                                {/* Top Decoration for Featured */}
                                {pkg.featured && <div className="featured-top-glow"></div>}

                                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                                    {/* Left Column: Basic Info */}
                                    <div className="md:w-1/2 flex flex-col">
                                        <div className="flex justify-between items-start mb-6">
                                            <span className={`tier-badge ${tierColors[pkg.tierClass] || "bg-gray-100 text-gray-600"}`}>
                                                {pkg.tier}
                                            </span>
                                            {pkg.premium && (
                                                <span className="premium-lock">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-amber-500">
                                                        <path d="M12 15V17M6 10H18M7 10V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V10M17 10H18C19.1046 10 20 10.8954 20 12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V12C4 10.8954 4.89543 10 6 10H7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="pkg-name text-3xl font-black mb-3 text-[#0f172a]">{pkg.name}</h3>
                                        <p className="pkg-tagline text-sm text-[#64748b] leading-relaxed mb-8 flex-grow">
                                            {pkg.tagline}
                                        </p>

                                        <div className="pkg-price-details bg-[#f8fafc] p-6 rounded-3xl border border-[#e2e8f0] transition-luxury hover:border-[#002B7F]/30">
                                            <div className="text-[10px] text-[#94a3b8] font-black uppercase tracking-[0.1em] mb-2">Mulai Dari</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="price-main text-3xl font-black text-[#002B7F]">{pkg.priceFrom}</span>
                                            </div>
                                            <div className="price-range text-xs text-[#64748b] mt-4 pt-4 border-t border-[#e2e8f0]/60 flex justify-between items-center">
                                                <span>Hingga:</span>
                                                <span className="font-bold text-[#1e293b]">{pkg.priceTo}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Detailed Specs & Features */}
                                    <div className="md:w-1/2 flex flex-col justify-between pt-4 md:pt-0">
                                        <div className="mb-8">
                                            <div className="text-[10px] font-black text-[#0f172a] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-[#002B7F] rounded-full"></div>
                                                Spesifikasi Utama
                                            </div>
                                            <div className="pkg-specs space-y-4">
                                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-[#f1f5f9]">
                                                    <span className="text-xs text-[#64748b] font-medium">Model Teknis</span>
                                                    <span className="text-xs font-bold text-[#0f172a]">{pkg.specs.teknis}</span>
                                                </div>
                                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-[#f1f5f9]">
                                                    <span className="text-xs text-[#64748b] font-medium">Infrastruktur</span>
                                                    <span className="text-xs font-bold text-[#0f172a]">{pkg.specs.server}</span>
                                                </div>
                                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-[#f1f5f9]">
                                                    <span className="text-xs text-[#64748b] font-medium">SLA Pengerjaan</span>
                                                    <span className="text-xs font-bold text-[#0f172a]">{pkg.specs.waktu}</span>
                                                </div>
                                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-[#f1f5f9]">
                                                    <span className="text-xs text-[#64748b] font-medium">Batasan Revisi</span>
                                                    <span className="text-xs font-bold text-[#0f172a]">{pkg.specs.revisi}</span>
                                                </div>
                                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-[#f1f5f9]">
                                                    <span className="text-xs text-[#64748b] font-medium">Garansi</span>
                                                    <span className="text-xs font-bold text-[#0f172a]">{pkg.specs.garansi}</span>
                                                </div>
                                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-[#f1f5f9]">
                                                    <span className="text-xs text-[#64748b] font-medium">Online / Deploy</span>
                                                    <span className="text-xs font-bold text-[#0f172a]">{pkg.specs.online}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-10">
                                            <div className="text-[10px] font-black text-[#0f172a] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-[#002B7F] rounded-full"></div>
                                                Fitur Unggulan
                                            </div>
                                            <ul className="pkg-features space-y-4">
                                                {pkg.features.slice(0, 4).map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3 group">
                                                        <div className="mt-0.5 bg-blue-50 text-[#002B7F] rounded-full p-1.5 transition-luxury group-hover:bg-[#002B7F] group-hover:text-white">
                                                            <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-[13px] text-[#475569] font-medium leading-[1.4] transition-luxury group-hover:text-[#0f172a]">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <a
                                            href={site.whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`pkg-btn-new w-full block py-4 lg:py-5 rounded-2xl text-center text-[13px] font-bold tracking-wider transition-luxury ${pkg.featured
                                                ? "bg-[#002B7F] text-white shadow-2xl shadow-blue-500/20 hover:bg-[#001D56] hover:-translate-y-1"
                                                : "bg-[#0f172a] text-white hover:bg-[#1e293b] hover:-translate-y-1"
                                                }`}
                                        >
                                            {pkg.buttonText.toUpperCase()}
                                        </a>
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
