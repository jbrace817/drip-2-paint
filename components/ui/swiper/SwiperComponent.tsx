'use client';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactNode } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
type SwiperComponentProps = {
  children: ReactNode;
};

export default function SwiperComponent({ children }: SwiperComponentProps) {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        effect="fade"
        className="mySwiper"
      >
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>slide 2</SwiperSlide>
        <SwiperSlide>slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
