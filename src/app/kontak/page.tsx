"use client";

import PageHeader from "@/components/ui/PageHeader";
import content from "@/data/content.json";
import { Contact } from "@/components/sections";

const { contact } = content;

export default function ContactPage() {
    return (
        <main className="bg-white">
            <PageHeader
                title="Mulai Konsultasi Strategis"
                subtitle="Mari diskusikan bagaimana kami bisa membantu mentransformasi bisnis Anda di era digital."
                eyebrow={contact.tag}
            />

            <div className="py-20">
                <Contact />
            </div>

            <section className="pb-32 container px-4 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
                        <div className="w-12 h-12 bg-[#002B7F] text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-[#002B7F] mb-2 text-lg">Konsultasi Gratis</h4>
                        <p className="text-sm text-slate-500">Analisis kebutuhan teknis dan estimasi budget tanpa biaya awal.</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
                        <div className="w-12 h-12 bg-[#002B7F] text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 14.535a11.955 11.955 0 007.129 11.16l.871.305.871-.305a11.955 11.955 0 007.129-11.16l-.382-8.551z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-[#002B7F] mb-2 text-lg">Keamanan Data</h4>
                        <p className="text-sm text-slate-500">Semua informasi bisnis Anda aman bersama kami di bawah NDA ketat.</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
                        <div className="w-12 h-12 bg-[#002B7F] text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-[#002B7F] mb-2 text-lg">Respon Cepat</h4>
                        <p className="text-sm text-slate-500">Tim kami akan membalas pesan Anda maksimal dalam 24 jam kerja.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
