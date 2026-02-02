"use client";

import { Container } from "@/components/ui/Container";
import { H2, Lead, P } from "@/components/ui/Typography";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <H2 className="mb-8 text-center">About Me</H2>
          <Lead className="mb-6 text-center">
            I am a frontend developer based in Egypt, passionate about building
            scalable web applications with focus on performance and user
            experience.
          </Lead>
          <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
            <P>
              With real production experience in both frontend and full-stack
              development, I specialize in the Modern JavaScript Stack (React,
              Next.js, Node.js). I have a strong foundation in strict
              TypeScript, responsive design, and web accessibility standards.
            </P>
            <P>
              My journey includes freelancing where I delivered responsive
              websites and reusable components, as well as academic projects
              that simulated real-world complexities like RBAC and API
              integrations. I value clean code, consistent design systems, and
              shipping products that work flawlessly across all devices.
            </P>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
