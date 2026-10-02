"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { programs } from "@/content/programs";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { RevealText } from "@/components/ui/Reveal";
import { RxLabel } from "@/components/ui/RxLabel";

export function Prescription() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  // Desktop: the section pins and the cards travel sideways as you scroll.
  // Phones and reduced motion fall back to a native swipeable rail.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;
        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="overflow-clip py-24 lg:flex lg:h-screen lg:min-h-[46rem] lg:items-center lg:py-0">
      <div ref={track} className="lg:flex lg:w-max lg:items-center lg:gap-5 lg:px-10">
        <div className="shell mb-10 lg:m-0 lg:w-[34rem] lg:max-w-none lg:shrink-0 lg:p-0 lg:pr-10">
          <RxLabel>The prescription</RxLabel>
          <RevealText text="Pick your dose." className="display mt-5 text-7xl md:text-8xl lg:text-9xl" />
          <p className="mt-6 max-w-sm text-pretty text-lg leading-relaxed text-bone/80">
            Four ways to train with PayneKiller. Each one comes with a clear dose, a timeline and a coach who checks
            you are taking it.
          </p>
          <p className="label mt-8 text-ash lg:hidden">Swipe →</p>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 md:scroll-px-10 md:px-10 lg:snap-none lg:overflow-visible lg:px-0">
          {programs.map((program) => (
            <ProgramCard
              key={program.slug}
              program={program}
              className="w-[80vw] shrink-0 snap-start sm:w-[22rem] lg:w-[23rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
