import { supplements } from "@/content/supplements";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { RxLabel } from "@/components/ui/RxLabel";
import { SupplementCard } from "@/components/ui/SupplementCard";

export function Shelf() {
  return (
    <section className="py-24 md:py-36">
      <div className="shell">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <RxLabel>The shelf</RxLabel>
            <RevealText text="Fuel the work." className="display mt-5 text-7xl md:text-9xl" />
          </div>
          <CapsuleButton href="/supplements" variant="ghost">
            All supplements
          </CapsuleButton>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supplements.slice(0, 3).map((item, i) => (
            <Reveal key={item.code} delay={i * 100}>
              <SupplementCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
