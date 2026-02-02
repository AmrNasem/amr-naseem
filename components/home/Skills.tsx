"use client";

import { Container } from "@/components/ui/Container";
import { H2, H3 } from "@/components/ui/Typography";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Sass",
      "Framer Motion",
      "Shadcn UI",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Tools",
    skills: ["Node.js", "MySQL", "PHP", "Git", "Docker Basics", "Vercel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <H2 className="mb-12 text-center">Technical Skills</H2>

          <div className="grid gap-8 md:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <H3 className="mb-4 text-center text-lg">{category.title}</H3>
                <ul className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-secondary px-2.5 py-1 text-sm font-medium text-secondary-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
