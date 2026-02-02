import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { H1, Lead, P } from "@/components/ui/Typography";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Amr Naseem",
  description:
    "Get in touch with Amr Naseem for freelance projects or opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <Container className="max-w-2xl text-center">
          <H1 className="mb-6">Get In Touch</H1>
          <Lead className="mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </Lead>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-8 text-left shadow-sm">
              <Mail className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Email</h3>
              <P className="mb-4 text-sm text-muted-foreground">
                Drop me an email and I&apos;ll get back to you within 24 hours.
              </P>
              <Link
                href="mailto:amr.nasem51@gmail.com"
                className="font-medium text-primary hover:underline hover:text-primary/80"
              >
                amr.nasem51@gmail.com
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-8 text-left shadow-sm">
              <Linkedin className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">LinkedIn</h3>
              <P className="mb-4 text-sm text-muted-foreground">
                Let&apos;s connect professionally and grow our networks.
              </P>
              <Link
                href="https://www.linkedin.com/in/amr-naseem"
                target="_blank"
                className="font-medium text-primary hover:underline hover:text-primary/80"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <P>
              Also feel free to check out my code on{" "}
              <Link
                href="https://github.com/AmrNasem"
                target="_blank"
                className="font-medium underline hover:text-primary"
              >
                GitHub
              </Link>
              .
            </P>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
