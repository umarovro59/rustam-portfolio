import { LiveClock } from "@/components/LiveClock";

export function Hero({
  copy,
}: {
  copy: {
    kicker: string;
    kickerDetail: string;
    role: string;
    title: string;
    body: string;
    cta: string;
  };
}) {
  return (
    <section className="hero section-grid" aria-labelledby="hero-title">
      <div className="hero-kicker hero-type-kicker">
        {copy.kicker} <span>{copy.kickerDetail}</span>
        <LiveClock />
      </div>
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title hero-type-title">
          {copy.title}
        </h1>
        <div className="hero-foot">
          <p className="hero-type-body">{copy.body}</p>
          <a className="text-link hero-type-cta" href="#work">
            {copy.cta} <span aria-hidden="true">&#8595;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
