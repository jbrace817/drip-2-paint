"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Splatter from "../ui/decorative/Splatter";

const defaultImage =
  "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,w_1920,dpr_2.0/v1742434502/livingAreaStairs_o09qvn.webp";

const CTA = ({ image = defaultImage }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div className="relative">
      <div
        ref={ref}
        className="relative flex w-full items-center justify-center overflow-hidden xl:min-h-[500px]"
      >
        <div className="absolute inset-0 z-[1] bg-[hsla(0,0%,99%,.6)]" />
        <div className="relative z-10 px-4 py-[clamp(3.75rem,7.82vw,6.25rem)] sm:px-6 sm:py-32 md:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="sm:text-5x text-balance text-4xl font-semibold tracking-tight text-coolGray-dark5">
              Bring your vision to life. Get a free quote today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty font-headings text-xl/8 font-medium text-coolGray-dark4">
              Beautiful interiors and polished exteriors start with the right
              team. Contact us today for expert painting that lasts.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
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
          </div>
        </div>

        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
          }}
          className="absolute inset-0 -z-10 h-full w-full"
        >
          <Image
            src={image}
            className="object-cover"
            alt="Interior design background"
            fill
            sizes="100vw"
          />
        </motion.div>
      </div>
      <Splatter twClass="absolute right-8 md:right-20 -top-28 w-28 md:w-40 lg:w-60 xl:right-48 opacity-80 " />
      <Splatter twClass="absolute left-1/4 md:left-20 bottom-8 w-28 md:w-32 xl:left-48 opacity-80 md:w-60 lg:w-80" />
    </div>
  );
};

export default CTA;
