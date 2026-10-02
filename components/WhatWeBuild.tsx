import SectionReveal from "./SectionReveal";
import Icon, { type IconName } from "./Icon";
const services: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Website & Lead Capture",
    description: "If the front door needs work, we improve it.",
    icon: "browser",
  },
  {
    title: "Response Systems",
    description: "If response time is the problem, we work there.",
    icon: "message",
  },
  {
    title: "Follow-Up",
    description:
      "If prospects go quiet after a call or estimate, we build the follow-up around that.",
    icon: "followup",
  },
];
export default function WhatWeBuild() {
  return (
    <section
      className="tajo-trust tajo-section"
      id="build"
      aria-labelledby="trust-heading"
    >
      <SectionReveal>
        <div className="tajo-container">
          <div className="trust-introduction">
            <h2 id="trust-heading" data-reveal>
              No need to rip
              <br />
              <em>everything</em> out.
            </h2>
            <p className="trust-message" data-reveal>
              Already have part of this handled? Good. We’ll work on what’s missing.
            </p>
          </div>
          <ul className="trust-services" aria-label="Where TAJO can help">
            {services.map((service) => (
              <li key={service.title} data-reveal>
                <Icon name={service.icon} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>
    </section>
  );
}
