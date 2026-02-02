"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { H2, H3, P } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
// import Image from "next/image"; // Note: Requires setting up images or placeholders

const projects = [
  {
    title: "Chat Broker",
    description:
      "Graduation Project - A real-time messaging platform connecting users with brokers.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    links: {
      demo: "#", // Placeholder
      github: "#", // Placeholder
    },
    // image: "/project-placeholder.jpg" // TODO: Add real images
  },
  {
    title: "React E-Learning Platform",
    description:
      "Comprehensive LMS with Role-Based Access Control (RBAC) and complex API integrations.",
    tags: ["React", "Redux", "REST API", "Tailwind CSS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Gamer Portfolio",
    description:
      "A dynamic portfolio site for gamers with high-performance animations and dark mode.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];

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
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
              >
                {/* <div className="aspect-video w-full bg-muted" /> Placeholder for image */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <H3 className="mb-2 text-xl">{project.title}</H3>
                    <P className="text-sm text-muted-foreground">
                      {project.description}
                    </P>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <Link href={project.links.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      <Button size="sm" className="w-full" asChild>
                        <Link href={project.links.demo} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="ghost" size="lg" asChild>
              <Link href="https://github.com/AmrNasem" target="_blank">
                View all projects on GitHub <Github className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
