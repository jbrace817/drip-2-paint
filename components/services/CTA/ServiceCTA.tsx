"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
}

interface CTAData {
  title: string;
  description: string;
  slug: string;
  active: boolean;
  benefits: Benefit[];
}

type DecorativeImgProps = {
  twClass: string;
};

function DecorativeImg({ twClass }: DecorativeImgProps) {
  return (
    <Image
      src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1739853730/83039045_Paints_lin7ml.svg"
      alt=""
      width={404}
      height={384}
      className={twClass}
    />
  );
}

const ServiceCTA = () => {
  const [cta, setCta] = useState<CTAData | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchCTAData = async () => {
      try {
        const response = await fetch("/api/serviceCTA");
        const data = await response.json();

        // Find the CTA for the current page
        const matchingCTA = data.ctas.find(
          (item: CTAData) => item.slug === pathname && item.active,
        );

        if (matchingCTA) {
          setCta(matchingCTA);
        }
      } catch (error) {
        console.error("Error fetching CTA data:", error);
      }
    };

    fetchCTAData();
  }, [pathname]);

  if (!cta) return null;

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="relative rounded-xl border border-border px-6 py-8 shadow-lg 2xl:grid 2xl:px-14 2xl:py-10">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <DecorativeImg
              twClass={
                "absolute left-full top-full -translate-x-2/3 -translate-y-1/2 rotate-[90deg]"
              }
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <DecorativeImg
              twClass={
                "absolute left-0 top-0 -translate-x-1/4 -translate-y-60 rotate-[90deg]"
              }
            />
          </div>
          <div className="relative mb-12 w-full 2xl:mb-0">
            <h3 className="mb-6 text-center text-2xl font-semibold text-coolGray-dark5 md:mb-6 md:text-4xl lg:mb-6">
              {cta?.title}
            </h3>
            <p className="mb-12 text-center text-lg text-coolGray-dark4">
              {cta?.description}
            </p>
            <ul className="mb-14 grid justify-center gap-x-8 gap-y-4 text-muted-foreground md:grid-cols-2">
              {cta?.benefits.map((benefit) => (
                <li key={benefit.title}>
                  <div className="flex items-start gap-2">
                    <span>
                      <Check className="w-8 text-[#7BC47F]" />
                    </span>

                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Button>Get Your Free Consultation</Button>
              {pathname.includes("interior") ||
              pathname.includes("exterior") ? (
                <p className="mt-4 text-sm text-coolGray-dark4">
                  Most projects completed within 1 week. Contact us today for
                  availability.
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
