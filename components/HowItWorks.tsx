import SectionReveal from "./SectionReveal";
const steps = [
  { title: "Capture", text: "Make it easy to say “I’m interested.” Clear service pages, quote requests and contact options." },
  { title: "Respond", text: "Be there while they’re still interested. Acknowledge, qualify and route inquiries promptly." },
  { title: "Follow up", text: "Not everyone books the first time. Keep the next action visible after a call or estimate." },
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
              <div className="tajo-step-copy"><h3>{step.title}</h3><p>{step.text}</p></div>
              <div className="tajo-step-number" aria-hidden="true"><span>0{index + 1}</span>Step</div>
            </li>)}
          </ol>
          <div className="tajo-process-action" data-reveal><button className="tajo-section-button" type="button" data-diagnostic>Show me what I’m missing <span aria-hidden="true">→</span></button></div>
        </div>
      </SectionReveal>
    </section>
  );
}
