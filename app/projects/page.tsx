import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectsGallery } from "@/components/projects/projects-gallery";
import { Container } from "@/components/ui/Container";
import { H1, Lead } from "@/components/ui/Typography";
import { projects } from "@/lib/constants";
import { absoluteUrl, defaultKeywords, getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { Suspense } from "react";

const pageKeywords = [
  ...defaultKeywords,
  "Projects",
  "Case Studies",
  "E-Commerce",
  "Web Apps",
  "Portfolio Projects",
];

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects and case studies — e-commerce, portfolios, and production web apps built with React, Next.js, and TypeScript.",
  keywords: pageKeywords,
  openGraph: {
    title: "Projects | Amr Naseem",
    description:
      "Case studies and shipped work — modern frontend architecture, UX, and technical write-ups.",
    url: `${getSiteUrl()}/projects`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Amr Naseem — Frontend Developer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Amr Naseem",
    description:
      "Case studies and shipped work — modern frontend architecture, UX, and technical write-ups.",
    images: [absoluteUrl("/opengraph-image")],
  },
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
