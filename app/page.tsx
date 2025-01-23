import Hero from '@/components/home/Hero';
import Logos from '@/components/home/Logos';
import Service from '@/components/home/Service';
import Testimonials from '@/components/home/Testimonials';

import Why from '@/components/home/Why';
import { TailwindIndicator } from '@/components/tailwind-indicator';

export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <Why />
      <Service />
      <Testimonials />
      <TailwindIndicator />
    </div>
  );
}
