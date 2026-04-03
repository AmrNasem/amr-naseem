import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ProjectCaseStudyContent from "@/components/projects/project-case-study-content";
import { Container } from "@/components/ui/Container";
import { projectCaseStudies } from "@/lib/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProjectBySlug(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}

export async function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found - Amr Naseem",
      description: "The requested project case study does not exist.",
    };
  }

  return {
    title: `${project.title} - Case Study | Amr Naseem`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10 md:py-16">
        <Container className="max-w-6xl">
          <ProjectCaseStudyContent project={project} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
