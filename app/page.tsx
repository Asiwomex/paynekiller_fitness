import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Meet } from "@/components/home/Meet";
import { Prescription } from "@/components/home/Prescription";
import { Feed } from "@/components/home/Feed";
import { Schedule } from "@/components/home/Schedule";
import { Results } from "@/components/home/Results";
import { Shelf } from "@/components/home/Shelf";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Meet />
      <Prescription />
      <Feed />
      <Schedule />
      <Results />
      <Shelf />
      <FinalCta />
    </>
  );
}
