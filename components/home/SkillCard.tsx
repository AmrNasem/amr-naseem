import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type SkillCardProps = {
  name: string;
  icon: ReactNode;
};

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <li
      className={cn(
        "flex items-center gap-2.5 rounded-xl border border-border/80 bg-card/80 px-3 py-2.5 text-sm font-medium text-card-foreground shadow-sm backdrop-blur-sm",
        "transition-all duration-200 ease-out",
        "hover:scale-[1.03] hover:border-primary/35 hover:shadow-md hover:shadow-primary/[0.08]",
      )}
    >
      <span
        className="flex shrink-0 text-primary [&_svg]:size-[1.15rem]"
        aria-hidden
      >
        {icon}
      </span>
      <span className="truncate">{name}</span>
    </li>
  );
}
