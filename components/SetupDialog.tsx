"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "./Icon";

const labels = {
  name: "Name", business: "Business name or website", email: "Email", phone: "Phone",
  kind: "What kind of business do you run?", source: "Where do most new inquiries come from?",
  followup: "What happens when someone doesn’t book right away?",
};
type Field = keyof typeof labels;
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
const empty: Values = { name: "", business: "", email: "", phone: "", kind: "", source: "", followup: "" };
const choices = {
  kind: ["Roofing", "HVAC", "Plumbing", "Other"],
  source: ["Phone", "Website", "Google", "Social", "Other"],
  followup: ["We follow up manually", "Automated follow-up", "Depends", "Honestly, not sure"],
};
const deliveryKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
export default function SetupDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const summary = useRef<HTMLDivElement>(null);
  const origin = useRef<HTMLElement | null>(null);
  const controller = useRef<AbortController | null>(null);
  const inFlight = useRef(false);
  const previousOverflow = useRef<string | null>(null);
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [mode, setMode] = useState<"form" | "draft" | "sent">("form");
  const [sending, setSending] = useState(false);
  const [deliveryError, setDeliveryError] = useState("");
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const open = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest<HTMLElement>("[data-diagnostic]");
      if (!trigger || dialog.current?.open) return;
      origin.current = trigger;
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      dialog.current?.showModal();
      heading.current?.focus();
    };
    document.addEventListener("click", open);
    return () => {
      document.removeEventListener("click", open);
      controller.current?.abort();
      if (previousOverflow.current !== null) document.body.style.overflow = previousOverflow.current;
    };
  }, []);
  useEffect(() => { if (dialog.current?.open) heading.current?.focus(); }, [mode]);

  function restoreFocus() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
    const target = origin.current?.getClientRects().length ? origin.current : document.querySelector<HTMLElement>(".tajo-menu-toggle");
    target?.focus({ preventScroll: true });
  }
  function close() { dialog.current?.close(); }
  function fieldError(field: Field, value: string) {
    if (field === "name" && !value.trim()) return "Enter your name.";
    if (field === "email") {
      if (!value.trim()) return "Enter your email address.";
      const input = document.createElement("input");
      input.type = "email"; input.value = value.trim();
      if (!input.validity.valid) return "Enter an email address like name@example.com.";
    }
    if (field in choices && !choices[field as keyof typeof choices].includes(value)) {
      return field === "kind" ? "Choose your business type." : field === "source" ? "Choose where most inquiries come from." : "Choose what happens after someone doesn’t book.";
    }
    return undefined;
  }
  function change(field: Field, value: string) {
    setValues(current => ({ ...current, [field]: value }));
    // Clear an existing error when corrected; don't interrupt the first attempt.
    if (errors[field] && !fieldError(field, value)) setErrors(current => ({ ...current, [field]: undefined }));
  }
  function validateAfterCorrection(field: Field) {
    if (errors[field]) setErrors(current => ({ ...current, [field]: fieldError(field, values[field]) }));
  }
  const description = (field: Field) => [field === "email" ? "setup-email-hint" : "", errors[field] ? `setup-${field}-error` : ""].filter(Boolean).join(" ") || undefined;
  const errorText = (field: Field) => errors[field] && <p className="setup-field-error" id={`setup-${field}-error`}>{errors[field]}</p>;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const found: Errors = {};
    (Object.keys(labels) as Field[]).forEach(field => { const message = fieldError(field, values[field]); if (message) found[field] = message; });
    setErrors(found); setDeliveryError("");
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    if (new FormData(event.currentTarget).get("botcheck")) return;
    const cleaned = Object.fromEntries(Object.entries(values).map(([field, value]) => [field, value.trim()])) as Values;
    const message = (Object.keys(labels) as Field[]).map(field => `${labels[field]}: ${cleaned[field] || "Not provided"}`).join("\n");
    if (!deliveryKey) { setDraft(message); setMode("draft"); return; }
    inFlight.current = true; setSending(true);
    const request = new AbortController(); controller.current = request;
    const timeout = window.setTimeout(() => request.abort(), 20000);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST", signal: request.signal,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: deliveryKey, subject: `TAJO setup inquiry — ${cleaned.name}`, from_name: "TAJO Website", name: cleaned.name, email: cleaned.email, message, botcheck: false }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Delivery failed");
      setMode("sent");
    } catch {
      setDeliveryError("We couldn’t send your setup. Your answers are still here. Please try again, or prepare an email instead.");
    } finally {
      window.clearTimeout(timeout); controller.current = null; inFlight.current = false; setSending(false);
    }
  }
  function prepareDraft() {
    setDraft((Object.keys(labels) as Field[]).map(field => `${labels[field]}: ${values[field].trim() || "Not provided"}`).join("\n"));
    setMode("draft");
  }
  return (
    <dialog ref={dialog} className="setup-dialog" aria-labelledby="diagnostic-title" aria-describedby="setup-description" onKeyDown={event => {
        if (event.key !== "Tab") return;
        const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex='0']")).filter(element => element.getClientRects().length > 0);
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === heading.current)) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }} onClose={restoreFocus} onClick={event => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close(); } }}>
      <header className="setup-header">
        <h2 id="diagnostic-title" ref={heading} tabIndex={-1}>{mode === "form" ? "Let’s look at your setup." : mode === "draft" ? "Your email draft is ready." : "Got it."}</h2>
        <p id="setup-description">{mode === "form" ? "Tell us how you handle new inquiries. We’ll look at the process first." : mode === "draft" ? "Nothing has been sent yet. Review your answers, then send them from your email app." : "We’ll take a look before we talk. If we don’t see anything worth fixing, we’ll tell you that too."}</p>
        <button className="setup-close" type="button" aria-label="Close diagnostic" onClick={close}><Icon name="close" /></button>
      </header>
      <div className="setup-scroll">
        <div className="setup-layout">
          <div className="setup-image" aria-hidden="true"><img src="/assets/old_assets/hero.webp" width="976" height="1103" alt="" /></div>
          <div className="setup-content">
            {mode === "form" && <form onSubmit={submit} noValidate aria-busy={sending}>
              <p className="setup-instructions">All fields are required unless marked optional.</p>
              {Object.values(errors).some(Boolean) && <div className="setup-error-summary" ref={summary} tabIndex={-1} aria-labelledby="setup-errors-title"><h3 id="setup-errors-title">A few details need your attention</h3><ul>{(Object.keys(labels) as Field[]).filter(field => errors[field]).map(field => <li key={field}><a href={`#setup-${field}`} onClick={event => { event.preventDefault(); document.getElementById(`setup-${field}`)?.focus(); }}>{errors[field]}</a></li>)}</ul></div>}
              <fieldset disabled={sending} className="setup-fields">
                <legend className="setup-sr-only">Your contact details and business setup</legend>
                <input className="honeypot" type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                {(["name", "business", "email", "phone"] as Field[]).map(field => <div className="setup-field" key={field}>
                  <label htmlFor={`setup-${field}`}>{labels[field]}{(field === "business" || field === "phone") && <span> (optional)</span>}</label>
                  <input id={`setup-${field}`} name={field} type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} autoComplete={field === "name" ? "name" : field === "business" ? "organization" : field === "phone" ? "tel" : "email"} inputMode={field === "email" ? "email" : field === "phone" ? "tel" : "text"} placeholder={field === "name" ? "Your name" : field === "business" ? "Business name or website" : field === "email" ? "name@example.com" : "Include your country code"} value={values[field]} onChange={event => change(field, event.target.value)} onBlur={() => validateAfterCorrection(field)} aria-required={field === "name" || field === "email"} aria-invalid={Boolean(errors[field])} aria-describedby={description(field)} spellCheck={field !== "email"} autoCapitalize={field === "email" ? "none" : undefined} />
                  {field === "email" && <p className="setup-hint" id="setup-email-hint">Personal and business email addresses are welcome.</p>}{errorText(field)}
                </div>)}
                {(Object.keys(choices) as (keyof typeof choices)[]).map(field => <div className={`setup-field${field === "followup" ? " setup-full" : ""}`} key={field}>
                  <label htmlFor={`setup-${field}`}>{labels[field]}</label>
                  <select id={`setup-${field}`} name={field} value={values[field]} onChange={event => change(field, event.target.value)} onBlur={() => validateAfterCorrection(field)} aria-required="true" aria-invalid={Boolean(errors[field])} aria-describedby={description(field)}><option value="" disabled>{field === "kind" ? "Choose your business type" : field === "source" ? "Choose the main source" : "Choose the closest answer"}</option>{choices[field].map(choice => <option value={choice} key={choice}>{choice}</option>)}</select>{errorText(field)}
                </div>)}
              </fieldset>
              <div className="setup-submit-area">
                <button className="setup-submit" type="submit" disabled={sending}>{sending ? "Sending…" : deliveryKey ? "Show TAJO my setup" : "Prepare my email"}<Icon name="arrow" /></button>
                <p className="setup-hint">{deliveryKey ? "We’ll review your setup before discussing the next step." : "We’ll prepare a draft for you to review and send from your email app."}</p>
              </div>
              <p className="setup-status setup-sr-only" role="status">{sending ? "Sending your setup. Please wait." : ""}</p>
              {deliveryError && <div className="setup-delivery-error" role="alert"><p>{deliveryError}</p><button type="button" className="setup-text-button" onClick={prepareDraft}>Prepare an email instead</button></div>}
            </form>}
            {mode === "draft" && <div className="setup-result"><h3>Review your setup</h3><pre className="setup-preview">{draft}</pre><a className="setup-submit" href={`mailto:alfredenyinna03@gmail.com?subject=${encodeURIComponent("TAJO setup inquiry")}&body=${encodeURIComponent(draft)}`}>Open email draft <Icon name="arrow" /></a><button className="setup-text-button" type="button" onClick={() => setMode("form")}>Edit my answers</button></div>}
            {mode === "sent" && <div className="setup-result"><span className="setup-success-mark" aria-hidden="true">✓</span><h3>Your setup has been sent.</h3><p>Thanks for telling us about your business.</p><button className="setup-submit" type="button" onClick={close}>Done</button></div>}
          </div>
        </div>
      </div>
    </dialog>
  );
}
