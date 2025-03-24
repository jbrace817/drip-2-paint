import Hero from "@/components/home/Hero";
import Logos from "@/components/home/Logos";

import { TailwindIndicator } from "@/components/tailwind-indicator";

import dynamic from "next/dynamic";
const Why = dynamic(() => import("@/components/home/Why"), { ssr: false });
const CTA = dynamic(() => import("@/components/home/CTA"), { ssr: false });
const Service = dynamic(() => import("@/components/home/Service"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <Why />
      <Service />
      <CTA />
      <Testimonials />
      <TailwindIndicator />
    </div>
  );
}
