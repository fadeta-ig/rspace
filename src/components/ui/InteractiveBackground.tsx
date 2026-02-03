"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
}

interface InteractiveBackgroundProps {
    particleColor?: string;
    lineColor?: string;
    orb1Color?: string;
    orb2Color?: string;
    orb3Color?: string;
    className?: string;
}

export default function InteractiveBackground({
    particleColor = "rgba(0, 43, 127, ",
    lineColor = "rgba(0, 43, 127, ",
    className = ""
}: InteractiveBackgroundProps) {
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
            ctx.fillStyle = `${particleColor}${particle.opacity})`;
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
                    ctx.strokeStyle = `${lineColor}${0.1 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        animationRef.current = requestAnimationFrame(animate);
    }, [particleColor, lineColor]);

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
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, [animate, initParticles]);

    return (
        <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
            <canvas ref={canvasRef} className="w-full h-full" />

            {/* Gradient Orbs */}
            <div className="hero-orb hero-orb-1 opacity-20" />
            <div className="hero-orb hero-orb-2 opacity-10" />
            <div className="hero-orb hero-orb-3 opacity-10" />
        </div>
    );
}
