// Compresses originals in media-src/ into web-ready files in public/media/.
// Usage: node scripts/optimize-media.mjs [--force]
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import ffmpeg from "ffmpeg-static";
import sharp from "sharp";

const SRC = "media-src";
const OUT = "public/media";
const force = process.argv.includes("--force");

// slug: output name. loopStart: where the muted preview loop begins (seconds).
// posterAt: timestamp of the poster frame.
const clips = [
  { file: "paynekiller_outdoor_aerobics.mp4", slug: "outdoor-aerobics", loopStart: 56, posterAt: 60, landscape: true },
  { file: "aerobics.mp4", slug: "aerobics", loopStart: 40, posterAt: 43 },
  { file: "paynekiller.mp4", slug: "training", loopStart: 18, posterAt: 20 },
  { file: "paynekiller2.mp4", slug: "strength", loopStart: 6, posterAt: 8 },
  { file: "paynekiller3_losefatwithout_gym.mp4", slug: "no-gym-fat-loss", loopStart: 2, posterAt: 3 },
  { file: "paynekiller4_bellyfat.mp4", slug: "belly-fat", loopStart: 12, posterAt: 31 },
];

const LOOP_SECONDS = 8;
const HERO_SECONDS = 10;

function run(args) {
  execFileSync(ffmpeg, ["-hide_banner", "-loglevel", "error", "-y", ...args], { stdio: "inherit" });
}

function skip(out) {
  return !force && existsSync(out);
}

function report(out) {
  console.log(`  ${path.basename(out)}  ${(statSync(out).size / 1024).toFixed(0)} KB`);
}

mkdirSync(OUT, { recursive: true });

for (const clip of clips) {
  const input = path.join(SRC, clip.file);
  if (!existsSync(input)) {
    console.warn(`missing ${input}, skipping`);
    continue;
  }
  console.log(clip.slug);

  // Full clip with sound, for the reel player.
  const full = path.join(OUT, `${clip.slug}.mp4`);
  if (!skip(full)) {
    const scale = clip.landscape ? "scale=-2:540" : "scale=540:-2";
    run([
      "-i", input,
      "-vf", scale,
      "-c:v", "libx264", "-preset", "slow", "-crf", clip.landscape ? "33" : "29", "-pix_fmt", "yuv420p",
      "-c:a", "aac", "-b:a", "80k", "-ac", "2",
      "-movflags", "+faststart",
      full,
    ]);
  }
  report(full);

  // Short muted loop, for cards and backgrounds.
  const loop = path.join(OUT, `${clip.slug}-loop.mp4`);
  if (!skip(loop)) {
    const scale = clip.landscape ? "scale=-2:720" : "scale=480:-2";
    run([
      "-ss", String(clip.loopStart), "-t", String(clip.landscape ? HERO_SECONDS : LOOP_SECONDS),
      "-i", input,
      "-an",
      "-vf", `${scale},fps=24`,
      "-c:v", "libx264", "-preset", "slow", "-crf", clip.landscape ? "34" : "31", "-pix_fmt", "yuv420p",
      "-movflags", "+faststart",
      loop,
    ]);
  }
  report(loop);

  const poster = path.join(OUT, `${clip.slug}.jpg`);
  if (!skip(poster)) {
    run(["-ss", String(clip.posterAt), "-i", input, "-frames:v", "1", "-q:v", "4", poster]);
  }
  report(poster);
}

// Logo: the source JPEGs are flat black/white, so luminance becomes alpha.
async function logo() {
  const src = path.join(SRC, "logo_black.jpeg"); // white artwork on black
  if (!existsSync(src)) return;
  const { data, info } = await sharp(src).greyscale().raw().toBuffer({ resolveWithObject: true });

  async function tinted(value, out, region) {
    const rgba = Buffer.alloc(info.width * info.height * 4);
    for (let i = 0; i < data.length; i++) {
      rgba[i * 4] = value;
      rgba[i * 4 + 1] = value;
      rgba[i * 4 + 2] = value;
      // Lift the black floor so JPEG noise does not leave a haze.
      rgba[i * 4 + 3] = data[i] < 40 ? 0 : data[i];
    }
    let img = sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } });
    if (region) img = img.extract(region);
    await img.png().toFile(out);
    report(out);
  }

  const emblem = { left: 540, top: 28, width: 150, height: 160 };
  console.log("logo");
  await tinted(255, path.join(OUT, "logo-white.png"));
  await tinted(0, path.join(OUT, "logo-black.png"));
  await tinted(255, path.join(OUT, "emblem-white.png"), emblem);
}

// Portrait: remove the flat grey backdrop. Only backdrop-coloured pixels
// connected to the image border are cleared, so dark hair and fabric survive.
async function portrait() {
  const src = path.join(SRC, "paynekiller.jpg");
  if (!existsSync(src)) return;
  const out = path.join(OUT, "paynekiller-cutout.webp");
  console.log("portrait");
  if (!skip(out)) {
    const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    // The backdrop is a neutral mid grey; hair is darker, skin and fabric are warmer.
    const isBackdrop = (p) => {
      const r = data[p * 3], g = data[p * 3 + 1], b = data[p * 3 + 2];
      return Math.abs(r - g) <= 7 && Math.abs(g - b) <= 7 && g >= 48 && g <= 96;
    };

    const mask = new Uint8Array(width * height).fill(255);
    const stack = [];
    for (let x = 0; x < width; x++) stack.push(x, (height - 1) * width + x);
    for (let y = 0; y < height; y++) stack.push(y * width, y * width + width - 1);
    while (stack.length) {
      const p = stack.pop();
      if (mask[p] === 0 || !isBackdrop(p)) continue;
      mask[p] = 0;
      const x = p % width;
      if (x > 0) stack.push(p - 1);
      if (x < width - 1) stack.push(p + 1);
      if (p >= width) stack.push(p - width);
      if (p < width * (height - 1)) stack.push(p + width);
    }

    // Soften the edge slightly and pull it in to hide the grey fringe.
    const alpha = await sharp(Buffer.from(mask), { raw: { width, height, channels: 1 } })
      .blur(1.2)
      .linear(2, -255)
      .extractChannel(0)
      .raw()
      .toBuffer();
    await sharp(data, { raw: { width, height, channels: 3 } })
      .joinChannel(alpha, { raw: { width, height, channels: 1 } })
      .webp({ quality: 88 })
      .toFile(out);
  }
  report(out);
}

await logo();
await portrait();
