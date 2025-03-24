"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import Splatter from "../ui/decorative/Splatter";
import useImageLoading from "@/hooks/useImageLoading";
const features = [
  {
    id: "feature-1",
    tabLabel: "Exteriors",
    title: "Exteriors",
    description:
      "A quality paint job protects your home's exterior and boosts curb appeal. At Drip Painting, we ensure a durable, beautiful finish with expert techniques and the best products.",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,w_1920,dpr_2.0/v1737435684/FP_exterior_blue_hmhgz7.webp",
    link: "/services/exterior-painting-services",
  },
  {
    id: "feature-2",
    tabLabel: "Interiors",
    title: "Interiors",
    description:
      "Refresh your home effortlessly with Drip Painting. We deliver flawless results while protecting your space and ensuring a smooth, stress-free experience.",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,w_1920,dpr_2.0/v1742407740/interior_rcclrr.webp",
    link: "/services/interior-painting-services",
  },
  {
    id: "feature-3",
    tabLabel: "Custom Finishes",
    title: "Custom Finishes",
    description:
      "Custom finishes add character and elegance to your space. At Drip Painting, we create unique textures and details, crafting a personalized look that reflects your style.",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,w_1920,dpr_2.0/v1742407739/customFinishes_opux1i.webp",
    link: "/services/interior-painting-services",
  },
  {
    id: "feature-4",
    tabLabel: "Bathrooms",
    title: "Bathrooms",
    description:
      "Transform your bathroom into a stunning retreat with Drip Painting's expert remodeling services. A bathroom remodel not only enhances your home's functionality and comfort but also increases its value.",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,w_1920,dpr_2.0/v1742407738/bathrooms_rbmspi.webp",
    link: "/services/custom-bathroom-remodels",
  },
  {
    id: "feature-5",
    tabLabel: "Kitchens",
    title: "Kitchens",
    description:
      "Updating your kitchen's design is essential, but making it fit your lifestyle is just as important. At Drip Painting, we craft kitchens that are both stunning and functional.",
    image:
      "https://res.cloudinary.com/dsjx8ner3/image/upload/f_auto,q_auto,w_1920,dpr_2.0/v1742407738/kitchens_jfcr4g.webp",
    link: "/services/custom-kitchen-remodels",
  },
];

const Service = () => {
  const [selection, setSelection] = useState(features[0].id);
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const { loadingImages, handleImageLoad, handleImageStart } = useImageLoading(
    features.map((f) => f.id),
  );

  useEffect(() => {
    if (!api) return;

    const syncCarouselToTabs = () => {
      const index = api.selectedScrollSnap();
      setCurrentIndex(index);
      setSelection(features[index].id);
    };

    api.on("select", syncCarouselToTabs);

    return () => {
      api.off("select", syncCarouselToTabs);
    };
  }, [api]);

  // Update Carousel when Tabs change
  useEffect(() => {
    if (!api) return;
    const index = features.findIndex((feature) => feature.id === selection);
    api.scrollTo(index);
  }, [selection, api]);

  // Scroll the active tab into view
  const hasMounted = useRef(false);
  const initialSelection = useRef(selection);

  useEffect(() => {
    if (hasMounted.current && selection !== initialSelection.current) {
      const activeTab =
        tabRefs.current[features.findIndex((f) => f.id === selection)];
      activeTab?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    } else {
      hasMounted.current = true;
    }
  }, [selection]);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  //Arrow functionality to update Carousel and tabs
  useEffect(() => {
    if (!api) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    updateSelection();
    api.on("select", updateSelection);
    return () => {
      api.off("select", updateSelection);
    };
  }, [api]);

  return (
    <section className="py-14 md:py-16">
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="container mx-auto px-4">
          <div className="lg:max-w-3xl">
            <p className="inline-block bg-gradient-to-r from-primary-light4 to-primary-dark2 bg-clip-text text-xl/7 font-semibold text-transparent">
              What We Do
            </p>
            <h2 className="mb-5 text-pretty text-3xl font-medium text-coolGray-dark5 lg:text-5xl">
              Our Services
            </h2>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <Tabs value={selection} onValueChange={setSelection}>
            <div className="relative">
              <div className="no-scrollbar overflow-auto">
                <div className="container min-w-fit">
                  <TabsList>
                    {features.map((feature, index) => (
                      <TabsTrigger
                        className="text-base"
                        key={feature.id}
                        value={feature.id}
                        ref={(el) => {
                          tabRefs.current[index] = el;
                        }}
                      >
                        {feature.tabLabel}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_10%,transparent_90%,hsl(var(--background))_100%)] md:hidden" />
            </div>
            <div className="container relative mt-12 flex flex-col md:col-span-2 md:mt-20 md:grid md:grid-cols-2 md:items-center md:gap-6 lg:gap-8">
              <Splatter twClass="absolute -top-20 right-0 md:left-56 lg:left-[23rem] xl:left-[27rem] xl:w-60 2xl:left-[36rem] md:-top-24 rotate-180 w-40 opacity-80" />
              <Splatter twClass="absolute bottom-64 md:bottom-0 left-0 rotate-90 w-60 opacity-80" />
              <Carousel
                setApi={setApi}
                className="w-full overflow-hidden rounded-lg"
                plugins={[Fade()]}
                opts={{ loop: true }}
              >
                <CarouselContent>
                  {features.map((feature, index) => (
                    <CarouselItem key={feature.id}>
                      <Card>
                        <CardContent className="relative flex aspect-[3/2] items-center justify-center p-0">
                          {loadingImages[feature.id] && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <LoaderCircle className="size-10 animate-spin text-primary-light4" />
                            </div>
                          )}

                          <Image
                            src={feature.image}
                            alt={feature.title}
                            className="h-full w-full rounded-lg object-cover"
                            fill
                            priority={
                              index === 0 ? false : index === currentIndex
                            }
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={80}
                            onLoad={() => handleImageLoad(feature.id)}
                            onError={() => handleImageLoad(feature.id)}
                            onLoadingComplete={() =>
                              handleImageLoad(feature.id)
                            }
                            onLoadStart={() => handleImageStart(feature.id)}
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  <div className="flex min-h-full flex-col justify-center py-8 md:px-8 md:py-0 lg:px-10 2xl:max-w-2xl">
                    <h3 className="mb-3 text-pretty text-2xl font-medium md:mb-4 lg:mb-6 lg:text-4xl">
                      {feature.title}
                    </h3>
                    <div className="h-24 md:h-[140px] lg:h-[160px]">
                      <p className="text-base lg:text-lg">
                        {feature.description}
                      </p>
                    </div>
                    <a
                      href={feature.link ? feature.link : "#"}
                      className="group mt-4 flex items-center justify-start text-base font-semibold text-[#4C63B6] md:justify-end md:pr-8 lg:pr-10 lg:text-lg"
                    >
                      {feature.id === "feature-1" &&
                        "Our Approach to Exteriors"}
                      {feature.id === "feature-2" &&
                        "How We Transform Interiors"}
                      {feature.id === "feature-3" &&
                        "How We Create Custom Finishes"}
                      {feature.id === "feature-4" &&
                        "Our Process for Bathrooms"}
                      {feature.id === "feature-5" && "How We Remodel Kitchens"}
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </TabsContent>
              ))}
            </div>
            <div className="hidden shrink-0 md:mt-6 md:flex md:items-center md:justify-start md:gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  api?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto"
                aria-label="Previous service"
              >
                <ArrowLeft className="size-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  api?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="disabled:pointer-events-auto"
                aria-label="Next service"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Service;
