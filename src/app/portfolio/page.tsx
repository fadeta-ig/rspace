"use client";

import PageHeader from "@/components/ui/PageHeader";
import content from "@/data/content.json";
import { CTA } from "@/components/sections";
import Image from "next/image";
import { useState } from "react";

const { portfolio } = content;

export default function PortfolioPage() {
    return (
        <main className="bg-white">
            <PageHeader
                title="Studi Kasus & Portfolio"
                subtitle={portfolio.description}
                eyebrow={portfolio.tag}
            />

            <section className="py-20">
                <div className="container px-4 lg:px-8">
                    <div className="grid grid-cols-1 gap-12">
                        {portfolio.items.map((item, i) => (
                            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-slate-50 rounded-[3rem] p-8 lg:p-12 border border-slate-100`}>
                                <div className="lg:w-1/2 w-full">
                                    <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full space-y-6">
                                    <div>
                                        <span className="text-[10px] font-bold text-[#002B7F] bg-[#002B7F]/5 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                                            {item.category}
                                        </span>
                                        <h2 className="text-3xl font-bold text-[#002B7F] mb-4">{item.title}</h2>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {item.features?.map((feature, fi) => (
                                            <div key={fi} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                                                <svg className="w-4 h-4 text-[#002B7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4">
                                        <button className="bg-[#002B7F] text-white px-8 py-3 rounded-xl hover:bg-[#001D56] transition-all text-sm font-bold flex items-center gap-2">
                                            Lihat Website
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
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
