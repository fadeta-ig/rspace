"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import content from "@/data/content.json";

const { site, navbar } = content;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            import("gsap").then(({ gsap }) => {
                gsap.to(menuRef.current, {
                    x: 0,
                    duration: 0.5,
                    ease: "power3.out"
                });
                gsap.fromTo(linksRef.current,
                    { x: 20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: "power2.out" }
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
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="container px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-[#002B7F] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <span className="text-white font-bold text-sm">{site.logoLetter}</span>
                            </div>
                            <span className="font-bold text-lg text-black tracking-tight">{site.name}</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navbar.links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-600 hover:text-[#002B7F] text-sm font-medium transition-colors relative group/link"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#002B7F] transition-all duration-300 group-hover/link:w-full"></span>
                                </Link>
                            ))}
                            <Link href={navbar.cta.href} className="btn-primary-lux">
                                {navbar.cta.label}
                            </Link>
                        </nav>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 z-[60] relative"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between items-end overflow-hidden">
                                <span className={`h-0.5 bg-[#002B7F] transition-all duration-300 ease-luxury ${isMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"}`}></span>
                                <span className={`h-0.5 bg-[#002B7F] transition-all duration-300 ease-luxury ${isMenuOpen ? "opacity-0 -translate-x-full" : "w-4"}`}></span>
                                <span className={`h-0.5 bg-[#002B7F] transition-all duration-300 ease-luxury ${isMenuOpen ? "w-6 -translate-y-2.5 -rotate-45" : "w-5"}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-[55] bg-white translate-x-full md:hidden"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.98)", backdropFilter: "blur(10px)" }}
            >
                <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
                    {navbar.links.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            ref={(el) => { linksRef.current[i] = el; }}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-3xl font-bold text-[#0f172a] hover:text-[#002B7F] transition-colors tracking-tight"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href={navbar.cta.href}
                        ref={(el) => { linksRef.current[navbar.links.length] = el; }}
                        onClick={() => setIsMenuOpen(false)}
                        className="btn-primary bg-[#002B7F] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
                    >
                        {navbar.cta.label}
                    </Link>
                </div>
            </div>
        </>
    );
}

