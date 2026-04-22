import React from "react";
import { EXPERIENCE } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const TimelineItem: React.FC<{
  role: string;
  company: string;
  period: string;
  achievements: string[];
  idx: number;
}> = ({ role, company, period, achievements, idx }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`pf-tl-item pf-reveal pf-reveal--delay-${(idx % 4) + 1}`}>
      <div className="pf-tl-item__meta">
        <h3 className="pf-tl-item__role">{role}</h3>
        <span className="pf-tl-item__company">@ {company}</span>
        <span className="pf-tl-item__date">{period}</span>
      </div>
      <ul>
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => (
  <section id="experience" className="pf-section">
    <div className="pf-container">
      <div className="pf-section-head pf-reveal is-visible">
        <span className="pf-eyebrow">Experience</span>
        <h2 className="pf-section-title">Career timeline</h2>
        <p className="pf-section-sub">10+ years across product teams, agencies, and freelance engagements — with a consistent focus on frontend craft.</p>
      </div>

      <div className="pf-timeline">
        {EXPERIENCE.map((e, i) => (
          <TimelineItem key={e.company + e.period} {...e} idx={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
