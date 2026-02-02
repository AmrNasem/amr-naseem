"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { H2, Lead } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <H2 className="mb-6">Get In Touch</H2>
          <Lead className="mb-8">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </Lead>

          <Button size="lg" className="h-12 px-8 text-lg" asChild>
            <Link href="mailto:amr.nasem51@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Say Hello
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
