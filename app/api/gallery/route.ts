import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function getAllGalleryImages() {
  const collections = ["pages"];
  let allImages: GalleryImage[] = [];
  const heights = [810, 1080, 1440, 607, 900];

  collections.forEach((collection) => {
    const dir = path.join(process.cwd(), "content", collection);
    if (!fs.existsSync(dir)) return;

    const filenames = fs.readdirSync(dir);

    filenames.forEach((filename) => {
      const filePath = path.join(dir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      if (data.gallery) {
        const serviceType = filename.replace(".md", "").split("-").join(" ");
        const images = data.gallery.map((item: { image_upload: string }) => ({
          src: item.image_upload,
          alt: serviceType,
          width: 1080,
          height: heights[Math.floor(Math.random() * heights.length)],
        }));
        allImages = [...allImages, ...images];
      }
    });
  });

  return allImages;
}

export async function GET() {
  try {
    const images = getAllGalleryImages();
    return NextResponse.json(images);
  } catch {
    return NextResponse.json(
      { error: "Failed to load gallery images" },
      { status: 500 },
    );
  }
}
