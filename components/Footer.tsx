import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/AmrNasem", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amr-naseem",
    icon: Linkedin,
  },
  { name: "Email", href: "mailto:amr.nasem51@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="text-lg font-bold">Amr Naseem</span>
          <p className="text-sm text-muted-foreground">
            Frontend Developer & UI Architect
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.name}</span>
            </Link>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amr Naseem. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
