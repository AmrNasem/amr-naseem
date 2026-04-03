import * as motion from "motion/react-client"
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { H1, Lead } from "@/components/ui/Typography";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 md:py-24 lg:py-32">
      <Container className="flex flex-col-reverse lg:grid grid-cols-5 gap-4 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block w-full aspect-square mt-8 lg:mt-0 max-w-[80%] mx-auto col-span-2 rounded-full overflow-hidden relative"
        >
          <div className="absolute w-3/4 h-3/4 bg-muted rounded-full bottom-0 start-1/2 translate-y-3.5 -translate-x-[calc(50%-3px)]"></div>
          <Image
            src="/profile-photo.png"
            alt=""
            fill
            className="w-full h-full drop-shadow-[0_0_10px] drop-shadow-image-shadow object-cover object-top"
          />
        </motion.div>

        <div className="mx-auto col-span-3 flex max-w-[980px] flex-col items-center gap-4 text-center">
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
            <H1 className="text-balance leading-tight sm:text-5xl md:text-6xl lg:text-6xl">
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
            <Lead className="text-lg">
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
            <Link
              href="https://wa.me/201207753616"
              target="_blank"
              className="hover:text-foreground"
            >
              <FaWhatsapp className="h-6 w-6" />
              <span className="sr-only">Whatsapp</span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
