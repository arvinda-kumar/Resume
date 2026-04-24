import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import { getAdjacentProjects, getProjectBySlug } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
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
const Bullet = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ProjectDetailPage: React.FC = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);
  const { prev, next } = getAdjacentProjects(slug);

  const overviewRef = useReveal<HTMLDivElement>();
  const metaRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <PageShell>
      <section className="pf-section pf-page-hero pf-detail-hero">
        <div className="pf-container">
          <nav aria-label="Breadcrumb" className="pf-breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/projects">Projects</Link>
            <span aria-hidden="true">/</span>
            <span>{project.title}</span>
          </nav>

          <div className="pf-detail-hero__grid">
            <div>
              <span className="pf-eyebrow">{project.category}</span>
              <h1 className="pf-detail-hero__title">{project.title}</h1>
              <p className="pf-detail-hero__summary">{project.summary}</p>
              <div className="pf-project__links" style={{ marginTop: "1.5rem" }}>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalIcon /> Live demo
                  </a>
                )}
                {project.code && (
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    <GithubIcon /> Source code
                  </a>
                )}
              </div>
            </div>

            <div ref={metaRef} className="pf-reveal pf-detail-hero__cover">
              <div className="pf-detail-hero__cover-art" aria-hidden="true">
                {project.initials}
              </div>
              <dl className="pf-detail-meta">
                <div>
                  <dt>Year</dt>
                  <dd>{project.year}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                {project.client && (
                  <div>
                    <dt>Client</dt>
                    <dd>{project.client}</dd>
                  </div>
                )}
                <div>
                  <dt>Stack</dt>
                  <dd>
                    <span className="pf-tags" style={{ justifyContent: "flex-end" }}>
                      {project.stack.map((s) => (
                        <span key={s} className="pf-tag">{s}</span>
                      ))}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="pf-section pf-section--alt">
        <div className="pf-container pf-detail-body">
          <div ref={overviewRef} className="pf-reveal pf-detail-block">
            <h2>Overview</h2>
            <p>{project.description}</p>
          </div>

          <div className="pf-detail-block">
            <h2>What I built</h2>
            <ul className="pf-detail-list">
              {project.features.map((f) => (
                <li key={f}>
                  <span className="pf-detail-list__ico"><Bullet /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pf-detail-block pf-detail-two">
            <div>
              <h2>Challenges</h2>
              <ul className="pf-detail-list">
                {project.challenges.map((c) => (
                  <li key={c}>
                    <span className="pf-detail-list__ico pf-detail-list__ico--muted">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Outcomes</h2>
              <ul className="pf-detail-list">
                {project.outcomes.map((o) => (
                  <li key={o}>
                    <span className="pf-detail-list__ico"><Bullet /></span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>{project.userStory.heading}</h2>

          {project.userStory.userStories.map((story, index) => (
          <div key={index}>
            <h4>{story.section}</h4>
            <p>{story.description1}</p>

            <strong>{story.criteria}</strong>
            <ul>
              {story.criteriaList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </section>

      <section className="pf-section">
        <div className="pf-container">
          <div className="pf-detail-nav">
            {prev ? (
              <Link to={`/projects/${prev.slug}`} className="pf-detail-nav__item pf-detail-nav__item--prev">
                <span className="pf-detail-nav__dir"><ArrowLeft /> Previous</span>
                <span className="pf-detail-nav__title">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            <Link to="/projects" className="pf-btn pf-btn--ghost pf-btn--sm">
              All projects
            </Link>
            {next ? (
              <Link to={`/projects/${next.slug}`} className="pf-detail-nav__item pf-detail-nav__item--next">
                <span className="pf-detail-nav__dir">Next <ArrowRight /></span>
                <span className="pf-detail-nav__title">{next.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
      
    </PageShell>
  );
};

export default ProjectDetailPage;
