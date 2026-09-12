import type { Copy } from "@/lib/translations";

const tones = ["project-solis", "project-vela", "project-noma"];

function ProjectVisual({ tone, number }: { tone: string; number: string }) {
  return (
    <div className={`project-visual ${tone}`} aria-hidden="true">
      <span className="visual-number">{number}</span>
      <span className="visual-word">FORM / FUNCTION</span>
      <span className="visual-orbit" />
      <span className="visual-panel" />
    </div>
  );
}

export function SelectedWork({
  copy,
  projects,
}: {
  copy: Copy["work"];
  projects: Copy["projects"];
}) {
  return (
    <section
      id="work"
      className="work-section section-grid"
      aria-labelledby="work-label"
    >
      <div className="section-intro reveal">
        <p id="work-label" className="eyebrow">
          {copy.label}
        </p>
        <span className="section-count">{copy.count}</span>
      </div>
      <div className="work-heading work-heading--compact">
        <p className="muted-copy reveal reveal-delay-1">{copy.body}</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project reveal" key={project.title}>
            <a
              href="#contact"
              className="project-link"
              aria-label={`${copy.view}: ${project.title}`}
            >
              <ProjectVisual tone={tones[index]} number={`0${index + 1}`} />
              <div className="project-meta">
                <div>
                  <span className="project-number">0{index + 1}</span>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-details">
                  <span>{copy.concept}</span>
                  <span>{project.category}</span>
                  <span>{project.discipline}</span>
                  <span>2026</span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
