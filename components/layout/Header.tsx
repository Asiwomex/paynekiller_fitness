"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";
import { CapsuleButton } from "@/components/ui/CapsuleButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={clsx(
          "transition-[background-color,border-color] duration-500",
          scrolled && !open ? "border-b border-line bg-ink/80 backdrop-blur-md" : "border-b border-transparent",
        )}
      >
        <div className="shell flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="relative z-10 flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image src="/media/emblem-white.png" alt="" width={150} height={160} className="h-9 w-auto" priority />
            <span className="font-serif text-xl leading-none tracking-wide">
              PAYNEKiLLER
            </span>
            <span className="sr-only">Fitness, home</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                className="label text-bone/70 transition-colors hover:text-bone aria-[current=page]:text-ember"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <CapsuleButton href={waLink()}>Book a session</CapsuleButton>
            </div>
            <button
              type="button"
              className="label relative z-10 grid h-11 place-items-center rounded-full border border-line px-5 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={clsx(
          "fixed inset-0 flex flex-col justify-between bg-ink px-5 pb-8 pt-24 transition-[clip-path,visibility] duration-700 ease-out-expo md:hidden",
          open ? "visible [clip-path:inset(0)]" : "invisible [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {[{ label: "Home", href: "/" }, ...site.nav].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display flex items-baseline justify-between gap-4 border-b border-line py-4 text-[3.25rem]"
            >
              {item.label}
              <span className="label text-ash">0{i + 1}</span>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          <CapsuleButton href={waLink()} size="lg" className="w-full">
            Start on WhatsApp
          </CapsuleButton>
          <p className="label text-ash">
            {site.phones.map((p) => p.label).join(" / ")}
          </p>
        </div>
      </div>
    </header>
  );
}
