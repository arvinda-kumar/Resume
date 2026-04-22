import React from "react";
import { Link } from "react-router-dom";
import { PROJECTS, Project } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.57.11.78-.25.78-.55v-1.9c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.5 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.67.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

const ProjectCard: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => {
  const ref = useReveal<HTMLElement>();
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  return (
    <article ref={ref} className={`pf-project pf-project--linked pf-reveal pf-reveal--delay-${(idx % 3) + 1}`}>
      <Link to={`/projects/${project.slug}`} className="pf-project__link" aria-label={`View case study: ${project.title}`}>
        <div
          className={`pf-project__cover${project.thumbnail ? " pf-project__cover--image" : ""}`}
          aria-hidden="true"
        >
          {project.thumbnail ? (
            <img src={project.thumbnail} alt="" loading="lazy" />
          ) : (
            project.initials
          )}
          <span className="pf-project__year">{project.year}</span>
        </div>
        <div className="pf-project__body">
          <div className="pf-project__meta">
            <span className="pf-tag pf-tag--accent">{project.category}</span>
          </div>
          <h3 className="pf-project__title">{project.title}</h3>
          <p className="pf-project__desc">{project.summary}</p>
          <div className="pf-project__stack">
            {project.stack.slice(0, 4).map((s) => (
              <span key={s} className="pf-tag">{s}</span>
            ))}
          </div>
        </div>
      </Link>
      <div className="pf-project__links">
        <Link to={`/projects/${project.slug}`} onClick={stop}>
          Case study →
        </Link>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={stop} aria-label={`${project.title} live demo`}>
            <ExternalIcon /> Live
          </a>
        )}
        {project.code && (
          <a href={project.code} target="_blank" rel="noopener noreferrer" onClick={stop} aria-label={`${project.title} source code`}>
            <GithubIcon /> Code
          </a>
        )}
      </div>
    </article>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="pf-section pf-section--alt">
    <div className="pf-container">
      <div className="pf-section-head pf-reveal is-visible">
        <span className="pf-eyebrow">Projects</span>
        <h2 className="pf-section-title">Selected work</h2>
        <p className="pf-section-sub">A snapshot of recent builds — from headless commerce storefronts to data-dense SaaS dashboards.</p>
      </div>

      <div className="pf-projects__grid">
        {PROJECTS.slice(0, 4).map((p, i) => (
          <ProjectCard key={p.slug} project={p} idx={i} />
        ))}
      </div>

      <div className="pf-projects__cta">
        <Link to="/projects" className="pf-btn pf-btn--primary">
          View all projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <p className="pf-projects__cta-hint">
          {PROJECTS.length - 4}+ more case studies on the full projects page
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
