import Brand from "./Brand";
import Icon from "./Icon";
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Intelligent infrastructure</p>
          <h1 id="hero-title">
            You worked hard
            <br />
            for the lead.
            <br />
            <span>Don’t lose it now.</span>
          </h1>
          <p className="hero-description">
            TAJO builds the systems that help service businesses capture,
            respond to and follow up with more of those opportunities — without
            adding more work to your day.
          </p>
          <div className="hero-actions">
            <button className="button" type="button" data-diagnostic>
              Let’s look at your setup <Icon name="arrow" />
            </button>
            <a className="text-link light-link" href="#how">
              See how it works <Icon name="arrow" />
            </a>
          </div>
        </div>
        <div
          className="hero-demo"
          aria-label="Example of an inquiry captured and followed up"
        >
          <div className="inquiry-notification dark-card">
            <span className="round-icon light-icon">
              <Icon name="person" />
            </span>
            <div>
              <strong>New website inquiry</strong>
              <time>10:24 AM</time>
              <p>Hi, I need a quote for a roof replacement. We’re in Lekki.</p>
            </div>
          </div>
          <div className="capture-card dark-card">
            <div className="capture-brand">
              <Brand compact />
            </div>
            <ol className="capture-timeline">
              <li>Captured inquiry</li>
              <li>Identified service (roofing)</li>
              <li>Collected key details</li>
              <li>Response sent</li>
            </ol>
            <div className="scheduled">
              <span className="round-icon gold-icon">
                <Icon name="clock" />
              </span>
              <div>
                <strong>Follow-up scheduled</strong>
                <span>Tomorrow · 9:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
