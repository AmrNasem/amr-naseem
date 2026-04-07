import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/ui/Container";
import { H1, Lead, P } from "@/components/ui/Typography";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { absoluteUrl, defaultKeywords, getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import ContactCard from "@/components/about/contact-card";


const contacts = [
  {
    icon: <Mail className="mb-4 h-8 w-8 text-primary" />,
    title: "Email",
    description: "Drop me an email and I'll get back to you within 24 hours.",
    link: {
      url: "mailto:amr.nasem51@gmail.com",
      label: "amr.nasem51@gmail.com"
    },
    copy: {
      url: "amr.nasem51@gmail.com",
      label: "Copy Email"
    }
  },
  {
    icon: <Linkedin className="mb-4 h-8 w-8 text-primary" />,
    title: "LinkedIn",
    description: "Let's connect professionally and grow our networks.",
    link: {
      url: "https://www.linkedin.com/in/amr-naseem",
      label: "Connect on LinkedIn"
    },
    copy: {
      url: "https://www.linkedin.com/in/amr-naseem",
      label: "Copy LinkedIn"
    }
  },
  {
    icon: <FaWhatsapp className="mb-4 h-8 w-8 text-primary" />,
    title: "Whatsapp",
    description: "Or message me on WhatsApp and I'll respond as soon as I'm available.",
    link: {
      url: "https://wa.me/201207753616",
      label: "Start a WhatsApp Chat"
    },
    copy: {
      url: "+201207753616",
      label: "Copy Number"
    }
  },
]

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
            {
              contacts.map(contact => <ContactCard key={contact.link.url} contact={contact} />)
            }
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
