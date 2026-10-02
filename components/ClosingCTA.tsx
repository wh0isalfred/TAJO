import SectionReveal from "./SectionReveal";
import PillAction from "./PillAction";
export default function ClosingCTA() {
  return (
    <section
      className="tajo-closing tajo-section"
      aria-labelledby="closing-heading"
    >
      <SectionReveal>
        <div className="tajo-container closing-panel" data-reveal>
          <h2 id="closing-heading">
            What happens to the lead
            <br className="desktop-break" /> that doesn’t book <em>today?</em>
          </h2>
          <div className="closing-copy">
            <p>
              If the answer is some version of{" "}
              <em>“we try to get back to them”</em>, that’s worth a
              conversation.
            </p>
            <PillAction light>Show us how you handle leads</PillAction>
            <p className="closing-note">We’ll look at the process first.</p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
