"use client";

import { useRef, useState, type FormEvent } from "react";
import { useForm } from "@formspree/react";
import type { Copy } from "@/lib/translations";

const FORMSPREE_FORM_ID = "xqppepak";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
const MAX_MESSAGE_LENGTH = 2000;

type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

export function Contact({ copy }: { copy: Copy["contact"] }) {
  const [state, submit, reset] = useForm(FORMSPREE_FORM_ID);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const submittingRef = useRef(false);

  const clearFieldError = (field: FieldName) => {
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });

    if (state.errors) reset();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state.submitting || submittingRef.current) return;

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: FieldErrors = {};

    if (!name) nextErrors.name = copy.errors.required;
    if (!email) {
      nextErrors.email = copy.errors.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = copy.errors.email;
    }
    if (!message) {
      nextErrors.message = copy.errors.required;
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      nextErrors.message = copy.errors.messageLength;
    }

    reset();
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", message);
    submittingRef.current = true;
    try {
      await submit(formData);
    } finally {
      submittingRef.current = false;
    }
  };

  return (
    <section
      id="contact"
      className="contact-section section-grid"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">{copy.label}</p>
      <div className="contact-main">
        <h2 id="contact-title" className="contact-title">
          {copy.title}
        </h2>
        {state.succeeded ? (
          <p className="contact-status contact-status--success" role="status">
            {copy.success}
          </p>
        ) : (
          <form
            className="contact-form"
            action={FORMSPREE_ENDPOINT}
            method="post"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="hidden"
              name="subject"
              value="New project inquiry — Rustam Portfolio"
            />
            <input
              type="hidden"
              name="source"
              value="Portfolio Contact Form"
            />
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-company">Company website</label>
              <input
                id="contact-company"
                name="_gotcha"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-name">{copy.nameLabel}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder={copy.namePlaceholder}
                autoComplete="name"
                maxLength={100}
                required
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                onInput={() => clearFieldError("name")}
              />
              {fieldErrors.name && (
                <p id="contact-name-error" className="contact-field-error">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">{copy.emailLabel}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder={copy.emailPlaceholder}
                autoComplete="email"
                inputMode="email"
                maxLength={254}
                required
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                onInput={() => clearFieldError("email")}
              />
              {fieldErrors.email && (
                <p id="contact-email-error" className="contact-field-error">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">{copy.messageLabel}</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={copy.messagePlaceholder}
                rows={5}
                maxLength={MAX_MESSAGE_LENGTH}
                required
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                onInput={() => clearFieldError("message")}
              />
              {fieldErrors.message && (
                <p id="contact-message-error" className="contact-field-error">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            {state.errors && (
              <p className="contact-status contact-status--error" role="alert">
                {copy.error}
              </p>
            )}

            <button className="contact-submit" type="submit" disabled={state.submitting}>
              <span>{state.submitting ? copy.submitting : copy.submit}</span>
              {!state.submitting && <span aria-hidden="true">&#8594;</span>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
