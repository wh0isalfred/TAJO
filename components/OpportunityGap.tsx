import SectionReveal from "./SectionReveal";
import Icon from "./Icon";
const gaps = [
  {
    title: "A missed call.",
    text: "Someone calls while you’re on a job.",
    icon: "phone" as const,
  },
  {
    title: "An unanswered inquiry.",
    text: "A form sits unanswered for a few hours.",
    icon: "browser" as const,
  },
  {
    title: "An estimate that goes quiet.",
    text: "They were interested. Just not ready yet.",
    icon: "message" as const,
  },
];
export default function OpportunityGap() {
  return (
    <section
      id="why"
      className="tajo-problem tajo-section"
      aria-labelledby="problem-heading"
    >
      <SectionReveal>
        <div className="tajo-container">
          <div className="problem-heading" data-reveal>
            <h2 id="problem-heading">
              Stop losing leads you’ve <em>already earned.</em>
            </h2>
            <p>Good opportunities can slip away in ordinary moments.</p>
          </div>
          <div className="problem-grid">
            <article className="problem-block" data-reveal>
              <Icon name={gaps[0].icon} />
              <h3>{gaps[0].title}</h3>
              <p>{gaps[0].text}</p>
            </article>
            <figure className="problem-photo photo-frame" data-reveal>
              <img
                src="/assets/redesign/phone.webp"
                width="1254"
                height="1254"
                loading="lazy"
                decoding="async"
                alt="A service business owner taking a phone call in their workshop."
              />
            </figure>
            {gaps.slice(1).map((gap) => (
              <article className="problem-block" data-reveal key={gap.title}>
                <Icon name={gap.icon} />
                <h3>{gap.title}</h3>
                <p>{gap.text}</p>
              </article>
            ))}
          </div>
          <div className="problem-conclusion" data-reveal>
            <p>
              None of these look catastrophic on their own. But enough of them
              add up.
              <br />
              <strong>TAJO helps close that gap.</strong>
            </p>
            <p>
              We look at what happens from the moment someone finds your
              business
              <br className="desktop-break" /> to the moment they become a
              customer — then build what’s missing.
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
