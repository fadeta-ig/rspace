"use client";

import { ContactIcon } from "./Icons";
import content from "@/data/content.json";

const { site } = content;

export default function WhatsAppButton() {
    return (
        <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
        >
            <ContactIcon type="whatsapp" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
                Chat Kami
            </span>
        </a>
    );
}
