import type { ReactNode } from "react";
import { Code2, LayoutGrid, Network } from "lucide-react";
import { LuBoxes } from "react-icons/lu";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export type SkillCategory = {
  title: string;
  skills: { name: string; icon: ReactNode }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Core",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Zustand", icon: <LuBoxes /> },
      { name: "Context API", icon: <SiReact /> },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "Responsive Design", icon: <LayoutGrid /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Cursor", icon: <Code2 /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "REST API", icon: <Network /> },
    ],
  },
];
