import clsx from "clsx";

const words = ["Gym", "Aerobics", "Supplements", "Group training", "No pain no gain"];

function Row({ reverse = false, outlined = false }: { reverse?: boolean; outlined?: boolean }) {
  // The list is doubled so the -50% translate loops without a seam.
  return (
    <div className="flex overflow-hidden">
      <div className={clsx("flex shrink-0", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {words.map((word) => (
              <li key={word} className="flex items-center">
                <span className={clsx("display px-6 text-6xl md:text-8xl", outlined && "outline-text")}>{word}</span>
                <span className="inline-block h-4 w-9 rounded-full bg-ember md:h-5 md:w-12" aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="What we do" className="space-y-2 border-y border-line py-6 md:py-8">
      <Row />
      <Row reverse outlined />
    </section>
  );
}
