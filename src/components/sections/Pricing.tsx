"use client";

import { useEffect, useRef } from "react";
import content from "@/data/content.json";

const { pricing } = content;

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
        desain: string;
        halaman: string;
        email: string;
        hosting: string;
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
    "tier-5": "bg-black text-white px-2 py-0.5",
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
                    <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-semibold rounded-full uppercase tracking-widest mb-2">
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
                            <span className={`tier-badge ${tierColors[pkg.tierClass] || "bg-gray-100 text-gray-600"}`}>
                                {pkg.tier}
                            </span>

                            {/* Name */}
                            <h3 className="pkg-name">{pkg.name}</h3>

                            {/* Tagline */}
                            <p className="pkg-tagline">{pkg.tagline}</p>

                            {/* Price */}
                            <div className="pkg-price">
                                <span className="price-main">{pkg.priceFrom}</span>
                                <span className="price-range"> - {pkg.priceTo}</span>
                            </div>

                            {/* Specs */}
                            <div className="pkg-specs">
                                <div className="spec-row">
                                    <span>Desain</span>
                                    <span>{pkg.specs.desain}</span>
                                </div>
                                <div className="spec-row">
                                    <span>Halaman</span>
                                    <span>{pkg.specs.halaman}</span>
                                </div>
                                <div className="spec-row">
                                    <span>Email</span>
                                    <span>{pkg.specs.email}</span>
                                </div>
                                <div className="spec-row">
                                    <span>Hosting</span>
                                    <span>{pkg.specs.hosting}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="pkg-features">
                                {pkg.features.map((feature, i) => (
                                    <li key={i}>
                                        <svg viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <a
                                href="https://wa.me/6282232538778"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`pkg-btn ${pkg.buttonStyle}`}
                            >
                                {pkg.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
