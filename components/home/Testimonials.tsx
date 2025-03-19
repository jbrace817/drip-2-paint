"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

const data = [
  {
    id: "item-1",
    customer: "",
    testimonial: "",
    image:
      "https://img.freepik.com/free-photo/modern-clean-interior-design_23-2151929382.jpg?t=st=1737778312~exp=1737781912~hmac=c2f74d669b6971c28bc607f0d4e357e80cd33aa90584a09a7d290c3dc227c21b&w=740",
    alt: "Modern clean interior design",
  },
  {
    id: "item-2",
    customer: "— Emily Davenport",
    testimonial:
      "Drip Painting transformed our home! Their attention to detail was incredible, and the finished result exceeded our expectations. The crew was professional, punctual, and left everything spotless. Highly recommend!",
    image:
      "https://img.freepik.com/free-photo/paint-brush-with-liquid-paint_144627-33542.jpg?t=st=1737776649~exp=1737780249~hmac=fd5702c7de1aaea164eb1fe03ff0a71050963c8e58f3c8aa10261c247e70a5ca&w=740",
    alt: "Paint brush with liquid paint",
  },
  {
    id: "item-3",
    customer: "",
    testimonial: "",
    image:
      "https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794726.jpg?t=st=1737778600~exp=1737782200~hmac=5f2f22dc0810de95390c6cb9085ad138374d7a7e82e42c7712f10ac1a8fd9bbe&w=740",
    alt: "Modern living room interior design",
  },
  {
    id: "item-4",
    customer: "— Mark Reynolds",
    testimonial:
      "We hired Drip Painting for both interior and exterior work, and they did a fantastic job. The colors they helped us choose look amazing, and the quality of their work speaks for itself. We'll definitely be using them again!",
    image:
      "https://img.freepik.com/premium-photo/abstract-red-watercolor-white-background_196038-20282.jpg?w=740",
    alt: "Red colour lipstick border with empty space in the middle",
  },
  {
    id: "item-5",
    customer: "",
    testimonial: "",
    image:
      "https://img.freepik.com/free-photo/home-interior-decorated-brown-shades_23-2151934914.jpg?t=st=1737779530~exp=1737783130~hmac=08f038c30595d72e752591c32c77f86de4b4b2c5f61c31505b3e6ede06106bec&w=740",
    alt: "Home interior decorated in brown shades",
  },
  {
    id: "item-6",
    customer: "— Samantha Quinn",
    testimonial:
      "Absolutely thrilled with the custom finish they did in our living room! The team was friendly, efficient, and incredibly skilled. Our walls look like they belong in a design magazine. Thank you, Drip Painting!",
    image:
      "https://img.freepik.com/free-photo/bright-yellow-paint-with-textured_23-2147746859.jpg?t=st=1737781806~exp=1737785406~hmac=f213501e7be1e11355127d789522098c124f817260b39297d484e31e7a177824&w=740",
    alt: "Bright yellow paint with textured",
  },
  {
    id: "item-7",
    customer: "",
    testimonial: "",
    image: "https://img.freepik.com/premium-photo/kitchen_602868-408.jpg?w=740",
    alt: "Kitchen white cabinets and counters",
  },
  {
    id: "item-8",
    customer: "— Jonathan Pierce",
    testimonial:
      "After 20 years in business, it's no wonder Drip Painting is the best around. They brought our vision to life with expert craftsmanship and a keen eye for detail. A+ service from start to finish!",
    image:
      "https://img.freepik.com/premium-photo/abstract-green-paint-stroke-white-background_1351431-19351.jpg?w=740",
    alt: "Abstract green paint stroke on white background",
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
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="bg-white pb-28 pt-14 md:pb-32 md:pt-16">
      <div className="container mx-auto flex flex-col px-4 md:gap-6 lg:col-span-2 lg:mt-20 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
        <div className="mb-8 flex items-end justify-between lg:flex-col lg:items-start lg:justify-between">
          <div>
            <p className="inline-block bg-gradient-to-r from-primary-light4 to-primary-dark2 bg-clip-text text-xl/7 font-semibold text-transparent">
              Local Voices
            </p>
            <h2 className="text-pretty text-3xl font-medium text-coolGray-dark5 lg:text-5xl">
              Shared Experiences
            </h2>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
          >
            <CarouselContent className="mr-[1rem]">
              {data.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                >
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl bg-red-200 md:aspect-[5/4] lg:aspect-[16/9]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      fill
                    />
                    {/* <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0.2),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" /> */}
                    {index % 2 === 1 ? (
                      <RiDoubleQuotesL
                        className="absolute left-2 top-[calc(20%)] -skew-x-[20deg]"
                        size={"3.5rem"}
                        color="#000"
                        opacity={0.8}
                      />
                    ) : null}
                    <div className="absolute inset-x-0 top-1/4 flex-col items-start p-6 text-coolGray-dark5 md:p-8">
                      <blockquote className="mb-6">
                        <p className="text-lg font-semibold text-coolGray-dark5 lg:text-xl">{`${item.testimonial}`}</p>
                      </blockquote>
                      <div className="line-clamp-2 md:mb-12">
                        <p className="text-right text-base text-coolGray-dark5">
                          {item.customer}
                        </p>
                      </div>
                    </div>
                  </div>
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
              aria-label="Previous testimonial"
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
              aria-label="Next testimonial"
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
