"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

//React Photo Album
import {
  RenderImageContext,
  RenderImageProps,
  MasonryPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/masonry.css";

//YARL Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
//LightBox plugins
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// ... rest of the images can use these common heights:
// 810  (4:3 ratio)
// 1080 (1:1 square)
// 1440 (3:4 ratio)
// 607  (16:9 ratio)
// 900  (6:5 ratio)

function renderNextImage(
  { alt = "", title }: RenderImageProps,
  { photo, width, height, index }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        priority={index < 4}
        fill
        src={photo}
        alt={alt}
        title={title}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx0cHBwcHB4cHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/2wBDAR0XFxodGh0YGBodHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        style={{
          opacity: 0,
        }}
        onLoadingComplete={(image) => {
          image.style.opacity = "1";
        }}
      />
    </div>
  );
}

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("/api/gallery");
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  //   if (loading) {
  //     return <div>Loading gallery...</div>;
  //   }
  if (loading) {
    return (
      <main className="py-0 md:px-4 xl:px-6">
        <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
          <h1 className="py-14 text-center text-4xl font-medium md:py-16 md:text-5xl">
            Gallery
          </h1>
          <div className="grid grid-cols-1 gap-4 pb-32 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="relative w-full bg-gray-100"
                style={{ aspectRatio: "1" }}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="py-0 md:px-4 xl:px-6">
      <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
        <h1 className="py-14 text-center text-4xl font-medium md:py-16 md:text-5xl">
          Gallery
        </h1>
        <div className="pb-32">
          <MasonryPhotoAlbum
            photos={photos}
            render={{ image: renderNextImage }}
            defaultContainerWidth={1200}
            onClick={({ index }) => setIndex(index)}
            columns={(containerWidth): number => {
              if (containerWidth < 640) return 1;
              if (containerWidth < 768) return 2;
              if (containerWidth < 1024) return 3;
              return 4;
            }}
          />
        </div>
        <Lightbox
          slides={photos}
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          plugins={[Zoom]}
          controller={{ closeOnBackdropClick: true }}
        />
      </div>
    </main>
  );
}

export default Gallery;
