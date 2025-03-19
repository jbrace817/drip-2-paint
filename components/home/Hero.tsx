import { Button } from "@/components/ui/button";

import TypeWriter from "../common/TypeWriter";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import Link from "next/link";

/*images from unsplash
https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
https://images.unsplash.com/photo-1638799869566-b17fa794c4de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
https://images.unsplash.com/photo-1602028617950-0ed35e50e460?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  
*/

const slides = [
  {
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/c_crop,ar_16:9/v1742349310/livingRoom_tres2j.webp",
    alt: "Beautiful Living Area",
  },
  {
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/c_crop,ar_16:9/v1742349333/bathroomRemodel_yoqe8n.webp",
    alt: "Beautiful Bathroom remodel",
  },
  {
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/c_crop,ar_16:9/v1742349297/patioEntrance_irwcjg.webp",
    alt: "Beautiful Patio Entrance",
  },
  {
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/c_crop,ar_16:9/v1742349320/kitchenRemodel_cg8a04.webp",
    alt: "Beautiful Kitchen Remodel",
  },
];
// const slides = [
//   {
//     src: "https://res.cloudinary.com/dsjx8ner3/image/upload/c_fill,w_1536,h_614,g_auto/v1742349310/livingRoom_tres2j.webp",
//     alt: "Beautiful Living Area",
//   },
//   {
//     src: "https://res.cloudinary.com/dsjx8ner3/image/upload/c_fill,w_1536,h_614,g_auto/v1742349333/bathroomRemodel_yoqe8n.webp",
//     alt: "Beautiful Bathroom remodel",
//   },
//   {
//     src: "https://res.cloudinary.com/dsjx8ner3/image/upload/c_fill,w_1536,h_614,g_auto/v1742349297/patioEntrance_irwcjg.webp",
//     alt: "Beautiful Patio Entrance",
//   },
//   {
//     src: "https://res.cloudinary.com/dsjx8ner3/image/upload/c_fill,w_1536,h_614,g_auto/v1742349320/kitchenRemodel_cg8a04.webp",
//     alt: "Beautiful Kitchen Remodel",
//   },
// ];

const Hero = () => {
  return (
    <section className="bg-white pt-0 md:px-4 xl:px-6">
      <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-5">
        {/*review px-4 later*/}
        <div className="container mx-auto flex flex-col items-center py-12 text-center lg:py-32">
          <h1 className="my-3 text-pretty font-headings text-4xl font-bold text-coolGray-dark5 sm:text-4xl md:my-6 lg:text-5xl">
            Expert Painting, Stunning
            <TypeWriter
              colorClass="text-support"
              strings={["Transformations", "Service", "Results"]}
            />
          </h1>
          <p className="mb-6 max-w-xl font-body text-lg text-coolGray-dark2 md:mb-12 lg:text-xl">
            Drip Painting delivers licensed expertise and custom finishes with
            unmatched quality&nbsp;and care. Schedule your free
            consultation&nbsp;today!
          </p>
          <div>
            <Button className="font-heading group bg-primary-light5 font-semibold transition-all duration-150 hover:-translate-y-[0.15rem]">
              <Link
                href="/contact"
                className="flex items-center whitespace-nowrap"
              >
                SCHEDULE NOW
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="container mx-auto">
          <div>
            {/*[mask-image:linear-gradient(#000_80%,transparent_100%)]*/}
            {/* <TripleSlider slides={slides} /> */}
            <HeroCarousel slides={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
