import SectionReveal from "./SectionReveal";
export default function FAQ() {
  return <section id="faq" className="tajo-faq tajo-section" aria-labelledby="faq-heading">
    <SectionReveal><div className="tajo-faq-container">
      <div className="tajo-faq-introduction">
        <div data-reveal><h2 id="faq-heading">Frequently asked questions.</h2></div>
        <div className="tajo-faq-contact" data-reveal aria-labelledby="final-cta-heading">
          <img className="tajo-faq-contact-image" src="/assets/old_assets/hero.webp" width="976" height="1103" loading="lazy" decoding="async" alt="" />
          <div className="tajo-faq-contact-copy">
            <h3 id="final-cta-heading">What happens to the lead that doesn't book today?</h3>
            <p>If you know exactly what happens, you're probably in good shape.</p>
            <p>If the answer is some version of <em>“we try to get back to them”</em>...</p>
            <p><strong>that's worth a conversation.</strong></p>
            <button type="button" className="tajo-section-button" data-diagnostic>Show us how you handle leads <span aria-hidden="true">↗</span></button>
            <p className="tajo-faq-contact-note"><em>We'll look at the process first.</em></p>
          </div>
        </div>
      </div>
      <div className="tajo-faq-list">
        <details data-reveal name="tajo-faq" open>
          <summary>We already answer our phones.<span aria-hidden="true" /></summary>
          <div className="tajo-faq-answer"><p><strong>Good.</strong></p><p>Missed-call recovery is only one piece of this.</p><p>The better question is what happens across the whole journey — website inquiries, quote requests, prospects who don't book immediately, estimates that go quiet and older opportunities nobody has revisited.</p><p>If you've genuinely got all of that handled, we won't try to convince you otherwise.</p></div>
        </details>
        <details data-reveal name="tajo-faq"><summary>We already have a website.<span aria-hidden="true" /></summary>
          <div className="tajo-faq-answer"><p>Most of our clients should.</p><p>We're not trying to replace good websites for the sake of replacing them.</p><p>If yours is doing its job, we leave it alone and look elsewhere.</p></div>
        </details>
        <details data-reveal name="tajo-faq"><summary>Is this an AI thing?<span aria-hidden="true" /></summary>
          <div className="tajo-faq-answer"><p>Sometimes AI can help. Sometimes a simple automation does the job better.</p><p><strong>We don't sell AI for the sake of saying AI.</strong></p><p>We care about what happens to the customer.</p></div>
        </details>
        <details data-reveal name="tajo-faq"><summary>Do I need to change the software I already use?<span aria-hidden="true" /></summary>
          <div className="tajo-faq-answer"><p>Not necessarily.</p><p>We'd rather work around what's already working than make your business learn an entirely new system for no reason.</p></div>
        </details>
        <details data-reveal name="tajo-faq"><summary>What does this cost?<span aria-hidden="true" /></summary>
          <div className="tajo-faq-answer"><p>That depends on what's actually missing.</p><p>A website problem and a follow-up problem aren't the same job, so quoting both the same way wouldn't make much sense.</p><p><strong>First we figure out where the leak is. Then we'll tell you what fixing it costs.</strong></p></div>
        </details>
        <details data-reveal name="tajo-faq"><summary>What if I'm not sure what the problem is?<span aria-hidden="true" /></summary>
          <div className="tajo-faq-answer"><p><strong>That's probably the best reason to talk.</strong></p><p>We'll walk through what currently happens when someone finds you, calls, submits an inquiry, asks for an estimate and doesn't book.</p><p>Usually the weak point becomes pretty obvious.</p></div>
        </details>
      </div>

    </div></SectionReveal>
  </section>;
}
