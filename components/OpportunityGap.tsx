import Icon, { type IconName } from "./Icon";
const stages: {
  icon: IconName;
  title: string;
  quote: string;
  outcome: string;
}[] = [
  {
    icon: "phone",
    title: "Inquiry",
    quote: "“Hi, I need a quote for a new roof…”",
    outcome: "They reach out.",
  },
  {
    icon: "clock",
    title: "No response",
    quote: "No reply for\n3+ hours.",
    outcome: "Momentum is lost.",
  },
  {
    icon: "person",
    title: "“I’ll think\nabout it.”",
    quote: "They’re still interested, but not urgent.",
    outcome: "The opportunity goes cold.",
  },
  {
    icon: "calendar",
    title: "Booked",
    quote: "Some never come back.",
    outcome: "You lose revenue.",
  },
];
export default function OpportunityGap() {
  return (
    <section id="why" className="opportunity section-paper">
      <div className="container opportunity-layout">
        <div className="opportunity-copy">
          <p className="eyebrow">The opportunity gap</p>
          <h2>
            Most leads don’t
            <br />
            make it to your inbox.
          </h2>
          <p className="section-intro">
            People are interested. They reach out. But somewhere between the
            inquiry and the booking, things fall apart.
          </p>
          <ul className="dash-list">
            <li>Missed calls.</li>
            <li>Form submissions with no response.</li>
            <li>Customers who say “I’ll think about it.”</li>
            <li>No follow-up, even when they’re interested.</li>
          </ul>
          <p className="gap-conclusion">
            It’s not a lack of demand.
            <br />
            <span>It’s a lack of systems.</span>
          </p>
        </div>
        <div className="opportunity-visual">
          <div className="gap-stages">
            {stages.map((stage, i) => (
              <div className="gap-stage" key={stage.title}>
                <span className="round-icon navy-icon">
                  <Icon name={stage.icon} />
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.quote}</p>
                <span className="stage-outcome">{stage.outcome}</span>
                {i < 3 && <Icon name="arrow" className="stage-arrow" />}
              </div>
            ))}
          </div>
          <div className="gap-resolution">
            <span className="round-icon gold-icon">
              <Icon name="gear" />
            </span>
            <div>
              <h3>TAJO closes the gap.</h3>
              <p>
                It captures the lead, responds instantly, and keeps the
                conversation going — so you get more bookings, not just more
                inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
