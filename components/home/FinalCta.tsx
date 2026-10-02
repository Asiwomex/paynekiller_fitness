import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
import { LazyVideo } from "@/components/ui/LazyVideo";

export function FinalCta({ slug = "aerobics" }: { slug?: string }) {
  return (
    <section className="relative border-t border-line py-24 md:py-36">
      {/* The video only shows through the letters: white text on black, multiplied over the footage. */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <LazyVideo slug={slug} />
        </div>
        <h2 className="display bg-ink text-center text-[clamp(5.5rem,25vw,26rem)] text-white mix-blend-multiply">
          No pain.
          <br />
          No gain.
        </h2>
      </div>

      <div className="shell mt-12 flex flex-col items-center gap-8 text-center">
        <p className="accent max-w-xl text-pretty text-3xl md:text-4xl">
          Your first session is one message away.
        </p>
        <CapsuleButton href={waLink()} size="lg">
          Start on WhatsApp
        </CapsuleButton>
        <p className="label text-ash">
          or call{" "}
          {site.phones.map((phone, i) => (
            <span key={phone.tel}>
              {i > 0 ? " / " : null}
              <a href={`tel:${phone.tel}`} className="text-bone underline-offset-4 hover:underline">
                {phone.label}
              </a>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
