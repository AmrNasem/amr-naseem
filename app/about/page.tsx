import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { H1, H2, Lead, P } from "@/components/ui/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Amr Naseem",
  description:
    "Learn more about Amr Naseem's background, experience, and skills.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <H1 className="mb-6">About Me</H1>
            <Lead className="mb-12">
              Front-End Developer specializing in React and TypeScript,
              dedicated to building high-performance web applications.
            </Lead>

            <div className="prose prose-lg dark:prose-invert">
              <H2>Background</H2>
              <P>
                I am a passionate developer with a strong focus on the React
                ecosystem. My journey in software development has been driven by
                a curiosity to understand how things work and a desire to build
                tools that help people.
              </P>
              <P>
                Based in Egypt, I have worked on various projects ranging from
                personal portfolios to complex e-learning platforms. I believe
                in writing clean, maintainable code and keeping up with the
                latest industry standards.
              </P>

              <H2 className="mt-12">Experience</H2>
              <P>
                Throughout my career, I&apos;ve had the opportunity to work as a
                freelancer, delivering pixel-perfect responsive websites for
                clients. I also have experience working in teams, collaborating
                with designers and other developers to ship production-ready
                features.
              </P>
              {/* <P>
                My full-stack background (Node.js, PHP, MySQL) gives me a
                broader perspective on frontend challenges, allowing me to
                better understand API integrations and data flow.
              </P> */}

              <H2 className="mt-12 mb-4">What I Do</H2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Develop responsive, accessible user interfaces using React and
                  Next.js.
                </li>
                <li>
                  Design consistent UI systems with Tailwind CSS and Framer
                  Motion.
                </li>
                <li>
                  Ensure type safety and code reliability with strict
                  TypeScript.
                </li>
                <li>Optimize application performance and SEO.</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
