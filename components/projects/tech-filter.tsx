"use client";

import { cn } from "@/lib/utils";

export interface TechFilterProps {
  /** Sorted unique options */
  techOptions: string[];
  selectedTechs: string[];
  onToggle: (tech: string) => void;
  onClearAll: () => void;
  resultCount: number;
  totalCount: number;
  className?: string;
}

export function TechFilter({
  techOptions,
  selectedTechs,
  onToggle,
  onClearAll,
  resultCount,
  totalCount,
  className,
}: TechFilterProps) {
  const hasSelection = selectedTechs.length > 0;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium tabular-nums text-foreground">
            {resultCount}
          </span>
          <span className="mx-1">/</span>
          <span className="tabular-nums">{totalCount}</span>
          <span className="ml-1.5">projects</span>
          {hasSelection ? (
            <span className="text-muted-foreground"> · filtered</span>
          ) : null}
        </p>
      </div>

      <div
        className={cn(
          "relative -mx-4 px-4 sm:mx-0 sm:px-0",
          "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-6 before:bg-gradient-to-r before:from-background before:to-transparent sm:before:hidden",
          "after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-6 after:bg-gradient-to-l after:from-background after:to-transparent sm:after:hidden",
        )}
      >
        <div
          className={cn(
            "flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible",
            "snap-x snap-mandatory sm:snap-none",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          )}
          role="toolbar"
          aria-label="Filter projects by technology"
        >
          <button
            type="button"
            onClick={onClearAll}
            aria-pressed={!hasSelection}
            className={cn(
              "shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              !hasSelection
                ? "border-primary bg-primary text-primary-foreground shadow-sm scale-[1.02]"
                : "border-border/80 bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-muted/40",
            )}
          >
            All
          </button>

          {techOptions.map((tech) => {
            const active = selectedTechs.includes(tech);
            return (
              <button
                key={tech}
                type="button"
                onClick={() => onToggle(tech)}
                aria-pressed={active}
                className={cn(
                  "shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  active
                    ? "border-primary bg-primary/12 text-primary shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.35)] scale-[1.02]"
                    : "border-border/80 bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-muted/40",
                )}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
