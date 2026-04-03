import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectsGallery } from "@/components/projects/projects-gallery";
import { Container } from "@/components/ui/Container";
import { H1, Lead } from "@/components/ui/Typography";
import { projects } from "@/lib/constants";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Projects - Amr Naseem",
  description: "Showcase of my frontend and full-stack development projects.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <H1 className="mb-6">Projects</H1>
            <Lead>
              A selection of my recent work, featuring web applications built
              with React, Next.js, and modern web technologies.
            </Lead>
          </div>
          <Suspense
            fallback={
              <div className="grid min-h-96 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                  <div
                    key={project.slug}
                    className="h-64 animate-pulse rounded-lg border bg-muted/40"
                  />
                ))}
              </div>
            }
          >
            <ProjectsGallery projects={projects} />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
