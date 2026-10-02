"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={clsx("reveal", className)} style={{ "--delay": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

/** Headline that rises word by word when it scrolls into view. */
export function RevealText({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}) {
  const ref = useInView<HTMLHeadingElement>();
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="word" aria-hidden>
          <span style={{ "--delay": `${delay + i * 60}ms` } as CSSProperties}>{word}</span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
