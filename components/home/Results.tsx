import { testimonials } from "@/content/testimonials";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { RxLabel } from "@/components/ui/RxLabel";

export function Results() {
  return (
    <section className="bg-bone py-24 text-ink md:py-36">
      <div className="shell">
        <RxLabel className="!text-ink/60 [&>span:nth-child(2)]:text-ink">Side effects</RxLabel>
        <RevealText
          text="May cause confidence."
          className="display mt-5 max-w-5xl text-6xl sm:text-7xl md:text-9xl"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between gap-10 rounded-[2rem] border border-ink/15 p-7">
                <div>
                  <p className="display text-6xl text-ember">{item.result}</p>
                  <blockquote className="accent mt-5 text-pretty text-[1.7rem] leading-tight">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="label flex justify-between border-t border-ink/15 pt-4 text-ink/60">
                  <span className="text-ink">{item.name}</span>
                  <span>{item.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
