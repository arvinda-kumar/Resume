export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: SkillItem[];
}

export interface Project {
  slug: string;
  title: string;
  initials: string;
  year: string;
  role: string;
  client?: string;
  category: "E-commerce" | "SaaS" | "Platform" | "Marketing";
  summary: string;
  description: string;
  features: string[];
  challenges: string[];
  outcomes: string[];
  stack: string[];
  demo?: string;
  code?: string;
  thumbnail?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  location: string;
}

export const PROFILE = {
  name: "Arvinda Kumar",
  title: "Senior Frontend Developer",
  tagline: "10+ years building performant, accessible web experiences",
  intro:
    "I'm a senior frontend developer with a decade of experience building polished, production-grade interfaces. I specialize in React, JavaScript, and modern e-commerce platforms like Magento and Shopify — turning complex requirements into fast, accessible, and maintainable UIs.",
  email: "arvinda.dev@example.com",
  phone: "+91 98765 43210",
  location: "India · Remote",
  github: "https://github.com/arkumar3c",
  linkedin: "https://www.linkedin.com/",
  resumeUrl: "/resume.pdf",
  stats: [
    { num: "10+", label: "Years of experience" },
    { num: "60+", label: "Projects shipped" },
    { num: "25+", label: "Happy clients" },
  ],
};

