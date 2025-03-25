import Image from "next/image";
import {
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Splatter from "../ui/decorative/Splatter";

export default function SetsUsApart() {
  return (
    <section className="py-14 md:py-16">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="relative order-2 mb-14 w-full max-w-full px-4 md:mb-16 lg:order-none lg:w-1/2 xl:pr-[35px]">
          {/* Decorative paint splatter */}
          <Splatter twClass="absolute left-0 -top-[5%] md:-top-[20%] -z-10 rotate-[90deg] md:rotate-[60deg]" />

          {/* Image Grid */}
          <div className="mt-[-25px] flex flex-wrap">
            {/* Left Column */}
            <div className="mt-[25px] w-full max-w-full md:w-6/12 md:px-[12.5px]">
              <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1742868797/4guys_c39hap.webp"
                  alt="Our Work"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="mt-[25px] w-full max-w-full md:w-6/12 md:px-[12.5px]">
              <div className="mt-[-25px] flex flex-wrap">
                {/* Top Image */}
                <div className="relative order-2 mt-[25px] w-full max-w-full md:px-[12.5px]">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1711856714985-c2b10006dc18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Our Work"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Splatter twClass="absolute right-0 -bottom-[50%] -z-10 rotate-[90deg] md:rotate-[60deg]" />
                </div>

                {/* Bottom Image */}
                <div className="mt-[25px] w-full max-w-full md:w-10/12 md:px-[12.5px]">
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1742869094/2guys_qc0prg.webp"
                      alt="Our Work"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-14 w-full px-4 md:my-16 lg:mt-0 lg:w-1/2">
          <h3 className="mb-8 text-pretty text-2xl font-medium tracking-tight sm:text-4xl">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Uncompromising Quality",
                description:
                  "EPA and Green Seal certified. Precision at every step from prep to finishing.",
                color: "text-support",
              },
              {
                icon: UserGroupIcon,
                title: "Customer-First Approach",
                description:
                  "Clear communication, detailed estimates, and results you'll love.",
                color: "text-[#F7D070]",
              },
              {
                icon: WrenchScrewdriverIcon,
                title: "Comprehensive Expertise",
                description:
                  "Full-service solutions from color selection to final walkthrough.",
                color: "text-[#7BC47F]",
              },
              {
                icon: HeartIcon,
                title: "Community Commitment",
                description:
                  "Proud Habitat for Humanity partner, donating time and expertise.",
                color: "text-[#E66A6A]",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`${feature.color} h-8 w-8 shrink-0`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-medium">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
