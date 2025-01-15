import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-32 px-4 ">
      <div className="from-coolGray-light2 to-transparent from-80% rounded-lg bg-gradient-to-b px-4">
        <div className="mx-auto container flex flex-col items-center py-12 text-center lg:py-32">
          <p className=" text-lg text-nowrap font-semibold text-primary ">
            BRING NEW LIFE TO YOUR SPACE
          </p>
          <h1 className="my-3 text-pretty text-2xl font-bold sm:text-4xl md:my-6 lg:text-5xl">
            Expert Painting, Remarkable Transformations
          </h1>
          <p className="mb-6 max-w-xl text-muted-foreground md:mb-12 lg:text-xl whitespace-break-spaces">
            Drip Painting delivers exceptional craftsmanship with a focus on
            quality and care. Our licensed and insured team specializes in
            custom finishes that elevate your home. Schedule your free
            consultation today and bring your vision to life!
          </p>
          <div>
            <Button>SCHEDULE NOW</Button>
          </div>
        </div>
        <div className="mx-auto container">
          <div className="aspect-video [mask-image:linear-gradient(#000_80%,transparent_100%)]">
            <Image
              src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder hero"
              className="h-full w-full rounded-md object-cover"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
