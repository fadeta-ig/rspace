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
  Process,
} from "@/components/sections";
import Marquee from "@/components/sections/Marquee";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      // Components handle their own entry animations
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <Marquee />
      <Services />
      <Process />
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

