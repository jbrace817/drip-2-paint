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
import Fade from 'embla-carousel-fade';
import Image from 'next/image';

const features = [
  {
    id: 'feature-1',
    tabLabel: 'Exteriors',
    title: 'Exteriors',
    description:
      'A quality paint job protects your home’s exterior and boosts curb appeal. At Drip Painting, we ensure a durable, beautiful finish with expert techniques and the best products.',
    image:
      'https://res.cloudinary.com/dsjx8ner3/image/upload/v1737435684/FP_exterior_blue_hmhgz7.webp',
  },
  {
    id: 'feature-2',
    tabLabel: 'Interiors',
    title: 'Interiors',
    description:
      'Refresh your home effortlessly with Drip Painting. We deliver flawless results while protecting your space and ensuring a smooth, stress-free experience.',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'feature-3',
    tabLabel: 'Custom Finishes',
    title: 'Custom Finishes',
    description:
      'Custom finishes add character and elegance to your space. At Drip Painting, we create unique textures and details, crafting a personalized look that reflects your style.',
    image:
      'https://images.unsplash.com/photo-1598928428433-1077478561d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'feature-4',
    tabLabel: 'Bathrooms',
    title: 'Bathrooms',
    description:
      "Transform your bathroom into a stunning retreat with Drip Painting’s expert remodeling services. A bathroom remodel not only enhances your home's functionality and comfort but also increases its value.",
    image:
      'https://images.unsplash.com/photo-1543502999-b65be91f22ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'feature-5',
    tabLabel: 'Kitchens',
    title: 'Kitchens',
    description:
      'Updating your kitchen’s design is essential, but making it fit your lifestyle is just as important. At Drip Painting, we craft kitchens that are both stunning and functional.',
    image:
      'https://images.unsplash.com/photo-1539922812788-4ea8cb53ba45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <div className="overflow-auto no-scrollbar">
                <div className="container min-w-fit">
                  <TabsList>
                    {features.map((feature, index) => (
                      <TabsTrigger
                        className="text-base"
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
              <Carousel
                setApi={setApi}
                className="w-full rounded-lg overflow-hidden"
                plugins={[Fade()]}
              >
                <CarouselContent>
                  {features.map((feature) => (
                    <CarouselItem key={feature.id}>
                      <Card>
                        <CardContent className="flex aspect-[3/2] items-center justify-center p-0">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            className="h-full w-full object-cover rounded-lg"
                            fill
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className=" flex shrink-0 items-center mt-6 md:mt-0 justify-end gap-2 md:row-start-2">
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
              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  <div className="flex flex-col justify-center min-h-full py-8 md:py-0 md:px-8 lg:px-10 ">
                    <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-base lg:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Service;
