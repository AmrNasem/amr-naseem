"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { H1, P } from "@/components/ui/Typography";
import { FileQuestion } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 md:py-28">
        <Container className="flex max-w-lg flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 flex size-20 items-center justify-center rounded-2xl border border-border/80 bg-card/80 shadow-sm">
              <FileQuestion
                className="size-10 text-muted-foreground"
                strokeWidth={1.5}
                aria-hidden
              />
            </div>
            <H1 className="mb-4 text-3xl md:text-4xl">Page not found</H1>
            <P className="mb-10 text-base text-muted-foreground md:text-lg">
              The page you are looking for does not exist or may have been
              moved. If you followed a link, double-check the URL or head back
              to a familiar place.
            </P>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/">Go Home</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/projects">View Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
