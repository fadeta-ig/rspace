"use client";

import PageHeader from "@/components/ui/PageHeader";
import content from "@/data/content.json";
import { CTA, Pricing } from "@/components/sections";

const { pricing } = content;

export default function PricingPage() {
    return (
        <main className="bg-white">
            <PageHeader
                title="Investasi Digital"
                subtitle="Opsi paket solusi yang dirancang untuk mendukung pertumbuhan bisnis Anda di setiap tahap."
                eyebrow={pricing.tag}
            />

            {/* Reuse the existing Pricing grid but in a dedicated page context */}
            <div className="py-20">
                <Pricing />
            </div>

            {/* Add detailed comparison table or info */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#002B7F]">Cakupan Standar Setiap Proyek</h2>
                        <p className="text-slate-500 mt-4">Feature wajib yang sudah termasuk dalam semua paket tanpa biaya tambahan.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-[#002B7F] mb-2">Cloud Security</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">Setup SSL Grade A dan firewall dasar untuk melindungi data transaksi pelanggan Anda.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-[#002B7F] mb-2">SEO Foundations</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">Metadata, sitemap, dan Google Search Console setup agar web Anda ramah mesin pencari.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-[#002B7F] mb-2">Mobile First Design</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">Tampilan yang sempurna di smartphone, tablet, maupun desktop tanpa distorsi.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-[#002B7F] mb-2">Full Asset Control</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">Setelah serah terima luncur, Anda memiliki hak akses penuh 100% atas semua aset digital Anda.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
