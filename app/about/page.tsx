import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { FinalCta } from "@/components/home/FinalCta";
import { Counter } from "@/components/ui/Counter";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { RxLabel } from "@/components/ui/RxLabel";

export const metadata: Metadata = {
  title: "About",
  description: "Meet PayneKiller, the Accra coach behind PayneKiller Fitness.",
};

// PLACEHOLDER story and principles. Replace with his own words.
const principles = [
  {
    title: "Show up",
    body: "Consistency beats talent. The plan is built so you can keep it on your worst week, not only your best.",
  },
  {
    title: "Do it right",
    body: "Form first, load second. Every rep is coached until it is safe, then it gets heavier.",
  },
  {
    title: "Do it together",
    body: "People stay when they belong. The group is as much a part of the program as the workout.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader label="The coach" title="The man behind the pain.">
        <p>
          PayneKiller built his name the slow way: early mornings, one client at a time, on gym floors and roadsides
          across {site.city}.
        </p>
      </PageHeader>

      <section className="shell grid items-start gap-12 pb-24 md:grid-cols-12 md:pb-36">
        <Reveal className="relative md:sticky md:top-28 md:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] bg-ember">
            <Image
              src="/media/paynekiller-cutout.webp"
              alt="PayneKiller, smiling in a training vest"
              width={1080}
              height={1080}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="accent text-4xl leading-tight md:text-5xl">
              &ldquo;I do not sell motivation. I give people a plan and I stay on them until it works.&rdquo;
            </p>
            <div className="mt-10 space-y-5 text-lg leading-relaxed text-bone/80">
              <p>
                What started as training friends before work grew into {site.name}: personal coaching, packed
                aerobics sessions and Saturday road work that takes over the street.
              </p>
              <p>
                His approach is simple. Lift properly, move often, eat food you recognise and keep coming back. No
                crash diets and no shortcuts, only work that adds up.
              </p>
              <p>
                Online, he breaks down fat loss and training in plain language so people who cannot reach the gym
                can still start today.
              </p>
            </div>
          </Reveal>

          <dl className="mt-12 grid grid-cols-3 border-y border-line">
            {site.stats.map((stat) => (
              <div key={stat.label} className="border-r border-line py-6 pr-3 last:border-r-0 [&:not(:first-child)]:pl-4">
                <dd className="display text-5xl md:text-7xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="label mt-2 text-ash">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <Reveal className="mt-14">
            <RxLabel>What he stands on</RxLabel>
            <ol className="mt-5 divide-y divide-line border-y border-line">
              {principles.map((item, i) => (
                <li key={item.title} className="grid grid-cols-[4rem_1fr] items-baseline py-6">
                  <span className="display text-5xl text-ember">0{i + 1}</span>
                  <div>
                    <h2 className="display text-4xl">{item.title}</h2>
                    <p className="mt-2 max-w-md leading-relaxed text-bone/80">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="shell pb-24 md:pb-36">
        <div className="aspect-[4/5] overflow-hidden rounded-[2rem] outline outline-1 -outline-offset-1 outline-white/10 md:aspect-[21/9]">
          <LazyVideo slug="outdoor-aerobics" />
        </div>
      </section>

      <FinalCta slug="training" />
    </>
  );
}
