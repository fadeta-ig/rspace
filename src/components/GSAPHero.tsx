import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function GSAPHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.18,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section ref={ref} className="w-full max-w-5xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-12">
      <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
        <h2 className="luxury-title mb-2 text-2xl">Kenapa Pilih Kami?</h2>
        <ul className="text-lg text-gray-700 space-y-2">
          <li>✓ Desain luxury, modern, dan clean</li>
          <li>✓ SEO & performa optimal</li>
          <li>✓ Responsive & mobile friendly</li>
          <li>✓ Support & konsultasi gratis</li>
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image src="/hero-luxury.svg" alt="Luxury Hero" width={320} height={240} className="rounded-2xl shadow-xl" />
      </div>
    </section>
  );
}
