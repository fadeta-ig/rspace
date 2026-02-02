"use client";

import content from "@/data/content.json";

const { standardFeatures } = content;

export default function StandardFeatures() {
    return (
        <section className="features-section">
            <div className="container px-4 lg:px-8">
                <div className="text-center mb-8">
                    <span className="features-tag">
                        {standardFeatures.tag}
                    </span>
                    <h2 className="features-title">{standardFeatures.title}</h2>
                    <p className="features-desc">
                        {standardFeatures.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {standardFeatures.items.map((feature, i) => (
                        <div key={i} className="feature-card group hover:bg-white/20 transition-all duration-500">
                            <h4 className="feature-card-title group-hover:scale-105 transition-transform">{feature.title}</h4>
                            <p className="feature-card-desc opacity-70 group-hover:opacity-100 transition-opacity">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
