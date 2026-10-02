import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { Reveal, RevealText } from "@/components/ui/Reveal";

/** Closing call to action: one ember panel, one job. */
export function FinalCta({ slug = "aerobics" }: { slug?: string }) {
  return (
    <section className="shell py-16 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-ember text-ink md:rounded-[3rem]">
        <div className="grid items-end gap-10 p-6 sm:p-10 md:p-14 lg:grid-cols-12 lg:gap-8 lg:p-20">
          <div className="lg:col-span-7">
            <p className="label flex items-center gap-3">
              <span className="inline-block h-2 w-5 rounded-full bg-ink" aria-hidden />
              First dose
            </p>
            <RevealText
              text="Start today."
              className="display mt-6 text-[clamp(4rem,13vw,11rem)]"
            />
            <p className="accent mt-4 max-w-md text-balance text-3xl leading-[1.15] md:text-4xl">
              Your first session is one message away.
            </p>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <CapsuleButton href={waLink()} size="lg" variant="ink">
                Start on WhatsApp
              </CapsuleButton>
              <p className="label">
                or call{" "}
                {site.phones.map((phone, i) => (
                  <span key={phone.tel} className="whitespace-nowrap">
                    {i > 0 ? " / " : null}
                    <a
                      href={`tel:${phone.tel}`}
                      className="font-medium underline decoration-ink/40 underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      {phone.label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Capsule-shaped clip; a wide strip on phones, a tall pill on desktop */}
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
            <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] outline outline-1 -outline-offset-1 outline-black/10 sm:aspect-[21/9] lg:aspect-[3/5] lg:w-72 lg:rounded-full">
              <LazyVideo slug={slug} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
