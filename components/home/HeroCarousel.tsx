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
              <div className="relative mx-auto w-full xl:w-10/12">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1920}
                  height={1080}
                  className="rounded-lg"
                  priority={index < 2}
                  quality={85}
                  sizes="(min-width: 1540px) calc(4.32vw + 1151px), (min-width: 1060px) calc(15.43vw + 832px), (min-width: 1020px) calc(1040vw - 9840px), (min-width: 780px) calc(23.64vw + 532px), (min-width: 720px) 640px, 93vw"
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
