import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ProjectCaseStudyContent from "@/components/projects/project-case-study-content";
import { Container } from "@/components/ui/Container";
import { projectCaseStudies } from "@/lib/constants";
import { absoluteUrl, defaultKeywords, getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";
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
      title: "Project not found",
      description: "The requested project case study does not exist.",
    };
  }

  const title = `${project.title} — Case Study`;
  const keywords = [
    ...defaultKeywords,
    ...project.tags,
    ...project.techs,
    "Case Study",
  ];
  const ogImage = absoluteUrl(project.thumbnail);

  return {
    title,
    description: project.shortDescription || project.description,
    keywords,
    openGraph: {
      title: `${project.title} | Amr Naseem`,
      description: project.shortDescription || project.description,
      url: `${getSiteUrl()}/projects/${slug}`,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Amr Naseem`,
      description: project.shortDescription || project.description,
      images: [ogImage],
    },
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
