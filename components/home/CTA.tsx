"use client";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const ParallaxContainer = dynamic(
  () => import("@/components/ui/parallax/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  },
);

const defaultImage =
  "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,w_1920,dpr_2.0/v1742434502/livingAreaStairs_o09qvn.webp";

const CTA = ({ image = defaultImage }) => {
  return (
    <ParallaxContainer
      className="parallax-5"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="relative">
        <div className="my-14 px-4 py-[clamp(3.75rem,7.82vw,6.25rem)] sm:px-6 sm:py-32 md:my-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="sm:text-5x text-balance text-4xl font-semibold tracking-tight text-coolGray-dark5">
              Bring your vision to life. Get a free quote today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty font-headings text-xl/8 font-medium text-coolGray-dark4">
              Beautiful interiors and polished exteriors start with the right
              team. Contact us today for expert painting that lasts.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 font-body">
              <Link
                href="/contact"
                className="flex items-center whitespace-nowrap"
              >
                <Button className="font-heading group font-semibold transition-all duration-150 hover:-translate-y-[0.15rem] hover:bg-primary hover:shadow-lg">
                  Start Your Project
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px] -z-10 bg-[hsla(0,0%,99%,.6)]" />
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default CTA;
