import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SkipLink: React.FC = () => (
  <a
    className="pf-skip-link"
    href="#main"
  >
    Skip to content
  </a>
);

const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="portfolio-root">
    <SkipLink />
    <Navbar />
    <main id="main">{children}</main>
    <Footer />
  </div>
);

export default PageShell;
