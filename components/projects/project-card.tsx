import * as motion from "motion/react-client"
import Image from "next/image";
import { H3, P } from "../ui/Typography";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { IProjectCard } from "@/lib/types";

function ProjectCard({
  project,
  index = 0,
}: {
  project: IProjectCard;
  index: number;
}) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
    >
      {project.thumbnail && (
        <div className="aspect-video relative">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="w-full h-full"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <H3 className="mb-2 text-xl">{project.title}</H3>
          <P className="text-sm text-muted-foreground">{project.description}</P>
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

          <div className="mb-3">
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href={`/projects/${project.slug}`}>
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            {project.links.github && (
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={project.links.github} target="_blank">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button size="sm" className="w-full" asChild>
                <Link href={project.links.demo} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
