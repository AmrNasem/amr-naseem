import { IProjectCard } from "./types";

export function getUniqueTechs(projects: IProjectCard[]): string[] {
  const set = new Set<string>();
  for (const p of projects) {
    for (const t of p.techs) {
      if (t.trim()) set.add(t.trim());
    }
  }
  return Array.from(set).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" }),
  );
}

/** Multi-select uses OR: project matches if it uses any selected technology. */
export function filterProjectsByTechs(
  projects: IProjectCard[],
  selectedTechs: string[],
): IProjectCard[] {
  if (selectedTechs.length === 0) return projects;
  return projects.filter((p) =>
    p.techs.some((t) => selectedTechs.includes(t)),
  );
}
