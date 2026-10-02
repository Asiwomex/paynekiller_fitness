import type { Metadata } from "next";
import { programs } from "@/content/programs";
import { FinalCta } from "@/components/home/FinalCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Personal training, aerobics and group sessions, online fat loss and supplements with PayneKiller in Accra.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader label="The prescription" title="Pick your dose.">
        <p>
          Four ways to train with PayneKiller. Read the label, pick the one that fits your life, then message to
          start.
        </p>
      </PageHeader>

      <section className="shell grid gap-5 pb-24 sm:grid-cols-2 md:pb-36 xl:grid-cols-4">
        {programs.map((program, i) => (
          <Reveal key={program.slug} delay={i * 80}>
            <ProgramCard program={program} className="h-full" />
          </Reveal>
        ))}
      </section>

      <FinalCta />
    </>
  );
}
