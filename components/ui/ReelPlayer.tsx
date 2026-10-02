"use client";

import { useEffect, useRef } from "react";
import type { Reel } from "@/content/reels";

type Props = {
  reels: Reel[];
  /** Index of the open reel, or null when closed. */
  index: number | null;
  onChange: (index: number | null) => void;
};

/** Full-screen player with sound. Arrow keys or swipe to move, Esc to close. */
export function ReelPlayer({ reels, index, onChange }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const open = index !== null;
  const reel = open ? reels[index] : null;

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  const go = (step: number) => {
    if (index === null) return;
    onChange((index + step + reels.length) % reels.length);
  };

  return (
    <dialog
      ref={dialog}
      data-lenis-prevent
      aria-label={reel ? reel.title : "Video player"}
      onClose={() => onChange(null)}
      onClick={(e) => e.target === dialog.current && onChange(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
        touchStart.current = null;
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 text-bone backdrop:bg-ink/80 open:grid open:place-items-center"
    >
      {reel ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
          <div className="flex w-full max-w-3xl items-center justify-between">
            <p className="label text-ash">
              <span className="text-bone">{String(index! + 1).padStart(2, "0")}</span> / {String(reels.length).padStart(2, "0")}
              <span className="mx-3 text-bone/30">|</span>
              {reel.title}
            </p>
            <button
              type="button"
              onClick={() => onChange(null)}
              className="label grid h-11 place-items-center rounded-full border border-line px-5 transition-colors hover:border-bone/50"
            >
              Close
            </button>
          </div>

          <video
            key={reel.slug}
            src={`/media/${reel.slug}.mp4`}
            poster={`/media/${reel.slug}.jpg`}
            controls
            autoPlay
            playsInline
            onEnded={() => go(1)}
            className={
              reel.landscape
                ? "max-h-[70dvh] w-full max-w-3xl rounded-3xl bg-coal"
                : "aspect-[9/16] max-h-[76dvh] rounded-3xl bg-coal"
            }
          />

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="label h-11 rounded-full border border-line px-6 transition-colors hover:border-bone/50"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="label h-11 rounded-full bg-bone px-6 text-ink transition-colors hover:bg-ember"
            >
              Next →
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
