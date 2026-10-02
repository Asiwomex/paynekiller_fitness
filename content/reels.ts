// The Feed. To add a clip: drop the original in media-src/, add it to
// scripts/optimize-media.mjs, run `npm run media`, then add an entry here.

export type Reel = {
  slug: string; // file stem in public/media: <slug>.mp4, <slug>-loop.mp4, <slug>.jpg
  title: string;
  tag: string;
  landscape?: boolean;
};

export const reels: Reel[] = [
  { slug: "belly-fat", title: "The truth about belly fat", tag: "Fat loss" },
  { slug: "training", title: "Chest and shoulders day", tag: "Gym" },
  { slug: "aerobics", title: "Turf aerobics session", tag: "Aerobics" },
  { slug: "no-gym-fat-loss", title: "Lose fat without gym or diet", tag: "Fat loss" },
  { slug: "strength", title: "Barbell curls, done right", tag: "Gym" },
  { slug: "outdoor-aerobics", title: "Saturday road session", tag: "Group", landscape: true },
];
