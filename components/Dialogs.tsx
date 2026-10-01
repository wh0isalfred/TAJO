"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "./Icon";
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
    "What happens after the diagnostic?",
    "You’ll see an initial assessment of your setup. If you choose to share it, we can review your priorities and discuss a practical next step.",
  ],
];
export default function Dialogs() {
  const diagnostic = useRef<HTMLDialogElement>(null),
    faq = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState<"questions" | "contact" | "draft" | "sent">(
    "questions",
  );
  const [findings, setFindings] = useState<string[]>([]),
    [answers, setAnswers] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false),
    [error, setError] = useState("");
  const [emailDraft, setEmailDraft] = useState("");
  const lastFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const launch = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = target.closest("[data-diagnostic],[data-faq]");
      if (!button) return;
      lastFocus.current = button as HTMLElement;
      if (button.hasAttribute("data-diagnostic"))
        diagnostic.current?.showModal();
      else faq.current?.showModal();
    };
    document.addEventListener("click", launch);
    return () => document.removeEventListener("click", launch);
  }, []);
  function close(dialog: HTMLDialogElement | null) {
    dialog?.close();
    lastFocus.current?.focus();
  }
  function assess(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      string
    >;
    setAnswers(values);
    const result: string[] = [];
    if (values.calls === "voicemail")
      result.push(
        "Capture: a missed-call response can keep inquiries from disappearing into voicemail.",
      );
    if (values.response !== "fast")
      result.push(
        "Respond: your inquiry forms could acknowledge requests immediately and route them to the right person.",
      );
    if (values.followup !== "system")
      result.push(
        "Follow up: a clear, consistent follow-up process could keep interested customers in the conversation.",
      );
    if (!result.length)
      result.push(
        "Your core response process is in place. The next step is to review how your tools connect and where handoffs could be smoother.",
      );
    setFindings(result);
    setStep("contact");
    setError("");
  }
  async function contact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const f = new FormData(e.currentTarget);
    if (f.get("botcheck")) return;
    const name = String(f.get("name")),
      email = String(f.get("email")),
      business = String(f.get("business")),
      notes = String(f.get("notes") || "");
    const message = `TAJO setup diagnostic\n\nName: ${name}\nEmail: ${email}\nBusiness: ${business}\n\nMissed calls: ${answers.calls}\nInquiry response: ${answers.response}\nFollow-up: ${answers.followup}\n\nInitial priorities:\n${findings.map((x) => "• " + x).join("\n")}\n\nAdditional details: ${notes}`;
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!key) {
      setEmailDraft(message);
      setStep("draft");
      return;
    }
    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key,
          subject: "TAJO setup diagnostic — " + name,
          from_name: "TAJO Website",
          name,
          email,
          business,
          message,
          botcheck: false,
        }),
      });
      const data = await response.json();
      if (!data.success) throw Error("Submission failed");
      setStep("sent");
    } catch {
      setError("We couldn’t send your diagnostic. Please try again.");
    } finally {
      setSending(false);
    }
  }
  return (
    <>
      <dialog
        ref={diagnostic}
        className="dialog"
        aria-labelledby="diagnostic-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) close(diagnostic.current);
        }}
        onClose={() => lastFocus.current?.focus()}
      >
        <div className="dialog-header">
          <p className="eyebrow">Let’s look at your setup</p>
          <h2 id="diagnostic-title">
            {step === "questions"
              ? "Where are opportunities slipping through?"
              : step === "contact"
                ? "Your starting points."
                : step === "draft"
                  ? "Your diagnostic is ready."
                  : "Thanks — we’ve got your setup."}
          </h2>
          <p>
            {step === "questions"
              ? "Three quick questions. An initial assessment, with no pressure."
              : step === "contact"
                ? "Here’s what your answers suggest. Tell us about your business if you’d like to discuss it."
                : step === "draft"
                  ? "Review your message below, then open it in your email app to send. Nothing has been sent yet."
                  : "We’ll review your diagnostic and get back to you."}
          </p>
          <button
            className="dialog-close"
            type="button"
            aria-label="Close diagnostic"
            onClick={() => close(diagnostic.current)}
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="dialog-body">
          {step === "questions" && (
            <form onSubmit={assess}>
              <div className="field">
                <label htmlFor="calls">
                  When you miss a call, what happens next?
                </label>
                <select id="calls" name="calls" required defaultValue="">
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="voicemail">
                    It goes to voicemail, or we miss it completely
                  </option>
                  <option value="callback">
                    Someone calls them back manually
                  </option>
                  <option value="automatic">
                    They receive an automatic response
                  </option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="response">
                  How quickly do website inquiries get a response?
                </label>
                <select id="response" name="response" required defaultValue="">
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="fast">Within a few minutes</option>
                  <option value="hours">It can take several hours</option>
                  <option value="unsure">
                    We’re not sure, or don’t have a form
                  </option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="followup">
                  How do you follow up with interested customers?
                </label>
                <select id="followup" name="followup" required defaultValue="">
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="system">We have a consistent system</option>
                  <option value="manual">
                    We follow up when someone remembers
                  </option>
                  <option value="none">
                    We don’t have a follow-up process
                  </option>
                </select>
              </div>
              <button className="button" type="submit">
                See my starting points <Icon name="arrow" />
              </button>
            </form>
          )}
          {step === "contact" && (
            <>
              <div className="diagnostic-result">
                <h3>Places to look first</h3>
                <ul>
                  {findings.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <form onSubmit={contact}>
                <input
                  className="honeypot"
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                  />
                </div>
                <div className="field">
                  <label htmlFor="business">Business name or website</label>
                  <input id="business" name="business" required />
                </div>
                <div className="field">
                  <label htmlFor="notes">
                    Anything you’d like us to know? (optional)
                  </label>
                  <textarea id="notes" name="notes" />
                </div>
                <button className="button" type="submit" disabled={sending}>
                  {sending
                    ? "Sending…"
                    : process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
                      ? "Share my setup"
                      : "Prepare my email"}
                  <Icon name="arrow" />
                </button>
                {error && (
                  <p className="form-feedback" role="alert">
                    {error}
                  </p>
                )}
              </form>
              <button
                className="text-link gold-link"
                type="button"
                style={{ marginTop: 18 }}
                onClick={() => setStep("questions")}
              >
                Back to my answers
              </button>
            </>
          )}
          {step === "draft" && (
            <>
              <div className="email-preview">{emailDraft}</div>
              <a
                className="button"
                href={`mailto:alfredenyinna03@gmail.com?subject=${encodeURIComponent("TAJO setup diagnostic")}&body=${encodeURIComponent(emailDraft)}`}
              >
                Open email draft <Icon name="arrow" />
              </a>
              <button
                className="text-link gold-link"
                type="button"
                style={{ marginTop: 18 }}
                onClick={() => setStep("contact")}
              >
                Edit my details
              </button>
            </>
          )}
          {step === "sent" && (
            <button
              className="button"
              type="button"
              onClick={() => close(diagnostic.current)}
            >
              Done
            </button>
          )}
        </div>
      </dialog>
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
