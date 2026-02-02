"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { H1, Lead } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              Available for hire
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <H1 className="text-balance leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-primary">Amr Naseem</span>.
              <br />
              Frontend Developer.
            </H1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px]"
          >
            <Lead>
              Specializing in React, TypeScript, and Next.js. I build
              accessible, pixel-perfect web experiences with modern
              architecture.
            </Lead>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 py-4"
          >
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 text-muted-foreground"
          >
            <Link
              href="https://github.com/AmrNasem"
              target="_blank"
              className="hover:text-foreground"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/amr-naseem"
              target="_blank"
              className="hover:text-foreground"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:amr.nasem51@gmail.com"
              className="hover:text-foreground"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
