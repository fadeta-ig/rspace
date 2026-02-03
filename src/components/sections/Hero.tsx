"use client";

import { useEffect } from "react";
import Link from "next/link";
import content from "@/data/content.json";
import InteractiveBackground from "@/components/ui/InteractiveBackground";

const { hero, site } = content;

export default function Hero() {
    useEffect(() => {
        // GSAP Animations
        import("gsap").then(({ gsap }) => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl.fromTo(".hero-brand",
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, delay: 0.2 }
            )
                .fromTo(".hero-heading",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1 },
                    "-=0.6"
                )
                .fromTo(".hero-subtitle",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1 },
                    "-=0.7"
                )
                .fromTo(".hero-cta",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1 },
                    "-=0.7"
                )
                .fromTo(".hero-stat",
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, stagger: 0.1 },
                    "-=0.5"
                );
        });
    }, []);

    return (
        <section className="hero-section">
            <InteractiveBackground />

            {/* Content */}
            <div className="hero-content">
                {/* Logo with Brand Name */}
                <div className="hero-brand opacity-0">
                    <div className="logo-icon">
                        <span>{site.logoLetter}</span>
                    </div>
                    <span className="hero-brand-name">{site.name}</span>
                </div>

                {/* Main Heading - Simple gradient text */}
                <h1 className="hero-heading opacity-0">
                    {hero.title} <span className="hero-gradient-text">{hero.titleHighlight}</span> {hero.titleEnd}
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle opacity-0">
                    {hero.description}
                </p>

                {/* CTA Buttons */}
                <div className="hero-cta opacity-0">
                    <Link href="/kontak" className="btn-primary-lux text-base px-8 py-3">
                        {hero.ctaPrimary}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                    <Link href="/portfolio" className="hero-btn-secondary">
                        {hero.ctaSecondary}
                    </Link>
                </div>

                {/* Stats */}
                <div className="hero-stats">
                    {hero.stats.map((stat, i) => (
                        <div key={i} className="hero-stat opacity-0">
                            <span className="hero-stat-value">{stat.value}</span>
                            <span className="hero-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
