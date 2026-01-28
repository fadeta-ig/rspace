import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GSAPSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".gsap-fadein"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.22,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return null;
}
