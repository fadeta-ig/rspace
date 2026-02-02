"use client";

import Link from "next/link";
import content from "@/data/content.json";

const { site, navbar, footer, contact } = content;

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container px-4 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                                <span className="text-[#002B7F] font-bold text-sm">{site.logoLetter}</span>
                            </div>
                            <span className="font-bold text-lg text-white tracking-tight">{site.name}</span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-sm">
                            {footer.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-sm">{footer.navTitle}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {navbar.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-sm">{footer.contactTitle}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>{contact.info.email}</li>
                            <li>{contact.info.phone}</li>
                            <li>{contact.info.location}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    {footer.copyright.replace("{year}", new Date().getFullYear().toString())}
                </div>
            </div>
        </footer>
    );
}
