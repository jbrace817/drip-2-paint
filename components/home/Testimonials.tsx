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
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,dpr_2.0/v1742433192/modernInterior_y57h0v.webp",
    alt: "Modern clean interior design",
    sizes: "(min-width: 1040px) 340px, 294px",
  },
  {
    id: "item-2",
    customer: "— Emily Davenport",
    testimonial:
      "Drip Painting transformed our home! Their attention to detail was incredible, and the finished result exceeded our expectations. The crew was professional, punctual, and left everything spotless. Highly recommend!",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,dpr_2.0/v1742433189/purpleBackground_cxj5at.webp",
    alt: "Paint brush with liquid paint",
    sizes: "(min-width: 1040px) 340px, 283px",
  },
  {
    id: "item-3",
    customer: "",
    testimonial: "",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,dpr_2.0/v1742433194/redInterior_vqbg7k.webp",
    alt: "Modern living room interior design",
    sizes: "(min-width: 1040px) 340px, 283px",
  },
  {
    id: "item-4",
    customer: "— Mark Reynolds",
    testimonial:
      "We hired Drip Painting for both interior and exterior work, and they did a fantastic job. The colors they helped us choose look amazing, and the quality of their work speaks for itself. We'll definitely be using them again!",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,dpr_2.0/v1742433191/redBackground_ungdaz.webp",
    alt: "Red colour lipstick border with empty space in the middle",
    sizes: "(min-width: 1040px) 340px, 321px",
  },
  {
    id: "item-5",
    customer: "",
    testimonial: "",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,dpr_2.0/v1742433195/brownShades_dmzojc.webp",
    alt: "Home interior decorated in brown shades",
    sizes: "(min-width: 1040px) 340px, 294px",
  },
  {
    id: "item-6",
    customer: "— Samantha Quinn",
    testimonial:
      "Absolutely thrilled with the custom finish they did in our living room! The team was friendly, efficient, and incredibly skilled. Our walls look like they belong in a design magazine. Thank you, Drip Painting!",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,dpr_2.0/v1742433187/yellowBackground_lv2x23.webp",
    alt: "Bright yellow paint with textured",
    sizes: "(min-width: 1040px) 340px, 283px",
  },
  {
    id: "item-7",
    customer: "",
    testimonial: "",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,dpr_2.0/v1742433188/kitchen_rpprux.webp",
    alt: "Kitchen white cabinets and counters",
    sizes: "350px",
  },
  {
    id: "item-8",
    customer: "— Jonathan Pierce",
    testimonial:
      "After 20 years in business, it's no wonder Drip Painting is the best around. They brought our vision to life with expert craftsmanship and a keen eye for detail. A+ service from start to finish!",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,dpr_2.0/v1742433190/greenBackground_dptqil.webp",
    alt: "Abstract green paint stroke on white background",
    sizes:
      "(min-width: 1040px) 340px, (min-width: 400px) 300px, calc(57.5vw + 82px)",
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
    <section className="pb-28 pt-14 md:pb-32 md:pt-16">
      <div className="container mx-auto flex flex-col px-4 md:gap-6 lg:col-span-2 lg:mt-20 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
        <div className="mb-8 flex items-end justify-between lg:flex-col lg:items-start lg:justify-between">
          <div>
            <p className="inline-block bg-gradient-to-r from-primary-light4 to-primary-dark2 bg-clip-text text-xl/7 font-semibold text-transparent">
              Local Voices
            </p>
            <h2 className="mb-3 text-pretty text-3xl font-medium text-coolGray-dark5 md:mb-4 lg:mb-6 lg:text-5xl">
              Shared Experiences
            </h2>
            <p className="text-base text-coolGray-dark2 lg:text-lg">
              We take pride in delivering top-quality service, but don&apos;t
              just take our word for it. See what our customers have to say
              about their experience working with us—real stories from
              homeowners and businesses who trusted us to bring their vision to
              life.
            </p>
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
                      sizes={item.sizes}
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
