export function Services({
  copy,
}: {
  copy: { label: string; title: string; items: readonly string[] };
}) {
  return (
    <section
      className="services-section section-grid"
      aria-labelledby="services-title"
    >
      <div className="section-intro reveal">
        <p className="eyebrow">{copy.label}</p>
      </div>
      <div className="services-content">
        <h2 id="services-title" className="section-title reveal">
          {copy.title}
        </h2>
        <ol className="service-list reveal reveal-delay-1">
          {copy.items.map((service) => (
            <li key={service}>
              <strong>{service}</strong>
              <span className="service-arrow" aria-hidden="true">
                &#8599;
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
