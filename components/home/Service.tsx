'use client';
import * as React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const features = [
  {
    id: 'feature-1',
    tabLabel: 'Exteriors',
    title: 'Cras sagittis sollicitudin lobortis.',
    description:
      'Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    id: 'feature-2',
    tabLabel: 'Interiors',
    title: 'Nunc facilisis elit sed erat egestas fringilla.',
    description:
      'Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur.',
    image: 'https://shadcnblocks.com/images/block/placeholder-2.svg',
  },
  {
    id: 'feature-3',
    tabLabel: 'Custom Finishes',
    title: 'Morbi finibus est diam.',
    description:
      'Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.',
    image: 'https://shadcnblocks.com/images/block/placeholder-3.svg',
  },
  {
    id: 'feature-4',
    tabLabel: 'Bathrooms',
    title: 'Morbi finibus est diam.',
    description:
      'Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.',
    image: 'https://shadcnblocks.com/images/block/placeholder-3.svg',
  },
  {
    id: 'feature-5',
    tabLabel: 'Kitchens',
    title: 'Morbi finibus est diam.',
    description:
      'Nam vitae molestie arcu. Quisque eu libero orci. Aliquam imperdiet magna nec massa consectetur, id interdum ante congue.',
    image: 'https://shadcnblocks.com/images/block/placeholder-3.svg',
  },
];

const Service = () => {
  const [selection, setSelection] = React.useState(features[0].id);
  const [api, setApi] = React.useState<CarouselApi>();
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  //   const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const syncCarouselToTabs = () => {
      const index = api.selectedScrollSnap();
      setSelection(features[index].id);
    };

    api.on('select', syncCarouselToTabs);

    return () => {
      api.off('select', syncCarouselToTabs);
    };
  }, [api]);

  // Update Carousel when Tabs change
  React.useEffect(() => {
    if (!api) return;
    const index = features.findIndex((feature) => feature.id === selection);
    api.scrollTo(index);
  }, [selection, api]);

  // Scroll the active tab into view
  const hasMounted = React.useRef(false);
  const initialSelection = React.useRef(selection);

  React.useEffect(() => {
    if (hasMounted.current && selection !== initialSelection.current) {
      const activeTab =
        tabRefs.current[features.findIndex((f) => f.id === selection)];
      activeTab?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    } else {
      hasMounted.current = true;
    }
  }, [selection]);

  React.useEffect(() => {
    hasMounted.current = true;
  }, []);

  //Arrow functionality to update Carousel and tabs
  React.useEffect(() => {
    if (!api) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    updateSelection();
    api.on('select', updateSelection);
    return () => {
      api.off('select', updateSelection);
    };
  }, [api]);

  return (
    <section className="py-32 bg-white">
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="container mx-auto px-4">
          <div className="lg:max-w-3xl">
            <p className="text-xl/7 font-semibold text-coolGray-dark5">
              What We Do
            </p>
            <h2 className="mb-5 text-pretty text-3xl font-bold lg:text-5xl bg-gradient-to-r from-primary-light4 to-primary-dark2 inline-block bg-clip-text text-transparent">
              Our Services
            </h2>
            <a
              href="#"
              className="group font-body font-semibold text-[#4C63B6] flex items-center text-base lg:text-lg"
            >
              Learn More
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div className="mx-auto px-4 container">
          <Tabs value={selection} onValueChange={setSelection}>
            <div className="relative">
              <div className="overflow-auto">
                <div className="container min-w-fit">
                  <TabsList>
                    {features.map((feature, index) => (
                      <TabsTrigger
                        key={feature.id}
                        value={feature.id}
                        ref={(el) => {
                          tabRefs.current[index] = el;
                        }}
                      >
                        {feature.tabLabel}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_10%,transparent_90%,hsl(var(--background))_100%)] md:hidden" />
            </div>
            <div className="container mt-12 flex flex-col md:col-span-2 md:mt-20 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {features.map((feature) => (
                    <CarouselItem key={feature.id}>
                      <Card>
                        <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="h-full w-full object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  <div className="flex flex-col justify-center py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                    <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </TabsContent>
              ))}
              <div className="mt-0 flex shrink-0 items-center justify-end gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    api?.scrollPrev();
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
                    api?.scrollNext();
                  }}
                  disabled={!canScrollNext}
                  className="disabled:pointer-events-auto"
                >
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Service;
