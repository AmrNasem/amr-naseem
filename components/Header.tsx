"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" }, // Anchor link for home section initially
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/80 backdrop-blur-sm transition-all",
        isScrolled && "border-border shadow-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl tracking-tight">
            <Image src="/logo.png" alt="Amr Naseem" width={50} height={50} />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className=""
            asChild
          >
            <a href="/Resume - Amr Naseem.pdf" download>
              Resume
            </a>
          </Button>
          {/* Mobile Menu Button could go here */}
        </div>
      </Container>
    </header>
  );
}
