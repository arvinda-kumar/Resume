import React, { useState } from "react";
import { SERVICES, TESTIMONIALS } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: string;
  idx: number;
}> = ({ title, description, icon, idx }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`pf-service pf-reveal pf-reveal--delay-${(idx % 4) + 1}`}>
      <div className="pf-service__ico" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const QuoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.17 5.5A5.25 5.25 0 0 0 2 10.75v5.5A2.75 2.75 0 0 0 4.75 19h2.5A2.75 2.75 0 0 0 10 16.25v-2.5A2.75 2.75 0 0 0 7.25 11H6c0-1.24 1.01-2.25 2.25-2.25a.75.75 0 0 0 0-1.5 4.75 4.75 0 0 0-1.08-.75zm10 0A5.25 5.25 0 0 0 12 10.75v5.5A2.75 2.75 0 0 0 14.75 19h2.5A2.75 2.75 0 0 0 20 16.25v-2.5A2.75 2.75 0 0 0 17.25 11H16c0-1.24 1.01-2.25 2.25-2.25a.75.75 0 0 0 0-1.5 4.75 4.75 0 0 0-1.08-.75z" />
  </svg>
);

const StarFill = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  role: string;
  initials: string;
  location: string;
  imageUrl: string;
  idx: number;
}> = ({ quote, name, role, initials, location,imageUrl, idx }) => {
  const ref = useReveal<HTMLElement>();
  const [expanded, setExpanded] = useState(false);

  const MAX_LENGTH = 135; // adjust as needed
  const isLong = quote.length > MAX_LENGTH;

  const displayedText = expanded
    ? quote
    : quote.slice(0, MAX_LENGTH) + (isLong ? "..." : "");
  return (
    <figure ref={ref} className={`pf-testimonial pf-reveal pf-reveal--delay-${(idx % 4) + 1}`}>
      <span className="pf-testimonial__mark" aria-hidden="true">
        <QuoteIcon />
      </span>
      <div className="pf-testimonial__stars" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarFill key={i} />
        ))}
      </div>
      <blockquote className="pf-testimonial__body">
        <p>
            &ldquo;{displayedText}&rdquo;
            {isLong && (
              <button
                className="pf-read-toggle"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? " Read less" : " Read more"}
              </button>
            )}
          </p>
      </blockquote>
      <hr className="pf-testimonial__divider" />
      <figcaption className="pf-testimonial__person">
        <div className="pf-testimonial__avatar" aria-hidden="true">
          <img src={imageUrl} />
          {/* {initials} */}

        </div>
        <div className="pf-testimonial__who">
          <div className="pf-testimonial__name">{name}</div>
          <div className="pf-testimonial__role">{role}</div>
        </div>
        <span className="pf-testimonial__location">{location}</span>
      </figcaption>
    </figure>
  );
};

const Services: React.FC = () => (
  <section id="services" className="pf-section pf-section--alt">
    <div className="pf-container">
      <div className="pf-section-head pf-reveal is-visible">
        <span className="pf-eyebrow">Services</span>
        <h2 className="pf-section-title">How I can help</h2>
        <p className="pf-section-sub">Focused engagements where a senior frontend engineer moves the needle — end-to-end builds, platform work, and performance wins.</p>
      </div>

      <div className="pf-services__grid" style={{ marginBottom: "3.5rem" }}>
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} {...s} idx={i} />
        ))}
      </div>

      <div className="pf-section-head pf-reveal is-visible" style={{ marginBottom: "2rem" }}>
        <h2 className="pf-section-title" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}>
          What people are saying
        </h2>
      </div>
      <div className="pf-testimonials__grid">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} {...t} idx={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
