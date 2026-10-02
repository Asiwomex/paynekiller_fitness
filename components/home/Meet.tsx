import Image from "next/image";
import { site } from "@/content/site";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
import { Counter } from "@/components/ui/Counter";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { RxLabel } from "@/components/ui/RxLabel";

export function Meet() {
  return (
    <section className="relative overflow-clip py-24 md:py-40">
      <div className="shell grid items-center gap-12 md:grid-cols-12">
        <div className="relative md:col-span-7">
          {/* Giant outlined wordmark sits behind the portrait */}
          <p
            aria-hidden
            className="display outline-text pointer-events-none absolute -left-2 top-0 select-none text-[clamp(7rem,24vw,24rem)]"
          >
            Payne
            <br />
            Killer
          </p>
          <Reveal className="relative mx-auto w-[min(100%,40rem)]">
            <div className="absolute bottom-0 left-1/2 aspect-[1/1.12] w-[60%] -translate-x-1/2 rounded-full bg-ember" aria-hidden />
            <Image
              src="/media/paynekiller-cutout.webp"
              alt="PayneKiller, smiling in a training vest"
              width={1080}
              height={1080}
              sizes="(min-width: 768px) 40rem, 100vw"
              className="relative h-auto w-full"
            />
          </Reveal>
        </div>

        <div className="md:col-span-5 md:pb-10">
          <RxLabel>The coach</RxLabel>
          <RevealText text="Meet your painkiller." className="display mt-5 text-6xl md:text-7xl lg:text-8xl" />
          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-bone/80">
              PayneKiller is a coach from {site.city} who has spent years getting ordinary people strong, lean and
              consistent. He trains clients one on one, leads group sessions on the road and on the turf, and
              shares what works with thousands online.
            </p>
            <p className="accent mt-6 text-3xl text-bone">&ldquo;The pain leaves. The result stays.&rdquo;</p>
          </Reveal>

          <dl className="mt-10 grid grid-cols-3 border-t border-line">
            {site.stats.map((stat) => (
              <div key={stat.label} className="border-r border-line py-5 pr-3 last:border-r-0 [&:not(:first-child)]:pl-4">
                <dd className="display text-4xl sm:text-5xl md:text-6xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="label mt-2 text-ash">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <CapsuleButton href="/about" variant="ghost" className="mt-8">
            His story
          </CapsuleButton>
        </div>
      </div>
    </section>
  );
}
