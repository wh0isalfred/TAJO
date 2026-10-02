import SectionReveal from "./SectionReveal";
import TrustScene from "./TrustScene";
import Icon, { type IconName } from "./Icon";
const services: { title: string; description: string; icon: IconName }[] = [
  { title: "Website & Lead Capture", description: "If the front door needs work, we improve it.", icon: "browser" },
  { title: "Response Systems", description: "If response time is the problem, we work there.", icon: "message" },
  { title: "Follow-Up", description: "If good prospects disappear after the first conversation or estimate, we build the system around that.", icon: "followup" },
];
export default function WhatWeBuild() {
  return <section className="tajo-trust tajo-section" id="build" aria-labelledby="trust-heading">
    <SectionReveal><div className="tajo-section-container tajo-trust-layout">
      <div className="tajo-trust-message">
        <h2 id="trust-heading" data-reveal>No need to rip everything out.</h2>
        <p data-reveal>You may already have a good website. You may already answer every call. You may already have a CRM that works perfectly. Good.</p>
        <p className="tajo-trust-promise" data-reveal>We’re not interested in selling you things you don’t need.</p>
        <p data-reveal>We look for the part between inquiry, response, follow-up and a booked job that’s actually weak.</p>
        <p className="tajo-trust-fix" data-reveal>Then we fix <span>that.</span></p>
      </div>
      <TrustScene>
        <div className="tajo-trust-owner" data-reveal><div className="tajo-trust-owner-motion"><img src="/assets/new_assets/trust-illustration.png" width="1278" height="1231" loading="lazy" decoding="async" alt="A relaxed service business owner holding a tablet beside their workbench and toolbox." /></div></div>
        <ul className="tajo-trust-services" aria-label="Where TAJO can help">
          {services.map((service, index) => <li key={service.title} data-reveal style={{ transitionDelay: `${index * 100}ms` }}><article><span className="tajo-trust-card-icon" aria-hidden="true"><Icon name={service.icon} /></span><h3>{service.title}</h3><p>{service.description}</p></article></li>)}
        </ul>
      </TrustScene>
    </div></SectionReveal>
  </section>;
}
