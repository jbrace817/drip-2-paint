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
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              className="aspect-video rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
