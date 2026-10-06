import type { Copy } from "@/lib/translations";

export function About({
  copy,
}: {
  copy: Copy["about"];
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
        </div>
        <div className="about-tool reveal">
          <h3 className="about-tool-heading">
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" aria-hidden="true">
              <path d="M5 30a5 5 0 0 0 5-5v-5H5a5 5 0 0 0 0 10Z" fill="#0ACF83" />
              <path d="M0 15a5 5 0 0 1 5-5h5v10H5a5 5 0 0 1-5-5Z" fill="#A259FF" />
              <circle cx="15" cy="15" r="5" fill="#1ABCFE" />
              <path d="M0 5a5 5 0 0 1 5-5h5v10H5a5 5 0 0 1-5-5Z" fill="#F24E1E" />
              <path d="M10 0h5a5 5 0 0 1 0 10h-5V0Z" fill="#FF7262" />
            </svg>
            FIGMA
          </h3>
          <p>{copy.figmaBody}</p>
          <p>{copy.prototypeBody}</p>
        </div>
        <div className="about-process reveal">
          <h3 className="about-process-heading">{copy.processTitle}</h3>
          <ol className="about-workflow">
            {copy.steps.map((step, index) => (
              <li key={step}>
                {index > 0 && (
                  <span className="about-workflow-arrow" aria-hidden="true">
                    <span className="about-arrow-horizontal">→</span>
                    <span className="about-arrow-vertical">↓</span>
                  </span>
                )}
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p>{copy.processBody}</p>
        </div>
      </div>
    </section>
  );
}
