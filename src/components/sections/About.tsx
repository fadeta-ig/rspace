"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import content from "@/data/content.json";

const { about } = content;

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });

                tl.fromTo(".about-visual-refined",
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1 }
                )
                    .fromTo(".content-header",
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8 },
                        "-=0.6"
                    )
                    .fromTo(".description",
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8 },
                        "-=0.6"
                    )
                    .fromTo(".highlight-card",
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
                        "-=0.4"
                    );
            });
        });
    }, []);

    return (
        <section id="tentang" ref={sectionRef} className="about-refined">
            <div className="container px-4 lg:px-8">
                <div className="about-grid-refined">
                    {/* Visual Side (Smaller, more framed) */}
                    <div className="about-visual-refined opacity-0">
                        <div className="img-container">
                            <Image
                                src={about.image}
                                alt="RSPACE Studio Team"
                                width={650}
                                height={500}
                                className="about-img-lux"
                            />
                            <div className="img-decoration"></div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="about-content-refined">
                        <div className="content-header opacity-0">
                            <span className="eyebrow">{about.tag}</span>
                            <h2 className="title">{about.title}</h2>
                        </div>

                        <p className="description opacity-0">
                            {about.description}
                        </p>

                        <div className="highlights-grid">
                            {about.highlights.map((item, i) => (
                                <div key={i} className="highlight-card opacity-0">
                                    <div className="card-top">
                                        <span className="number">0{i + 1}</span>
                                        <div className="dot"></div>
                                    </div>
                                    <h4 className="item-title">{item.title}</h4>
                                    <p className="item-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
