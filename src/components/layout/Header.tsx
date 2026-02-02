"use client";

import Link from "next/link";
import content from "@/data/content.json";

const { site, navbar } = content;

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-[#002B7F] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <span className="text-white font-bold text-sm">{site.logoLetter}</span>
                        </div>
                        <span className="font-bold text-lg text-black tracking-tight">{site.name}</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        {navbar.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-[#002B7F] text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href={navbar.cta.href} className="btn-primary bg-[#002B7F] hover:bg-[#001D56]">
                            {navbar.cta.label}
                        </Link>
                    </nav>

                    <button className="md:hidden p-2" aria-label="Menu">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
