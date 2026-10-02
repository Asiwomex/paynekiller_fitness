import type { ReactNode } from "react";
import { RevealText } from "@/components/ui/Reveal";
import { RxLabel } from "@/components/ui/RxLabel";

export function PageHeader({
  label,
  rx,
  title,
  children,
}: {
  label: string;
  rx?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="shell pb-14 pt-36 md:pb-20 md:pt-48">
      <RxLabel rx={rx}>{label}</RxLabel>
      <RevealText as="h1" text={title} className="display mt-6 text-[clamp(3.25rem,13vw,13rem)]" />
      {children ? (
        <div className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-bone/80">{children}</div>
      ) : null}
    </header>
  );
}
