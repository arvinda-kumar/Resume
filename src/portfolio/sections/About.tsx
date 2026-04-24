import React from "react";
import { HIGHLIGHTS, PROFILE, STACK_TAGS } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import profileImage from '../../assets/imgs/profile-photo.jpeg'

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const About: React.FC = () => {
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="pf-section pf-section--alt">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal is-visible">
          <span className="pf-eyebrow">About</span>
          <h2 className="pf-section-title">A decade of shipping polished UI</h2>
          <p className="pf-section-sub">Senior frontend engineer focused on craft, collaboration, and measurable outcomes.</p>
        </div>

        <div className="pf-about__grid">
          <div ref={leftRef} className="pf-reveal">
            <div className="pf-about__portrait" aria-hidden="true">
              {/* {PROFILE.name.split(" ").map((n) => n[0]).join("")} */}
              <img src={profileImage} alt="Arvinda kumar Profile" />
            </div>
          </div>

          <div ref={rightRef} className="pf-reveal pf-reveal--delay-1">
            <h3 style={{ fontSize: "1.35rem", marginBottom: "0.8rem" }}>
              Crafting user-focused interfaces since 2015.
            </h3>
            <p>{PROFILE.intro}</p>
            <p>
              I've led frontend teams, rebuilt legacy Magento storefronts, shipped headless Shopify apps, and architected design systems adopted across product orgs. I care deeply about performance, accessibility, and writing code the next engineer will be glad to read.
            </p>

            <div className="pf-about__highlights">
              {HIGHLIGHTS.map((h) => (
                <div className="pf-about__highlight" key={h.title}>
                  <span className="ico" aria-hidden="true"><CheckIcon /></span>
                  <div>
                    <strong>{h.title}</strong>
                    <span>{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <div className="pf-tags">
                {STACK_TAGS.map((t, i) => (
                  <span key={t} className={`pf-tag${i < 4 ? " pf-tag--accent" : ""}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
