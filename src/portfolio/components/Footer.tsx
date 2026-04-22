import React from "react";

const Footer: React.FC = () => (
  <footer className="pf-footer" role="contentinfo">
    <div className="pf-container pf-footer__inner">
      <span>
        © {new Date().getFullYear()} Arvinda Kumar. Crafted with React &
        TypeScript.
      </span>
      <span>
        <a href="#home">Back to top ↑</a>
      </span>
    </div>
  </footer>
);

export default Footer;
