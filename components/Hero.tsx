import SectionReveal from "./SectionReveal";
import PillAction from "./PillAction";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="hero" className="tajo-hero" aria-labelledby="hero-title">
      <SectionReveal>
        <div className="tajo-container hero-layout">
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
          <figure className="hero-photo photo-frame" data-reveal>
            <img
              src="/assets/redesign/hero-owner.webp"
              width="1536"
              height="1024"
              alt="A business owner taking a phone call while writing notes on a package in his workshop."
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </SectionReveal>
    </section>
  );
}
