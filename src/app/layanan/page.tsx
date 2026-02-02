"use client";

import PageHeader from "@/components/ui/PageHeader";
import content from "@/data/content.json";
import { ServiceIcon } from "@/components/ui/Icons";
import { CTA } from "@/components/sections";
import { useEffect, useRef } from "react";

const { services } = content;

export default function ServicesPage() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                const cards = document.querySelectorAll(".service-detail-card");
                cards.forEach((card) => {
                    gsap.fromTo(card,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
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
        <main className="bg-white">
            <PageHeader
                title={services.title}
                subtitle={services.description}
                eyebrow={services.tag}
            />

            <section className="py-20" ref={sectionRef}>
                <div className="container px-4 lg:px-8">
                    <div className="grid grid-cols-1 gap-20">
                        {services.items.map((service, i) => (
                            <div key={i} className="service-detail-card flex flex-col lg:flex-row gap-12 items-start opacity-0">
                                <div className="lg:w-1/3">
                                    <div className="w-16 h-16 bg-[#002B7F] text-white flex items-center justify-center rounded-2xl mb-6 shadow-xl shadow-blue-900/10">
                                        <ServiceIcon type={service.icon} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#002B7F] mb-4">{service.title}</h2>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                                    <div className="col-span-full mb-2">
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mengapa Memilih Layanan Ini?</h3>
                                    </div>
                                    {service.reasons?.map((reason, ri) => (
                                        <div key={ri} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:border-[#002B7F] hover:bg-white transition-all duration-300 group">
                                            <div className="w-8 h-8 rounded-full bg-[#002B7F]/10 text-[#002B7F] flex items-center justify-center mb-4 font-bold text-xs group-hover:bg-[#002B7F] group-hover:text-white transition-colors">
                                                {ri + 1}
                                            </div>
                                            <p className="text-slate-700 text-sm leading-relaxed font-medium">
                                                {reason}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
