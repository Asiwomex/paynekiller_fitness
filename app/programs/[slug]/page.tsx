import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram, programs } from "@/content/programs";
import { waLink } from "@/lib/whatsapp";
import { FinalCta } from "@/components/home/FinalCta";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { RxLabel } from "@/components/ui/RxLabel";

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return { title: program.name, description: program.summary };
}

export default async function ProgramPage({ params }: PageProps<"/programs/[slug]">) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const next = programs[(programs.indexOf(program) + 1) % programs.length];
  const book = waLink(`Hi PayneKiller, I'd like to start ${program.name}.`);

  return (
    <>
      <PageHeader label="Prescription" rx={program.rx} title={program.name}>
        <p className="accent text-3xl text-ember">{program.tagline}</p>
        <p className="mt-4">{program.summary}</p>
      </PageHeader>

      <section className="shell grid gap-10 pb-24 md:grid-cols-12 md:pb-36">
        <Reveal className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-coal outline outline-1 -outline-offset-1 outline-white/10">
            <LazyVideo slug={program.clip} />
          </div>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          {/* The label */}
          <Reveal className="rounded-[2rem] border border-line bg-coal p-6 md:p-8">
            <dl className="label divide-y divide-line text-ash">
              {[
                ["Dose", program.dose],
                ["Course", program.duration],
                ["Price", program.price],
              ].map(([term, value]) => (
                <div key={term} className="flex justify-between gap-6 py-4 first:pt-0">
                  <dt>{term}</dt>
                  <dd className="text-right text-bone">{value}</dd>
                </div>
              ))}
              <div className="pt-4">
                <dt>Active ingredients</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {program.ingredients.map((ingredient) => (
                    <span key={ingredient} className="rounded-full border border-line px-3 py-1.5 text-bone">
                      {ingredient}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <CapsuleButton href={book} size="lg" className="mt-8 w-full">
              Start this program
            </CapsuleButton>
          </Reveal>

          <Reveal className="mt-14">
            <RxLabel>Indicated for</RxLabel>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {program.indications.map((line) => (
                <li key={line} className="flex gap-4 py-4 text-lg leading-snug">
                  <span className="mt-2 inline-block h-2 w-5 shrink-0 rounded-full bg-ember" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <RxLabel>How to take it</RxLabel>
            <ol className="mt-5 space-y-8">
              {program.steps.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[4rem_1fr] items-baseline">
                  <span className="display text-5xl text-ember">0{i + 1}</span>
                  <div>
                    <h2 className="display text-4xl">{step.title}</h2>
                    <p className="mt-2 max-w-md leading-relaxed text-bone/80">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <Link
        href={`/programs/${next.slug}`}
        className="group block border-t border-line py-12 transition-colors duration-500 hover:bg-coal md:py-16"
      >
        <div className="shell flex items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="label text-ash">Next prescription / Rx {next.rx}</p>
            <p className="display mt-3 text-5xl md:text-8xl">{next.name}</p>
          </div>
          <span className="display shrink-0 text-5xl text-ember transition-transform duration-500 ease-out-expo group-hover:translate-x-3 md:text-8xl">
            →
          </span>
        </div>
      </Link>

      <FinalCta slug={program.clip} />
    </>
  );
}
