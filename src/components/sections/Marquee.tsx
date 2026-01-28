"use client";

const marqueeItems = [
    "Website Profesional",
    "Performa Tinggi",
    "Desain Modern",
    "Loading Cepat",
    "SSL Gratis",
    "Email Bisnis",
    "Hosting Gratis 1 Tahun",
    "Panel Admin",
    "Support 24/7",
    "SEO Optimized",
];

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

