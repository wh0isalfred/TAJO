import Icon, { type IconName } from "./Icon";
const offerings: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "message",
    title: "Smart websites",
    description: "Capture and qualify leads.",
  },
  { icon: "gear", title: "Automations", description: "Handle the routine." },
  {
    icon: "message",
    title: "Integrations",
    description: "Connect your existing tools.",
  },
  {
    icon: "calendar",
    title: "Follow-up systems",
    description: "Keep the conversation alive.",
  },
];
export default function WhatWeBuild() {
  return (
    <section className="build section-paper" id="build">
      <div className="container build-layout">
        <div className="build-copy">
          <p className="eyebrow">What TAJO builds</p>
          <h2>
            More than a website.
            <br />A system that works.
          </h2>
          <p>
            Sometimes it’s a website. Sometimes it’s automation. Sometimes it’s
            follow-up. Sometimes it’s the way your existing tools connect. TAJO
            builds what your business actually needs — and nothing you don’t.
          </p>
          <button className="text-link gold-link" type="button" data-diagnostic>
            See what we can build <Icon name="arrow" />
          </button>
        </div>
        <div className="device-showcase">
          <img
            src="/assets/new_assets/whatwebuild.jpg"
            alt="Roofing website displayed on a laptop beside a mobile inquiry form"
            loading="lazy"
          />
        </div>
        <ul className="offering-list">
          {offerings.map((o) => (
            <li key={o.title}>
              <span className="round-icon navy-icon">
                <Icon name={o.icon} />
              </span>
              <div>
                <h3>{o.title}</h3>
                <p>{o.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
