import React from "react";
import { PROFILE } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const Hero: React.FC = () => {
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const initials = PROFILE.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <section id="home" className="pf-hero">
      <div className="pf-container pf-hero__grid">
        <div ref={leftRef} className="pf-reveal">
          <div className="pf-hero__badge">
            <span className="dot" aria-hidden="true" />
            Available for new projects
          </div>
          <div className="pf-hero__role">{PROFILE.title}</div>
          <h1 className="pf-hero__title">
            Hi, I'm <span className="accent">{PROFILE.name.split(" ")[0]}</span>.
            <br />I build fast, accessible web experiences.
          </h1>
          <p className="pf-hero__desc">
            {PROFILE.tagline}. Specializing in React, JavaScript, Magento, and Shopify — with a decade of shipping production-grade interfaces.
          </p>

          <div className="pf-hero__cta">
            <button className="pf-btn pf-btn--primary" onClick={() => scrollTo("contact")}>
              <MailIcon /> Hire Me
            </button>
            <a className="pf-btn pf-btn--ghost" href={PROFILE.resumeUrl} download>
              <DownloadIcon /> Download Resume
            </a>
          </div>
        </div>

        <div
          ref={rightRef}
          className="pf-reveal pf-reveal--delay-2 pf-hero__visual"
          aria-hidden="true"
        >
          <span className="pf-floating-pill pf-floating-pill--a">
            <span className="dot" /> React
          </span>
          <span className="pf-floating-pill pf-floating-pill--b">
            <span className="dot" /> Shopify
          </span>
          <span className="pf-floating-pill pf-floating-pill--c">
            <span className="dot" /> Magento
          </span>
          <div className="pf-hero__card" data-initials={initials}>
            <header>
              <span /><span /><span />
              <span className="pf-hero__card-title">developer.ts</span>
            </header>
            <div><span className="cmt">{"// senior frontend dev"}</span></div>
            <div>
              <span className="tk">const</span> dev = {"{"}
            </div>
            <div className="pf-hero__card-line">
              <span className="prop">name</span>: <span className="str">"{PROFILE.name}"</span>,
            </div>
            <div className="pf-hero__card-line">
              <span className="prop">role</span>: <span className="str">"Senior Frontend"</span>,
            </div>
            <div className="pf-hero__card-line">
              <span className="prop">yearsOfExp</span>: <span className="num">10</span>,
            </div>
            <div className="pf-hero__card-line">
              <span className="prop">stack</span>: [<span className="str">"React"</span>, <span className="str">"TS"</span>,
            </div>
            <div className="pf-hero__card-line pf-hero__card-line--indent">
              <span className="str">"Shopify"</span>, <span className="str">"Magento"</span>],
            </div>
            <div className="pf-hero__card-line">
              <span className="prop">available</span>: <span className="num">true</span>,
            </div>
            <div>{"}"};</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
