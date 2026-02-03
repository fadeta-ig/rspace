"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Section Components
import {
  Hero,
  Services,
  Portfolio,
  StandardFeatures,
  Pricing,
  Maintenance,
  About,
  Testimonials,
  CTA,
  Contact,
  FAQ,
  TechStack,
  ClientDashboard,
} from "@/components/sections";
import Marquee from "@/components/sections/Marquee";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      // Animate all reveal elements
      const revealElements = document.querySelectorAll(".reveal, .animate-section, .heading-animate");
      gsap.set(revealElements, { opacity: 1, y: 0 });

      // Animate cards with stagger
      const cards = document.querySelectorAll(".card, .pricing-card, .portfolio-card, .testimonial-card, .maintenance-card, .faq-item");
      gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <Marquee />
      <Services />
      <ClientDashboard />
      <Portfolio />
      <StandardFeatures />
      <TechStack />
      <Pricing />
      <Maintenance />
      <About />
      <Testimonials />
      <FAQ />
      <Marquee />
      <CTA />
      <Contact />
    </div>
  );
}

