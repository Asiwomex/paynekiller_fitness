// Builds the 1200x630 link-preview image (public/media/og-share.jpg).
// Usage: node scripts/make-share-image.mjs
import sharp from "sharp";

const W = 1200;
const H = 630;

const background = await sharp("public/media/outdoor-aerobics.jpg")
  .resize(W, H, { fit: "cover" })
  .modulate({ brightness: 0.3, saturation: 0.75 })
  .toBuffer();

const logo = await sharp("public/media/logo-white.png").resize({ width: 820 }).toBuffer();
const { width: lw, height: lh } = await sharp(logo).metadata();

const caption = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect x="560" y="500" width="80" height="14" rx="7" fill="#e2552b"/>
    <text x="600" y="566" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" letter-spacing="6" fill="#f2efe9">GYM  ·  AEROBICS  ·  GROUP TRAINING  ·  ACCRA</text>
  </svg>`,
);

const info = await sharp(background)
  .composite([
    { input: { create: { width: W, height: H, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 0.5 } } } },
    { input: logo, left: Math.round((W - lw) / 2), top: Math.round(250 - lh / 2) },
    { input: caption, left: 0, top: 0 },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/media/og-share.jpg");

console.log(`og-share.jpg ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`);
