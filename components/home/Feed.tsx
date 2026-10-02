"use client";

import { useState } from "react";
import { reels } from "@/content/reels";
import { site } from "@/content/site";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { ReelPlayer } from "@/components/ui/ReelPlayer";
import { RevealText } from "@/components/ui/Reveal";
import { RxLabel } from "@/components/ui/RxLabel";

export function Feed() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-36">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <RxLabel>The feed</RxLabel>
          <RevealText text="Daily dose." className="display mt-5 text-7xl md:text-9xl" />
        </div>
        <div className="flex max-w-sm flex-col items-start gap-5">
          <p className="text-pretty leading-relaxed text-bone/80">
            Workouts, fat-loss advice and group sessions, straight from PayneKiller. Tap a clip to watch with sound.
          </p>
          <CapsuleButton href={site.socials[0].href} variant="ghost">
            Follow on TikTok
          </CapsuleButton>
        </div>
      </div>

      <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 md:scroll-px-10 md:px-10">
        {reels.map((reel, i) => (
          <li key={reel.slug} className="w-[62vw] shrink-0 snap-start sm:w-64 lg:w-72">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] border border-line bg-coal text-left transition-transform duration-300 active:scale-[0.98]"
            >
              <LazyVideo
                slug={reel.slug}
                className="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-linear-to-t from-ink/90 via-transparent to-ink/30" />
              <span className="label absolute left-4 top-4 rounded-full bg-ink/60 px-3 py-1.5 backdrop-blur-sm">
                {reel.tag}
              </span>
              <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-bone text-ink transition-colors duration-300 group-hover:bg-ember">
                <svg viewBox="0 0 16 16" className="size-3.5 translate-x-px" aria-hidden>
                  <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
                </svg>
              </span>
              <span className="absolute inset-x-4 bottom-4">
                <span className="label text-ash">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-1 block text-lg font-medium leading-snug">{reel.title}</span>
              </span>
              <span className="sr-only">Play video</span>
            </button>
          </li>
        ))}
        <li className="w-1 shrink-0" aria-hidden />
      </ul>

      <ReelPlayer reels={reels} index={active} onChange={setActive} />
    </section>
  );
}
