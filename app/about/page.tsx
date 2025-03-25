import Image from "next/image";
import WhoWeAre from "@/components/about/WhoWeAre";

import dynamic from "next/dynamic";

const SetsUsApart = dynamic(() => import("@/components/about/SetsUsApart"), {
  ssr: false,
});
const Testimonial = dynamic(
  () => import("@/components/testimonials/Testimonial"),
  {
    ssr: false,
  },
);

async function AboutPage() {
  return (
    <main className="py-0 md:px-4 xl:px-6">
      <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
        <h1 className="py-14 text-center text-4xl font-medium md:py-16 md:text-5xl">
          About Drip Paint
        </h1>
        <div className="container relative mx-auto aspect-video max-w-screen-xl lg:aspect-[5/2]">
          <Image
            src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1740767315/aboutHero_qlcrjc.webp"
            alt="About Drip 2 Paint"
            fill
            className="rounded-md object-cover object-top"
            priority
          />
        </div>
      </div>
      <WhoWeAre />
      <SetsUsApart />
      <Testimonial />
    </main>
  );
}

export default AboutPage;
