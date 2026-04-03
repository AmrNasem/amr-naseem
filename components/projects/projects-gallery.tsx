"use client";

import ProjectCard from "@/components/projects/project-card";
import { TechFilter } from "@/components/projects/tech-filter";
import { filterProjectsByTechs, getUniqueTechs } from "@/lib/project-filters";
import { IProjectCard } from "@/lib/types";
import { AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

const TECH_QUERY_KEY = "tech";

function buildTechQuery(selected: string[]): string {
  if (selected.length === 0) return "";
  const params = new URLSearchParams();
  const ordered = [...selected].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" }),
  );
  for (const t of ordered) {
    params.append(TECH_QUERY_KEY, t);
  }
  return params.toString();
}

export interface ProjectsGalleryProps {
  projects: IProjectCard[];
  className?: string;
}

export function ProjectsGallery({ projects, className }: ProjectsGalleryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const techOptions = useMemo(() => getUniqueTechs(projects), [projects]);

  const validTechSet = useMemo(() => new Set(techOptions), [techOptions]);

  const selectedFromUrl = useMemo(() => {
    const raw = searchParams.getAll(TECH_QUERY_KEY);
    return raw.filter((t) => validTechSet.has(t));
  }, [searchParams, validTechSet]);

  const replaceQuery = useCallback(
    (nextSelected: string[]) => {
      const qs = buildTechQuery(nextSelected);
      const url = qs ? `${pathname}?${qs}` : pathname;
      router.replace(url, { scroll: false });
    },
    [pathname, router],
  );

  const onToggle = useCallback(
    (tech: string) => {
      const next = selectedFromUrl.includes(tech)
        ? selectedFromUrl.filter((t) => t !== tech)
        : [...selectedFromUrl, tech];
      replaceQuery(next);
    },
    [replaceQuery, selectedFromUrl],
  );

  const onClearAll = useCallback(() => {
    replaceQuery([]);
  }, [replaceQuery]);

  const filtered = useMemo(
    () => filterProjectsByTechs(projects, selectedFromUrl),
    [projects, selectedFromUrl],
  );

  return (
    <div className={className}>
      <TechFilter
        techOptions={techOptions}
        selectedTechs={selectedFromUrl}
        onToggle={onToggle}
        onClearAll={onClearAll}
        resultCount={filtered.length}
        totalCount={projects.length}
        className="mb-10"
      />

      <motion.div
        layout
        className="grid min-h-48 gap-8 md:grid-cols-2 lg:grid-cols-3"
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="h-full"
            >
              <ProjectCard className="h-full" project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
