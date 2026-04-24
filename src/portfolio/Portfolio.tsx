import React, { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageShell from "./components/PageShell";
import Hero from "./sections/Hero";
import Achievements from "./sections/Achievements";
import About from "./sections/About";
import UsedDesignSystem from "./sections/UsedDesignSystem";

const Skills = lazy(() => import("./sections/Skills"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const Services = lazy(() => import("./sections/Services"));
const Contact = lazy(() => import("./sections/Contact"));

const SectionFallback: React.FC = () => (
  <div className="pf-section" style={{ minHeight: "40vh" }} />
);

const Portfolio: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;
    const doScroll = () => {
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const id = window.setTimeout(doScroll, 120);
    return () => window.clearTimeout(id);
  }, [location]);

  return (
    <PageShell>
      <Hero />
      <Achievements />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
        <TechStack />
        <UsedDesignSystem />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </Suspense>
    </PageShell>
  );
};

export default Portfolio;
