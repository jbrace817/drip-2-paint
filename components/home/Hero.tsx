import { Button } from '@/components/ui/button';

import TypeWriter from '../common/TypeWriter';

import { ArrowRight } from 'lucide-react';
import TripleSlider from '../ui/swiper/TripleSlider';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Living Area',
  },
  {
    src: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Bathroom remodel',
  },
  {
    src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Patio Entrance',
  },
  {
    src: 'https://images.unsplash.com/photo-1602028617950-0ed35e50e460?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Kitchen Remodel',
  },
];

const Hero = () => {
  return (
    <section className="pt-0 md:px-4 bg-white">
      <div className="from-coolGray-light2 to-white from-80%  rounded-lg bg-gradient-to-b px-4 pb-32">
        {/*review px-4 later*/}
        <div className="mx-auto container flex flex-col items-center py-12 text-center lg:py-32 ">
          <h1 className="my-3 font-headings text-pretty text-coolGray-dark5 text-4xl font-bold sm:text-4xl md:my-6 lg:text-5xl">
            Expert Painting, Stunning
            <TypeWriter
              colorClass="text-support"
              strings={['Transformations', 'Service', 'Results']}
            />
          </h1>
          <p className="font-body mb-6 max-w-xl text-lg text-coolGray-dark2 md:mb-12 lg:text-xl">
            Drip Painting delivers licensed expertise and custom finishes with
            unmatched quality&nbsp;and care. Schedule your free
            consultation&nbsp;today!
          </p>
          <div>
            <Button className="group font-heading font-semibold text-primary-foreground bg-gradient-to-r from-primary-light4 to-primary-dark2">
              SCHEDULE NOW
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="mx-auto container">
          <div className="">
            {/*[mask-image:linear-gradient(#000_80%,transparent_100%)]*/}
            <TripleSlider slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
