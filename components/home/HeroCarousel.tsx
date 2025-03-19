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
              <div className="relative w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1536}
                  height={614}
                  className="aspect-video rounded-lg object-cover xl:aspect-[5/2]"
                  priority={index < 2}
                  quality={85}
                  sizes="(min-width: 1540px) calc(5.07vw + 1384px), (min-width: 1280px) calc(33.33vw + 775px), (min-width: 1040px) calc(30.45vw + 1059px), (min-width: 780px) calc(30vw + 777px), (min-width: 720px) 904px, 130.75vw"
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
