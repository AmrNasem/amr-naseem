export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim() || "https://amr-naseem.vercel.app";
  return raw.replace(/\/$/, "");
}

export const siteAuthor = "Amr Naseem";

export const defaultKeywords = [
  "Amr Naseem",
  "Frontend Developer",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Web Development",
  "Portfolio",
  "Egypt",
];

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
