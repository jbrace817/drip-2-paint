"use client";
import { useState } from "react";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

//lightbox
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

type GalleryProps = {
  gallery: { image_upload: string }[];
};

function ServicesGallery({ gallery }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  if (!gallery) return null;
  return (
    <section className="my-24 md:my-32">
      <div className="container mx-auto">
        <div className="text-pretty px-4">
          <p className="bg-gradient-to-r from-primary-light4 to-primary-dark2 bg-clip-text text-center text-lg/7 font-semibold text-transparent md:text-left">
            Featured Projects
          </p>
          <h3 className="mb-6 text-center text-3xl font-semibold text-coolGray-dark5 md:mb-6 md:text-left md:text-4xl lg:mb-6">
            Signature Drips
          </h3>
        </div>
        <div className="grid auto-rows-[136px] grid-cols-2 gap-4 px-4 md:grid-cols-5 md:px-0 lg:auto-rows-[228px]">
          {gallery.map((image, index) => (
            <div
              key={index}
              className={`group relative ${
                index === 0
                  ? "col-span-2 row-span-2 md:col-span-3 md:row-span-2"
                  : ""
              } h-full w-full overflow-hidden rounded-lg`}
            >
              <Image
                onClick={() => {
                  setImageIndex(index);
                  setOpen(true);
                }}
                src={image.image_upload}
                alt={`Gallery image ${index + 1}`}
                fill
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay for last image */}
              {index === gallery.length - 1 && (
                <div className="absolute inset-0 z-10 rounded-lg bg-black/50 group-hover:cursor-pointer">
                  <div className="z-20 flex h-full w-full flex-col items-center justify-center">
                    <p className="text-xl text-coolGray-light1 lg:text-2xl">
                      View More
                    </p>
                    <CircleArrowRight className="mt-4 h-8 w-8 text-coolGray-light1 transition-all duration-300 group-hover:scale-105 lg:h-12 lg:w-12" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={gallery.map((item) => ({ src: item.image_upload }))}
      />
    </section>
  );
}

export default ServicesGallery;
