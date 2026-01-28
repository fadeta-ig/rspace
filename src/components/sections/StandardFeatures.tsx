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

                <div className="features-grid">
                    {standardFeatures.items.map((feature, i) => (
                        <div key={i} className="feature-card">
                            <h4 className="feature-card-title">{feature.title}</h4>
                            <p className="feature-card-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
