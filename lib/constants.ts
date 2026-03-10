import { IProjectCard } from "./types";

export const projects: IProjectCard[] = [
  {
    title: "Chat Broker",
    description:
      "Graduation Project - A real-time messaging platform connecting users with brokers.",
    tags: ["React", "Redux Toolkit", "REST API", "Socket.io"],
    links: {
      demo: "https://drive.google.com/drive/folders/13t5rKCWWb5APM5JtLn1weNdKe9kyWBnt?usp=drive_link#", // Placeholder
    },
    image: "/projects/chatbroker.jpeg",
    featured: true,
  },
  {
    title: "E-Learning Platform",
    description:
      "Comprehensive LMS with Role-Based Access Control (RBAC) and complex API integrations.",
    tags: ["React", "Redux Toolkit", "REST API", "Bootstrap"],
    links: {
      demo: "https://standalone--e-learning-client.netlify.app",
      // demo: "https://drive.google.com/drive/folders/1jE17xmqFQHvU-95_Ol6JiHHiBO1mWEzQ?usp=drive_link",
      github: "http://github.com/AmrNasem/e-learning-client",
    },
    image: "/projects/e-learning.png",
    featured: true,
  },
  {
    title: "Gamer Portfolio",
    description:
      "A dynamic portfolio site for gamers with high-performance animations.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    links: {
      demo: "https://amrnasem.github.io/Gaming-App",
      github: "http://github.com/AmrNasem/gaming-app",
    },
    featured: true,
    image: "/projects/gamer-portfolio.jpeg",
  },
  {
    title: "Valot",
    description:
      "A modern marketing agency website showcasing branding, creative design, and digital marketing services.",
    tags: ["React", "Bootstrap", "CSS Modules"],
    links: {
      demo: "https://valot.netlify.app",
    },
    image: "/projects/valot.jpeg",
  },
  {
    title: "Special Design",
    description:
      "A practice agency website built to improve layout design and frontend development skills.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    links: {
      demo: "https://amrnasem.github.io/SpecialDesign",
      github: "http://github.com/AmrNasem/SpecialDesign",
    },
    image: "/projects/special-design.jpg",
  },
];
