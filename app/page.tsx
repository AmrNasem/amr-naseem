import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { Skills } from "@/components/home/Skills";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { absoluteUrl, defaultKeywords, getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: { absolute: "Amr Naseem | Frontend Developer" },
  description:
    "Frontend engineer specializing in React, TypeScript, and Next.js — portfolio, projects, case studies, and contact.",
  keywords: defaultKeywords,
  openGraph: {
    title: "Amr Naseem | Frontend Developer",
    description:
      "Frontend engineer specializing in React, TypeScript, and Next.js — portfolio, projects, case studies, and contact.",
    url: siteUrl,
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
    title: "Amr Naseem | Frontend Developer",
    description:
      "Frontend engineer specializing in React, TypeScript, and Next.js — portfolio, projects, case studies, and contact.",
    images: [absoluteUrl("/opengraph-image")],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
