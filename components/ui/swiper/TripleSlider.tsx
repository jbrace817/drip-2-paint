'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import Image from 'next/image';
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';

type Slide = {
  src: string;
  alt: string;
};

type SwiperCarouselProps = {
  slides: Slide[];
};

const TripleSlider: React.FC<SwiperCarouselProps> = ({ slides }) => {
  return (
    <div id="app">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2} // Controls visibility of adjacent slides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        loop={true}
        // pagination={{ clickable: true }}
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="triple-slider-main"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="aspect-video">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              className="rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TripleSlider;
