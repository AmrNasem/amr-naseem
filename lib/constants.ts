import { IProjectCard, IProjectDetails } from "./types";

export const projectCaseStudies: IProjectDetails[] = [
  {
    slug: "e-commerce-store",
    title: "E-commerce Store",
    description:
      "A multilingual e-commerce product that delivers fast browsing, secure checkout, and high conversion-focused UX.",
    shortDescription:
      "A production-ready shopping experience with auth, smart filtering, cart management, and SEO-first architecture.",
    tags: ["Next.js 16", "TypeScript", "Zustand", "Next-Intl", "Tailwind CSS", "Zod", "SEO"],
    links: {
      demo: "https://front-ecommerce-task.vercel.app",
      github: "https://github.com/AmrNasem/ecommerce-task",
    },
    thumbnail: "/projects/e-commerce-task/1.png",
    featured: true,
    problem:
      "Many small online stores struggle with slow pages, fragmented cart experiences, and poor localization, which causes drop-offs before checkout.",
    solution:
      "I built a modular storefront using Next.js App Router and TypeScript, with global state for cart and filters, localized routes/content, and SEO optimization for indexable category/product pages.",
    features: [
      "Authentication and protected user flows",
      "Cart management with persistent client state",
      "Category and search filtering",
      "Multilingual UI with localized routing",
      "Form validation using Zod",
      "SEO-ready metadata and structure",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Next-Intl", "Zod"],
    technicalDecisions: [
      {
        title: "Next.js App Router",
        reason:
          "Chosen for fast route-based rendering, better SEO defaults, and scalable folder-based architecture.",
      },
      {
        title: "Zustand for state",
        reason:
          "Used for a lightweight, predictable global cart/filter state without boilerplate-heavy setup.",
      },
      {
        title: "Zod validation",
        reason:
          "Introduced to guarantee input shape and prevent invalid checkout/profile payloads at the UI layer.",
      },
    ],
    challenges: [
      {
        challenge: "Keeping cart state synchronized across pages and refreshes",
        solution:
          "Centralized state in a dedicated store and persisted minimal cart data to ensure consistent hydration.",
      },
      {
        challenge: "Supporting localization without duplicating UI logic",
        solution:
          "Used locale-aware routing and translation dictionaries, while sharing the same reusable components.",
      },
      {
        challenge: "Maintaining performance with rich product cards and filtering",
        solution:
          "Optimized images and component rendering paths, and structured filtering logic for predictable updates.",
      },
    ],
    screenshotsPath: "/projects/e-commerce-task",
    screenshots: ["1.png", "2.png"],
    futureImprovements: [
      "Stripe integration for production payments",
      "Wishlist and saved carts across devices",
      "Admin analytics dashboard for conversion tracking",
    ],
  },
  {
    slug: "chat-broker",
    title: "Chat Broker",
    description:
      "A real-time messaging platform that connects users and brokers with reliable communication flows.",
    shortDescription:
      "Graduation project focused on real-time chat reliability, conversation management, and responsive UX.",
    tags: ["React", "Redux Toolkit", "REST API", "Socket.io"],
    links: {
      demo: "https://drive.google.com/drive/folders/13t5rKCWWb5APM5JtLn1weNdKe9kyWBnt?usp=drive_link#",
      github: "https://github.com/AmrNasem/chatbroker",
    },
    thumbnail: "/projects/chatbroker/1.jpeg",
    featured: true,
    problem:
      "Users needed quick, reliable communication with brokers, but traditional request flows were too slow and fragmented.",
    solution:
      "The app combines REST for core resources and Socket.io for real-time events to keep chat, status, and presence synchronized with low friction.",
    features: [
      "Live one-to-one messaging",
      "Conversation list with latest updates",
      "Real-time presence and activity states",
      "Role-based broker and client workflows",
    ],
    techStack: ["React", "Redux Toolkit", "Socket.io", "REST API", "CSS"],
    technicalDecisions: [
      {
        title: "Socket.io for events",
        reason: "Provides robust bi-directional communication with reconnection support for unstable networks.",
      },
      {
        title: "Redux Toolkit",
        reason: "Helps maintain normalized chat state and clear async workflows in a larger app surface area.",
      },
    ],
    challenges: [
      {
        challenge: "Preventing duplicate or out-of-order messages",
        solution:
          "Added deterministic message IDs and timestamp sorting before reducing data into state.",
      },
      {
        challenge: "Handling reconnect edge cases",
        solution:
          "Implemented reconnection listeners and state recovery to re-sync active conversations safely.",
      },
    ],
    screenshotsPath: "/projects/chatbroker",
    screenshots: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
    futureImprovements: [
      "Push notifications for unread messages",
      "Typing indicators and read receipts",
      "Media attachments with upload progress",
    ],
  },
  {
    slug: "e-learning-platform",
    title: "E-Learning Platform",
    description:
      "An LMS application with RBAC, modular dashboards, and integrations with multiple learning APIs.",
    shortDescription:
      "A role-aware learning platform where students and instructors get tailored dashboards and workflows.",
    tags: ["React", "Redux Toolkit", "REST API", "Bootstrap"],
    links: {
      demo: "https://standalone--e-learning-client.netlify.app",
      github: "https://github.com/AmrNasem/E-Learning-Client",
    },
    thumbnail: "/projects/e-learning/1.png",
    featured: true,
    problem:
      "Course management platforms often become hard to scale when user roles and permissions are not clearly modeled.",
    solution:
      "I designed role-driven UI boundaries and centralized access checks, while integrating APIs for courses, assignments, and progression tracking.",
    features: [
      "RBAC-driven navigation and pages",
      "Course and lesson organization",
      "Assignment flows and progress tracking",
      "Role-specific dashboard widgets",
    ],
    techStack: ["React", "Redux Toolkit", "Bootstrap", "REST API"],
    technicalDecisions: [
      {
        title: "RBAC-first architecture",
        reason: "Reduces authorization bugs by making access rules explicit in routing and UI composition.",
      },
      {
        title: "Redux Toolkit",
        reason: "Supports consistent async data fetching and caching across multiple dashboard modules.",
      },
    ],
    challenges: [
      {
        challenge: "Managing multiple role-specific interfaces in one codebase",
        solution:
          "Created composable layout sections and shared primitives, with role guards controlling visibility.",
      },
      {
        challenge: "Coordinating API responses with different payload shapes",
        solution:
          "Standardized mapping functions before state updates to keep rendering components stable.",
      },
    ],
    screenshotsPath: "/projects/e-learning",
    screenshots: ["1.png", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg" ],
    futureImprovements: [
      "Interactive quiz builder",
      "Instructor analytics and cohort insights",
      "Offline access for lesson materials",
    ],
  },
  {
    slug: "gamer-portfolio",
    title: "Gamer Portfolio",
    description:
      "A visually rich portfolio concept with immersive sections and performance-aware interactions.",
    shortDescription:
      "A themed single-page portfolio focused on animation timing, visual hierarchy, and interaction polish.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    links: {
      demo: "https://amrnasem.github.io/Gaming-App",
      github: "http://github.com/AmrNasem/gaming-app",
    },
    featured: true,
    thumbnail: "/projects/gamer-portfolio/1.jpeg",
    problem: "Traditional portfolio templates can look generic and fail to communicate a strong visual identity.",
    solution:
      "I built a custom gaming-inspired UI with animation and section pacing to create a memorable user journey.",
    features: ["Animated hero sections", "Smooth in-page navigation", "High-contrast visual design"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    technicalDecisions: [
      {
        title: "Vanilla JavaScript",
        reason: "Kept the stack minimal to focus on direct control of interactions and performance.",
      },
    ],
    challenges: [
      {
        challenge: "Balancing animation richness and smooth rendering",
        solution: "Reduced expensive effects and optimized transition timing for better frame consistency.",
      },
    ],
    screenshotsPath: "/projects/gamer-portfolio",
    screenshots: ["1.jpeg", "2.jpeg"],
  },
  {
    slug: "valot",
    title: "Valot",
    description:
      "A modern marketing agency website showcasing branding, creative design, and digital services.",
    shortDescription:
      "Marketing-focused agency website designed to communicate services clearly and drive inquiries.",
    tags: ["React", "Bootstrap", "CSS Modules"],
    links: {
      demo: "https://valot.netlify.app",
    },
    thumbnail: "/projects/valot/1.jpeg",
    problem: "Small agencies need websites that communicate service value quickly and build trust in seconds.",
    solution:
      "I crafted conversion-oriented content sections and reusable UI blocks with strong visual hierarchy.",
    features: ["Service highlights", "Case snippets", "CTA-focused layouts"],
    techStack: ["React", "Bootstrap", "CSS Modules"],
    technicalDecisions: [
      {
        title: "CSS Modules",
        reason: "Improves style isolation for rapidly iterated landing-page sections.",
      },
    ],
    challenges: [
      {
        challenge: "Maintaining consistency across many marketing sections",
        solution: "Established reusable section patterns and shared spacing/typography conventions.",
      },
    ],
    screenshotsPath: "/projects/valot",
    screenshots: ["1.jpeg"],
  },
  {
    slug: "special-design",
    title: "Special Design",
    description:
      "A frontend practice project focused on layout composition and foundational visual design principles.",
    shortDescription:
      "A learning-oriented project to sharpen responsive layout, spacing, and component structuring skills.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    links: {
      demo: "https://amrnasem.github.io/SpecialDesign",
      github: "http://github.com/AmrNasem/SpecialDesign",
    },
    thumbnail: "/projects/special-design/1.jpg",
    problem: "Early frontend practice projects often lack reusable structure and scalable styling patterns.",
    solution:
      "I used this project to practice section composition, spacing systems, and cleaner class organization.",
    features: ["Responsive sections", "Reusable visual blocks", "Progressive enhancement basics"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    technicalDecisions: [
      {
        title: "Semantic HTML first",
        reason: "Improves accessibility and maintainability while building strong frontend fundamentals.",
      },
    ],
    challenges: [
      {
        challenge: "Keeping layouts responsive across breakpoints",
        solution: "Built mobile-first and tested each section with flexible spacing and sizing rules.",
      },
    ],
    screenshotsPath: "/projects/special-design",
    screenshots: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
  },
];

export const projects: IProjectCard[] = projectCaseStudies.map((project) => ({
  slug: project.slug,
  title: project.title,
  description: project.description,
  thumbnail: project.thumbnail,
  tags: project.tags,
  links: project.links,
  featured: project.featured,
}));
