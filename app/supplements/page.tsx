import type { Metadata } from "next";
import { supplements } from "@/content/supplements";
import { waLink } from "@/lib/whatsapp";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SupplementCard } from "@/components/ui/SupplementCard";

export const metadata: Metadata = {
  title: "Supplements",
  description: "Protein, creatine, mass gainers and more, recommended by PayneKiller. Order on WhatsApp in Accra.",
};

export default function SupplementsPage() {
  return (
    <>
      <PageHeader label="The shelf" title="Fuel the work.">
        <p>
          Products PayneKiller uses and recommends. Order on WhatsApp and get them delivered in Accra, with
          instructions on how to take them.
        </p>
      </PageHeader>

      <section className="shell grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {supplements.map((item, i) => (
          <Reveal key={item.code} delay={(i % 3) * 80}>
            <SupplementCard item={item} />
          </Reveal>
        ))}
      </section>

      <section className="shell pb-24 md:pb-36">
        <div className="flex flex-col items-start gap-8 rounded-[2rem] bg-ember p-8 text-ink md:flex-row md:items-end md:justify-between md:p-12">
          <div>
            <p className="display text-6xl md:text-8xl">Not sure what you need?</p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed">
              Most people need less than they think. Send your goal and budget and get a straight answer.
            </p>
          </div>
          <CapsuleButton
            href={waLink("Hi PayneKiller, which supplements should I take for my goal?")}
            variant="bone"
            size="lg"
            className="shrink-0"
          >
            Ask PayneKiller
          </CapsuleButton>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ash">
          Supplements support training and food; they do not replace either. If you have a medical condition, are
          pregnant or take medication, speak to a doctor before using any product.
        </p>
      </section>
    </>
  );
}
