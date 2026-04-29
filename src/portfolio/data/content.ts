import shivam from '../../assets/imgs/shivam.jpg';
import anamika from '../../assets/imgs/anamika.jpg';
import manpreet from '../../assets/imgs/mapreet.jpg';
import vikas from '../../assets/imgs/vikas.jpg';
import jaikant from '../../assets/imgs/jaikant.jpg';


import shopifyTts from '../../assets/imgs/projects/shopify-tts.png'
import unicon from '../../assets/imgs/projects/unicon.png'
import ounce from '../../assets/imgs/projects/ounce.png'
import dorab from '../../assets/imgs/projects/dorab.png'
import gig from '../../assets/imgs/projects/gig.png'
import loversCoffee from '../../assets/imgs/projects/lover-cofee.png'

import rsumepath from '../../assets/resume/Resume.pdf'


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
  userStory: UserStory[];
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
  github: "https://github.com/arvinda-kumar",
  linkedin: "https://www.linkedin.com/in/arvindakumar93/",
  resumeUrl: rsumepath,
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
    slug: "cedcommerce-tiktak-shop",
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
    stack: ["React", "HTML","CSS", "TypeScript", "Polaris"],
    demo: "https://apps.shopify.com/cedcommerce-tiktok-shop",
    code: "https://github.com/",
    thumbnail:
    shopifyTts,
      
    userStory :[ {
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
            section: 'Dashboard UI',
            description1:
              'As a merchant, I want a visually structured dashboard so that I can quickly understand my performance.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Layout + Card + Data Visualization patterns',
              'KPI cards (Revenue, Orders, Products)',
              'Responsive grid layout',
              'Charts integrated (consistent spacing & typography)',
              'Skeleton loaders while data loads',
              'Empty state UI when no data is available',
            ],
          },

          {
            section: 'Product Listing UI',
            description1:
              'As a merchant, I want a structured product listing UI so that I can easily manage and sync products.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris IndexTable / DataTable',
              'Product thumbnail + title + status columns',
              'Bulk selection with checkbox',
              'Filters and search (Polaris Filters component)',
              'Pagination support',
              'Status badges (Active, Draft, Synced, Failed)',
            ],
          },
          {
            section: 'Profiling (Template) UI',
            description1:
              'As a merchant, I want an intuitive customization interface so that I can design my shop profile easily.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Card + Tabs + FormLayout',
              'Template selection grid (visual cards)',
              'Live preview panel (split layout)',
              'Color picker, typography controls',
              'Save / Publish CTA with sticky footer',
              'Responsive preview (mobile + desktop)',
            ],
          },
          {
            section: 'Order Grid UI',
            description1:
              'As a merchant, I want a clear order management UI so that I can track and process orders efficiently.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris IndexTable',
              'Order status badges (Pending, Shipped, Delivered)',
              'Filters (date, status, customer)',
              'Row click → Order detail page',
              'Bulk actions (mark shipped, cancel)',
              'Empty state & loading state handled',
            ],
          },
          {
            section: 'Pricing UI',
            description1:
              'As a merchant, I want a clear pricing page so that I can compare plans and subscribe easily.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Card + Layout',
              'Pricing cards (Basic / Pro / Enterprise)',
              'Highlight recommended plan',
              'Feature comparison list',
              'CTA buttons (Upgrade / Downgrade)',
              'Responsive stacking on mobile',
            ],
          },
          {
            section: 'Setting (Configuration) UI',
            description1:
              'As a merchant, I want a well-organized settings page so that I can configure my integration easily.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Use Polaris Tabs + Card + FormLayout',
              'Group settings into sections (API, Notifications, Sync)',
              'Toggle switches for enable/disable',
              'Inline help text and tooltips',
              'Save button with loading state',
              'Success toast/banner after save',
            ],
          },
        ],
      }
    ]
  },
  {
    slug: "UNICON-Inegration-App",
    title: "UNICON Inegration App",
    initials: "M2",
    year: "2023",
    role: "Senior Frontend Developer",
    client: "Multi-brand retailer",
    category: "E-commerce",
    summary:
      "UniCon is our product designed to integrate multiple marketplaces with Shopify, enabling seamless product listing, inventory management, and order synchronization across platforms.",
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
    stack: ["React", "CSS", "HTML", "TypeScript"],
    demo: "#",
    thumbnail:
      unicon,
      userStory :[ {
        heading: 'UniCon – UI Development User Stories',
        userStories: [
          {
            section: 'Design System Integration',
            description1:
              'As a frontend developer, I want to use Ounce design system components so that the UI remains consistent and scalable.',
            criteria: 'Story: Implement Ounce Design System Components',
            criteriaList: [
              'Use prebuilt components (Button, Input, Modal, Table, Card)',
              'Follow Ounce spacing, typography, and color tokens',
              'No custom styles unless necessary (override via tokens only)',
              'Ensure theme compatibility (light/dark if supported)',
            ],
          },
          {
            section: 'Story: Create Reusable UI Wrappers',
            description1:
              'As a frontend developer, I want to build reusable wrappers around Ounce components so that they fit UniCon-specific use cases.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Create shared components (e.g., MarketplaceCard, StatusBadge, SyncButton)',
              'Props-based configuration for reusability',
              'Proper TypeScript typing (if used)',
              'Document usage',
            ],
          },
          {
            section: 'Story: Build Multi-Step Onboarding UI',
            description1:
              'As a user, I want a guided onboarding UI so that I can easily set up integrations.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Stepper component (Ounce-based)',
              'Form validation using UI feedback (error states, helper text)',
              'Responsive layout',
              'Persist state between steps',
            ],
          },
          {
            section: 'Story: Marketplace Connection UI',
            description1:
              'As a user, I want a clean UI to connect marketplaces so that I understand connection status.',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Card-based UI for each marketplace',
              'Show states: Connected / Disconnected / Error / Loading',
              'CTA buttons (Connect, Retry, Disconnect)',
              'Loading skeletons while fetching status',
            ],
          },
        ],
      }]
  },
  {
    slug: "ounce-design-system",
    title: "Ounce Design system",
    initials: "SA",
    year: "2024",
    role: "Frontend Tech Lead",
    client: "B2B analytics SaaS",
    category: "SaaS",
    summary:
      "Ounce is a scalable design system built to standardize UI across CedCommerce products. I created structured user stories for tokens, components, and patterns focusing on reusability, accessibility, and developer efficiency. This helps reduce development time, improve consistency, and enhance overall UX.",
    description:
      "Ounce is a scalable and modular design system built to standardize the user interface across CedCommerce’s ecosystem of eCommerce products and integrations. It was designed with the primary goal of creating a unified visual language and reusable component architecture that enables both designers and developers to work more efficiently while maintaining consistency at scale. At its core, Ounce establishes a solid foundation through well-defined design tokens, including typography, color palettes, spacing, grid systems, and elevation rules. These tokens ensure visual consistency across multiple platforms while also supporting theming capabilities such as light and dark modes. By abstracting these fundamentals, Ounce allows teams to quickly adapt branding requirements without breaking the overall design consistency. On top of this foundation, Ounce provides a comprehensive library of reusable UI components such as buttons, inputs, modals, tables, cards, navigation systems, and feedback elements like toasts and alerts. Each component is built with a clear structure, multiple variants, and defined states (hover, active, disabled, loading), ensuring flexibility while maintaining design integrity. These components are developed with a strong focus on accessibility, adhering to WCAG guidelines, supporting keyboard navigation, and ensuring proper ARIA attributes.",
    features: [
      "Reduced development time through reusable components",
      "Improved UI consistency across multiple products",
      "Enhanced collaboration between design and engineering teams",
      "Better user experience due to predictable and intuitive interfaces",
    ],
    challenges: [
      "Lack of UI consistency across multiple CedCommerce products and dashboards",
      "Same components (buttons, forms, tables) were built differently by different teams",
      "Duplicate development effort due to no reusable component library",
      "Increased development time because teams were rebuilding UI from scratch",
      "No single source of truth for design and frontend implementation",
      "Gap between design and development alignment, causing rework and delays",
      "Difficulty in scaling products while maintaining consistent UI/UX",
      "Frequent UI bugs due to inconsistent implementation across codebases",
      "Limited focus on accessibility standards (WCAG) across components",
      "Hard to maintain and update UI changes across multiple products"
    ],
    outcomes: [
      "Create a unified design language",
      "Build a reusable component system",
      "Improve developer productivity and speed",
      "Ensure consistent and accessible user experience",
      "Enable scalable and maintainable frontend architecture"
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "D3", "WebSockets"],
    demo: "#",
    code: "#",
    thumbnail:
    ounce,
      userStory :[ {
        heading: 'Ounce Design System – User Stories',
        userStories: [
          {
            section: 'Product Vision',
            description1:
              'Ounce is a scalable design system built for eCommerce platforms to ensure:',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Consistent UI across products',
              'Faster development cycles',
              'Reusable components',
              'Better accessibility & usability',
            ],
          },
          {
            section: 'Foundation (Design Tokens)',
            description1:
              'As a UI designer want predefined typography styles (heading, body, caption) So that I can maintain consistency across all screens',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Font scale defined (H1–H6, body, label)',
              'Responsive typography support',
              'Token-based usage (e.g., font-size-primary)',
            ],
          },

          {
            section: 'User Story: Color System',
            description1:
              'As a designer/developer I want a centralized color palette So that I can ensure brand consistency and accessibility',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Primary, secondary, success, warning, error colors',
              'WCAG contrast compliance',
              'Token-based usage (e.g., font-size-primary)',
            ],
          },
        ],
      },
      {
        heading: 'Core Components',
        userStories: [
          {
            section: 'Button Component',
            description1:
              'As a user I want clear and consistent buttons So that I can easily perform actions',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Variants: Primary, Secondary, Outline, Danger',
              'States: Hover, Active, Disabled, Loading',
              'Size variants: Small, Medium, Large',
              'Icon support',
            ],
          },
          {
            section: 'Input Field',
            description1:
              'As a user I want intuitive form inputs So that I can enter data without confusion',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Label, placeholder, helper text',
              'Error & success states',
              'Validation support',
              'Accessibility (ARIA labels)'
            ],
          },

          {
            section: 'Card Component',
            description1:
              'As a user I want grouped content in a structured way So that I can easily scan information',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Header, body, footer slots',
              'Shadow and border variants',
              'Responsive behavior',
            ],
          },
        ],
      }
    ]
  },
  {
    slug: "dorabjee's-Online-store",
    title: "Dorabjee's Online Store",
    initials: "DS",
    year: "2023",
    role: "Design System Lead",
    client: "Internal platform team",
    category: "Platform",
    summary:
      'Dorabjee’s is a renowned grocery and gourmet store offering premium quality products. The website, Shop.DorabjeesOnline.com, aims to bring the in-store shopping experience online, providing users with a seamless platform to browse and purchase groceries, fresh produce, and specialty items from the comfort of their homes.',
    description:
      "Dorabjee’s is a renowned grocery and gourmet store offering premium quality products. The website, Shop.DorabjeesOnline.com, aims to bring the in-store shopping experience online, providing users with a seamless platform to browse and purchase groceries, fresh produce, and specialty items from the comfort of their homes.",
    features: [
      "Design tokens synced with Figma variables",
      "40+ accessible primitives with keyboard and SR support",
      "Design a visually appealing and user-friendly e-commerce platform.",
      "Ensure quick and intuitive navigation to help users find products effortlessly.",
      "Highlight premium and gourmet offerings to reinforce Dorabjee’s brand identity."
    ],
    challenges: [
      "Creating a balance between a clean design and displaying a wide range of products.",
      "Enhancing the search and filter experience to reduce frustration for users.",
      "Ensuring a responsive design for seamless usage on mobile devices."
    ],
    outcomes: [
      "High-fidelity UI designs for the homepage, category pages, product pages, and checkout flow.",
      "A consistent design system for typography, colors, and UI elements.",
      "Increased website engagement by 35% within the first month of launch.",
      "Reduced cart abandonment rates by 20% through improved checkout design.",
    ],
    stack: ["Magento", "CSS", "HTML", "SCSS", "PHP"],
    code: "https://github.com/arkumar3c",
    thumbnail: dorab,
      userStory :[ {
        heading: 'Research & Discovery',
        userStories: [
          {
            section: 'Target Audience:',
            description1: '',
            criteria: 'UI Acceptance Criteria',
            criteriaList: [
              'Primary: Busy professionals and homemakers who value convenience in online grocery shopping.',
              'Secondary: Gourmet food enthusiasts seeking premium-quality products.',
            ],
          },
          {
            section: 'Competitor Analysis:',
            description1:
              'Analyzed leading grocery e-commerce websites (e.g., BigBasket, Amazon Fresh, Nature’s Basket). Key observations:',
            criteria: '',
            criteriaList: [
              'Competitors prioritize search and categorization but often lack visual appeal.',
              'Loyalty programs and offers are significant drivers of user engagement.',
            ],
          },
        ],
      },
      {
        heading: 'Design Process',
        userStories: [
          {
            section: 'Moodboard & Visual Direction:',
            description1: 'The visual direction was inspired by the sophistication of premium products. The design aimed to evoke trust and quality while maintaining simplicity. Keywords: premium, trust, and efficiency.',
            criteria: '',
            criteriaList: [
              'Primary: Busy professionals and homemakers who value convenience in online grocery shopping.',
              'Secondary: Gourmet food enthusiasts seeking premium-quality products.',
            ],
          },
          {
            section: 'Wireframing:',
            description1:
              '',
            criteria: '',
            criteriaList: [
              'Focused on a clear homepage structure that highlights categories, best-sellers, and offers.',
              'Designed intuitive product pages with detailed descriptions, pricing, and easy add-to-cart functionality.',
            ],
          },
          {
            section: 'Color Palette:',
            description1:
              '',
            criteria: '',
            criteriaList: [
              'Primary Colors: Elegant shades of green and beige to signify freshness and premium quality.',
              'Accent Colors: Soft yellows and reds for call-to-action buttons and promotional highlights.',
            ],
          },
          {
            section: 'UI Component',
            description1:
              '',
            criteria: '',
            criteriaList: [
              'Search Bar: Prominent placement with auto-suggestions to speed up searches.',
              'Category Navigation: Dropdown menus for easy access to key product categories.',
              "Product Cards: Designed with clear imagery, product name, price, and an add-to-cart button.",
              "Offers Section: Dedicated space to showcase discounts and deals."
            ],
          },
        ],
      },
      {
        heading: 'Visual Design Highlights',
        userStories: [
          {
            section: 'Homepage:',
            description1: "",
            criteria: '',
            criteriaList: [
              'A clean and welcoming hero section with featured categories and a search bar.',
              'Featured sections: “Fresh Arrivals,” “Top Deals,” and “Trending Products.”',
            ],
          },
          {
            section: 'Category Page:',
            description1:
              '',
            criteria: '',
            criteriaList: [
              'A two-column layout: product filters on the left and a grid view of products on the right.',
              'Filter options include price range, brand, and dietary preferences (e.g., organic, vegan).',
            ],
          },
          {
            section: 'Color Palette:',
            description1:
              '',
            criteria: '',
            criteriaList: [
              'Large product images with a zoom-in feature.',
              'Clear details on price, availability, and delivery options.',
              "Easy navigation to related products."
            ],
          },
          {
            section: 'Cart & Checkout:',
            description1:
              '',
            criteria: '',
            criteriaList: [
              'A minimalistic cart interface with product thumbnails, quantity adjustments, and a summary section.',
              'A smooth, multi-step checkout process.',
            ],
          },
        ],
      }
    ]
  },
  {
    slug: "lovers-coffee",
    title: "Lovers.Coffee",
    initials: "PW",
    year: "2022",
    role: "Senior Frontend Developer",
    client: "Direct-to-consumer brand",
    category: "E-commerce",
    summary:
      "Lovers Coffee is an online platform dedicated to coffee enthusiasts. It is a hub for coffee lovers to explore educational resources, read engaging blog posts, and connect with a passionate community. The brand's mission is to celebrate coffee culture and provide a space where aficionados can deepen their appreciation for coffee.",
    description:
      "Lovers Coffee is a thoughtfully crafted online platform built for people who don’t just drink coffee—but truly appreciate it. It serves as a digital home for coffee enthusiasts of all levels, from curious beginners exploring their first brew methods to seasoned aficionados seeking to refine their palate and deepen their knowledge. At its core, Lovers Coffee celebrates the rich culture, history, and artistry behind every cup, creating a space where passion for coffee can grow and thrive. The platform offers a wide range of educational resources designed to make coffee knowledge accessible and engaging. Users can explore in-depth guides on brewing techniques, bean varieties, roasting processes, and flavor profiles, helping them understand what makes each cup unique. Whether it’s learning how to perfect a pour-over, understanding the difference between Arabica and Robusta beans, or discovering the impact of origin and altitude on taste, Lovers Coffee turns curiosity into expertise.",
    features: [
      "Users can browse and purchase a wide range of coffee-related products such as beans, equipment, and accessories.",
      "The platform includes search functionality and categorized navigation, making it easy to discover products quickly.",
      "Users can create accounts, manage orders, and get a personalized experience based on their activity.",
      "Features like wishlist, cart, and order tracking help users manage their shopping journey efficiently.",
      "Coffee businesses (roasters, shops, farmers) can list products, manage inventory, and sell directly to customers.",
      "The platform aims to connect coffee lovers with businesses, creating an interactive community around coffee culture.",
      "Includes features like 24/7 help center, return policy, safe payment, and free delivery options for better user experience.",
      "Users can subscribe to newsletters for updates, offers, and coffee-related content.",
      "Design a visually appealing and intuitive interface that reflects the warmth and richness of coffee culture.",
      "Ensure the website offers an engaging and seamless user experience.",
      "Highlight key features like the blog, resource library, and community hub."
    ],
    challenges: [
      "Balancing content density with clean aesthetics.",
      "Ensuring consistency across mobile and desktop designs.",
    ],
    outcomes: [
      "Mobile conversion up 22% within the first month",
      "High-fidelity UI designs for the homepage, blog, resource library, and community hub.",
      "A consistent design system including typography, color palette, and reusable components.",
      "Increased session duration by 40% (post-launch analysis).",
      "Reduced bounce rate from 55% to 35%."
    ],
    stack: ["Magento", "HTML", "CSS", "PHP", "MySql"],
    demo: "https://lovers.coffee/",
    thumbnail: loversCoffee,
    userStory : [
      {
      heading: 'Research & Discovery',
      userStories: [
        {
          section: 'Target Audience:',
          description1: '',
          criteria: '',
          criteriaList: [
            'Primary: Coffee enthusiasts (ages 20-45) who are curious about brewing techniques, coffee origins, and trends.',
            'Secondary: Baristas, coffee shop owners, and industry professionals.',
          ],
        },
        {
          section: 'Competitor Analysis:',
          description1:
            'I analyzed similar platforms such as CoffeeGeek and Perfect Daily Grind to identify trends and pain points. Observations included:',
          criteria: '',
          criteriaList: [
            'A lack of cohesive design elements in most competitors.',
            'Overwhelming information density without clear navigation.',
          ],
        },
        {
          section: 'Challenges Identified:',
          description1: '',
          criteria: '',
          criteriaList: [
            'Balancing a content-rich website with a clean, uncluttered design.',
            'Creating a visual identity that stands out while feeling warm and inviting.',
            "Optimizing navigation to ensure users can easily find information."
          ],
        },
      ],
      },
      {
        heading: ' Design Process',
        userStories: [
          {
            section: 'Moodboard & Inspiration:',
            description1: 'I created a moodboard to capture the essence of coffee culture: earthy tones, warm textures, and a cozy ambiance. Keywords: warmth, sophistication, and simplicity.',
            criteria: '',
            criteriaList: [
              'Planning on requirement board',
              'Secondary: Baristas, coffee shop owners, and industry professionals.',
            ],
          },
          {
            section: 'Wireframing',
            description1:
              'Low-fidelity wireframes were created to outline the layout and structure:',
            criteria: '',
            criteriaList: [
              'Focus on intuitive navigation with clear pathways to the blog, resources, and community sections.',
              'Prioritized the homepage as the central storytelling piece.',
            ],
          },
          {
            section: 'Color Palette:',
            description1: '',
            criteria: '',
            criteriaList: [
              'Primary Colors: Shades of brown and beige to evoke coffee’s richness.',
              'Accent Colors: Subtle greens and warm whites for contrast and freshness.',
            ],
          },
          {
            section: 'Typography:',
            description1: '',
            criteria: '',
            criteriaList: [
              'Used serif fonts for headers to convey sophistication.',
              'Paired with sans-serif fonts for body text for readability.',
            ],
          },
          {
            section: 'UI Components:',
            description1: '',
            criteria: '',
            criteriaList: [
              'Navigation Bar: Sticky menu for easy access to all sections.',
              'Hero Section: A bold introduction with a featured image of coffee brewing.',
              "Cards: Modular cards for blog previews and resource highlights."
            ],
          },
        ],
      },
      {
        heading: 'Visual Design Highlights',
        userStories: [
          {
            section: 'Homepage:',
            description1: '',
            criteria: '',
            criteriaList: [
              'Designed a hero banner with an inviting tagline and a call-to-action button (“Explore Coffee Culture”).',
              'Featured sections include “Top Blog Posts,” “Latest Resources,” and “Join the Community.”',
            ],
          },
          {
            section: 'Wireframing',
            description1:
              'Low-fidelity wireframes were created to outline the layout and structure:',
            criteria: '',
            criteriaList: [
              'Focus on intuitive navigation with clear pathways to the blog, resources, and community sections.',
              'Prioritized the homepage as the central storytelling piece.',
            ],
          },
          {
            section: 'Blog Section:',
            description1: '',
            criteria: '',
            criteriaList: [
              'Created a card-based layout for easy scanning. Each card includes a title, preview text, and a featured image.',
              'Accent Colors: Subtle greens and warm whites for contrast and freshness.',
            ],
          },
          {
            section: 'Resource Library:',
            description1: '',
            criteria: '',
            criteriaList: [
              'Implemented a filterable grid for guides, tools, and tutorials.',
              'Designed icons to represent categories (e.g., brewing, beans, equipment).',
            ],
          },
          {
            section: 'Community Hub:',
            description1: '',
            criteria: '',
            criteriaList: [
              'Highlighted user stories and community events in a carousel format.',
              'Integrated an easy sign-up process for the community newsletter.',
            ],
          },
        ],
      }
    ]
  },
  {
    slug: "Giglancer",
    title: "Giglancer",
    initials: "MS",
    year: "2022",
    role: "Frontend Architect",
    client: "Growth-stage B2B SaaS",
    category: "Marketing",
    summary:
      "Giglancer is a platform where users can book bands, find musicians, or post gigs. It connects clients with talented musicians for their projects.",
    description:
      "Giglancer is a comprehensive digital platform designed to bridge the gap between talented musicians and individuals or businesses seeking high-quality musical services. Whether someone is planning a live event, producing a music project, or looking to collaborate creatively, Giglancer provides a seamless and efficient way to discover, connect, and work with professional artists across various genres and skill levels.",
    features: [
      "Design an intuitive and easy-to-navigate platform that allows clients and musicians to interact effortlessly, reducing friction in discovering, booking, and managing gigs.",
      "Provide advanced search, filtering, and recommendation systems to help clients quickly find the right musicians based on genre, location, budget, and experience.",
      "Streamline the process of posting gigs, sending proposals, and hiring talent with clear workflows, ensuring a fast and hassle-free experience for both parties.",
      "Implement secure payments, verified profiles, and review/rating systems to foster credibility, reliability, and long-term relationships between clients and musicians.",
      "Offer tools for musicians to showcase their work, gain visibility, and access consistent opportunities, helping them build sustainable careers in the music industry.",
      "Per-locale content with ISR",
      "Type-safe content schema generated from CMS",
    ],
    challenges: [
      "Letting marketers compose pages without producing messy HTML",
      "Keeping page builds fast as content volume grew",
      "Designing an easy-to-use dual-dashboard system.",
      "Ensuring smooth communication between clients and artists."
    ],
    outcomes: [
      "Marketing now ships pages without engineering involvement",
      "Landing page test velocity up 4×",
      "Average page weight down 35%",
      "Deliverables: High-fidelity UI designs, branding elements, and dashboards.",
      "Next Steps: Implement personalized recommendations and analytics features."
    ],
    stack: ["React", "HTML", "TypeScript", "CSS"],
    demo: "https://dev.giglancer.com/",
    code: "#",
    thumbnail: gig,
    userStory : [{
      heading: 'Research & Discovery',
      userStories: [
        {
          section: 'Target Audience:',
          description1:
            'Giglancer is designed to serve a diverse yet focused group of users who are connected through a shared interest in music, events, and creative collaboration. The platform primarily targets both clients seeking musical talent and musicians looking for opportunities.',
          criteria: 'UI Acceptance Criteria',
          criteriaList: [
            'Primary: Event organizers, music producers, band managers.',
            'Secondary: Independent musicians seeking gigs.',
            'Clear CTA buttons (Primary / Secondary)',
            'Inline validation with error messages',
            'Loading state during API calls (Spinner / Skeleton)',
            'Success & error banners (Polaris Banner component)',
          ],
        },
        {
          section: 'Design Process',
          description1: '',
          criteria: '',
          criteriaList: [
            'User Flow: Created dashboards for clients and musicians.',
            'Wireframing: Focused on intuitive UI for talent discovery and project posting.',
            'Talent Panel: Profile improvement, gig discovery, invoicing, chat system.',
            'Client Panel: Job postings, musician discovery, team collaboration, chat system.',
            'Loading state during API calls (Spinner / Skeleton)',
            'Success & error banners (Polaris Banner component)',
          ],
        },
        {
          section: 'Visual Design Highlights',
          description1: '',
          criteria: '',
          criteriaList: [
            'Homepage: Showcases musician profiles and gig opportunities.',
            'Talent Dashboard: Profile enhancement, saved opportunities, messaging system.',
            'Client Dashboard: Easy job postings, and team collaboration tools.',
          ],
        },
      ],
    }]
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

export interface Recommendation {
  quote: string;
  name: string;
  role: string;
  relationship: string;
  date: string;
  linkedinUrl: string;
  initials: string;
  imageUrl: string;
}

export const MANAGER_RECOMMENDATION: Recommendation = {
  quote:
    "<p> I've had the opportunity to work closely with Arvind, and he has been a critical part of ensuring the quality and consistency of our frontend execution.</p><p>He brings a strong command over frontend technologies along with a sharp eye for pixel perfection. What stands out is his ability to translate design intent into production with a high degree of accuracy, without compromising on performance or scalability.</p><p>Arvind played a key role in building and publishing our design system, OUNCE, and was instrumental in ensuring its adoption across projects. In many ways, no product shipped without his contribution, either through direct implementation or by raising the bar on quality.</p><p>He consistently reviewed both design and code across the frontend team, maintaining strict control over production quality. This not only improved consistency but also helped establish a strong standard for execution across the board.</p><p>He also ensured that all applications were robust across viewports, taking ownership of responsive behavior and making sure experiences held up across devices.</p><p>Beyond individual contribution, Arvind led a dedicated team focused on design systems and UI development, driving alignment between design and engineering and enabling teams to build faster without compromising quality.</p><p>Overall, he is someone who combines technical depth, design sensitivity, and a strong sense of ownership, making him a dependable force in delivering high-quality frontend experiences.</p>",
  name: "Jaikant Singh",
  role: "Senior Design Manager @ThreeColts",
  relationship: "Managed me directly",
  imageUrl: jaikant,
  date: "March 2015 - till now",
  linkedinUrl: "https://www.linkedin.com/in/jai-kant-singh",
  initials: "MN",
};

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
