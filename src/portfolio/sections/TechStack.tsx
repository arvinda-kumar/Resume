import React from "react";
import { useReveal } from "../hooks/useReveal";

interface Tech {
  name: string;
  slug: string;
}

const TECHS: Tech[] = [
  { name: "React", slug: "react" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "SASS", slug: "sass" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Bootstrap", slug: "bootstrap" },

  { name: "Shopify", slug: "shopify" },
  { name: "Magento", slug: "magento" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Redux", slug: "redux" },
  { name: "jQuery", slug: "jquery" },
  { name: "GraphQL", slug: "graphql" },

  { name: "Node.js", slug: "nodedotjs" },
  { name: "Webpack", slug: "webpack" },
  { name: "Vite", slug: "vite" },
  // { name: "Jest", slug: "jest" },
  // { name: "Cypress", slug: "cypress" },
  { name: "Storybook", slug: "storybook" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },

  { name: "Figma", slug: "figma" },
  { name: "VS Code", slug: "visualstudiocode" },
  { name: "Docker", slug: "docker" },
  { name: "Nginx", slug: "nginx" },

];

const TechCard: React.FC<{ tech: Tech; idx: number }> = ({ tech, idx }) => {
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

const TechStack: React.FC = () => (
  <section id="tech" className="pf-section pf-section--alt">
    <div className="pf-container">
      <div
        className="pf-section-head pf-reveal is-visible"
        
      >
        <span className="pf-eyebrow" style={{ marginInline: "auto" }}>
          Tech Stack
        </span>
        <h2 className="pf-section-title">Technologies &amp; Skills I Work With</h2>
        <p className="pf-section-sub">
          A comprehensive toolkit built over 11 years of hands-on development
          experience.
        </p>
      </div>

      <div className="pf-tech-grid">
        {TECHS.map((tech, i) => (
          <TechCard key={tech.slug} tech={tech} idx={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
