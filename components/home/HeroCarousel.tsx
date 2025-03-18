"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import AutoPlay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type CarouselProps = {
  slides: { src: string; alt: string }[];
};

const OPTIONS: EmblaOptionsType = {
  loop: true,
};

export default function HeroCarousel({ slides }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Fade(),
    AutoPlay({ playOnInit: true, delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%]" key={index}>
              <div className="aspect-video w-full xl:aspect-[5/2]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1536}
                  height={768}
                  className="aspect-video rounded-lg object-cover xl:aspect-[5/2]"
                  priority={index <= 2}
                  sizes="(min-width: 1560px) 1536px, (min-width: 1300px) 1280px, (min-width: 1060px) 1024px, (min-width: 800px) 768px, (min-width: 720px) 640px, 100vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                    '<svg width="1536" height="768" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e2e8f0"/></svg>',
                  ).toString("base64")}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === selectedIndex
                ? "w-4 bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
