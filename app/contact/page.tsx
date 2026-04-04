import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { H1, Lead, P } from "@/components/ui/Typography";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { absoluteUrl, defaultKeywords, getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";

const pageKeywords = [
  ...defaultKeywords,
  "Contact",
  "Hire",
  "Freelance",
  "LinkedIn",
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Amr Naseem for freelance work, collaborations, or full-time opportunities — email, LinkedIn, and WhatsApp.",
  keywords: pageKeywords,
  openGraph: {
    title: "Contact | Amr Naseem",
    description:
      "Reach out for projects or opportunities via email, LinkedIn, or WhatsApp.",
    url: `${getSiteUrl()}/contact`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Amr Naseem — Frontend Developer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Amr Naseem",
    description:
      "Reach out for projects or opportunities via email, LinkedIn, or WhatsApp.",
    images: [absoluteUrl("/opengraph-image")],
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <Container className="max-w-2xl lg:max-w-5xl text-center">
          <H1 className="mb-6">Get In Touch</H1>
          <Lead className="mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </Lead>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="rounded-lg border bg-card p-8 text-left shadow-sm">
              <FaWhatsapp className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Whatsapp</h3>
              <P className="mb-4 text-sm text-muted-foreground">
                Or message me on WhatsApp and I&apos;ll respond
                as soon as I&apos;m available.
              </P>
              <Link
                href="https://wa.me/201207753616"
                target="_blank"
                className="font-medium text-primary hover:underline hover:text-primary/80"
              >
                Start a WhatsApp Chat
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
