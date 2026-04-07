"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type NavItem = {
  name: string;
  href: string;
};

type MobileNavProps = {
  isOpen: boolean;
  pathname: string;
  navItems: NavItem[];
  onToggle: () => void;
  onClose: () => void;
};

export function MobileNav({
  isOpen,
  pathname,
  navItems,
  onToggle,
  onClose,
}: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <button
        type="button"
        className="cursor-pointer relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent md:hidden"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        onClick={onToggle}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="relative h-4 w-5">
          <span
            className={cn(
              "absolute left-0 top-0 block h-0.5 w-5 origin-center rounded bg-current transition-transform duration-300",
              isOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[7px] block h-0.5 w-5 rounded bg-current transition-opacity duration-200",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 block h-0.5 w-5 origin-center rounded bg-current transition-transform duration-300",
              isOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/70 backdrop-blur-[1px] transition-opacity duration-300 md:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      <aside
        id="mobile-nav-drawer"
        className={cn(
          "fixed left-0 top-0 z-50 h-dvh w-[min(85vw,320px)] border-r border-border bg-background p-6 shadow-2xl transition-transform duration-300 ease-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-hidden={!isOpen}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Navigation
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                style={{ transitionDelay: isOpen ? `${index * 40}ms` : "0ms" }}
                className={cn(
                  "transition-all duration-300",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0",
                )}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-foreground",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
