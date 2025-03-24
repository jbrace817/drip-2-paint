"use client";

import Image from "next/image";
import splatter from "@/public/images/decorative/splatter.svg";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type SplatterProps = {
  twClass: string;
};

export default function Splatter({ twClass }: SplatterProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y }}
      aria-hidden="true"
      className={`absolute inset-0 -z-20`}
    >
      <Image
        src={splatter}
        alt=""
        width={284} //og - 404
        height={384} //og - 384
        className={twClass}
      />
    </motion.div>
  );
}
