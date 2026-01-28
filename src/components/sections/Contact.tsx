"use client";

import { useEffect, useRef } from "react";
import content from "@/data/content.json";
import { ContactIcon } from "@/components/ui/Icons";

const { contact } = content;

export default function Contact() {
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

                tl.fromTo(".contact-info-stagger",
                    { x: -30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
                )
                    .fromTo(".contact-form-animation",
                        { x: 30, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.8 },
                        "-=0.6"
                    );
            });
        });
    }, []);

    return (
        <section id="kontak" ref={sectionRef} className="section bg-white text-black py-24">
            <div className="container px-4 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Left Side: Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="contact-info-stagger opacity-0">
                            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-semibold rounded-full uppercase tracking-widest mb-4">
                                {contact.tag}
                            </span>
                            <h2 className="text-4xl font-semibold mb-6 leading-tight">{contact.title}</h2>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {contact.description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="contact-info-stagger opacity-0 flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                    <ContactIcon type="email" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email KAMI</p>
                                    <p className="font-semibold text-sm">{contact.info.email}</p>
                                </div>
                            </div>

                            <div className="contact-info-stagger opacity-0 flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                    <ContactIcon type="phone" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">WHATSAPP</p>
                                    <p className="font-semibold text-sm">{contact.info.phone}</p>
                                </div>
                            </div>

                            <div className="contact-info-stagger opacity-0 flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                    <ContactIcon type="location" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lokasi</p>
                                    <p className="font-semibold text-sm">{contact.info.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-7 contact-form-animation opacity-0">
                        <div className="bg-slate-50/50 border border-slate-100 p-10 rounded-[2.5rem] hover:shadow-2xl transition-shadow duration-500">
                            <h3 className="text-xl font-semibold mb-8">{contact.form.title}</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                            {contact.form.fields.name.label}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder={contact.form.fields.name.placeholder}
                                            className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 focus:border-black focus:ring-0 transition-all text-sm outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                            {contact.form.fields.email.label}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder={contact.form.fields.email.placeholder}
                                            className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 focus:border-black focus:ring-0 transition-all text-sm outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                            {contact.form.fields.phone.label}
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder={contact.form.fields.phone.placeholder}
                                            className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 focus:border-black focus:ring-0 transition-all text-sm outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="package" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                            {contact.form.fields.package.label}
                                        </label>
                                        <select id="package" className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 focus:border-black focus:ring-0 transition-all text-sm outline-none appearance-none cursor-pointer">
                                            <option value="">{contact.form.fields.package.placeholder}</option>
                                            {contact.form.packageOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                                        {contact.form.fields.message.label}
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder={contact.form.fields.message.placeholder}
                                        className="w-full bg-white border border-slate-100 rounded-xl px-5 py-4 focus:border-black focus:ring-0 transition-all text-sm outline-none resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-black text-white font-bold py-5 rounded-xl hover:bg-slate-900 transform active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                    {contact.form.submitText}
                                    <svg className="w-4 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
