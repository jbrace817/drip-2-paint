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
  { photo, width, height }: RenderImageContext,
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
        fill
        src={photo}
        alt={alt}
        title={title}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className="object-cover"
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

  if (loading) {
    return <div>Loading gallery...</div>;
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
