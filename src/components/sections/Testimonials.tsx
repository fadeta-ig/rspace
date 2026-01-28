"use client";

import Image from "next/image";
import content from "@/data/content.json";

const { testimonials } = content;

export default function Testimonials() {
    return (
        <section className="section">
            <div className="container px-4 lg:px-8">
                <div className="text-center mb-12">
                    <span className="tag mb-3">{testimonials.tag}</span>
                    <h2 className="heading-lg mb-3">{testimonials.title}</h2>
                </div>

                <div className="grid-3">
                    {testimonials.items.map((testi, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="flex gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm mb-4">&quot;{testi.quote}&quot;</p>
                            <div className="flex items-center gap-3">
                                <Image
                                    src={testi.img}
                                    alt={testi.name}
                                    width={40}
                                    height={40}
                                    className="avatar"
                                />
                                <div>
                                    <p className="font-semibold text-sm text-gray-900">{testi.name}</p>
                                    <p className="text-xs text-gray-500">{testi.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
