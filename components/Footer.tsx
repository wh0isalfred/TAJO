import Brand from "./Brand";
import SectionReveal from "./SectionReveal";
const links = [["why", "Why TAJO"], ["how", "How it works"], ["build", "What we fix"], ["who", "Who it’s for"], ["faq", "FAQ"]];
export default function Footer() {
  return <footer className="tajo-footer">
    <SectionReveal><div className="tajo-footer-container">
      <div className="tajo-footer-main">
        <div className="tajo-footer-brand" data-reveal>
          <a href="#top" aria-label="TAJO home"><Brand /></a>
          <p>Intelligent infrastructure for the space between inquiry and booking.</p>
        </div>
        <div className="tajo-footer-contact" data-reveal>
          <nav aria-label="Footer navigation">{links.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
          <a className="tajo-footer-email" href="mailto:tajopartners@gmail.com">tajopartners@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="tajo-footer-bottom" data-reveal>
        <p>© {new Date().getFullYear()} TAJO. All rights reserved.</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </div></SectionReveal>
  </footer>;
}
