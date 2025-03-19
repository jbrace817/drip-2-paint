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
                <div className="aspect-[16/9] w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="rounded-lg object-cover"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={75}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                      '<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f8fafc"/></svg>',
                    ).toString("base64")}`}
                    sizes="(min-width: 1540px) 1280px, (min-width: 1280px) 1024px, (min-width: 1020px) 896px, (min-width: 780px) 768px, (min-width: 720px) 640px, 93vw"
                  />
                </div>
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
