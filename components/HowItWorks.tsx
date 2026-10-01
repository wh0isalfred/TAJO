import Icon from "./Icon";
export default function HowItWorks() {
  return (
    <section className="how section-dark" id="how">
      <div className="container how-layout">
        <div className="how-copy">
          <p className="eyebrow">How it works</p>
          <h2>
            One system.
            <br />
            Three key moments.
          </h2>
          <p className="section-intro">
            TAJO sits between your customer and your business, turning interest
            into booked jobs.
          </p>
          <ol className="moments">
            <li>
              <span>01</span>
              <h3>Capture</h3>
              <p>The inquiry is caught and understood.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Respond</h3>
              <p>The right message is sent, instantly.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Follow up</h3>
              <p>The system keeps the conversation going.</p>
            </li>
          </ol>
        </div>
        <div
          className="system-example"
          aria-label="Example customer inquiry and business workflow"
        >
          <div className="inquiry-frame">
            <div className="inquiry-document">
              <div className="document-heading">
                <span className="round-icon navy-icon">
                  <Icon name="person" />
                </span>
                <div>
                  <strong>Website inquiry</strong>
                  <time>10:24 AM</time>
                </div>
              </div>
              <p className="customer-message">
                Hi, I need an estimate for replacing my roof. We’re in Lekki.
                Can you help?
              </p>
              <div className="analysis-block">
                <div className="analysis-heading">
                  <span className="round-icon gold-icon">
                    <Icon name="gear" />
                  </span>
                  <strong>TAJO AI</strong>
                </div>
                <dl>
                  <div>
                    <dt>Identified:</dt>
                    <dd>Roof replacement</dd>
                  </div>
                  <div>
                    <dt>Location:</dt>
                    <dd>Lekki, Lagos</dd>
                  </div>
                  <div>
                    <dt>Intent:</dt>
                    <dd>Get estimate</dd>
                  </div>
                  <div>
                    <dt>Missing:</dt>
                    <dd>Property size</dd>
                  </div>
                </dl>
                <p className="response-check">
                  <Icon name="check" />
                  Response sent
                </p>
              </div>
            </div>
          </div>
          <div className="connector" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="workflow-results">
            <div className="result-card">
              <span className="round-icon navy-icon">
                <Icon name="message" />
              </span>
              <div>
                <strong>Customer received response</strong>
                <p className="response-bubble">
                  Thanks for reaching out! We’ve got your request and will get
                  back to you shortly. In the meantime, feel free to let us know
                  if you have any questions.
                </p>
                <time>10:25 AM</time>
              </div>
            </div>
            <div className="result-card">
              <span className="round-icon navy-icon">
                <Icon name="message" />
              </span>
              <div>
                <strong>Lead updated</strong>
                <p>Qualified opportunity</p>
                <span className="lead-tag">Roofing · Lekki</span>
                <time>10:29 AM</time>
              </div>
            </div>
            <div className="result-card">
              <span className="round-icon navy-icon">
                <Icon name="calendar" />
              </span>
              <div>
                <strong>Follow-up scheduled</strong>
                <p>Tomorrow · 9:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
