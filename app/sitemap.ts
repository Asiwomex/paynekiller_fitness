import type { MetadataRoute } from "next";
import { programs } from "@/content/programs";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/programs",
    ...programs.map((p) => `/programs/${p.slug}`),
    "/supplements",
    "/about",
    "/contact",
  ];
  return paths.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly" }));
}
