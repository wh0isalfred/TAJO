import SectionReveal from "./SectionReveal";
const forBusinesses = [
  "Service businesses already getting inquiries",
  "Owners who know some leads could be handled better",
  "Teams that want better systems without adding unnecessary complexity",
  "Businesses where one additional booked job actually matters",
];
const notForBusinesses = [
  "Businesses looking for us to magically generate demand overnight",
  "Companies with no existing customer interest to work with",
  "Teams that already capture, respond to and follow up with every opportunity perfectly",
];
export default function WhoItsFor() {
  return (
    <>
      <section className="tajo-fit tajo-section" id="who" aria-labelledby="fit-heading">
        <SectionReveal>
          <div className="tajo-section-container">
            <div className="tajo-fit-introduction" data-reveal>
              <h2 id="fit-heading">Honest about who this serves.</h2>
              <p>TAJO is built for some businesses and not for others. We'd rather say so up front.</p>
            </div>
            <div className="tajo-fit-columns">
              <div data-reveal><h3>This is for</h3><ul>{forBusinesses.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div>
              <div data-reveal style={{ transitionDelay: "110ms" }}><h3>This is not for</h3><ul>{notForBusinesses.map((item) => <li key={item}><span aria-hidden="true">×</span>{item}</li>)}</ul></div>
            </div>
            <p className="tajo-fit-note" data-reveal>If the last one is you, genuinely — you probably don’t need us.</p>
          </div>
        </SectionReveal>
      </section>

    </>
  );
}
