"use client";
import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";
import Icon from "./Icon";
const links = [["why", "Why TAJO"], ["how", "How it works"], ["build", "What we fix"], ["who", "Who it’s for"], ["faq", "FAQ"]];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const hero = document.getElementById("hero");
    // Turn navy while the final 15% of the viewport still contains the hero.
    let frame = 0;
    const updateHeader = () => {
      frame = 0;
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      setPastHero(bounds.top < 0 && bounds.bottom <= window.innerHeight * 0.15);
    };
    const scheduleHeader = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    };
    updateHeader();
    window.addEventListener("scroll", scheduleHeader, { passive: true });
    window.addEventListener("resize", scheduleHeader);
    const sections = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-20% 0px -55% 0px" });
    links.forEach(([id]) => { const section = document.getElementById(id); if (section) sections.observe(section); });
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    const media = matchMedia("(min-width: 1100px)");
    const resize = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", escape); document.addEventListener("pointerdown", outside); media.addEventListener("change", resize);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener("scroll", scheduleHeader); window.removeEventListener("resize", scheduleHeader); sections.disconnect(); document.removeEventListener("keydown", escape); document.removeEventListener("pointerdown", outside); media.removeEventListener("change", resize); };
  }, []);
  return <header ref={header} className={`tajo-header${pastHero ? " is-solid" : ""}${open ? " menu-open" : ""}`}>
    <div className="tajo-navigation">
      <a className="tajo-home" href="#top" aria-label="TAJO home" onClick={() => setOpen(false)}><Brand /></a>
      <button ref={toggle} className="tajo-menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="tajo-navigation-links" onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
      <nav id="tajo-navigation-links" className={`tajo-nav-capsule${open ? " is-open" : ""}`} aria-label="Main navigation">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        <button className="tajo-nav-contact" type="button" data-diagnostic onClick={() => setOpen(false)}>Talk to us</button>
      </nav>
    </div>
  </header>;
}
