import { waLink } from "@/lib/whatsapp";
import { Arrow } from "@/components/ui/CapsuleButton";

/** Sticky booking bar on phones. */
export function WhatsAppDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center justify-between rounded-full bg-ember pl-6 pr-2 font-medium text-ink shadow-[0_8px_30px_rgb(0_0_0/0.5)] transition-transform active:scale-[0.96]"
      >
        Start on WhatsApp
        <span className="grid size-10 place-items-center rounded-full bg-ink text-bone">
          <Arrow />
        </span>
      </a>
    </div>
  );
}
