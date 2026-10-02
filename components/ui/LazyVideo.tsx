"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

type Props = {
  /** File stem in public/media. Plays `<slug>-loop.mp4` over `<slug>.jpg`. */
  slug: string;
  className?: string;
  /** Start loading immediately instead of waiting for the viewport (hero only). */
  eager?: boolean;
};

function allowsAutoplay() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return !connection?.saveData && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Muted background loop. The poster shows first; the video file is only
 * requested when the element nears the viewport, and it pauses when it leaves.
 * Under Save-Data or reduced motion the poster stays.
 */
export function LazyVideo({ slug, className, eager = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !allowsAutoplay()) return;
    const src = `/media/${slug}-loop.mp4`;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: eager ? "0px" : "200px 0px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [slug, eager]);

  return (
    <video
      ref={ref}
      className={clsx("size-full object-cover", className)}
      poster={`/media/${slug}.jpg`}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      tabIndex={-1}
    />
  );
}
