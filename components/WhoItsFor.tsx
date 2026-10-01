import Brand from "./Brand";
import Icon from "./Icon";
export default function WhoItsFor() {
  return (
    <section className="who section-dark" id="who">
      <div className="container">
        <div className="who-layout">
          <div>
            <p className="eyebrow">Who it’s for</p>
            <h2>
              Service businesses that
              <br />
              want to do more with their leads.
            </h2>
          </div>
          <div className="fit-list">
            <h3>TAJO is for you if:</h3>
            <ul>
              <li>
                <Icon name="check" />
                You get inquiries but lose them.
              </li>
              <li>
                <Icon name="check" />
                You’re ready to systemize your follow-up.
              </li>
              <li>
                <Icon name="check" />
                You want a modern digital presence
                <br />
                that actually works.
              </li>
            </ul>
          </div>
          <div className="not-fit">
            <h3>Not for you if:</h3>
            <ul>
              <li>
                <span>×</span>You’re not interested in more leads.
              </li>
              <li>
                <span>×</span>You’re happy with the way things are.
              </li>
              <li>
                <span>×</span>You don’t want to invest in your business.
              </li>
            </ul>
          </div>
        </div>
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
    </section>
  );
}
