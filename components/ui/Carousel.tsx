"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

const SWIPE_THRESHOLD_PX = 48;

export interface CarouselProps {
  imagesPath?: string;
  images: string[];
  /** Used for alt text, e.g. project title */
  altBase?: string;
  className?: string;
}

export function Carousel({ imagesPath, images, altBase = "Screenshot", className }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const len = images.length;
  const safeIndex = len > 0 ? Math.min(index, len - 1) : 0;
  const currentSrc = len > 0 ? `${imagesPath}/${images[safeIndex]}`: "";
  const multi = len > 1;

  const goNext = useCallback(() => {
    if (len < 1) return;
    setIndex((i) => (i + 1) % len);
  }, [len]);

  const goPrev = useCallback(() => {
    if (len < 1) return;
    setIndex((i) => (i - 1 + len) % len);
  }, [len]);

  const goTo = useCallback((i: number) => {
    if (i >= 0 && i < len) setIndex(i);
  }, [len]);

  useEffect(() => {
    const el = thumbRefs.current[safeIndex];
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [safeIndex]);

  const onKeyDownRoot = (e: React.KeyboardEvent) => {
    if (!multi) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (!multi) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, multi, goNext, goPrev]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || !multi) return;
    const endX = e.changedTouches[0]?.clientX;
    if (endX == null) return;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (delta > SWIPE_THRESHOLD_PX) goPrev();
    else if (delta < -SWIPE_THRESHOLD_PX) goNext();
  };

  if (!len || !currentSrc) return null;

  return (
    <>
      <div
        ref={rootRef}
        className={cn(
          "rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${altBase} gallery`}
        onKeyDown={onKeyDownRoot}
      >
        <div
          className="relative aspect-video overflow-hidden rounded-2xl bg-muted/40 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            key={safeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative h-full w-full cursor-zoom-in text-left"
              aria-label={`Open screenshot ${safeIndex + 1} of ${len} in full size`}
            >
              <Image
                src={currentSrc}
                alt={`${altBase} — screenshot ${safeIndex + 1} of ${len}`}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority={safeIndex === 0}
              />
              <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100 md:opacity-100">
                <ZoomIn className="h-3.5 w-3.5" aria-hidden />
                Enlarge
              </span>
            </button>
          </motion.div>

          {multi && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-md backdrop-blur-sm transition hover:bg-background active:scale-95 md:left-3 md:h-11 md:w-11"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-md backdrop-blur-sm transition hover:bg-background active:scale-95 md:right-3 md:h-11 md:w-11"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </>
          )}

          {multi && (
            <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-background/80 px-2 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
              <span className="text-foreground">{safeIndex + 1}</span>
              <span aria-hidden>/</span>
              <span>{len}</span>
            </div>
          )}
        </div>

        {multi && (
          <div
            className="mt-4 flex gap-2 overflow-x-auto pb-1 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:thin] snap-x snap-mandatory md:gap-3 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border"
            role="tablist"
            aria-label="Screenshot thumbnails"
          >
            {images.map((src, i) => {
              const active = i === safeIndex;
              const fullSrc = `${imagesPath}/${src}`
              return (
                <button
                  key={`${fullSrc}-${i}`}
                  ref={(el) => {
                    thumbRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Show screenshot ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "relative h-14 w-24 shrink-0 snap-center overflow-hidden rounded-lg border-2 transition-all duration-200 md:h-16 md:w-28",
                    active
                      ? "border-primary shadow-md ring-2 ring-primary/25"
                      : "border-transparent opacity-75 hover:border-border hover:opacity-100",
                  )}
                >
                  <Image
                    src={fullSrc}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged screenshot"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 z-60 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {multi && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-2 top-1/2 z-60 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6 md:h-12 md:w-12"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-2 top-1/2 z-60 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6 md:h-12 md:w-12"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="relative max-h-[min(90vh,900px)] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={`lb-${safeIndex}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10"
            >
              <Image
                src={currentSrc}
                alt={`${altBase} — full size ${safeIndex + 1} of ${len}`}
                fill
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="object-contain bg-black"
                priority
              />
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
