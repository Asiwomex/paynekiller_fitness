import clsx from "clsx";
import type { ReactNode } from "react";

/** Section marker styled like a prescription label: "Rx 02 — The Feed". */
export function RxLabel({ rx, children, className }: { rx?: string; children: ReactNode; className?: string }) {
  return (
    <p className={clsx("label flex items-center gap-3 text-ash", className)}>
      <span className="inline-block h-2 w-5 rounded-full bg-ember" aria-hidden />
      {rx ? <span className="text-bone">Rx {rx}</span> : null}
      <span>{children}</span>
    </p>
  );
}
