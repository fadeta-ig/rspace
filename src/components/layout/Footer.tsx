"use client";

import Link from "next/link";
import Image from "next/image";
import content from "@/data/content.json";
import logo from "@/assets/logo/rsolv-logo.webp";

const { site, navbar, footer, contact } = content;

export default function Footer() {
    return (
        <footer className="relative bg-[#020617] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Effects - Liquid Glass 3D */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[20%] right-[10%] w-[20%] h-[30%] bg-cyan-500/5 blur-[80px] rounded-full" />
            </div>

            <div className="container px-4 lg:px-8 relative z-10">
                <div className="liquid-glass p-8 md:p-12 rounded-[2.5rem] mb-12 border border-white/10 shadow-2xl backdrop-blur-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-5 space-y-8">
                            <Link href="/" className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-xl overflow-hidden glass-panel flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <Image
                                        src={logo}
                                        alt={site.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl text-white tracking-tighter leading-none">{site.name}</span>
                                    <span className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em] mt-1">{site.shortName} DIGITAL SOLUTIONS</span>
                                </div>
                            </Link>
                            <p className="text-gray-400 text-base leading-relaxed max-w-md">
                                {footer.description}
                                <span className="block mt-4 text-white/50 text-sm italic font-light">"Transforming vision into digital excellence with luxury precision."</span>
                            </p>
                            <div className="flex gap-4 pt-4">
                                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                </div>
                                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                </div>
                                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                </div>
                            </div>
                        </div>

                        {/* Navigation Section */}
                        <div className="lg:col-span-3">
                            <h4 className="font-bold text-white text-lg mb-8 relative inline-block">
                                {footer.navTitle}
                                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full"></span>
                            </h4>
                            <ul className="space-y-4 text-base">
                                {navbar.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group translate-x-0 hover:translate-x-2 duration-300"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="lg:col-span-4 glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                            <h4 className="font-bold text-white text-lg mb-8 relative inline-block">
                                {footer.contactTitle}
                                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-500 rounded-full"></span>
                            </h4>
                            <ul className="space-y-6 text-base">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">{contact.info.email}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-600/10 flex items-center justify-center flex-shrink-0 text-indigo-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">WhatsApp</p>
                                        <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">{contact.info.phone}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-600/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Office</p>
                                        <p className="text-gray-300">{contact.info.location}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-gray-500 space-y-4 md:space-y-0">
                    <p className="tracking-wide">
                        {footer.copyright.replace("{year}", new Date().getFullYear().toString())}
                    </p>
                    <div className="flex gap-8">
                        <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
