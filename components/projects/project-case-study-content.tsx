import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { IProjectDetails } from "@/lib/types";

interface ProjectCaseStudyContentProps {
  project: IProjectDetails;
}

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border bg-card p-6 md:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-5 text-muted-foreground">{children}</div>
    </motion.section>
  );
}

export default function ProjectCaseStudyContent({ project }: ProjectCaseStudyContentProps) {
  const fullPathScreenshots = project.screenshots?.map(sc => `${project.screenshotsPath}/${sc}`)
  return (
    <div className="space-y-10 md:space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl border bg-card p-4 shadow-sm md:p-8"
      >
        <div className="relative mb-6 aspect-16/7 overflow-hidden rounded-2xl">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-primary">Case Study</p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">{project.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {project.links.demo && (
              <Button asChild>
                <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline" asChild>
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                  View Code <Github className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </motion.section>

      <Section title="Problem" delay={0.05}>
        <p className="text-base leading-8 md:text-lg">{project.problem}</p>
      </Section>

      <Section title="Solution" delay={0.08}>
        <p className="text-base leading-8 md:text-lg">{project.solution}</p>
      </Section>

      <Section title="Features" delay={0.1}>
        <div className="grid gap-3 sm:grid-cols-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40"
            >
              {feature}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tech Stack" delay={0.12}>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Technical Decisions" delay={0.14}>
        <div className="space-y-4">
          {project.technicalDecisions.map((decision) => (
            <div key={decision.title} className="rounded-xl border bg-background p-4">
              <h3 className="font-semibold text-foreground">{decision.title}</h3>
              <p className="mt-2 text-sm leading-7">{decision.reason}</p>
            </div>
          ))}
        </div>
      </Section>

      {
        project.challenges &&
        <Section title="Challenges & Solutions" delay={0.16}>
          <div className="space-y-4">
            {project.challenges.map((item) => (
              <div key={item.challenge} className="rounded-xl border bg-background p-4">
                <p className="font-semibold text-foreground">{item.challenge}</p>
                <p className="mt-2 text-sm leading-7">{item.solution}</p>
              </div>
            ))}
          </div>
        </Section>
      }

      {fullPathScreenshots && fullPathScreenshots.length > 1 && (
        <Section title="Screenshots" delay={0.18}>
          <Carousel images={fullPathScreenshots} altBase={project.title} />
        </Section>
      )}

      {project.futureImprovements && project.futureImprovements.length > 0 && (
        <Section title="Future Improvements" delay={0.2}>
          <ul className="space-y-2">
            {project.futureImprovements.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-7 md:text-base">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
