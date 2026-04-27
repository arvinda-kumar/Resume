import shivam from '../../assets/imgs/shivam.jpg';
import anamika from '../../assets/imgs/anamika.jpg';
import manpreet from '../../assets/imgs/mapreet.jpg';
import vikas from '../../assets/imgs/vikas.jpg';

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
  
  // userStory: string;
  // heading?: string;
  // userStories?: string[];
  // section?: string;
  // description1: string;
  // criteria: string
  // criteriaList?: string[];
  userStory: UserStory;
}

type UserStoryItem = {
  section: string;
  description1: string;
  criteria: string;
  criteriaList: string[];
};

type UserStory = {
  heading: string;
  userStories: UserStoryItem[];
};

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
  imageUrl: string;
}

export const PROFILE = {
  name: "Arvinda Kumar",
  title: "Senior Frontend Developer",
  tagline: "11 years building performant, accessible web experiences",
  intro:
    "I'm a senior frontend developer with a decade of experience building polished, production-grade interfaces. I specialize in React, JavaScript(ES6), TypeScript, and modern e-commerce platforms like Magento and Shopify — turning complex requirements into fast, accessible, and maintainable UIs.",
  email: "arvindkumar.kumar05@gmail.com",
  phone: "+91 8887684411",
  location: "Lucknow, Uttar Pradesh, India",
  github: "https://github.com/arkumar3c",
  linkedin: "https://www.linkedin.com/",
  resumeUrl: "/resume.pdf",
  stats: [
    { num: "10+", label: "Years of experience" },
    { num: "50+", label: "Projects shipped" },
    { num: "50+", label: "Happy clients" },
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
    title: "CedCommerce TikTok Shop",
    initials: "HS",
    year: "2024",
    role: "Lead Frontend Engineer",
    client: "DTC fashion brand",
    category: "E-commerce",
    summary:
      "Designed for TikTok Shop, this Integration automates your workflow to simplify product listing, inventory syncing, and order fulfillment.",
    description:
      "Designed for TikTok Shop, this Integration automates your workflow to simplify product listing, inventory syncing, and order fulfillment. The integration improves operational efficiency with centralized listing ,order, inventory, & return/refund management. Optimize operations with features like pricing and inventory rules to avoid stockouts, meta-attributes for enhanced product details, and bundle product order management. Benefit from 24/7 expert support to keep your store running seamlessly.",
    features: [
      "Automated Operations: Assign Categories, bulk edit, upload and optimize products.",
      "Auto-Order sync: Process orders & Fulfillments for TikTok Shop including Samples.",
      "Protect Revenue: Auto-prevent over/under selling with inventory & price rules.",
      "Advanced Selling: Image optimization, bundle Product orders, and meta-attributes.",
      "Managed Services: Dedicated experts for quick and seamless TikTok Shop selling."
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
    stack: ["React", "HTML","CSS", "TypeScript", "OUNCE"],
    demo: "https://apps.shopify.com/cedcommerce-tiktok-shop",
    code: "https://github.com/",
    thumbnail:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80&auto=format&fit=crop",
      
    userStory : {
        heading: 'UI Development User Stories',
        userStories: [
          {
            section: 'Onboarding UI',
            description1:
              'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Page + Card + FormLayout',
              'Step-based UI (Stepper / Progress indicator)',
              'Clear CTA buttons (Primary / Secondary)',
              'Inline validation with error messages',
              'Loading state during API calls (Spinner / Skeleton)',
              'Success & error banners (Polaris Banner component)',
            ],
          },
          {
            section: 'Onboarding UI1',
            description1:
              'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Page + Card + FormLayout',
              'Step-based UI (Stepper / Progress indicator)',
              'Clear CTA buttons (Primary / Secondary)',
              'Inline validation with error messages',
              'Loading state during API calls (Spinner / Skeleton)',
              'Success & error banners (Polaris Banner component)',
            ],
          },
        ],
      }
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
      userStory : {
        heading: 'UI Development User Stories',
        userStories: [
          {
            section: 'Onboarding UI',
            description1:
              'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Page + Card + FormLayout',
              'Step-based UI (Stepper / Progress indicator)',
              'Clear CTA buttons (Primary / Secondary)',
              'Inline validation with error messages',
              'Loading state during API calls (Spinner / Skeleton)',
              'Success & error banners (Polaris Banner component)',
            ],
          },
          {
            section: 'Onboarding UI1',
            description1:
              'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Page + Card + FormLayout',
              'Step-based UI (Stepper / Progress indicator)',
              'Clear CTA buttons (Primary / Secondary)',
              'Inline validation with error messages',
              'Loading state during API calls (Spinner / Skeleton)',
              'Success & error banners (Polaris Banner component)',
            ],
          },
        ],
      }
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
      userStory : {
        heading: 'UI Development User Stories',
        userStories: [
          {
            section: 'Onboarding UI',
            description1:
              'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Page + Card + FormLayout',
              'Step-based UI (Stepper / Progress indicator)',
              'Clear CTA buttons (Primary / Secondary)',
              'Inline validation with error messages',
              'Loading state during API calls (Spinner / Skeleton)',
              'Success & error banners (Polaris Banner component)',
            ],
          },
          {
            section: 'Onboarding UI1',
            description1:
              'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Page + Card + FormLayout',
              'Step-based UI (Stepper / Progress indicator)',
              'Clear CTA buttons (Primary / Secondary)',
              'Inline validation with error messages',
              'Loading state during API calls (Spinner / Skeleton)',
              'Success & error banners (Polaris Banner component)',
            ],
          },
        ],
      }
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
      userStory : {
        heading: 'UI Development User Stories',
        userStories: [
          {
            section: 'Onboarding UI',
            description1:
              'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Page + Card + FormLayout',
              'Step-based UI (Stepper / Progress indicator)',
              'Clear CTA buttons (Primary / Secondary)',
              'Inline validation with error messages',
              'Loading state during API calls (Spinner / Skeleton)',
              'Success & error banners (Polaris Banner component)',
            ],
          },
          {
            section: 'Onboarding UI1',
            description1:
              'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Page + Card + FormLayout',
              'Step-based UI (Stepper / Progress indicator)',
              'Clear CTA buttons (Primary / Secondary)',
              'Inline validation with error messages',
              'Loading state during API calls (Spinner / Skeleton)',
              'Success & error banners (Polaris Banner component)',
            ],
          },
        ],
      }
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
    userStory : {
      heading: 'UI Development User Stories',
      userStories: [
        {
          section: 'Onboarding UI',
          description1:
            'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
          criteria: 'UI Acceptance Criteria',
          criteriaList: [
            'Use Polaris Page + Card + FormLayout',
            'Step-based UI (Stepper / Progress indicator)',
            'Clear CTA buttons (Primary / Secondary)',
            'Inline validation with error messages',
            'Loading state during API calls (Spinner / Skeleton)',
            'Success & error banners (Polaris Banner component)',
          ],
        },
        {
          section: 'Onboarding UI1',
          description1:
            'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
          criteria: 'UI Acceptance Criteria',
          criteriaList: [
            'Use Polaris Page + Card + FormLayout',
            'Step-based UI (Stepper / Progress indicator)',
            'Clear CTA buttons (Primary / Secondary)',
            'Inline validation with error messages',
            'Loading state during API calls (Spinner / Skeleton)',
            'Success & error banners (Polaris Banner component)',
          ],
        },
      ],
    }
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
    userStory : {
      heading: 'UI Development User Stories',
      userStories: [
        {
          section: 'Onboarding UI',
          description1:
            'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
          criteria: 'UI Acceptance Criteria',
          criteriaList: [
            'Use Polaris Page + Card + FormLayout',
            'Step-based UI (Stepper / Progress indicator)',
            'Clear CTA buttons (Primary / Secondary)',
            'Inline validation with error messages',
            'Loading state during API calls (Spinner / Skeleton)',
            'Success & error banners (Polaris Banner component)',
          ],
        },
        {
          section: 'Onboarding UI1',
          description1:
            'As a merchant, I want a clean and guided onboarding interface so that I can easily connect my store with TikTok without confusion.',
          criteria: 'UI Acceptance Criteria',
          criteriaList: [
            'Use Polaris Page + Card + FormLayout',
            'Step-based UI (Stepper / Progress indicator)',
            'Clear CTA buttons (Primary / Secondary)',
            'Inline validation with error messages',
            'Loading state during API calls (Spinner / Skeleton)',
            'Success & error banners (Polaris Banner component)',
          ],
        },
      ],
    }
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
    role: "Lead UI Developer",
    company: "Threecolts India Private Limited",
    period: "2024 — Present",
    achievements: [
      "Led UI/UX design and front-end development for apps like Shein, Etsy, UNICON, BWP Meta, and TikTok integrations using React, HTML, and design systems such as Shopify Polaris and OUNCE. Collaborated cross-functionally to align design solutions with user needs, ensuring a seamless and intuitive user experience.",
      "Define frontend architecture, design patterns, and coding guidelines for React applications.",
      "Architect scalable, secure, and resilient web applications using micro-frontend and modular UI principles.",
      "Lead and mentor frontend developers through code reviews, pair programming, and technical guidance.",
      "Collaborate with backend, DevOps, QA, and product teams to deliver integrated solutions.",
      "Provide hands-on support during complex development, debugging, and performance optimization.",
      "Oversee CI/CD integration, code quality metrics, and deployment readiness.",
      "Implement best practices for responsive design, cross-browser compatibility, and multi-device performance.",
      "Work with Product Managers, UX Designers, and Business Owners to translate requirements into scalable solutions.",
      "Conduct architecture reviews, design walkthroughs, and risk assessments.",
      "Developed UI components leveraging AI tools like Cursor and Claude to enhance development speed, code quality, and overall efficiency.",
      "Conducted thorough reviews of front-end applications, providing actionable feedback that significantly improved app performance by an average of 25%.",
      "Developed and maintained a design system, OUNCE, creating reusable UI components to ensure consistency and scalability across applications."
    ],
  },
  {
    role: "Senior UI Designer",
    company: "CEDCOSS Technologies Private Limited",
    period: "2015 — 2024",
    achievements: [
      "Built and maintained Shopify and Magento 2 apps listed on 10+ marketplace integrations.",
      "Mentored a team of 6 frontend engineers; established code-review and testing standards.",
      "Delivered a React admin panel replacing a legacy jQuery UI",
      "Connected with clients to understand their requirements and delivered tailored solutions that met their needs effectively.",
      "Created and deployed various E-commerce stores using frameworks like shopify and Magento.",
      "Customize many E-commerce stores and landing pages based on client requirements.",
      "Make store Mobile compatible and multiple browser compatible.",
      "Enhanced application efficiency and user experience by implementing best practices in code optimization and performance tuning.",
      "Collaborated with developers and stakeholders to enhance the overall user experience."
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
    quote: "Arvinda is one of the best frontend developer i ever met. He knows all the basic and core concepts of web design. He play with UI/UX easily. Well he is a magento player, he knows the core concept of magento theming part. I recommend him.",
    name: "Vikas Patel",
    role: "Module Lead, @Bold",
    imageUrl: vikas,
    initials: "PS",
    location: "India",
  },
  {
    quote: "Arvinda sir is a fantastic professional who brings all of the skills and expertise in web designing and the way he handles the clients is genuinely remarkable. It was indeed a pleasure to meet him in a webinar and have guidance and advices of such senior personnel at the office. Under his guidance, I gained a variety of skills that help me in every aspect. I joined his workshop on Design Thinking. and that was so inspiring and creative, I found very easy to understand the concepts and enjoyed a lot. He is the best person any new intern can ask. I am lucky to have a guidance of such personnel.",
    name: "Anamika Bajpai",
    role: "Senior Software Sngineer, @LTM",
    imageUrl: anamika,
    initials: "DL",
    location: "India",
  },
  {
    quote:
    "I worked along side Mr. Arvinda for several years while at CedCommerce and he never failed to impress me. He is the type of employee who seems to have a never ending amount of tricks up their sleeve. Right when you think you've seen the best of his abilities he quickly shows you that he's so much more. First off, Mr. Arvinda has a natural gift for design, user experience and client workflows. He is also an excellent team player, quickly shifting focus from one department for another as they all clamor for his assistance. Mr. Arvinda is also just an awesome person to work with, he's fun, simple, hard working and extremely talented. I recommend him highly for any position in UX/UI or design. He would be a great asset to any organization. All in all, Mr. Arvinda is a rockstar and any organization would we lucky to have him.",
    name: "Shivam Varshney",
    role: "Software Engineer @LTM ",
    imageUrl: shivam,
    initials: "MG",
    location: "India",
  },
  {
    quote:
      "Incredible attention to detail and a real eye for accessibility. Our WCAG audit came back cleaner than it's ever been, and the design system he built is still the backbone of the product.",
    name: "Manpreet Kaur",
    role: "UX/Product Designer, @ThreeColts",
    imageUrl: manpreet,
    initials: "JO",
    location: "India",
  },
];
