import React from "react";
import { useReveal } from "../hooks/useReveal";

const TrophyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const StarIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const MedalIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
    <path d="M11 12 5.12 2.2" />
    <path d="M13 12 18.88 2.2" />
    <path d="M8 7h8" />
    <circle cx="12" cy="17" r="5" />
    <path d="M12 18v-2h-.5" />
  </svg>
);

const AwardIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

interface Achievement {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  badge: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: <TrophyIcon />,
    title: "Top Rated",
    subtitle: "Senior Frontend Expertise",
    badge: "Top 5%",
  },
  {
    icon: <StarIcon />,
    title: "4.9 Rating",
    subtitle: "Across client engagements",
    badge: "100%",
  },
  {
    icon: <MedalIcon />,
    title: "60+ Projects",
    subtitle: "Successfully delivered worldwide",
    badge: "12 Countries",
  },
  {
    icon: <AwardIcon />,
    title: "11 Years",
    subtitle: "Professional experience",
    badge: "Since 2015",
  },
];

const AchievementCard: React.FC<{ item: Achievement; idx: number }> = ({ item, idx }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`pf-achievement pf-reveal pf-reveal--delay-${(idx % 4) + 1}`}
    >
      <div className="pf-achievement__ico" aria-hidden="true">
        {item.icon}
      </div>
      <h3 className="pf-achievement__title">{item.title}</h3>
      <p className="pf-achievement__sub">{item.subtitle}</p>
      <span className="pf-achievement__badge">{item.badge}</span>
    </div>
  );
};

const Achievements: React.FC = () => (
  <section id="achievements" className="pf-section">
    <div className="pf-container">
      <div className="pf-achievements__grid">
        {ACHIEVEMENTS.map((item, i) => (
          <AchievementCard key={item.title} item={item} idx={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
