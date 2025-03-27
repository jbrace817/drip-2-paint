"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Splatter from "@/components/ui/decorative/Splatter";
import Link from "next/link";

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
    <section className="my-24 md:my-32">
      <div className="container mx-auto">
        <div className="relative px-6 py-8 2xl:grid 2xl:px-14 2xl:py-10">
          <Splatter
            twClass={
              "absolute right-0 bottom-0 rotate-[180deg] opacity-80 w-40 xl:w-52 2xl:right-[8%]"
            }
          />

          <Splatter
            twClass={
              "absolute left-0 top-[-8%] rotate-[60deg] opacity-80 w-40 xl:left-24 xl:w-52"
            }
          />
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
                      <h3 className="text-lg font-medium">{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link href="/contact">
                <Button>Get Your Free Consultation</Button>
              </Link>
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
