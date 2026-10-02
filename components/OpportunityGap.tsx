import SectionReveal from "./SectionReveal";
const gaps = ["Calls that go unanswered", "Website inquiries waiting for a reply", "Estimates with no follow-up", "Interested customers not ready yet"];
export default function OpportunityGap() {
  return (
    <section id="why" className="tajo-problem tajo-section" aria-labelledby="problem-heading">
      <SectionReveal>
        <div className="tajo-section-container">
          <div className="tajo-problem-panel" data-reveal>
            <div className="tajo-problem-copy">
              <h2 id="problem-heading"><span>Stop losing</span> leads you’ve already earned.</h2>
              <div>
                <p>TAJO builds systems that help service businesses capture inquiries, respond quickly and follow up — so fewer potential customers slip away.</p>
                <a className="tajo-section-button" href="#how">See how it works <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <figure className="tajo-problem-art">
              <img src="/assets/new_assets/problem-illustration.jpg" width="2270" height="1888" loading="lazy" decoding="async" alt="A busy service business owner considering a clipboard while their phone rings." />
            </figure>
            <ul className="tajo-gap-list">
              {gaps.map((gap) => <li key={gap}><span aria-hidden="true">×</span>{gap}</li>)}
            </ul>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
