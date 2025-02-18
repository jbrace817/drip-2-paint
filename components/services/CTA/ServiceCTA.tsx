"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  //   if (!cta) return null;

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="relative rounded-xl border border-border bg-coolGray-light2 px-6 py-8 2xl:grid 2xl:px-14 2xl:py-10">
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <svg
              fill="none"
              width={404}
              height={384}
              viewBox="0 0 404 384"
              aria-hidden="true"
              className="absolute left-full top-full -translate-x-2/3 -translate-y-1/2 rotate-[60deg]"
            >
              <defs>
                <pattern
                  x={0}
                  y={0}
                  id="dots"
                  width={16}
                  height={16}
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx={2}
                    cy={2}
                    r={2}
                    fill="#6279cb"
                    className="text-border"
                  />
                </pattern>
              </defs>
              <rect fill="url(#dots)" width={400} height={400} />
            </svg>
          </div>
          <div className="relative mb-12 w-full 2xl:mb-0">
            <h3 className="mb-6 text-center text-2xl font-semibold text-coolGray-dark5 md:mb-6 md:text-4xl lg:mb-6">
              Transform Your Interior Space
            </h3>
            <p className="mb-12 text-center text-lg text-coolGray-dark4">
              Experience the Drip Painting difference with our premium interior
              painting services
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
