import SectionReveal from "./SectionReveal";
import Brand from "./Brand";
export default function ClosingSection() {
  return (
      <div className="who section-dark">
        <div className="container">
        <div className="closing-panel">
          <SectionReveal><footer data-reveal>
            <a href="#top" aria-label="TAJO home">
              <Brand />
            </a>
            <p>
              Intelligent infrastructure for the space between inquiry and
              booking.
            </p>
          </footer></SectionReveal>
        </div>
        </div>
      </div>
  );
}
