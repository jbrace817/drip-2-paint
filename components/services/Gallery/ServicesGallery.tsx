"use client";

import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

type GalleryProps = {
  gallery: { image_upload: string }[];
};

function ServicesGallery({ gallery }: GalleryProps) {
  if (!gallery) return null;
  return (
    <section className="my-24 md:my-32">
      <div className="container mx-auto">
        <div className="grid auto-rows-[136px] grid-cols-2 gap-4 px-4 md:grid-cols-5 md:px-0 lg:auto-rows-[228px]">
          {gallery.map((image, index) => (
            <div
              key={index}
              className={`relative ${
                index === 0
                  ? "col-span-2 row-span-2 md:col-span-3 md:row-span-2"
                  : ""
              } h-full w-full`}
            >
              <Image
                src={image.image_upload}
                alt={`Gallery image ${index + 1}`}
                fill
                className="h-full w-full rounded-lg object-cover object-center"
              />
              {/* Overlay for last image */}
              {index === gallery.length - 1 && (
                <div className="absolute inset-0 z-10 rounded-lg bg-black/50">
                  <div className="z-20 flex h-full w-full flex-col items-center justify-center">
                    <p className="text-xl text-coolGray-light1 lg:text-2xl">
                      View More
                    </p>
                    <CircleArrowRight className="h-8 w-8 text-coolGray-light1 lg:h-12 lg:w-12" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGallery;
