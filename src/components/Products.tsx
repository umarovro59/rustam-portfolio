export function Products({
  copy,
}: {
  copy: {
    label: string;
    count: string;
    title: string;
    body: string;
    items: readonly string[];
    link: string;
    soon: string;
  };
}) {
  return (
    <section
      id="store"
      className="products-section section-grid"
      aria-labelledby="products-title"
    >
      <div className="section-intro reveal">
        <p className="eyebrow">{copy.label}</p>
        <span className="section-count">{copy.count}</span>
      </div>
      <div className="products-heading">
        <h2 id="products-title" className="section-title reveal">
          {copy.title}
        </h2>
        <p className="products-copy muted-copy reveal reveal-delay-1">
          {copy.body}
        </p>
      </div>
      <div className="product-list reveal reveal-delay-2">
        {copy.items.map((product) => (
          <div className="product-row" key={product}>
            <strong>{product}</strong>
            <span>{copy.soon}</span>
          </div>
        ))}
      </div>
      <a className="text-link products-link reveal" href="#contact">
        {copy.link} <span aria-hidden="true">&#8594;</span>
      </a>
    </section>
  );
}
