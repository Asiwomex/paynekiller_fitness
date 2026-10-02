import { CapsuleButton } from "@/components/ui/CapsuleButton";

export default function NotFound() {
  return (
    <section className="shell flex min-h-dvh flex-col items-start justify-center gap-6 py-32">
      <p className="label text-ash">Error 404</p>
      <h1 className="display text-[clamp(4rem,14vw,14rem)]">Wrong dose.</h1>
      <p className="max-w-md text-lg text-bone/80">That page does not exist. Head back and pick a program.</p>
      <CapsuleButton href="/">Back home</CapsuleButton>
    </section>
  );
}
