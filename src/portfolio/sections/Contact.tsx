import React from "react";
import { PROFILE } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.57.11.78-.25.78-.55v-1.9c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.5 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.67.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
  </svg>
);

const Contact: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="pf-section">
      <div className="pf-container">
        <div className="pf-section-head pf-reveal is-visible" style={{ textAlign: "center", margin: "0 auto 3rem", maxWidth: "720px" }}>
          <span className="pf-eyebrow" style={{ marginInline: "auto" }}>Contact</span>
          <h2 className="pf-section-title">Let's build something together</h2>
          <p className="pf-section-sub">Open to senior frontend roles, freelance projects, and consulting. I'll respond within a day.</p>
        </div>

        <div ref={ref} className="pf-reveal pf-contact__row">
          <a className="pf-contact__card" href={`mailto:${PROFILE.email}`}>
            <span className="pf-contact__ico"><MailIcon /></span>
            <div className="pf-contact__body">
              <small>Email</small>
              <span>{PROFILE.email}</span>
            </div>
          </a>

          <a className="pf-contact__card" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
            <span className="pf-contact__ico"><PhoneIcon /></span>
            <div className="pf-contact__body">
              <small>Phone</small>
              <span>{PROFILE.phone}</span>
            </div>
          </a>

          <div className="pf-contact__card pf-contact__card--static">
            <span className="pf-contact__ico"><MapIcon /></span>
            <div className="pf-contact__body">
              <small>Location</small>
              <span>{PROFILE.location}</span>
            </div>
          </div>
        </div>

        <div className="pf-contact__socials" aria-label="Social links">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
