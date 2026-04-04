import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl, defaultKeywords, getSiteUrl, siteAuthor } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amr Naseem | Frontend Developer",
    template: "%s | Amr Naseem",
  },
  description:
    "Frontend engineer specializing in React, TypeScript, and Next.js — building fast, accessible, and SEO-minded web experiences.",
  keywords: defaultKeywords,
  authors: [{ name: siteAuthor, url: siteUrl }],
  creator: siteAuthor,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${siteAuthor} — Portfolio`,
    title: "Amr Naseem | Frontend Developer",
    description:
      "Frontend engineer specializing in React, TypeScript, and Next.js — portfolio, projects, and contact.",
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
      "Frontend engineer specializing in React, TypeScript, and Next.js — portfolio, projects, and contact.",
    images: [absoluteUrl("/opengraph-image")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} 
          antialiased min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
