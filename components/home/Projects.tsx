import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { H2 } from "@/components/ui/Typography";
import * as motion from "motion/react-client"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../projects/project-card";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <H2 className="mb-12 text-center">Featured Projects</H2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.image}
                  index={index}
                  project={project}
                />
              ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="ghost" size="lg" asChild>
              <Link href="/projects">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
