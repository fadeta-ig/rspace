"use client";

import content from "@/data/content.json";

const { maintenance } = content;

export default function Maintenance() {
    return (
        <section className="section bg-white">
            <div className="container px-4 lg:px-8">
                <div className="text-center mb-10">
                    <span className="tag mb-3">{maintenance.tag}</span>
                    <h2 className="heading-lg mb-3">{maintenance.title}</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        {maintenance.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {maintenance.options.map((option) => (
                        <div
                            key={option.id}
                            className={`maintenance-card ${option.featured ? "featured" : ""}`}
                        >
                            <div className="maintenance-badge">{option.badge}</div>
                            <h3 className="heading-md mb-2">{option.name}</h3>
                            <div className="maintenance-price mb-4">
                                <span className="text-2xl font-bold text-gray-900">{option.price}</span>
                                <span className="text-gray-500 text-sm">{option.priceSuffix}</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                                {option.description}
                            </p>
                            <ul className="list-check-compact text-left">
                                {option.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-500 text-sm mt-8">
                    {maintenance.note}
                </p>
            </div>
        </section>
    );
}
