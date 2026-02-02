"use client";

import { useEffect, useRef, useCallback } from "react";
import content from "@/data/content.json";

const { hero } = content;

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
}

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const mouseRef = useRef({ x: 0, y: 0 });

    const initParticles = useCallback((width: number, height: number) => {
        const particleCount = Math.floor((width * height) / 15000);
        const particles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
            });
        }

        particlesRef.current = particles;
    }, []);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas;
        ctx.clearRect(0, 0, width, height);

        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        particles.forEach((particle, i) => {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {
                const force = (150 - dist) / 150;
                particle.vx -= (dx / dist) * force * 0.02;
                particle.vy -= (dy / dist) * force * 0.02;
            }

            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vx *= 0.99;
            particle.vy *= 0.99;

            if (particle.x < 0 || particle.x > width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > height) particle.vy *= -1;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 43, 127, ${particle.opacity})`;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const other = particles[j];
                const distance = Math.sqrt(
                    (particle.x - other.x) ** 2 + (particle.y - other.y) ** 2
                );

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = `rgba(0, 43, 127, ${0.1 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles(canvas.width, canvas.height);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        // GSAP Animations
        import("gsap").then(({ gsap }) => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl.fromTo(".hero-brand",
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, delay: 0.2 }
            )
                .fromTo(".hero-heading",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1 },
                    "-=0.6"
                )
                .fromTo(".hero-subtitle",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1 },
                    "-=0.7"
                )
                .fromTo(".hero-cta",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1 },
                    "-=0.7"
                )
                .fromTo(".hero-stat",
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, stagger: 0.1 },
                    "-=0.5"
                );
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, [animate, initParticles]);

    return (
        <section className="hero-section">
            {/* Particle Canvas Background */}
            <div className="hero-particles">
                <canvas ref={canvasRef} className="particle-canvas" />
            </div>

            {/* Content */}
            <div className="hero-content">
                {/* Logo with Brand Name */}
                <div className="hero-brand opacity-0">
                    <div className="logo-icon">
                        <span>R</span>
                    </div>
                    <span className="hero-brand-name">RSPACE STUDIO.</span>
                </div>

                {/* Main Heading - Simple gradient text */}
                <h1 className="hero-heading opacity-0">
                    {hero.title} <span className="hero-gradient-text">{hero.titleHighlight}</span> {hero.titleEnd}
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle opacity-0">
                    {hero.description}
                </p>

                {/* CTA Buttons */}
                <div className="hero-cta opacity-0">
                    <a href="#kontak" className="hero-btn-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {hero.ctaPrimary}
                    </a>
                    <a href="#portfolio" className="hero-btn-secondary">
                        {hero.ctaSecondary}
                    </a>
                </div>

                {/* Stats */}
                <div className="hero-stats">
                    {hero.stats.map((stat, i) => (
                        <div key={i} className="hero-stat opacity-0">
                            <span className="hero-stat-value">{stat.value}</span>
                            <span className="hero-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient Orbs */}
            <div className="hero-orb hero-orb-1 opacity-20" />
            <div className="hero-orb hero-orb-2 opacity-10" />
            <div className="hero-orb hero-orb-3 opacity-10" />
        </section>
    );
}
