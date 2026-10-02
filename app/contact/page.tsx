import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a session with PayneKiller Fitness in Accra. Call 055 660 3202 or message on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader label="Get started" title="Take the first dose.">
        <p>Answer three questions and your message opens in WhatsApp, ready to send. Replies usually come the same day.</p>
      </PageHeader>

      <section className="shell grid gap-14 pb-24 md:grid-cols-12 md:pb-36">
        <Reveal className="md:col-span-6">
          <ContactForm />
        </Reveal>

        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <dl className="divide-y divide-line border-y border-line">
            <div className="py-6">
              <dt className="label text-ash">Call</dt>
              <dd className="mt-2 flex flex-col">
                {site.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="display text-5xl tabular-nums transition-colors hover:text-ember md:text-6xl"
                  >
                    {phone.label}
                  </a>
                ))}
              </dd>
            </div>
            <div className="py-6">
              <dt className="label text-ash">Find us</dt>
              <dd className="mt-2 text-lg">{site.address}</dd>
            </div>
            <div className="py-6">
              <dt className="label text-ash">Hours</dt>
              <dd className="mt-2 text-lg">{site.hours}</dd>
            </div>
            <div className="py-6">
              <dt className="label text-ash">Follow</dt>
              <dd className="mt-2 flex gap-5 text-lg">
                {site.socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-line underline-offset-4 transition-colors hover:text-ember"
                  >
                    {social.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-line">
            <iframe
              title="Map of Accra, Ghana"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2700%2C5.5300%2C-0.1300%2C5.6500&layer=mapnik"
              loading="lazy"
              className="aspect-[4/3] w-full grayscale invert-[0.92] contrast-[0.9]"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
