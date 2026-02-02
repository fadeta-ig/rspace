"use client";

import { useEffect, useRef } from "react";
import content from "@/data/content.json";
import { ServiceIcon } from "@/components/ui/Icons";

const { services } = content;

export default function Services() {
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

                tl.fromTo(".services-header",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 }
                )
                    .fromTo(".service-card",
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
                        "-=0.4"
                    );
            });
        });
    }, []);

    return (
        <section id="layanan" ref={sectionRef} className="section bg-white text-accent-primary">
            <div className="container px-4 lg:px-8">
                <div className="services-header text-center mb-12 opacity-0">
                    <span className="inline-block px-3 py-1 bg-[#002B7F] text-white text-[10px] font-semibold rounded-full uppercase tracking-widest mb-3">
                        {services.tag}
                    </span>
                    <h2 className="text-3xl font-semibold mb-4 text-accent-primary">{services.title}</h2>
                    <p className="text-slate-600 max-w-xl mx-auto text-sm">
                        {services.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.items.map((service, i) => (
                        <div key={i} className="service-card group border border-slate-100 p-6 md:p-8 rounded-2xl hover:border-accent-primary transition-all duration-500 opacity-0 bg-slate-50/30 hover:bg-white hover:shadow-2xl">
                            <div className="icon-box mb-6 bg-[#002B7F] text-white w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-500">
                                <ServiceIcon type={service.icon} />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 group-hover:text-accent-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
