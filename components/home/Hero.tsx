import { Button } from '@/components/ui/button';

import TypeWriter from '../common/TypeWriter';
import SwiperComponent from '../ui/swiper/SwiperComponent';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Living Area',
  },
  {
    src: 'https://res.cloudinary.com/dsjx8ner3/image/upload/v1735734476/freepik__adjust__54031_poocbe.webp',
    alt: 'Beautiful dining room',
  },
  {
    src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Patio Entrance',
  },
];

const Hero = () => {
  return (
    <section className="py-32 md:px-4">
      <div className="from-coolGray-light2 to-transparent from-80% rounded-lg bg-gradient-to-b px-4">
        {' '}
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
            <Button className="font-heading font-semibold text-primary-foreground bg-primary-light5">
              SCHEDULE NOW
            </Button>
          </div>
        </div>
        <div className="mx-auto container">
          <div className="aspect-video [mask-image:linear-gradient(#000_80%,transparent_100%)] rounded-lg">
            <SwiperComponent slides={slides}></SwiperComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
