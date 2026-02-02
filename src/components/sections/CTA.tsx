"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import content from "@/data/content.json";

const { cta } = content;

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                gsap.fromTo(".cta-content",
                    { scale: 0.9, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });
        });
    }, []);

    return (
        <section ref={sectionRef} className="section bg-[#002B7F] py-20">
            <div className="container px-4 lg:px-8 text-center cta-content opacity-0">
                <h2 className="text-4xl font-semibold text-white mb-6 leading-tight">{cta.title}</h2>
                <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-sm leading-relaxed">
                    {cta.description}
                </p>
                <Link href={cta.buttonHref} className="inline-flex items-center gap-3 bg-white text-[#002B7F] font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transform active:scale-95 transition-all text-sm">
                    {cta.buttonText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
