import SectionReveal from "./SectionReveal";
import PillAction from "./PillAction";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="hero" className="tajo-hero" aria-labelledby="hero-title">
      <SectionReveal>
        <div className="hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title" data-reveal>
              You worked hard
              <br className="hero-break" /> for the lead.
              <br />
              Don’t <em>lose it</em> now.
            </h1>
            <p className="hero-description" data-reveal>
              TAJO helps service businesses capture inquiries, respond quickly
              and follow up with interested prospects — without adding more work
              to your day.
            </p>
            <div className="hero-actions" data-reveal>
              <PillAction>Talk to us</PillAction>
              <a className="text-action" href="#how">
                See how it works <Icon name="arrow" />
              </a>
            </div>
            <p className="hero-note" data-reveal>
              Already have some of this handled? Good. We’ll start with what’s
              missing.
            </p>
          </div>
          <a className="hero-contact-strip" href="mailto:tajopartners@gmail.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></svg>
            tajopartners@gmail.com
          </a>
          <figure className="hero-photo photo-frame" data-reveal>
            <img
              src="/assets/redesign/hero-office.webp"
              width="872"
              height="589"
              alt="A business professional reviewing information on a tablet beside an open laptop."
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </SectionReveal>
    </section>
  );
}
