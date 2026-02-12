"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import content from "@/data/content.json";
import logo from "@/assets/logo/rsolv-logo.webp";
import { CloseIcon, ContactIcon } from "@/components/ui/Icons";

const { site, navbar } = content;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLElement | null)[]>([]);
    const socialRef = useRef<HTMLDivElement>(null);

    const { contact } = content;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            import("gsap").then(({ gsap }) => {
                gsap.to(menuRef.current, {
                    x: 0,
                    duration: 0.6,
                    ease: "power4.out"
                });
                gsap.fromTo(linksRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power3.out" }
                );
                gsap.fromTo(socialRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, delay: 0.6, ease: "power3.out" }
                );
            });
        } else {
            document.body.style.overflow = "unset";
            import("gsap").then(({ gsap }) => {
                gsap.to(menuRef.current, {
                    x: "100%",
                    duration: 0.5,
                    ease: "power3.in"
                });
            });
        }
    }, [isMenuOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container px-4 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                                <Image
                                    src={logo}
                                    alt={site.name}
                                    className="w-full h-full"
                                />
                            </div>
                            <span className="font-bold text-xl text-black tracking-tighter">{site.name}</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-10">
                            {navbar.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-600 hover:text-[#002B7F] text-[15px] font-semibold transition-colors relative group/link"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#002B7F] transition-all duration-300 group-hover/link:w-full"></span>
                                </Link>
                            ))}
                            <Link href={navbar.cta.href} className="bg-[#002B7F] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#001f5c] transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95">
                                {navbar.cta.label}
                            </Link>
                        </nav>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors z-[60]"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <div className="w-6 h-4 flex flex-col justify-between">
                                <span className="w-6 h-0.5 bg-[#002B7F] rounded-full"></span>
                                <span className="w-4 h-0.5 bg-[#002B7F] rounded-full ml-auto"></span>
                                <span className="w-5 h-0.5 bg-[#002B7F] rounded-full"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-[70] bg-white translate-x-full md:hidden flex flex-col"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.96)", backdropFilter: "blur(20px)" }}
            >
                {/* Close Button Header */}
                <div className="flex items-center justify-between p-6">
                    <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                            <Image
                                src={logo}
                                alt={site.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-bold text-lg text-black tracking-tight">{site.name}</span>
                    </Link>
                    <button
                        onClick={closeMenu}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-[#002B7F] hover:bg-gray-200 transition-all active:scale-90"
                        aria-label="Close Menu"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-10">
                    <div className="flex flex-col items-center space-y-8 w-full">
                        {navbar.links.map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                ref={(el) => { linksRef.current[i] = el; }}
                                onClick={closeMenu}
                                className="text-4xl font-extrabold text-[#0f172a] hover:text-[#002B7F] transition-all tracking-tight"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div ref={(el) => { linksRef.current[navbar.links.length] = el; }} className="w-full max-w-[280px]">
                        <Link
                            href={navbar.cta.href}
                            onClick={closeMenu}
                            className="flex items-center justify-center w-full bg-[#002B7F] text-white py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-blue-500/20 active:scale-95 transition-all"
                        >
                            {navbar.cta.label}
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Footer */}
                <div
                    ref={socialRef}
                    className="p-8 border-t border-gray-100 bg-gray-50/50 flex flex-col items-center space-y-6"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-gray-400 text-sm font-medium">Hubungi Kami</p>
                        <a href={`tel:${site.whatsapp}`} className="flex items-center gap-2 text-[#002B7F] font-bold text-lg">
                            <ContactIcon type="phone" />
                            {contact.info.phone}
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={site.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-500/20 active:scale-90 transition-all"
                        >
                            <ContactIcon type="whatsapp" />
                        </a>
                        <a
                            href={`mailto:${contact.info.email}`}
                            className="w-12 h-12 rounded-full bg-[#002B7F] text-white flex items-center justify-center shadow-lg shadow-blue-500/20 active:scale-90 transition-all"
                        >
                            <ContactIcon type="email" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

