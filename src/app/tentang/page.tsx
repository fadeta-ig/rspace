"use client";

import PageHeader from "@/components/ui/PageHeader";
import content from "@/data/content.json";
import { CTA } from "@/components/sections";
import Image from "next/image";

const { about } = content;

export default function AboutPage() {
    return (
        <main className="bg-white">
            <PageHeader
                title="Tentang RSOLV Digital"
                subtitle="Kami membantu pebisnis membangun aset digital yang bukan sekadar ada, tapi menghasilkan profit."
                eyebrow={about.tag}
            />

            <section className="py-20">
                <div className="container px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
                                <Image
                                    src={about.image}
                                    alt="RSOLV Digital Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-50 rounded-[2.5rem] -z-0"></div>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-[#002B7F] uppercase tracking-[0.2em] mb-4 block">Misi & Filosofi</span>
                            <h2 className="text-4xl font-bold text-[#002B7F] mb-8 leading-tight">
                                {about.title}
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>{about.description}</p>
                                <p>
                                    Di RSOLV,  kami percaya bahwa kegagalan banyak aset digital bukan karena kurangnya fitur, tapi karena kurangnya keselarasan dengan strategi bisnis. Itulah sebabnya setiap baris kode yang kami tulis dimulai dengan pemahaman mendalam tentang siapa pelanggan Anda dan bagaimana mereka berinteraksi dengan produk Anda.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {about.highlights.map((item, i) => (
                            <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#002B7F] transition-all duration-300">
                                <span className="text-4xl font-black text-[#002B7F]/10 mb-6 block">0{i + 1}</span>
                                <h4 className="text-xl font-bold text-[#002B7F] mb-4">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
