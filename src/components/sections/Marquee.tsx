"use client";

import content from "@/data/content.json";

const { marquee } = content;
const marqueeItems = marquee.items;

export default function Marquee() {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {/* First set */}
                {marqueeItems.map((item, i) => (
                    <span key={`first-${i}`} className="marquee-item">
                        <span className="marquee-dot" />
                        {item}
                    </span>
                ))}
                {/* Duplicate for seamless loop */}
                {marqueeItems.map((item, i) => (
                    <span key={`second-${i}`} className="marquee-item">
                        <span className="marquee-dot" />
                        {item}
                    </span>
                ))}
                {/* Third set for extra smoothness */}
                {marqueeItems.map((item, i) => (
                    <span key={`third-${i}`} className="marquee-item">
                        <span className="marquee-dot" />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

