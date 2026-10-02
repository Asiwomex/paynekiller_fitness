import type { Supplement } from "@/content/supplements";
import { waLink } from "@/lib/whatsapp";
import { Arrow } from "@/components/ui/CapsuleButton";

/** Product shown as a typographic bottle label; no product photography needed. */
export function SupplementCard({ item }: { item: Supplement }) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-line bg-coal p-6 transition-colors duration-500 hover:border-bone/40">
      <div className="flex items-start justify-between">
        <span className="display grid h-24 w-14 place-items-center rounded-full bg-bone text-3xl text-ink transition-colors duration-500 group-hover:bg-ember">
          {item.code}
        </span>
        <span className="label whitespace-nowrap text-ash">{item.size}</span>
      </div>

      <h3 className="display mt-8 text-5xl">{item.name}</h3>
      <p className="accent mt-1 text-2xl text-ember">{item.purpose}</p>

      <dl className="label mt-6 border-t border-line pt-4 text-ash">
        <dt>Directions</dt>
        <dd className="mt-1 font-sans text-sm normal-case leading-relaxed tracking-normal text-bone/80">
          {item.directions}
        </dd>
      </dl>

      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="display text-3xl tabular-nums">{item.price}</span>
        <a
          href={waLink(`Hi PayneKiller, I'd like to order ${item.name} (${item.size}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 items-center gap-2 rounded-full bg-bone pl-5 pr-4 text-sm font-medium text-ink transition-[background-color,transform] duration-300 hover:bg-ember active:scale-[0.96]"
        >
          Order <Arrow />
          <span className="sr-only">{item.name} on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
