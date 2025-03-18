"use client";

import AutoScroll from "embla-carousel-auto-scroll";

//Logos
import valspar from "@/public/images/marquee/valspar.svg";
import benjaminMoore from "@/public/images/marquee/Benjamin-Moore.svg";
import dutchBoy from "@/public/images/marquee/DutchBoy.svg";
import behr from "@/public/images/marquee/behr.svg";
import sherwinWilliams from "@/public/images/marquee/sherwin.svg";
import ppgIndustries from "@/public/images/marquee/ppg-industries.svg";
import kilzLogo from "@/public/images/marquee/kilz.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const logos = [
  {
    id: "logo-1",
    description: "Valspar",
    image: valspar,
  },
  {
    id: "logo-2",
    description: "Benjamin Moore",
    image: benjaminMoore,
  },
  {
    id: "logo-3",
    description: "Dutch Boy",
    image: dutchBoy,
  },
  {
    id: "logo-4",
    description: "Behr",
    image: behr,
  },
  {
    id: "logo-5",
    description: "Sherwin Williams",
    image: sherwinWilliams,
  },
  {
    id: "logo-6",
    description: "PPG Industries",
    image: ppgIndustries,
  },
  {
    id: "logo-7",
    description: "Kilz",
    image: kilzLogo,
  },
];

const Logos = () => {
  return (
    <section className="bg-white pb-14 pt-5 md:pb-16">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="my-4 text-pretty text-2xl font-bold lg:text-4xl">
          Our Partnered Brands
        </h1>
      </div>
      <div className="pt-6 lg:pt-14">
        <div className="container pointer-events-none relative mx-auto flex items-center justify-center overflow-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={logo.id}
                  className="basis-1/3 pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        className="h-28 w-36"
                        width={144}
                        height={144}
                        priority={index < 3}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
