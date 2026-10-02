import Link from "next/link";
import clsx from "clsx";
import type { Program } from "@/content/programs";
import { Arrow } from "@/components/ui/CapsuleButton";
import { LazyVideo } from "@/components/ui/LazyVideo";

/** A program presented as a prescription label. */
export function ProgramCard({ program, className }: { program: Program; className?: string }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className={clsx(
        "group flex flex-col overflow-hidden rounded-[2rem] border border-line bg-coal transition-colors duration-500 hover:border-bone/40",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[5/4]">
        <LazyVideo
          slug={program.clip}
          className="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-coal via-transparent to-ink/40" />
        <div className="label absolute inset-x-5 top-5 flex items-center justify-between">
          <span className="rounded-full bg-bone px-3 py-1.5 text-ink">Rx {program.rx}</span>
          <span className="rounded-full bg-ink/60 px-3 py-1.5 backdrop-blur-sm">{program.duration}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-2">
        <h3 className="display text-5xl">{program.name}</h3>
        <p className="accent mt-2 text-2xl text-ember">{program.tagline}</p>

        <dl className="label mt-6 divide-y divide-line border-y border-line text-ash">
          <div className="flex justify-between gap-4 py-3">
            <dt>Dose</dt>
            <dd className="text-right text-bone">{program.dose}</dd>
          </div>
          <div className="flex justify-between gap-4 py-3">
            <dt>Price</dt>
            <dd className="text-right text-bone">{program.price}</dd>
          </div>
        </dl>

        <span className="mt-6 flex items-center justify-between text-sm font-medium">
          Read the label
          <span className="grid size-10 place-items-center rounded-full bg-bone text-ink transition-colors duration-300 group-hover:bg-ember">
            <Arrow className="transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
          </span>
        </span>
      </div>
    </Link>
  );
}
