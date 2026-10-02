import SectionReveal from "./SectionReveal";
const steps = [
  {
    title: "Capture",
    introduction: "Make it easy to say “I’m interested.”",
    emphasis: "A good opportunity needs a clear next step.",
    detail: "We build clear service pages, quote requests and contact options that make it easier to reach your business.",
  },
  {
    title: "Respond",
    introduction: "Be there while they’re still interested.",
    emphasis: "They shouldn’t have to wonder whether you got their inquiry.",
    detail: "We build systems that acknowledge, qualify and route new inquiries quickly — even when you’re busy on a job.",
  },
  {
    title: "Follow up",
    introduction: "Not everyone books the first time. That’s normal.",
    emphasis: "What’s expensive is forgetting about them afterward.",
    detail: "We build follow-up systems that keep conversations moving after a call, inquiry or estimate.",
  },
];
export default function HowItWorks() {
  return (
    <section id="how" className="tajo-process tajo-section" aria-labelledby="process-heading">
      <SectionReveal>
        <div className="tajo-section-container">
          <div className="tajo-process-heading" data-reveal>
            <p className="tajo-section-label"><span aria-hidden="true" />How it works</p>
            <div><h2 id="process-heading">Three things have to happen.</h2><p>Getting the inquiry is only the beginning.</p></div>
          </div>
          <ol className="tajo-process-steps">
            {steps.map((step, index) => <li key={step.title} data-reveal style={{ transitionDelay: `${index * 110}ms` }}>
              <div className="tajo-step-copy">
                <h3>{step.title}</h3>
                <p>{step.introduction}</p>
                <p><strong>{step.emphasis}</strong></p>
                <p>{step.detail}</p>
              </div>
              <div className="tajo-step-number" aria-hidden="true"><span>0{index + 1}</span>Step</div>
            </li>)}
          </ol>
          <div className="tajo-process-action" data-reveal><button className="tajo-section-button" type="button" data-diagnostic>Show me what I’m missing <span aria-hidden="true">→</span></button></div>
        </div>
      </SectionReveal>
    </section>
  );
}
