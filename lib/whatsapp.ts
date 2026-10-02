import { site } from "@/content/site";

export function waLink(message = "Hi PayneKiller, I'd like to start training.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
