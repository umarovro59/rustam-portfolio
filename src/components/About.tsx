export function About({
  copy,
}: {
  copy: { label: string; title: string; body: string; approach: string };
}) {
  return (
    <section
      id="about"
      className="about-section section-grid"
      aria-labelledby="about-title"
    >
      <div className="section-intro reveal">
        <p className="eyebrow">{copy.label}</p>
      </div>
      <div className="about-content">
        <h2 id="about-title" className="section-title reveal">
          {copy.title}
        </h2>
        <div className="about-text reveal reveal-delay-1">
          <p>{copy.body}</p>
          <span className="about-signature">{copy.approach}</span>
        </div>
      </div>
    </section>
  );
}
