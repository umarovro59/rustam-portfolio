"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { Copy } from "@/lib/translations";
import rayaPreview from "../../public/images/projects/raya/raya-preview.webp";
import norwayPreview from "../../public/images/projects/norway/norway-preview.webp";

type ProjectItem = {
  title: string;
  subtitle: string;
  category: string;
  discipline: string;
  year: string;
  description: string | null;
  href: string;
  image: StaticImageData;
};

function ProjectVisual({ image, title }: { image: StaticImageData; title: string }) {
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

function ProjectCard({
  project,
  viewLabel,
}: {
  project: ProjectItem;
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
}: {
  copy: Copy["work"];
}) {
  const raya = {
    title: "RAYA",
    ...copy.raya,
    href: "https://raya-website-theta.vercel.app/",
    image: rayaPreview,
  };
  const allProjects = [
    raya,
    {
      title: "Around the World — Norway Mountains",
      ...copy.norway,
      href: "https://norway-travel-website.vercel.app/",
      image: norwayPreview,
    },
  ];

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
        {allProjects.map((project) => (
          <ProjectCard
            project={project}
            viewLabel={copy.view}
            key={project.title}
          />
        ))}
      </div>
    </section>
  );
}
