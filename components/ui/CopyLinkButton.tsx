"use client";

import { useEffect, useId, useState } from "react";
import { Check, Copy, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type CopyLinkButtonProps = {
  url: string;
  label?: string;
  className?: string;
};

type CopyState = "idle" | "success" | "error";

async function copyText(url: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    return;
  }

  if (typeof document === "undefined") {
    throw new Error("Clipboard not available");
  }

  const textArea = document.createElement("textarea");
  textArea.value = url;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";

  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!copied) {
    throw new Error("Copy command failed");
  }
}

export function CopyLinkButton({
  url,
  label = "",
  className,
}: CopyLinkButtonProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [feedback, setFeedback] = useState("");
  const feedbackId = useId();

  useEffect(() => {
    if (copyState === "idle") {
      return;
    }

    const timer = window.setTimeout(() => {
      setCopyState("idle");
      setFeedback("");
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [copyState]);

  const handleCopy = async () => {
    try {
      await copyText(url);
      setCopyState("success");
      setFeedback("Link copied to clipboard");
    } catch {
      setCopyState("error");
      setFeedback("Could not copy link");
    }
  };

  return (
    <div className={cn("relative inline-flex", className)}>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link to clipboard"
        aria-live="polite"
        aria-describedby={feedback ? feedbackId : undefined}
        title="Copy link"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[12px] font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          copyState === "success" && "border-green-500/50 bg-green-500/10",
          copyState === "error" && "border-red-500/50 bg-red-500/10",
        )}
      >
        {copyState === "success" ? (
          <Check className="size-3.5" aria-hidden="true" />
        ) : copyState === "error" ? (
          <TriangleAlert className="size-3.5" aria-hidden="true" />
        ) : (
          <Copy className="size-3.5" aria-hidden="true" />
        )}

        {
          label &&
          <span>
            {copyState === "success"
              ? "Copied!"
              : copyState === "error"
                ? "Try again"
                : label}
          </span>
        }
      </button>

      {feedback ? (
        <span
          id={feedbackId}
          role="status"
          className={cn(
            "pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 text-xs text-muted-foreground shadow-sm",
            copyState === "success" && "text-green-600 dark:text-green-400",
            copyState === "error" && "text-red-600 dark:text-red-400",
          )}
        >
          {feedback}
        </span>
      ) : null}
    </div>
  );
}
