export function Contact({ copy }: { copy: { label: string; title: string } }) {
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
        <form
          className="contact-email"
          action="mailto:hello@example.com"
          method="post"
        >
          <label className="sr-only" htmlFor="contact-email-input">
            Enter your email
          </label>
          <input
            id="contact-email-input"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
          <button type="submit" aria-label="Send email">
            <span aria-hidden="true">&#8594;</span>
          </button>
        </form>
      </div>
    </section>
  );
}
