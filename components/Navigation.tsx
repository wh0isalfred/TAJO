"use client";
import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";
import Icon from "./Icon";
const leftLinks = [
  ["why", "Why TAJO"],
  ["how", "How it works"],
  ["build", "What we fix"],
];
const rightLinks = [
  ["who", "Who it’s for"],
  ["faq", "FAQ"],
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = document.getElementById("hero");
      if (hero)
        setSolid(
          hero.getBoundingClientRect().bottom <= window.innerHeight * 0.15,
        );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const sections = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    [...leftLinks, ...rightLinks].forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) sections.observe(section);
    });
    const media = matchMedia("(min-width: 1100px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", resize);
      sections.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  const link = ([id, label]: string[]) => (
    <a
      href={`#${id}`}
      key={id}
      aria-current={active === id ? "location" : undefined}
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );
  return (
    <header
      ref={header}
      className={`tajo-header${solid ? " is-solid" : ""}${open ? " menu-open" : ""}`}
    >
      <nav
        className="tajo-navigation tajo-container"
        aria-label="Main navigation"
      >
        <div id="navigation-left" className="navigation-side navigation-left">
          {leftLinks.map(link)}
        </div>
        <a
          className="tajo-home"
          href="#top"
          aria-label="TAJO home"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </a>
        <div id="navigation-right" className="navigation-side navigation-right">
          {rightLinks.map(link)}
          <button
            className="nav-contact"
            type="button"
            data-diagnostic
            onClick={() => setOpen(false)}
          >
            Talk to us{" "}
            <span className="nav-disc">
              <Icon name="arrow" />
            </span>
          </button>
        </div>
        <button
          ref={toggle}
          className="tajo-menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation-left navigation-right"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>
    </header>
  );
}