export const HIGHLIGHTS = [
  {
    title: "Performance-first",
    desc: "Core Web Vitals, lazy loading, code splitting.",
  },
  {
    title: "Component systems",
    desc: "Scalable design systems & reusable UI.",
  },
  { title: "E-commerce", desc: "Magento 2 & Shopify Liquid + Hydrogen." },
  { title: "Accessibility", desc: "WCAG 2.1 AA, keyboard & screen-reader friendly." },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "</>",
    items: [
      { name: "React / Redux", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5 / CSS3 / SCSS", level: 95 },
    ],
  },
  {
    title: "Platforms",
    icon: "⚡",
    items: [
      { name: "Shopify (Liquid, Hydrogen)", level: 88 },
      { name: "Magento 2 (Frontend)", level: 85 },
      { name: "Next.js", level: 82 },
      { name: "Node.js / REST APIs", level: 78 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "⚙",
    items: [
      { name: "Git / GitHub / GitLab", level: 92 },
      { name: "Webpack / Vite", level: 82 },
      { name: "Jest / RTL / Cypress", level: 80 },
      { name: "Figma · Performance tooling", level: 85 },
    ],
  },
];

export const STACK_TAGS = [
  "React",
  "TypeScript",
  "Next.js",
  "Redux",
  "Shopify",
  "Magento",
  "SCSS",
  "Tailwind",
  "GraphQL",
  "Jest",
  "Storybook",
  "Webpack",
];

export const PROJECTS: Project[] = [
  {
    slug: "headless-shopify-storefront",
    title: "Headless Shopify Storefront",
    initials: "HS",
    year: "2024",
    role: "Lead Frontend Engineer",
    client: "DTC fashion brand",
    category: "E-commerce",
    summary:
      "Custom Hydrogen storefront with a React component library, SSR, and 40% faster LCP.",
    description:
      "Rebuilt a legacy Shopify Online Store 2.0 experience as a fully headless storefront on Shopify Hydrogen + Remix. Designed the component architecture, integrated the Storefront API, and shipped a tokenized design system used by three marketing teams.",
    features: [
      "Server-side rendered product and collection pages",
      "Customer account area with order history and wishlists",
      "A/B-testable hero and merchandising blocks",
      "Edge-cached GraphQL queries with stale-while-revalidate",
    ],
    challenges: [
      "Mapping an existing Liquid theme to a React component tree without losing SEO equity",
      "Harmonizing design tokens across storefront, email, and CMS",
    ],
    outcomes: [
      "40% faster LCP and a 12-point Lighthouse bump",
      "18% lift in mobile conversion after 6 weeks",
      "Reduced theme-editor ticket volume by 60%",
    ],
    stack: ["React", "Hydrogen", "TypeScript", "GraphQL", "Tailwind"],
    demo: "#",
    code: "https://github.com/arkumar3c",
    thumbnail:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "magento-2-theme-rebuild",
    title: "Magento 2 Theme Rebuild",
    initials: "M2",
    year: "2023",
    role: "Senior Frontend Developer",
    client: "Multi-brand retailer",
    category: "E-commerce",
    summary:
      "Rebuilt a legacy Magento 2 theme as a modular SCSS + KnockoutJS system. Dropped bundle size by 55%.",
    description:
      "Led the frontend rebuild of a large Magento 2 storefront serving 4 brands from a single codebase. Replaced an aging Luma-based theme with a modular SCSS architecture, a performant checkout, and a unified design system.",
    features: [
      "Theme inheritance model for 4 brand variants",
      "Rewritten minicart and checkout UI",
      "Critical CSS extraction and lazy-loaded JS bundles",
      "RequireJS → modern build pipeline migration",
    ],
    challenges: [
      "Preserving hundreds of extension overrides during the rebuild",
      "Coordinating SCSS refactor with backend deploy windows",
    ],
    outcomes: [
      "55% smaller CSS+JS bundle on PDPs",
      "Checkout abandonment down 14%",
      "Onboarding a new brand now takes days, not weeks",
    ],
    stack: ["Magento 2", "SCSS", "KnockoutJS", "PHP", "RequireJS"],
    demo: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    initials: "SA",
    year: "2024",
    role: "Frontend Tech Lead",
    client: "B2B analytics SaaS",
    category: "SaaS",
    summary:
      "Data-dense admin dashboard with real-time charts, virtualized tables, and RBAC for 50k+ daily users.",
    description:
      "Architected the new admin dashboard for a B2B analytics SaaS — handling hundreds of thousands of rows per view with instant filtering, drill-downs, and live streaming updates from the backend.",
    features: [
      "Virtualized tables rendering 100k+ rows smoothly",
      "Real-time chart streaming over WebSockets",
      "Role-based permissions enforced at the route level",
      "Dashboard builder with drag-and-drop widgets",
    ],
    challenges: [
      "Keeping interactions at 60fps with live data pushes",
      "Designing a permissions model flexible enough for 6 personas",
    ],
    outcomes: [
      "Time-to-first-insight reduced from 45s to 6s",
      "Support tickets for 'slow dashboard' down 80%",
      "Adopted across 3 enterprise customers in 2 quarters",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "D3", "WebSockets"],
    demo: "#",
    code: "https://github.com/arkumar3c",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "design-system-component-library",
    title: "Design System & Component Library",
    initials: "DS",
    year: "2023",
    role: "Design System Lead",
    client: "Internal platform team",
    category: "Platform",
    summary:
      "Themeable component library with Storybook, visual regression, and first-class a11y — shared across 4 products.",
    description:
      "Built the foundation of a shared design system — from tokens to components — that unified 4 products on a single React codebase, Storybook-documented and visually regression-tested.",
    features: [
      "Design tokens synced with Figma variables",
      "40+ accessible primitives with keyboard and SR support",
      "Storybook with interaction testing and a11y addon",
      "Chromatic visual regression baked into CI",
    ],
    challenges: [
      "Aligning 4 product teams on spacing, typography, and motion",
      "Migrating legacy components without freezing product roadmaps",
    ],
    outcomes: [
      "New feature UIs now ship 2–3× faster across product teams",
      "Zero a11y regressions reported in 2 quarters",
      "Design system NPS of 72 from internal consumers",
    ],
    stack: ["React", "TypeScript", "Storybook", "SCSS", "Chromatic"],
    code: "https://github.com/arkumar3c",
    thumbnail:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "ecommerce-pwa",
    title: "E-commerce PWA",
    initials: "PW",
    year: "2022",
    role: "Senior Frontend Developer",
    client: "Direct-to-consumer brand",
    category: "E-commerce",
    summary:
      "Progressive web app checkout with offline cart, Stripe + Razorpay, and a 95+ Lighthouse score.",
    description:
      "Turned a flaky mobile web checkout into an installable PWA that works offline, supports multi-gateway payments, and scores consistently above 95 on Lighthouse.",
    features: [
      "Offline-first cart with service worker sync",
      "Stripe + Razorpay + Apple Pay payment flows",
      "Installable with push notifications for order updates",
      "Image strategy with AVIF fallback and blur placeholders",
    ],
    challenges: [
      "Reconciling cart state after long offline periods",
      "Meeting PCI constraints while keeping the bundle small",
    ],
    outcomes: [
      "Mobile conversion up 22% within the first month",
      "PWA installs on 15% of returning sessions",
      "Lighthouse PWA + Performance both 95+",
    ],
    stack: ["Next.js", "React", "Stripe", "Workbox", "TypeScript"],
    demo: "#",
  },
  {
    slug: "marketing-site-platform",
    title: "Marketing Site Platform",
    initials: "MS",
    year: "2022",
    role: "Frontend Architect",
    client: "Growth-stage B2B SaaS",
    category: "Marketing",
    summary:
      "Content-driven marketing site with CMS pages, A/B testing, and a visual editor for marketers.",
    description:
      "Built a Next.js marketing platform powered by a headless CMS, with a visual editor that lets non-technical marketers assemble pages from a library of blocks — and A/B test everything.",
    features: [
      "Visual block-based editor synced with Sanity",
      "A/B testing framework tied to analytics events",
      "Per-locale content with ISR",
      "Type-safe content schema generated from CMS",
    ],
    challenges: [
      "Letting marketers compose pages without producing messy HTML",
      "Keeping page builds fast as content volume grew",
    ],
    outcomes: [
      "Marketing now ships pages without engineering involvement",
      "Landing page test velocity up 4×",
      "Average page weight down 35%",
    ],
    stack: ["Next.js", "Sanity", "TypeScript", "Tailwind"],
    demo: "#",
    code: "https://github.com/arkumar3c",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);

export const getAdjacentProjects = (slug: string) => {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: idx > 0 ? PROJECTS[idx - 1] : undefined,
    next: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : undefined,
  };
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "Threecolts",
    period: "2022 — Present",
    achievements: [
      "Led frontend architecture for multi-tenant e-commerce tooling used by 10k+ sellers.",
      "Shipped a shared React + TypeScript design system adopted across 5 product teams.",
      "Cut time-to-interactive by 45% through route-based code splitting and image optimization.",
    ],
  },
  {
    role: "Frontend Tech Lead",
    company: "CedCommerce",
    period: "2018 — 2022",
    achievements: [
      "Built and maintained Shopify and Magento 2 apps listed on 10+ marketplace integrations.",
      "Mentored a team of 6 frontend engineers; established code-review and testing standards.",
      "Delivered a React admin panel replacing a legacy jQuery UI, reducing support tickets by 30%.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Digital Studio",
    period: "2015 — 2018",
    achievements: [
      "Developed 20+ responsive e-commerce themes for clients across retail, fashion, and B2B.",
      "Implemented accessibility fixes bringing client sites to WCAG 2.1 AA compliance.",
      "Introduced SCSS + BEM conventions that became the studio's standard.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Freelance",
    period: "2013 — 2015",
    achievements: [
      "Built custom WordPress and Magento 1 themes for small and mid-size businesses.",
      "Hand-coded responsive HTML/CSS/jQuery templates and landing pages.",
    ],
  },
];

export const SERVICES: Service[] = [
  {
    title: "UI Development",
    description:
      "Pixel-perfect, accessible, responsive interfaces built with React and modern CSS — from marketing sites to complex dashboards.",
    icon: "◨",
  },
  {
    title: "E-commerce Development",
    description:
      "End-to-end Shopify and Magento 2 builds: themes, apps, headless storefronts, and custom checkout experiences.",
    icon: "◈",
  },
  {
    title: "Performance Optimization",
    description:
      "Audits and hands-on fixes for Core Web Vitals — bundle splitting, lazy loading, image strategy, and runtime tuning.",
    icon: "⚡",
  },
  {
    title: "Design Systems",
    description:
      "Themeable component libraries with documentation, visual tests, and a11y built-in — so your team ships consistently.",
    icon: "◫",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Arvinda turned our legacy Magento theme into a modern, blazing-fast experience. Conversion rate went up 28% in the first quarter and our devs actually enjoy working on the frontend now.",
    name: "Priya Sharma",
    role: "Head of Product, RetailCo",
    initials: "PS",
    location: "India",
  },
  {
    quote:
      "One of the sharpest React engineers I've worked with. Takes ownership, writes maintainable code, and raises the bar for the whole team without being preachy about it.",
    name: "Daniel Lee",
    role: "Engineering Manager, SaaS Inc.",
    initials: "DL",
    location: "United States",
  },
  {
    quote:
      "He rebuilt our Shopify storefront as a headless Hydrogen app and shaved seconds off every page. Clear communicator, great partner — we'd hire him again tomorrow.",
    name: "Maria González",
    role: "Founder, DTC Brand",
    initials: "MG",
    location: "Spain",
  },
  {
    quote:
      "Incredible attention to detail and a real eye for accessibility. Our WCAG audit came back cleaner than it's ever been, and the design system he built is still the backbone of the product.",
    name: "James Okafor",
    role: "Design Director, Studio North",
    initials: "JO",
    location: "United Kingdom",
  },
];
