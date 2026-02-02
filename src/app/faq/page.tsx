"use client";

import PageHeader from "@/components/ui/PageHeader";
import content from "@/data/content.json";
import { FAQ, CTA } from "@/components/sections";

const { faq } = content;

export default function FAQPage() {
    return (
        <main className="bg-white">
            <PageHeader
                title="Pusat Bantuan & Strategi"
                subtitle="Temukan jawaban teknis dan strategis untuk memaksimalkan kehadiran digital bisnis Anda."
                eyebrow={faq.tag}
            />

            <div className="py-20">
                <FAQ />
            </div>

            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container px-4 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-[#002B7F] mb-6">Masih Memiliki Pertanyaan?</h2>
                    <p className="text-slate-500 mb-8 max-w-xl mx-auto">Kami siap memberikan konsultasi teknis yang mendalam secara gratis untuk membantu Anda mengambil keputusan terbaik.</p>
                    <a href="/kontak" className="inline-block bg-[#002B7F] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#001D56] transition-all">
                        Tanya Tim Ahli Kami
                    </a>
                </div>
            </section>

            <CTA />
        </main>
    );
}
