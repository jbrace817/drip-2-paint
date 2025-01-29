'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const data = [
  {
    id: 'item-1',
    title: '',
    description: '',
    href: '#',
    image:
      'https://img.freepik.com/free-photo/modern-clean-interior-design_23-2151929382.jpg?t=st=1737778312~exp=1737781912~hmac=c2f74d669b6971c28bc607f0d4e357e80cd33aa90584a09a7d290c3dc227c21b&w=740',
  },
  {
    id: 'item-2',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    description:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image:
      'https://img.freepik.com/free-photo/paint-brush-with-liquid-paint_144627-33542.jpg?t=st=1737776649~exp=1737780249~hmac=fd5702c7de1aaea164eb1fe03ff0a71050963c8e58f3c8aa10261c247e70a5ca&w=740',
  },
  {
    id: 'item-3',
    title: '',
    description: '',
    href: '#',
    image:
      'https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794726.jpg?t=st=1737778600~exp=1737782200~hmac=5f2f22dc0810de95390c6cb9085ad138374d7a7e82e42c7712f10ac1a8fd9bbe&w=740',
  },
  {
    id: 'item-4',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    description:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image:
      'https://img.freepik.com/premium-photo/red-colour-lipstick-border-with-empty-space-middle_126740-550.jpg?w=740',
  },
  {
    id: 'item-5',
    title: '',
    description: '',
    href: '#',
    image:
      'https://img.freepik.com/free-photo/home-interior-decorated-brown-shades_23-2151934914.jpg?t=st=1737779530~exp=1737783130~hmac=08f038c30595d72e752591c32c77f86de4b4b2c5f61c31505b3e6ede06106bec&w=740',
  },
  {
    id: 'item-6',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    description:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image:
      'https://img.freepik.com/free-photo/bright-yellow-paint-with-textured_23-2147746859.jpg?t=st=1737781806~exp=1737785406~hmac=f213501e7be1e11355127d789522098c124f817260b39297d484e31e7a177824&w=740',
  },
  {
    id: 'item-7',
    title: '',
    description: '',
    href: '#',
    image: 'https://img.freepik.com/premium-photo/kitchen_602868-408.jpg?w=740',
  },
  {
    id: 'item-8',
    title: 'Duis sem sem, gravida vel porttitor eu, volutpat ut arcu',
    description:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    href: '#',
    image:
      'https://img.freepik.com/premium-photo/abstract-green-paint-stroke-white-background_1351431-19351.jpg?w=740',
  },
];

const Testimonials = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="pt-14 md:pt-16 pb-28 md:pb-32 bg-white">
      <div className="container px-4 mx-auto flex flex-col lg:col-span-2 lg:mt-20 lg:grid lg:grid-cols-[1fr_2fr] md:gap-6 lg:gap-8 ">
        <div className="mb-8 flex items-end justify-between lg:flex-col lg:items-start lg:justify-between">
          <div>
            <p className="text-xl/7 font-semibold bg-gradient-to-r from-primary-light4 to-primary-dark2 inline-block bg-clip-text text-transparent">
              Local Voices
            </p>
            <h2 className="text-pretty text-3xl font-medium lg:text-5xl text-coolGray-dark5t">
              Shared Experiences
            </h2>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              breakpoints: {
                '(max-width: 768px)': {
                  dragFree: true,
                },
              },
            }}
          >
            <CarouselContent className=" mr-[1rem] ">
              {data.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                >
                  <a href={item.href} className="group rounded-xl">
                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl bg-red-200 md:aspect-[5/4] lg:aspect-[16/9]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0.2),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" /> */}
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/4 flex flex-col items-start p-6 text-coolGray-dark5 md:p-8">
                        <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                          {item.title}
                        </div>
                        <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-8 hidden shrink-0 gap-2 md:flex md:justify-end">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
