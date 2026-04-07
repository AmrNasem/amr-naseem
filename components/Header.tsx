"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MobileNav } from "@/components/ui/MobileNav";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" }, // Anchor link for home section initially
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            // className="hidden sm:inline-flex"
            asChild
          >
            <a href="https://drive.google.com/uc?export=download&id=1RuOndUOpaRfGDW9FCigj51jemc0kjKlk" download>
              Resume
            </a>
          </Button>
          <MobileNav
            isOpen={isMobileMenuOpen}
            pathname={pathname}
            navItems={navigation}
            onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </Container>
    </header>
  );
}
