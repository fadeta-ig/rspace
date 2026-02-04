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

                tl.fromTo(".pricing-header",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 }
                )
                    .fromTo(".pricing-card-compact",
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                        "-=0.4"
                    );
            });
        });
    }, []);

    return (
        <section id="pricing" ref={sectionRef} className="pricing-section-new">
            <div className="container px-4 lg:px-8">
                {/* Header */}
                <div className="pricing-header text-center mb-8 opacity-0">
                    <span className="inline-block px-3 py-1 bg-[#002B7F] text-white text-[10px] font-semibold rounded-full uppercase tracking-widest mb-2">
                        {pricing.tag}
                    </span>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{pricing.title}</h2>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">
                        {pricing.description}
                    </p>
                </div>

                <div className="pricing-grid-new">
                    {(pricing.packages as Package[]).map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`pricing-card-compact opacity-0 ${pkg.featured ? "featured" : ""}`}
                        >
                            {/* Tier Badge */}
                            <div className="flex justify-between items-start mb-4">
                                <span className={`tier-badge ${tierColors[pkg.tierClass] || "bg-gray-100 text-gray-600"}`}>
                                    {pkg.tier}
                                </span>
                                {pkg.premium && (
                                    <span className="premium-lock">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-amber-500">
                                            <path d="M12 15V17M6 10H18M7 10V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V10M17 10H18C19.1046 10 20 10.8954 20 12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V12C4 10.8954 4.89543 10 6 10H7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                )}
                            </div>

                            {/* Name */}
                            <h3 className="pkg-name text-lg font-bold mb-1">{pkg.name}</h3>

                            {/* Tagline */}
                            <p className="pkg-tagline text-[10px] text-gray-500 leading-relaxed mb-4 min-h-[30px]">
                                {pkg.tagline}
                            </p>

                            {/* Price */}
                            <div className="pkg-price-details mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">Mulai Dari</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="price-main text-xl font-extrabold text-[#002B7F]">{pkg.priceFrom}</span>
                                </div>
                                <div className="price-range text-[10px] color-slate-500 mt-1 border-t border-slate-200 pt-1">
                                    Hingga: <span className="font-semibold text-slate-700">{pkg.priceTo}</span>
                                </div>
                            </div>

                            {/* Specs Heading */}
                            <div className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2 px-1">Spesifikasi Utama</div>

                            {/* Specs */}
                            <div className="pkg-specs space-y-2 mb-6">
                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-[10px] text-slate-500">Model Teknis</span>
                                    <span className="text-[10px] font-semibold text-slate-900">{pkg.specs.teknis}</span>
                                </div>
                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-[10px] text-slate-500">Infrastruktur</span>
                                    <span className="text-[10px] font-semibold text-slate-900">{pkg.specs.server}</span>
                                </div>
                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-[10px] text-slate-500">Estimasi</span>
                                    <span className="text-[10px] font-semibold text-slate-900">{pkg.specs.waktu}</span>
                                </div>
                                <div className="spec-row-new flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-[10px] text-slate-500">Layanan Revisi</span>
                                    <span className="text-[10px] font-semibold text-slate-900">{pkg.specs.revisi}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-6">
                                <div className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mb-2 px-1">Fitur Unggulan</div>
                                <ul className="pkg-features space-y-2">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <div className="mt-1 bg-green-100 rounded-full p-0.5">
                                                <svg className="w-2.5 h-2.5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] text-slate-600 leading-tight">{feature}</span>
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
                                    className={`pkg-btn w-full block py-3 rounded-xl text-center text-xs font-bold transition-all duration-300 ${pkg.featured ? "bg-[#002B7F] text-white shadow-lg shadow-blue-900/20 hover:scale-[1.02]" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                        }`}
                                >
                                    {pkg.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
