"use client";
import { useEffect, useRef } from "react";
import Icon from "./Icon";

export default function Hero() {
  const illustration = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = illustration.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="hero" className="tajo-hero" aria-labelledby="hero-title">
      <div className="tajo-hero-copy">
        <h1 id="hero-title">You worked hard for the lead.<br /><span>Don’t lose</span> it now.</h1>
        <p className="tajo-hero-description">TAJO builds the systems that help service businesses capture, respond to and follow up with more of those opportunities — without adding more work to your day.</p>
        <div className="tajo-hero-actions">
          <a className="tajo-action tajo-action-primary" href="#how">See how it works <Icon name="arrow" /></a>
          <button className="tajo-action tajo-action-secondary" type="button" data-diagnostic>Talk to us</button>
        </div>
        <p className="tajo-hero-note">Already have some of this handled? Good. We’ll start with what’s missing.</p>
      </div>
      <figure ref={illustration} className="tajo-illustration">
        <div className="tajo-illustration-image"><img src="/assets/new_assets/hero-illustration.png" width="2048" height="768" alt="Missed calls, website inquiries and estimates connect to capture, response and scheduled follow-up, helping arrange a next step." fetchPriority="high" /></div>
        <div className="tajo-mobile-journey">
          <p className="journey-bridge">TAJO connects what’s missing</p>
          <div className="journey-sources"><span>Missed call</span><span>Website inquiry</span><span>Estimate sent</span></div>
          <ol>{["Captured", "Responded", "Follow-up scheduled"].map((label, index) => <li key={label}><span className="journey-number">0{index + 1}</span>{label}<Icon name={index === 0 ? "person" : index === 1 ? "message" : "calendar"} /></li>)}</ol>
          <div className="journey-result"><Icon name="check" /><div><strong>Next step arranged</strong><p>“Can we arrange a time to discuss the estimate?”</p></div></div>
          <p className="journey-caption">Example inquiry journey</p>
        </div>
      </figure>
    </section>
  );
}
