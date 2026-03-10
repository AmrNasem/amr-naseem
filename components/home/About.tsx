import { Container } from "@/components/ui/Container";
import { H2, Lead, P } from "@/components/ui/Typography";
import * as motion from "motion/react-client"

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
          <Lead className="mb-8 text-center">
            I’m a frontend developer based in Egypt who enjoys turning ideas
            into fast, clean, and engaging web experiences.
          </Lead>
          <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
            <P>
              I work mainly with React, Next.js, and TypeScript to build
              responsive and scalable interfaces. I enjoy transforming UI/UX
              designs into functional components while keeping code clean,
              reusable, and performance-focused.
            </P>
            <P>
              I care about writing maintainable code and creating reliable user
              experiences across all devices. Always learning and improving, I’m
              looking to grow with teams that value quality, collaboration, and
              impactful products.
            </P>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
