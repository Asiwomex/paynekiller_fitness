import { schedule } from "@/content/schedule";
import { waLink } from "@/lib/whatsapp";
import { Arrow } from "@/components/ui/CapsuleButton";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { RxLabel } from "@/components/ui/RxLabel";

export function Schedule() {
  return (
    <section className="border-t border-line py-24 md:py-36">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <RxLabel>Dosage times</RxLabel>
            <RevealText text="This week." className="display mt-5 text-7xl md:text-9xl" />
          </div>
          <p className="max-w-xs text-pretty leading-relaxed text-bone/80">
            Tap a session to book your spot. Times can shift, so message first.
          </p>
        </div>

        <Reveal className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
          {schedule.map(({ day, slots }) => (
            <div key={day} className="flex flex-col bg-ink">
              <h3 className="display border-b border-line px-4 py-3 text-4xl sm:px-5 sm:py-4">{day}</h3>
              <ul className="flex flex-1 flex-col divide-y divide-line">
                {slots.map((slot) => (
                  <li key={slot.time + slot.name} className="flex-1">
                    <a
                      href={waLink(`Hi PayneKiller, I'd like to join ${slot.name} on ${day} at ${slot.time}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col gap-1 px-4 py-4 sm:px-5 sm:py-5 transition-colors duration-300 hover:bg-ember hover:text-ink"
                    >
                      <span className="label flex items-center justify-between text-ash group-hover:text-ink">
                        {slot.time}
                        <Arrow className="opacity-0 transition-opacity group-hover:opacity-100" />
                      </span>
                      <span className="text-lg font-medium leading-snug">{slot.name}</span>
                      <span className="text-sm text-ash group-hover:text-ink/80">{slot.place}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
