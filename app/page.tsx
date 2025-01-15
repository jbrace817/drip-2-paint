import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import { TailwindIndicator } from '@/components/tailwind-indicator';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TailwindIndicator />
    </div>
  );
}
