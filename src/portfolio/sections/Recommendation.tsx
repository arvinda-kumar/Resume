import React from "react";
import { MANAGER_RECOMMENDATION } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const QuoteIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
  </svg>
);

const Recommendation: React.FC = () => {
  const cardRef = useReveal<HTMLDivElement>();
  const r = MANAGER_RECOMMENDATION;

  return (
    <section id="recommendation" className="pf-section">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal is-visible">
          <span className="pf-eyebrow">Recommendation</span>
          <h2 className="pf-section-title">A word from my manager</h2>
          <p className="pf-section-sub">
            Recommendation shared on LinkedIn — straight from the people I've
            worked closest with.
          </p>
        </div>

        <div ref={cardRef} className="pf-recommend pf-reveal">
          <div className="pf-recommend__quote-mark" aria-hidden="true">
            <QuoteIcon />
          </div>

          <blockquote className="pf-recommend__quote">{r.quote}</blockquote>

          <div className="pf-recommend__foot">
            <div className="pf-recommend__person">
              <div className="pf-recommend__avatar" aria-hidden="true">
                {r.initials}
              </div>
              <div className="pf-recommend__meta">
                <strong className="pf-recommend__name">{r.name}</strong>
                <span className="pf-recommend__role">{r.role}</span>
                <span className="pf-recommend__relation">
                  {r.relationship} · {r.date}
                </span>
              </div>
            </div>

            <a
              href={r.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-recommend__link"
              aria-label={`View ${r.name}'s recommendation on LinkedIn`}
            >
              <LinkedInIcon />
              <span>View on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
