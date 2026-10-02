import Brand from "./Brand";
import Icon from "./Icon";
export default function ClosingSection() {
  return (
      <div className="who section-dark">
        <div className="container">
        <div className="closing-panel">
          <div className="closing-cta">
            <span className="closing-emblem">
              <Icon name="shield" />
            </span>
            <div>
              <h2>Let’s look at your setup.</h2>
              <p>Quick questions. Real insights. No pressure.</p>
            </div>
            <button className="button" type="button" data-diagnostic>
              Start the diagnostic <Icon name="arrow" />
            </button>
          </div>
          <footer>
            <a href="#top" aria-label="TAJO home">
              <Brand />
            </a>
            <p>
              Intelligent infrastructure for the space between inquiry and
              booking.
            </p>
          </footer>
        </div>
        </div>
      </div>
  );
}
