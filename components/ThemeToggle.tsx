"use client";

import { Activity } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const isLight = theme === "light";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="w-9 px-0"
      aria-label="Toggle theme"
    >
      <Activity mode={isLight ? "visible" : "hidden"}>
        <Moon
          className={cn(
            "absolute h-[1.2rem] duration-150 w-[1.2rem] transition-all",
            isLight ? "rotate-0 scale-100" : "rotate-90 scale-0 ",
          )}
        />
      </Activity>
      <Activity mode={isLight ? "hidden" : "visible"}>
        <Sun
          className={cn(
            "h-[1.2rem] w-[1.2rem] duration-150 transition-all",
            isLight ? "-rotate-90 scale-0" : "rotate-0 scale-100",
          )}
        />
      </Activity>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
