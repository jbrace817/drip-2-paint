"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const logos = [
  {
    id: "logo-1",
    description: "Logo 1",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/v1738384495/valspar_ib5lyh.svg",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/v1738384410/benjamin-moore-paints-1_lybhn3.svg",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/v1738384411/DutchBoy_Logo_Fillable_wu2t2b.svg",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/v1738384410/behr_rpzmi2.svg",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/v1738384409/sherwin-williams-2_tyk3ha.svg",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/v1738384408/ppg-industries_pgfo0r.svg",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/v1738384407/kilz-logo_abq76d.svg",
  },
];

const Logos = () => {
  return (
    <section className="bg-white pb-36 pt-5">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="my-4 text-pretty text-2xl font-bold lg:text-4xl">
          Our Partnered Brands
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
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
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="basis-1/3 pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className="h-28 w-36"
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
