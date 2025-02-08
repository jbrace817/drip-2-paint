"use client";
import { useEffect, useRef, useState } from "react";
import { AlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

//Tailwind Indicator for screensizes - can be removed in the future
import { TailwindIndicator } from "@/components/tailwind-indicator";

const Content1 = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "-96px 0px 0px 0px",
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <section className="py-0 md:px-4">
      <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
        <h1 className="py-14 text-center text-4xl font-medium md:py-16 md:text-5xl">
          Interior Painting Services
        </h1>
        {/* <div className="container relative mx-auto aspect-video max-w-screen-xl lg:aspect-[0] lg:py-44 xl:py-56"> */}
        <div className="container relative mx-auto aspect-video max-w-screen-xl lg:aspect-[5/2]">
          <Image
            src="https://images.unsplash.com/photo-1631048501831-46856f9eaaf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            fill
            className="rounded-md object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl">
        <div className="relative grid-cols-3 gap-20 px-4 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge
                variant="outline"
                className="border-support text-support lg:text-sm"
              >
                Transform, Refresh, Reimagine
              </Badge>
              <h1 className="mt-3 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
                Revitalize Your Home with Expert Painting
              </h1>
              <p className="mt-6 text-xl/8 text-coolGray-dark2">
                A fresh coat of paint does more than change a room&apos;s
                color—it transforms your space, enhances its ambiance, and
                increases home value. Whether you&apos;re looking to modernize,
                create a cozy retreat, or just refresh aging walls, Drip
                Painting delivers flawless results that bring your vision to
                life.
              </p>
            </div>
            <section>
              <h2
                id="section1"
                ref={(ref) => addSectionRef("section1", ref)}
                className="mt-16 scroll-m-24 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Bringing Your Vision to Life with Drip Painting
              </h2>
              <p className="mt-6">
                At Drip Painting, we believe that every home tells a story, and
                we are here to help you bring that story to life through color,
                precision, and craftsmanship. Our team works closely with you to
                understand your vision, ensuring that every brushstroke reflects
                your personal style and enhances the beauty of your space.
              </p>
              <h3 className="mt-4 text-pretty text-xl font-semibold tracking-tight sm:text-2xl">
                How We Do It
              </h3>
              <ol className="ml-2 mt-2 list-inside list-decimal space-y-4 text-coolGray-dark2">
                <li>
                  <span>Consultation & Color Selection</span> – We begin by
                  listening to your ideas and offering expert guidance on
                  colors, finishes, and textures that complement your space.
                  Whether you have a specific vision or need inspiration, we
                  provide samples and recommendations to help you choose the
                  perfect look.
                </li>
                <li>
                  <span>Detailed Planning & Preparation</span> – Our team
                  meticulously prepares your home by protecting furniture,
                  cleaning surfaces, and making necessary repairs to ensure a
                  smooth, long-lasting finish.
                </li>
                <li>
                  <span>Precision Painting</span> – Using high-quality paints
                  and expert techniques, we apply each coat with care to ensure
                  even coverage, crisp lines, and a flawless finish.
                </li>
                <li>
                  <span>Final Walkthrough & Customer Satisfaction</span> – Once
                  the painting is complete, we conduct a detailed inspection
                  with you to ensure everything meets your expectations. We
                  don’t consider the job done until you’re completely satisfied.
                </li>
              </ol>
            </section>

            <section
              id="section2"
              ref={(ref) => addSectionRef("section2", ref)}
              className="scroll-m-24"
            >
              <h2 className="mt-16 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
                Setting the Safety Standard in Interior Painting
              </h2>
              <p className="mt-6">
                Your family&apos;s safety is our top priority, which is why we
                maintain EPA RRP Lead Safety certification. This federal
                certification demonstrates our expertise in safely handling and
                removing lead-based paint, which is particularly important in
                older homes. Our team follows rigorous safety protocols and uses
                specialized equipment to ensure that any lead-containing
                materials are properly contained and disposed of, giving you
                peace of mind during your home improvement project.
              </p>
              <p className="mt-8">
                We understand that modern homeowners are increasingly concerned
                about the environmental impact of home improvement projects and
                the air quality within their homes. That&apos;s why we&apos;re
                proud to hold Green Seal certification, a prestigious
                recognition that validates our commitment to environmental
                stewardship. This certification ensures that our painting
                services and products meet stringent environmental and health
                criteria, backed by rigorous scientific standards. When you
                choose Drip Painting, you&apos;re not just getting a beautiful
                interior – you&apos;re making a choice that&apos;s better for
                your family&apos;s health and the planet.
              </p>
            </section>

            <section
              id="section3"
              ref={(ref) => addSectionRef("section3", ref)}
              className="mb-32"
            >
              <h2 className="mt-16 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
                Your Premier Choice for Interior Painting
              </h2>
              <p className="mt-6">
                When you choose Drip Painting, you&apos;re choosing peace of
                mind. Our proven track record of excellence, commitment to
                safety, and dedication to customer satisfaction have made us the
                trusted choice for interior painting in the area. We understand
                that inviting painters into your home requires trust, and we
                honor that trust by treating every project—and every home—with
                the utmost care and respect. Ready to transform your space?
                Contact us today for a free consultation and discover the
                difference professional painting can make in your home. Our
                dedicated team is ready to bring your vision to life while
                ensuring your complete satisfaction from start to finish.
              </p>
            </section>
            <style jsx>{``}</style>
          </div>
          <div className="sticky top-24 hidden h-fit lg:block">
            <span className="flex items-center gap-2 text-sm">
              <AlignLeft className="h-4 w-4" />
              On this page
            </span>
            <nav className="mt-2 text-sm">
              <ul>
                <li>
                  <a
                    href="#section1"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      document.getElementById("section1")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section1"
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Bringing Your Vision to Life
                  </a>
                </li>
                <li>
                  <a
                    href="#section2"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      document.getElementById("section2")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section2"
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Setting the Safety Standard
                  </a>
                </li>
                <li>
                  <a
                    href="#section3"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      document.getElementById("section3")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={cn(
                      "block py-1 transition-colors duration-200",
                      activeSection === "section3"
                        ? "font-medium text-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    Your Premier Choice
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <TailwindIndicator />
    </section>
  );
};

export default Content1;
