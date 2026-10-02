import SectionReveal from "./SectionReveal";
const services = [
  { title: "Website & Lead Capture", description: "If the front door needs work, we improve it." },
  { title: "Response Systems", description: "If response time is the problem, we work there." },
  { title: "Follow-Up", description: "If good prospects disappear after the first conversation or estimate, we build the system around that." },
];
export default function WhatWeBuild() {
  return (
    <section className="tajo-trust tajo-section" id="build" aria-labelledby="trust-heading">
      <SectionReveal>
        <div className="tajo-section-container tajo-trust-layout">
          <div className="tajo-trust-message" data-reveal>
            <h2 id="trust-heading">No need to rip everything out.</h2>
            <div className="tajo-trust-already">
              <p>You may already have a good website.</p>
              <p>You may already answer every call.</p>
              <p>You may already have a CRM that works perfectly.</p>
            </div>
            <p className="tajo-trust-good">Good.</p>
            <p>We’re not interested in selling you things you don’t need.</p>
            <p className="tajo-trust-journey">We look for the part between <strong>inquiry <span aria-hidden="true">→</span><span className="sr-only">to</span> response <span aria-hidden="true">→</span><span className="sr-only">to</span> follow-up <span aria-hidden="true">→</span><span className="sr-only">to</span> booked job</strong> that’s actually weak.</p>
            <p className="tajo-trust-fix">Then we fix <em>that.</em></p>
          </div>
          <ul className="tajo-trust-services" aria-label="Where TAJO can help" data-reveal>
            {services.map((service) => <li key={service.title}><h3>{service.title}</h3><p>{service.description}</p></li>)}
          </ul>
        </div>
      </SectionReveal>
    </section>
  );
}
