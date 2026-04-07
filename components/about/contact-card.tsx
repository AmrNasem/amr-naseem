import { CopyLinkButton } from "../ui/CopyLinkButton"
import { P } from "../ui/Typography"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Contact = {
  icon: ReactNode;
  title: string;
  description: string;
  link: {
    url: string;
    label: string;
  },
  copy?: {
    url: string;
    label?: string;
  }
}

function ContactCard({ contact, className }: { contact: Contact; className?: string }) {
  return (
    <div className={cn("relative rounded-lg border bg-card p-8 text-left shadow-sm", className)}>
      {
        contact.copy &&
        <CopyLinkButton
          className="absolute top-3 end-3"
          url={contact.copy.url}
          label={contact.copy.label}
        />
      }
      {contact.icon}
      <h3 className="mb-2 text-lg font-semibold">{contact.title}</h3>
      <P className="mb-4 text-sm text-muted-foreground">
        {contact.description}
      </P>
      <Link
        href={contact.link.url}
        target="_blank"
        className="font-medium text-primary hover:underline hover:text-primary/80"
      >
        {contact.link.label}
      </Link>
    </div>
  )
}

export default ContactCard