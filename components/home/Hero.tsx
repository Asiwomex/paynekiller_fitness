"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { RevealText } from "@/components/ui/Reveal";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);

  // As the hero scrolls away, the full-bleed video tightens into a capsule.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(frame.current, {
          clipPath: "inset(6% 5% 10% 5% round 999px)",
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative h-[100svh] min-h-[38rem]">
      <div ref={frame} className="absolute inset-0 [clip-path:inset(0%_0%_0%_0%_round_0px)]">
        <LazyVideo slug="outdoor-aerobics" eager />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-ink to-transparent" />
      </div>

      <div className="shell relative flex h-full flex-col justify-end pb-28 md:pb-16">
        <div className="label mb-6 flex items-center gap-3 text-bone/80">
          <span className="inline-block size-2 rounded-full bg-ember" aria-hidden />
          {site.city}, GH
          <span className="hidden text-bone/40 sm:inline">/</span>
          <span className="hidden sm:inline">Gym · Aerobics · Group training</span>
        </div>

        <h1 className="display text-[clamp(3.5rem,17.5vw,15rem)]" aria-label="Pain is temporary. Results are prescribed.">
          <RevealText as="span" text="Pain is" delay={1000} className="block" />
          <RevealText as="span" text="temporary." delay={1100} className="block" />
        </h1>

        <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="accent text-[clamp(2rem,5.5vw,5rem)] leading-none text-ember" aria-hidden>
            results are prescribed.
          </p>
          <div className="flex max-w-sm flex-col gap-5">
            <p className="text-pretty leading-relaxed text-bone/80">
              Train with PayneKiller in {site.city}. Personal coaching, group sessions and a plan that fits your
              life.
            </p>
            <div className="hidden flex-wrap gap-3 md:flex">
              <CapsuleButton href={waLink()} size="lg">
                Start on WhatsApp
              </CapsuleButton>
              <CapsuleButton href="/programs" size="lg" variant="ghost">
                See programs
              </CapsuleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
