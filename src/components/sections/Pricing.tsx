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
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                // Initial appearance
                gsap.fromTo(".pricing-header",
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                        }
                    }
                );

                // Horizontal Scroll Trigger
                const cards = gsap.utils.toArray(".pricing-card-compact");
                if (cards.length > 0) {
                    const totalWidth = container.scrollWidth - window.innerWidth + (window.innerWidth * 0.1); // Add some padding

                    gsap.to(container, {
                        x: () => -(container.scrollWidth - window.innerWidth + 64), // 64 is container padding
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            pin: true,
                            scrub: 1,
                            start: "top 10%",
                            end: () => `+=${container.scrollWidth}`,
                            invalidateOnRefresh: true,
                        }
                    });
                }
            });
        });
    }, []);

    return (
        <section id="pricing" ref={sectionRef} className="pricing-section-new overflow-hidden">
            <div className="container px-4 lg:px-8">
                {/* Header */}
                <div className="pricing-header text-center mb-16 opacity-0">
                    <span className="inline-block px-3 py-1 bg-[#002B7F] text-white text-[10px] font-semibold rounded-full uppercase tracking-widest mb-4">
                        {pricing.tag}
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{pricing.title}</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        {pricing.description}
                    </p>
                </div>

                <div className="pricing-slider-wrapper relative">
                    <div
                        ref={containerRef}
                        className="pricing-grid-slider flex gap-6"
                        style={{ width: "fit-content" }}
                    >
                        {(pricing.packages as Package[]).map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`pricing-card-compact flex-shrink-0 w-[350px] ${pkg.featured ? "featured" : ""}`}
                            >
                                {/* Tier Badge */}
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

                                {/* Name */}
                                <h3 className="pkg-name text-2xl font-bold mb-2">{pkg.name}</h3>

                                {/* Tagline */}
                                <p className="pkg-tagline text-xs text-secondary leading-relaxed mb-6 min-h-[40px]">
                                    {pkg.tagline}
                                </p>

                                {/* Price */}
                                <div className="pkg-price-details mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Estimasi Investasi</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="price-main text-2xl font-black text-[#002B7F]">{pkg.priceFrom}</span>
                                    </div>
                                    <div className="price-range text-[11px] text-slate-500 mt-2 border-t border-slate-200 pt-2 flex justify-between items-center">
                                        <span>Hingga:</span>
                                        <span className="font-bold text-slate-900">{pkg.priceTo}</span>
                                    </div>
                                </div>

                                {/* Specs Heading */}
                                <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-4 px-1">Spesifikasi Detail</div>

                                {/* Specs */}
                                <div className="pkg-specs space-y-3 mb-8">
                                    <div className="spec-row-new flex justify-between items-center py-2 border-b border-slate-50">
                                        <span className="text-xs text-slate-500">Model Teknis</span>
                                        <span className="text-xs font-semibold text-slate-900">{pkg.specs.teknis}</span>
                                    </div>
                                    <div className="spec-row-new flex justify-between items-center py-2 border-b border-slate-50">
                                        <span className="text-xs text-slate-500">Infrastruktur</span>
                                        <span className="text-xs font-semibold text-slate-900">{pkg.specs.server}</span>
                                    </div>
                                    <div className="spec-row-new flex justify-between items-center py-2 border-b border-slate-50">
                                        <span className="text-xs text-slate-500">Estimasi</span>
                                        <span className="text-xs font-semibold text-slate-900">{pkg.specs.waktu}</span>
                                    </div>
                                    <div className="spec-row-new flex justify-between items-center py-2 border-b border-slate-50">
                                        <span className="text-xs text-slate-500">Layanan Revisi</span>
                                        <span className="text-xs font-semibold text-slate-900">{pkg.specs.revisi}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-8">
                                    <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-4 px-1">Fitur Utama</div>
                                    <ul className="pkg-features space-y-3">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 bg-green-100 rounded-full p-1">
                                                    <svg className="w-3 h-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-xs text-slate-600 leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Button */}
                                <div className="mt-auto">
                                    <a
                                        href={site.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`pkg-btn w-full block py-4 rounded-2xl text-center text-sm font-bold transition-all duration-300 ${pkg.featured ? "bg-[#002B7F] text-white shadow-xl shadow-blue-900/20 hover:scale-[1.02] hover:bg-[#001D56]" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            }`}
                                    >
                                        {pkg.buttonText}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
