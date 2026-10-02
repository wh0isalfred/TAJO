import SectionReveal from "./SectionReveal";
import PillAction from "./PillAction";
const steps = [
  {
    title: "Make it easy to say “I’m interested.”",
    text: "A clear website. A quote request. A phone call. A simple way to take the next step.",
  },
  {
    title: "Be there while they’re still interested.",
    text: "Respond, qualify and route new inquiries quickly — even when you’re busy doing the actual work.",
  },
  {
    title: "Not everyone books the first time.",
    text: "That’s normal. What’s expensive is forgetting about them afterward. We build follow-up systems that keep conversations moving.",
  },
];
export default function HowItWorks() {
  return (
    <section
      id="how"
      className="tajo-process tajo-section"
      aria-labelledby="process-heading"
    >
      <SectionReveal>
        <div className="tajo-container process-layout">
          <figure className="process-photo photo-frame" data-reveal>
            <img
              src="/assets/redesign/process.webp"
              width="1122"
              height="1402"
              loading="lazy"
              decoding="async"
              alt="A hand reviewing a written estimate beside a laptop on a wooden desk."
            />
          </figure>
          <div className="process-copy">
            <div data-reveal>
              <h2 id="process-heading">
                Three things have to <em>happen.</em>
              </h2>
              <p className="section-intro">
                Getting the inquiry is only the beginning.
              </p>
            </div>
            <ol className="process-steps">
              {steps.map((step, index) => (
                <li key={step.title} data-reveal>
                  <span className="step-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="process-action" data-reveal>
              <PillAction>Show me what I’m missing</PillAction>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
