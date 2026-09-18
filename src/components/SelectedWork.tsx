"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useState } from "react";
import type { Copy } from "@/lib/translations";
import rayaPreview from "../../public/images/projects/raya/raya-preview.webp";

const tones = ["project-solis", "project-vela", "project-noma"];

type ProjectItem = {
  title: string;
  subtitle: string;
  category: string;
  discipline: string;
  year: string;
  description: string | null;
  href: string;
  image: StaticImageData | null;
};

function ProjectVisual({
  tone,
  image,
  title,
}: {
  tone?: string;
  image: StaticImageData | null;
  title: string;
}) {
  if (image) {
    return (
      <div className="project-visual project-raya">
        <Image
          src={image}
          alt={`${title} website hero`}
          sizes="(max-width: 700px) calc(100vw - 48px), 90vw"
          className="project-image"
        />
      </div>
    );
  }

  return (
    <div className={`project-visual ${tone}`} aria-hidden="true">
      <span className="visual-word">Form / function</span>
      <span className="visual-orbit" />
      <span className="visual-panel" />
    </div>
  );
}

function ProjectCard({
  project,
  index,
  viewLabel,
}: {
  project: ProjectItem;
  index: number;
  viewLabel: string;
}) {
  return (
    <article className="project reveal">
      <a
        href={project.href}
        className="project-link"
        aria-label={`${viewLabel}: ${project.title}`}
        {...(project.href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        <ProjectVisual
          tone={
            project.image ? undefined : tones[(index - 1) % tones.length]
          }
          image={project.image}
          title={project.title}
        />
        <div className="project-meta">
          <div>
            <div>
              <h3>{project.title}</h3>
              {project.description && (
                <p className="project-description">{project.description}</p>
              )}
            </div>
          </div>
          <div className="project-details">
            <span>{project.subtitle}</span>
            <span>{project.category}</span>
            <span>{project.discipline}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </a>
    </article>
  );
}

export function SelectedWork({
  copy,
  projects,
}: {
  copy: Copy["work"];
  projects: Copy["projects"];
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const raya = {
    title: "RAYA",
    ...copy.raya,
    href: "https://raya-website-theta.vercel.app/",
    image: rayaPreview,
  };
  const allProjects = [
    raya,
    ...projects.map((project) => ({
      ...project,
      subtitle: copy.concept,
      year: "2026",
      description: null,
      href: "#contact",
      image: null,
    })),
  ];
  const primaryProjects = allProjects.slice(0, 4);
  const additionalProjects = allProjects.slice(4);

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
      </div>
      <div className="work-heading work-heading--compact">
        <p className="muted-copy reveal reveal-delay-1">{copy.body}</p>
      </div>
      <div className="project-list">
        {primaryProjects.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            viewLabel={copy.view}
            key={project.title}
          />
        ))}
        <button
          type="button"
          className="more-work-control"
          disabled={additionalProjects.length === 0}
          aria-expanded={
            additionalProjects.length > 0 ? isExpanded : undefined
          }
          aria-controls={
            additionalProjects.length > 0 ? "additional-projects" : undefined
          }
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          {isExpanded ? copy.lessProjects : copy.moreWork}
        </button>
        {additionalProjects.length > 0 && (
            <div
              id="additional-projects"
              className="additional-projects"
              data-expanded={isExpanded}
              aria-hidden={!isExpanded}
            >
              <div className="additional-projects-inner">
                {additionalProjects.map((project, index) => (
                  <ProjectCard
                    project={project}
                    index={index + 4}
                    viewLabel={copy.view}
                    key={project.title}
                  />
                ))}
              </div>
            </div>
        )}
      </div>
    </section>
  );
}
