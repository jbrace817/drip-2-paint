import Hero from "@/components/home/Hero";
import Logos from "@/components/home/Logos";

import { TailwindIndicator } from "@/components/tailwind-indicator";

import dynamic from "next/dynamic";
const Why = dynamic(() => import("@/components/home/Why"));

const [CTA, Service, Testimonials] = ["CTA", "Service", "Testimonials"].map(
  (component) =>
    dynamic(() => import(`@/components/home/${component}`), { ssr: false }),
);

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
