import React from "react";
import { useReveal } from "../hooks/useReveal";

interface Tech {
  name: string;
  slug: string;
}

const TECHS: Tech[] = [
  { name: "Ant Design", slug: "Ant Design" },
  { name: "Material UI (MUI)", slug: "material ui" },
  { name: "shadcn/ui", slug: "shadcn/ui" },
  { name: "Polaris", slug: "polaris" },
  { name: "Ounce", slug: "ounce" },

];

const SystemCard: React.FC<{ tech: Tech; idx: number }> = ({ tech, idx }) => {
  const ref = useReveal<HTMLDivElement>();
  const url = `url("https://cdn.simpleicons.org/${tech.slug}/000000")`;
  return (
    <div
      ref={ref}
      className={`pf-tech-card pf-reveal pf-reveal--delay-${(idx % 4) + 1}`}
      title={tech.name}
    >
      <span
        className="pf-tech-card__ico"
        aria-hidden="true"
        style={
          {
            WebkitMaskImage: url,
            maskImage: url,
          } as React.CSSProperties
        }
      />
      <span className="pf-tech-card__name">{tech.name}</span>
    </div>
  );
};

const UsedDesignSystem: React.FC = () => (
  <section id="tech" className="pf-section">
    <div className="pf-container">
      <div className="pf-section-head pf-reveal is-visible">
        <span className="pf-eyebrow" style={{ marginInline: "auto" }}>
          Development
        </span>
        <h2 className="pf-section-title">Learn and Used design Systems</h2>
        <p className="pf-section-sub">
        Built on a structured design system to maintain consistency and speed up development. The system defines reusable components, design tokens, and interaction patterns that create a seamless and intuitive user interface.
        </p>
      </div>

      <div className="pf-tech-grid">
        {TECHS.map((tech, i) => (
          <SystemCard key={tech.slug} tech={tech} idx={i} />
        ))}
      </div>
    </div>
  </section>
);

export default UsedDesignSystem;
