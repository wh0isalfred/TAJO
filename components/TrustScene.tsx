"use client";
import { useEffect, useRef, type ReactNode } from "react";

export default function TrustScene({ children }: { children: ReactNode }) {
  const scene = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = scene.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => element.classList.toggle("is-active", entry.isIntersecting));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={scene} className="tajo-trust-scene" onPointerMove={event => {
    if (event.pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--scene-x", `${((event.clientX - bounds.left) / bounds.width - .5) * 10}px`);
    event.currentTarget.style.setProperty("--scene-y", `${((event.clientY - bounds.top) / bounds.height - .5) * 8}px`);
  }} onPointerLeave={event => {
    event.currentTarget.style.setProperty("--scene-x", "0px");
    event.currentTarget.style.setProperty("--scene-y", "0px");
  }}>{children}</div>;
}
