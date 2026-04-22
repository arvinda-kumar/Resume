import React from "react";
import { SKILL_CATEGORIES, SkillItem } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const RING_R = 20;
const RING_C = 2 * Math.PI * RING_R;

const SkillRing: React.FC<{ pct: number }> = ({ pct }) => (
  <svg
    className="pf-ring"
    viewBox="0 0 48 48"
    width="48"
    height="48"
    aria-hidden="true"
  >
    <circle
      className="pf-ring__bg"
      cx="24"
      cy="24"
      r={RING_R}
      fill="none"
      strokeWidth="4"
    />
    <circle
      className="pf-ring__fg"
      cx="24"
      cy="24"
      r={RING_R}
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
      transform="rotate(-90 24 24)"
      strokeDasharray={RING_C}
      style={{ ["--pct" as any]: pct }}
    />
    <text x="24" y="27.5" textAnchor="middle" className="pf-ring__txt">
      {pct}%
    </text>
  </svg>
);

const getLevel = (pct: number) => {
  if (pct >= 90) return { label: "Expert", kind: "expert" as const };
  if (pct >= 80) return { label: "Advanced", kind: "advanced" as const };
  return { label: "Proficient", kind: "proficient" as const };
};

const SkillCategoryCard: React.FC<{
  title: string;
  icon: string;
  items: SkillItem[];
  delay: number;
}> = ({ title, icon, items, delay }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`pf-skill-card pf-reveal pf-reveal--delay-${delay}`}
    >
      <header className="pf-skill-card__head">
        <span className="pf-skill-card__ico" aria-hidden="true">{icon}</span>
        <div>
          <h3>{title}</h3>
          <span className="pf-skill-card__count">{items.length} skills</span>
        </div>
      </header>

      <div className="pf-skill-card__list">
        {items.map((item) => {
          const level = getLevel(item.level);
          return (
            <div key={item.name} className="pf-skill-item">
              <SkillRing pct={item.level} />
              <div className="pf-skill-item__body">
                <span className="pf-skill-item__name">{item.name}</span>
                <span
                  className={`pf-skill-item__lvl pf-skill-item__lvl--${level.kind}`}
                >
                  {level.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Skills: React.FC = () => (
  <section id="skills" className="pf-section">
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pf-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(38, 92%, 50%)" />
          <stop offset="100%" stopColor="hsl(32, 90%, 55%)" />
        </linearGradient>
      </defs>
    </svg>

    <div className="pf-container">
      <div className="pf-section-head pf-reveal is-visible">
        <span className="pf-eyebrow">Skills</span>
        <h2 className="pf-section-title">Tools I reach for every day</h2>
        <p className="pf-section-sub">
          Deep expertise in React and the modern JavaScript ecosystem, plus
          years of hands-on e-commerce platform work.
        </p>
      </div>

      <div className="pf-skills__grid">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <SkillCategoryCard
            key={cat.title}
            title={cat.title}
            icon={cat.icon}
            items={cat.items}
            delay={(idx % 3) + 1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
