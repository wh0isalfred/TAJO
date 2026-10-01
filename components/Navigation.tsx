"use client";
import { useEffect, useState } from "react";
import Brand from "./Brand";
import Icon from "./Icon";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container navigation">
        <a href="#top" aria-label="TAJO home">
          <Brand />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
          onClick={() => setOpen(false)}
        >
          <a href="#why">Why TAJO</a>
          <a href="#how">How it works</a>
          <a href="#build">What we fix</a>
          <a href="#who">Who it’s for</a>
          <button type="button" data-faq>
            FAQ
          </button>
        </nav>
        <button
          className="button button-small header-cta"
          type="button"
          data-diagnostic
        >
          Let’s look at your setup <Icon name="arrow" />
        </button>
      </div>
    </header>
  );
}
