"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";
import Splatter from "../ui/decorative/Splatter";

const testimonials1 = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "John Smith",
    role: "COO",
    avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Richard Doe",
    role: "Designer",
    avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Gordon Doe",
    role: "Developer",
    avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
];
const testimonials2 = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "John Smith",
    role: "COO",
    avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Richard Doe",
    role: "Designer",
    avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Gordon Doe",
    role: "Developer",
    avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
];

const Testimonial = () => {
  const plugin1 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
      stopOnInteraction: false,
    }),
  );

  const plugin2 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
      direction: "backward",
      stopOnInteraction: false,
    }),
  );
  return (
    <section className="relative px-4 py-32">
      <div className="container relative mx-auto flex flex-col items-center gap-6">
        <h2 className="mb-2 text-center text-3xl font-semibold tracking-tight lg:text-5xl">
          Ready to Transform Your Space?
        </h2>
        <p className="text-center text-muted-foreground lg:text-lg">
          Join the many happy homeowners who have seen their vision come to
          life.
        </p>
        <Button className="mt-6">Schedule a Consultation</Button>
      </div>
      <div className="relative mx-auto lg:container">
        <Splatter twClass="z-[-1] absolute left-0 rotate-[90deg] -top-[20%] lg:-top-[40%] w-[50%] md:w-[25%] xl:w-[18%]" />
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin1.current]}
            onMouseLeave={() => plugin1.current.play()}
          >
            <CarouselContent>
              {testimonials1.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 select-none p-6">
                    <div className="mb-4 flex gap-4">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={`https://i.pravatar.cc/150?img=${index + 1}`}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <div className="flex">
                          <FaStar fill="gold" />
                          <FaStar fill="gold" />
                          <FaStar fill="gold" />
                          <FaStar fill="gold" />
                          <FaStar fill="gold" />
                        </div>
                      </div>
                    </div>
                    <q>{testimonial.content}</q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin2.current]}
            onMouseLeave={() => plugin2.current.play()}
          >
            <CarouselContent>
              {testimonials2.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 select-none p-6">
                    <div className="mb-4 flex gap-4 overflow-hidden">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={`https://i.pravatar.cc/150?img=${index + 10}`}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <div className="flex">
                          <FaStar fill="gold" />
                          <FaStar fill="gold" />
                          <FaStar fill="gold" />
                          <FaStar fill="gold" />
                          <FaStar fill="gold" />
                        </div>
                      </div>
                    </div>
                    <q>{testimonial.content}</q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        <Splatter twClass="z-[-1] absolute right-0 rotate-[90deg] -bottom-[20%] w-[50%] md:w-[25%] lg:-bottom-[30%] xl:w-[18%]" />
      </div>
    </section>
  );
};

export { Testimonial };
