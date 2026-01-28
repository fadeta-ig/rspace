"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface TypedTextProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    onComplete?: () => void;
    gradient?: boolean;
}

export default function TypedText({
    text,
    className = "",
    speed = 0.05,
    delay = 0,
    onComplete,
    gradient = false
}: TypedTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const chars = text.split("");
        const container = containerRef.current;

        // Clear container
        container.innerHTML = "";

        // Create character spans
        const charElements = chars.map((char) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.opacity = "0";
            span.style.display = "inline-block";
            span.style.position = "relative";

            // Apply gradient directly to each character
            if (gradient) {
                span.style.background = "linear-gradient(90deg, #4285f4, #34a853, #fbbc05, #ea4335)";
                span.style.backgroundSize = "300% 100%";
                span.style.backgroundClip = "text";
                span.style.webkitBackgroundClip = "text";
                span.style.webkitTextFillColor = "transparent";
                span.style.color = "transparent";
                span.style.animation = "gradientMove 3s ease infinite";
            }

            container.appendChild(span);
            return span;
        });

        // Animate characters
        const timeline = gsap.timeline({
            delay,
            onComplete: () => {
                setIsComplete(true);
                onComplete?.();
            }
        });

        timeline.to(charElements, {
            opacity: 1,
            duration: 0.1,
            stagger: speed,
            ease: "power1.out",
        });

        return () => {
            timeline.kill();
        };
    }, [text, speed, delay, onComplete, gradient]);

    return (
        <span ref={containerRef} className={className}>
            {/* Characters will be inserted here */}
        </span>
    );
}
