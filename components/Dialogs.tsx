"use client";
import { useEffect, useRef } from "react";
import Icon from "./Icon";
import SetupDialog from "./SetupDialog";
const questions = [
  [
    "Do you generate new leads?",
    "We help you make more of the inquiries you already receive. TAJO focuses on your website, response process and follow-up systems; advertising and SEO are not part of this offer.",
  ],
  [
    "Do I need to replace my existing tools?",
    "Not necessarily. We first look at what you use today, then connect or improve the parts that need attention.",
  ],
  [
    "What can you build for my business?",
    "Depending on your setup, we can build a website, inquiry capture, missed-call response, automated follow-up or integrations with your existing tools.",
  ],
  [
    "How much does it cost?",
    "The scope depends on your business and the gaps we identify. We’ll agree on the work and pricing with you before anything is built.",
  ],
  [
    "What happens after I share my setup?",
    "We’ll review how you handle inquiries and follow-up, then discuss where there may be something worth fixing. If everything is already working, we’ll tell you.",
  ],
];
export default function Dialogs() {
  const faq = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const launch = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest<HTMLElement>("[data-faq]");
      if (!button || faq.current?.open) return;
      lastFocus.current = button;
      faq.current?.showModal();
    };
    document.addEventListener("click", launch);
    return () => document.removeEventListener("click", launch);
  }, []);
  function close(dialog: HTMLDialogElement | null) { dialog?.close(); }
  return (
    <>
      <SetupDialog />
      <dialog
        className="dialog"
        ref={faq}
        aria-labelledby="faq-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) close(faq.current);
        }}
        onClose={() => lastFocus.current?.focus()}
      >
        <div className="dialog-header">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title">A few things you might ask.</h2>
          <button
            className="dialog-close"
            aria-label="Close FAQ"
            type="button"
            onClick={() => close(faq.current)}
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="dialog-body">
          {questions.map(([q, a]) => (
            <details className="faq-entry" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </dialog>
    </>
  );
}
