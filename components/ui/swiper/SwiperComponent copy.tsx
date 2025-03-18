"use client";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

type SliderComponentProps = {
  slides: { src: string; alt: string }[];
};

export default function SwiperComponent({ slides }: SliderComponentProps) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        effect="fade"
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-video w-full xl:aspect-[5/2]">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1536}
                height={768}
                className="rounded-lg object-cover xl:aspect-[5/2]"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1560px) 1536px, (min-width: 1300px) 1280px, (min-width: 1060px) 1024px, (min-width: 800px) 768px, (min-width: 720px) 640px, 100vw"
                quality={85}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                  '<svg width="1536" height="768" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e2e8f0"/></svg>',
                ).toString("base64")}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
