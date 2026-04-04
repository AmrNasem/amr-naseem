"use client";

import { SkillCard } from "@/components/home/SkillCard";
import { Container } from "@/components/ui/Container";
import { H2, H3 } from "@/components/ui/Typography";
import { skillCategories } from "@/lib/skills-data";
import * as motion from "motion/react-client";

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

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-border/80 bg-card/50 p-6 shadow-sm backdrop-blur-sm"
              >
                <H3 className="mb-5 text-center text-lg">{category.title}</H3>
                <ul className="flex flex-wrap justify-center gap-2.5">
                  {category.skills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                    />
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
