"use client";
import { useEffect, useRef, type ReactNode } from "react";

/** Progressive enhancement: content stays readable without JavaScript or motion. */
export default function SectionReveal({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elements = root.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!elements || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const showAll = () => {
      if (preference.matches) {
        observer.disconnect();
        elements.forEach((element) => element.classList.remove('reveal-pending'));
      }
    };
    if (!preference.matches) elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add('reveal-pending');
      observer.observe(element);
    });
    preference.addEventListener('change', showAll);
    return () => { observer.disconnect(); preference.removeEventListener('change', showAll); };
  }, []);
  return <div ref={root}>{children}</div>;
}
