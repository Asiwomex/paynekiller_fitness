import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "ember" | "bone" | "ink" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

const variants = {
  ember: "bg-ember text-ink",
  bone: "bg-bone text-ink",
  ink: "bg-ink text-bone",
  ghost: "border border-line text-bone hover:border-bone/50",
};

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={clsx("size-3.5", className)}>
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

/** Pill-shaped call to action. External links (WhatsApp) open in a new tab. */
export function CapsuleButton({ href, children, variant = "ember", size = "md", className }: Props) {
  const external = href.startsWith("http");
  const classes = clsx(
    "group inline-flex items-center justify-between gap-4 whitespace-nowrap rounded-full font-medium transition-[transform,border-color] duration-300 ease-out-expo active:scale-[0.96]",
    size === "lg" ? "h-14 pl-7 pr-2 text-base" : "h-12 pl-6 pr-1.5 text-sm",
    variants[variant],
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      <span
        className={clsx(
          "grid place-items-center overflow-hidden rounded-full",
          size === "lg" ? "size-10" : "size-9",
          variant === "ghost" || variant === "ink" ? "bg-bone text-ink" : "bg-ink text-bone",
        )}
      >
        <Arrow className="transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
