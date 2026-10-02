import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-line pb-28 pt-16 md:pb-12">
      <div className="shell grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/media/logo-white.png"
            alt="PayneKiller Fitness"
            width={1280}
            height={386}
            className="h-auto w-56"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ash">
            Gym, aerobics, group training and supplements in {site.city}, {site.country}.
          </p>
        </div>

        <div>
          <p className="label text-ash">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ember">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label text-ash">Call or chat</p>
          <ul className="mt-4 space-y-2.5">
            {site.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="tabular-nums transition-colors hover:text-ember">
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ember">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="label text-ash">Follow</p>
          <ul className="mt-4 space-y-2.5">
            {site.socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ember">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell mt-16 flex flex-col gap-3 border-t border-line pt-6 text-ash md:flex-row md:justify-between">
        <p className="label">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="label">
          Powered by{" "}
          <a
            href="https://lytaworks.com/"
            target="_blank"
            rel="noopener"
            className="text-bone underline decoration-line underline-offset-4 transition-colors hover:text-ember"
          >
            Lytaworks
          </a>
        </p>
      </div>
    </footer>
  );
}
