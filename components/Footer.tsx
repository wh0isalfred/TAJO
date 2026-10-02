import Brand from "./Brand";
const links = [
  ["why", "Why TAJO"],
  ["how", "How it works"],
  ["build", "What we fix"],
  ["who", "Who it’s for"],
  ["faq", "FAQ"],
];
export default function Footer() {
  return (
    <footer className="tajo-footer">
      <div className="tajo-container footer-layout">
        <div className="footer-brand">
          <a href="#top" aria-label="TAJO home">
            <Brand />
          </a>
          <p>© {new Date().getFullYear()} TAJO. All rights reserved.</p>
        </div>
        <nav aria-label="Footer navigation">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
          <button type="button" data-diagnostic>
            Talk to us
          </button>
        </nav>
        <a className="footer-email" href="mailto:tajopartners@gmail.com">
          tajopartners@gmail.com
        </a>
      </div>
    </footer>
  );
}
