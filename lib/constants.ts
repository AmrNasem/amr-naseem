import { IProjectCard, IProjectDetails } from "./types";

export const projectCaseStudies: IProjectDetails[] = [
  {
    slug: "cartly",
    title: "Cartly",
    description:
      "A production-ready full-stack e-commerce platform built with Next.js, Better Auth, MongoDB, and Stripe.",
    shortDescription:
      "A modern e-commerce platform featuring secure authentication, Stripe payments, admin management, coupons, order processing, and a scalable full-stack architecture.",
    tags: [
      "E-Commerce",
      "Next.js 16",
      "TypeScript",
      "MongoDB",
      "Better Auth",
      "Stripe",
      "Tailwind CSS",
    ],
    links: {
      demo: "https://cartly-eg.vercel.app",
      github: "https://github.com/AmrNasem/cartly",
    },
    thumbnail: "/projects/cartly/1.png",
    featured: true,

    problem:
      "Many small and medium-sized businesses need an affordable e-commerce solution that combines excellent user experience with secure authentication, reliable payment processing, and an intuitive administration dashboard. Existing solutions are often expensive, difficult to customize, or overloaded with unnecessary complexity.",

    solution:
      "Cartly was built as a production-ready e-commerce platform using the Next.js App Router. It combines Server Components, Server Actions, Better Auth, MongoDB, and Stripe to provide a fast, secure, and maintainable shopping experience while offering administrators complete control over products, categories, orders, coupons, and inventory.",

    features: [
      "Email/Password authentication",
      "Google OAuth authentication",
      "Role-based authorization (User, Admin, Super Admin)",
      "Product search",
      "Shopping cart management",
      "Coupon and discount system",
      "Stripe Checkout integration",
      "Order history",
      "Product reviews and ratings",
      "Product management",
      "Coupon management",
      "Order management",
      "Database seeding with realistic demo data",
    ],

    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "Stripe",
      "Zustand",
    ],

    technicalDecisions: [
      {
        title: "Next.js App Router & Server Components",
        reason:
          "Used the App Router to leverage Server Components for efficient rendering and Server Actions for secure server-side mutations, reducing unnecessary client-side JavaScript while keeping the architecture scalable.",
      },
      {
        title: "Better Auth for Authentication",
        reason:
          "Selected Better Auth to implement secure session management, Google OAuth, email/password authentication, and role-based authorization while keeping authentication logic centralized and type-safe.",
      },
      {
        title: "Stripe Checkout with Webhooks",
        reason:
          "Implemented Stripe Checkout together with webhook verification to ensure orders are only created after successful payment confirmation, preventing inconsistencies caused by interrupted client-side payment flows.",
      },
      {
        title: "MongoDB + Mongoose",
        reason:
          "Used MongoDB for flexible document storage and Mongoose for schema validation, relationships, indexing, and maintainable data models suitable for a growing e-commerce application.",
      },
      {
        title: "Reusable Component Architecture",
        reason:
          "Designed reusable UI components and modular server-side logic to improve maintainability, simplify future feature development, and encourage code reuse across the application.",
      },
    ],

    challenges: [
      {
        challenge: "Guaranteeing data consistency during the checkout process.",
        solution:
          "Integrated Stripe webhooks so orders are only persisted after Stripe confirms payment success, avoiding duplicate or incomplete orders caused by client-side interruptions.",
      },
      {
        challenge: "Designing scalable authentication and authorization.",
        solution:
          "Built authentication with Better Auth and implemented role-based access control to securely protect admin routes, dashboard features, and server-side operations.",
      },
      {
        challenge: "Generating realistic development data.",
        solution:
          "Created a complete database seeding system that automatically generates users, categories, products, and coupons, allowing the application to be tested immediately after setup.",
      },
      {
        challenge: "Maintaining a clean and scalable codebase.",
        solution:
          "Separated business logic, database operations, reusable components, and server actions into modular layers to keep the project organized and easy to extend.",
      },
    ],

    screenshotsPath: "/projects/cartly",

    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],

    futureImprovements: [
      "Advanced product filtering and sorting",
      "Product recommendation engine",
      "Email notifications",
      "Sales analytics dashboard",
      "Inventory insights",
      "Multi-language support",
      "Multi-currency support",
      "AI-powered product recommendations",
    ],
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",

    description:
      "A modern developer portfolio showcasing projects, skills, and experience with a focus on clean UI, scalability, and user experience.",

    shortDescription:
      "Portfolio website featuring project filtering, structured case studies, and responsive design.",

    tags: [
      "Portfolio",
      "Frontend",
      "Landing Page",
      "Responsive Design",
      "Animation",
      "Cursor",
    ],

    links: {
      demo: "https://amr-naseem.vercel.app",
      github: "https://github.com/AmrNasem/amr-naseem",
    },

    thumbnail: "/projects/portfolio/1.png",
    featured: true,

    problem:
      "Developers need a structured and professional way to present their work, but many portfolios lack clear project storytelling, filtering, and user-friendly navigation.",

    solution:
      "Built a structured portfolio with dedicated sections and pages, project case studies, and dynamic filtering to improve discoverability and user experience.",

    features: [
      "Hero section with clear personal branding",
      "About section highlighting background and skills",
      "Technical skills showcase",
      "Projects section with detailed case studies",
      "Dedicated pages (About, Projects, Contact)",
      "Tech stack filtering for projects",
      "Light and dark mode support",
      "Resume download functionality",
      "Contact section with social links",
    ],

    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Cursor"],

    technicalDecisions: [
      {
        title: "Component-based architecture",
        reason:
          "Ensures reusability and scalability across sections and pages like projects, filters, and layouts.",
      },
      {
        title: "Client-side filtering for projects",
        reason:
          "Provides instant feedback and smooth UX without additional API calls.",
      },
      {
        title: "Theme management (light/dark mode)",
        reason:
          "Improves accessibility and user experience across different environments.",
      },
    ],

    challenges: [
      {
        challenge: "Maintaining UI consistency across multiple sections",
        solution:
          "Used shared components and design patterns to unify layout and spacing.",
      },
      {
        challenge: "Balancing aesthetics with performance",
        solution:
          "Optimized styles and avoided unnecessary complexity while keeping a modern UI.",
      },
    ],

    screenshotsPath: "/projects/portfolio",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],

    futureImprovements: [
      "Add animations and micro-interactions",
      "Integrate CMS for dynamic project management",
      "Add blog section for content sharing",
    ],
  },
  {
    slug: "chat-broker",
    title: "Chat Broker",
    description:
      "A smart marketplace platform where users can list products for sale, rent, or exchange, enhanced with an AI-powered broker and real-time communication.",

    shortDescription:
      "Graduation project combining marketplace functionality with AI-assisted product discovery and real-time chat.",
    tags: ["Marketplace", "AI-powered", "Real-time", "React"],

    links: {
      // demo: "https://drive.google.com/drive/folders/13t5rKCWWb5APM5JtLn1weNdKe9kyWBnt?usp=drive_link#",
      github: "https://github.com/AmrNasem/chatbroker",
    },

    thumbnail: "/projects/chatbroker/1.jpeg",
    featured: true,

    problem:
      "Users lacked a flexible platform to easily list and discover products for sale, rent, or exchange, and often struggled to find relevant items quickly or communicate efficiently with owners.",

    solution:
      "The platform enables users to list products with multiple transaction options while integrating an AI-powered broker to recommend relevant items based on user needs, alongside real-time chat for seamless communication.",

    features: [
      "List products for sale, rent, or exchange",
      "Advanced product management (add, update, delete)",
      "Shopping cart and checkout system",
      "Favorites and saved items",
      "AI-powered chatbot for personalized product recommendations",
      "Real-time one-to-one chat between users",
      "User authentication and protected routes",
      "Product owner dashboard with statistics and insights",
    ],

    techs: ["React", "Redux Toolkit", "Socket.io", "REST API", "CSS3"],

    technicalDecisions: [
      {
        title: "Socket.io for real-time communication",
        reason:
          "Enabled instant messaging between users with reliable event handling and reconnection support.",
      },
      {
        title: "AI Broker (Chatbot layer)",
        reason:
          "Introduced a conversational interface to help users discover relevant products based on custom needs instead of traditional filtering.",
      },
      {
        title: "Redux Toolkit for state management",
        reason:
          "Used to manage complex global state including products, cart, chat, and user data in a scalable and predictable way.",
      },
    ],

    challenges: [
      {
        challenge:
          "Designing a flexible product system (sale / rent / exchange)",
        solution:
          "Created a unified product schema with multiple transaction modes and conditional logic for each workflow.",
      },
      {
        challenge: "Matching user needs with relevant products",
        solution:
          "Implemented a chatbot-driven recommendation flow that interprets user input and filters products dynamically.",
      },
      {
        challenge: "Handling real-time chat synchronization",
        solution:
          "Used Socket.io with message IDs and timestamps to ensure correct ordering and prevent duplication.",
      },
    ],

    screenshotsPath: "/projects/chatbroker",
    screenshots: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],

    futureImprovements: [
      "Smart recommendation engine with ML models",
      "Push notifications for messages and offers",
      "Advanced search and filtering system",
      "Mobile application version",
    ],
  },
  {
    slug: "e-learning-platform",
    title: "E-Learning Platform",

    description:
      "A role-based e-learning platform built to practice building scalable React applications with structured dashboards and real-world user flows.",

    shortDescription:
      "Practice project focused on role-based UI, course flows, and state management in React.",

    tags: ["LMS", "Role-based", "Frontend", "Dashboard"],

    links: {
      demo: "https://standalone--e-learning-client.netlify.app",
      github: "https://github.com/AmrNasem/E-Learning-Client",
    },

    thumbnail: "/projects/e-learning/1.png",
    featured: false,

    problem:
      "Learning platforms require clear separation between student and instructor experiences, which can become difficult to structure and maintain in frontend applications.",

    solution:
      "Built a role-based UI system with separate workflows for instructors and students, focusing on clean state management and reusable components to simulate real-world LMS behavior.",

    features: [
      "Instructor dashboard to create, update, and manage courses",
      "Student experience to browse, purchase, and access courses",
      "Course details page with structured sections and lectures",
      "Shopping cart and purchase flow",
      "User profile management",
    ],

    techs: ["React", "Redux Toolkit", "Bootstrap", "REST API"],

    technicalDecisions: [
      {
        title: "Role-based UI separation",
        reason:
          "Implemented conditional rendering and routing logic to simulate real-world LMS roles and workflows.",
      },
      {
        title: "Redux Toolkit for state management",
        reason:
          "Used to manage course data, cart state, and user interactions across multiple pages consistently.",
      },
    ],

    challenges: [
      {
        challenge: "Handling different user flows (student vs instructor)",
        solution:
          "Separated logic using role-based conditions and reusable components to avoid duplication.",
      },
      {
        challenge: "Structuring course content (sections & lectures)",
        solution:
          "Designed nested data structures to represent courses in a scalable and organized way.",
      },
    ],

    screenshotsPath: "/projects/e-learning",
    screenshots: [
      "1.png",
      "2.jpeg",
      "3.jpeg",
      "4.jpeg",
      "5.jpeg",
      "6.jpeg",
      "7.jpeg",
    ],

    futureImprovements: [
      "Progress tracking and course completion",
      "Interactive quizzes and assignments",
      "Better API integration instead of mock data",
    ],
  },
  {
    slug: "gamer-portfolio",
    title: "Gamer Portfolio",
    description:
      "A visually rich portfolio concept with immersive sections and performance-aware interactions.",
    shortDescription:
      "A themed single-page portfolio focused on animation timing, visual hierarchy, and interaction polish.",
    tags: ["Frontend", "Landing Page", "Vanilla JS"],
    links: {
      demo: "https://amrnasem.github.io/Gaming-App",
      github: "http://github.com/AmrNasem/gaming-app",
    },
    featured: false,
    thumbnail: "/projects/gamer-portfolio/1.jpeg",
    problem:
      "Traditional portfolio templates can look generic and fail to communicate a strong visual identity.",
    solution:
      "I built a custom gaming-inspired UI with animation and section pacing to create a memorable user journey.",
    features: [
      "Animated hero sections",
      "Smooth in-page navigation",
      "High-contrast visual design",
    ],
    techs: ["HTML5", "CSS3", "JavaScript"],
    technicalDecisions: [
      {
        title: "Vanilla JavaScript",
        reason:
          "Kept the stack minimal to focus on direct control of interactions and performance.",
      },
    ],
    challenges: [
      {
        challenge: "Balancing animation richness and smooth rendering",
        solution:
          "Reduced expensive effects and optimized transition timing for better frame consistency.",
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
    tags: ["React", "Landing Page", "Marketing Agency", "Portfolio"],
    links: {
      demo: "https://valot.netlify.app",
    },
    thumbnail: "/projects/valot/1.jpeg",
    problem:
      "Small agencies need websites that communicate service value quickly and build trust in seconds.",
    solution:
      "I crafted conversion-oriented content sections and reusable UI blocks with strong visual hierarchy.",
    features: ["Service highlights", "Case snippets", "CTA-focused layouts"],
    techs: ["React", "Bootstrap", "CSS Modules"],
    technicalDecisions: [
      {
        title: "CSS Modules",
        reason:
          "Improves style isolation for rapidly iterated landing-page sections.",
      },
    ],
    challenges: [
      {
        challenge: "Maintaining consistency across many marketing sections",
        solution:
          "Established reusable section patterns and shared spacing/typography conventions.",
      },
    ],
    screenshotsPath: "/projects/valot",
    screenshots: ["1.jpeg"],
  },
  {
    slug: "special-design",
    title: "Special Design",

    description:
      "A modern multi-section landing page built to practice responsive layouts, clean UI implementation, and smooth user experience across different screen sizes.",

    shortDescription:
      "Frontend project focused on responsive design, layout structuring, and UI implementation.",

    tags: ["Landing Page", "Responsive Design", "UI/UX", "Frontend"],

    links: {
      demo: "https://amrnasem.github.io/SpecialDesign",
      github: "http://github.com/AmrNasem/SpecialDesign",
    },

    thumbnail: "/projects/special-design/1.jpg",
    featured: false,

    problem:
      "Building clean, responsive landing pages with consistent spacing, alignment, and visual hierarchy can be challenging, especially when translating static designs into real code.",

    solution:
      "Implemented a structured multi-section layout with reusable styles and responsive breakpoints, focusing on maintaining visual consistency and a smooth scrolling experience across devices.",

    features: [
      "Multi-section landing page (Hero, Services, Portfolio, Contact)",
      "Fully responsive layout across different screen sizes",
      "Portfolio/gallery section for showcasing work",
      "Contact form UI",
    ],

    techs: ["HTML", "CSS3", "JavaScript"],

    technicalDecisions: [
      {
        title: "CSS layout structuring",
        reason:
          "Focused on building reusable layout patterns using Flexbox/Grid to maintain consistency across sections.",
      },
      {
        title: "Responsive-first approach",
        reason:
          "Used media queries and fluid layouts to ensure the design adapts smoothly to all screen sizes.",
      },
    ],
    screenshotsPath: "/projects/special-design",
    screenshots: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
    ],

    futureImprovements: [
      "Add animations and micro-interactions",
      "Improve accessibility (ARIA, keyboard navigation)",
      "Connect contact form to a backend service",
      "Optimize performance and assets",
    ],
  },
];

export const projects: IProjectCard[] = projectCaseStudies.map((project) => ({
  slug: project.slug,
  title: project.title,
  description: project.description,
  thumbnail: project.thumbnail,
  tags: project.tags,
  techs: project.techs,
  links: project.links,
  featured: project.featured,
}));
