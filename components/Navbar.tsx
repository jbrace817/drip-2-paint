"use client";
import { Book, Menu, Sunset, Trees, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import Image from "next/image";

const subMenuItemsOne = [
  {
    title: "Blog",
    description: "The latest industry news, updates, and info",
    icon: <Book className="size-5 shrink-0" />,
  },
  {
    title: "Compnay",
    description: "Our mission is to innovate and empower the world",
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: "Careers",
    description: "Browse job listing and discover our workspace",
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: "Support",
    description:
      "Get in touch with our support team or visit our community forums",
    icon: <Zap className="size-5 shrink-0" />,
  },
];

const subMenuItemsTwo = [
  {
    title: "Help Center",
    description: "Get all the answers you need right here",
    icon: <Zap className="size-5 shrink-0" />,
  },
  {
    title: "Contact Us",
    description: "We are here to help you with any questions you have",
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: "Status",
    description: "Check the current status of our services and APIs",
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: "Terms of Service",
    description: "Our terms and conditions for using our services",
    icon: <Book className="size-5 shrink-0" />,
  },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true); // Track if at the top of the screen
  const [prevScroll, setPrevScroll] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const SCROLL_THRESHOLD = 10; // Adjust based on sensitivity

    const handleScroll = () => {
      const currentScroll = Math.max(0, Math.round(window.scrollY));

      // Check if at the top of the screen
      setIsTop(currentScroll === 0);

      // Toggle visibility only if the scroll difference exceeds the threshold
      if (Math.abs(currentScroll - prevScroll) > SCROLL_THRESHOLD) {
        setIsVisible(currentScroll < prevScroll || currentScroll === 0);
        setPrevScroll(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  //verify url path using next navigation. If usin /admin do not render it
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <section
      className={`sticky top-0 z-[100] w-full transition duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isTop ? "bg-white" : "bg-white/60 backdrop-blur-md"}`}
    >
      <div
        className="animate-to-full-width h-1 w-full origin-left bg-primary transition-[width]"
        id="announcement"
      ></div>
      <div className="py-6">
        <div className="container mx-auto px-4">
          <nav className="hidden justify-between lg:flex">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1738206290/GradientDrip_wdbdky.svg"
                  className="w-8"
                  alt="logo"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                className="font-headings text-lg font-medium text-coolGray-dark4"
                href="#"
              >
                Home
              </a>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="text-coolGray-dark4">
                    <NavigationMenuTrigger className="bg-transparent font-headings text-lg font-medium">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        {subMenuItemsOne.map((item, idx) => (
                          <li key={idx}>
                            <a
                              className={cn(
                                "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              )}
                              href="#"
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="text-coolGray-dark4">
                    <NavigationMenuTrigger className="bg-transparent font-headings text-lg font-medium">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        {subMenuItemsTwo.map((item, idx) => (
                          <li key={idx}>
                            <a
                              className={cn(
                                "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              )}
                              href="#"
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a
                className="font-headings text-lg font-medium text-coolGray-dark4"
                href="#"
              >
                Pricing
              </a>
              <a
                className="font-headings text-lg font-medium text-coolGray-dark4"
                href="#"
              >
                Blog
              </a>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Log in
              </Button>
              <Button size="sm">Sign up</Button>
            </div>
          </nav>
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1738206290/GradientDrip_wdbdky.svg"
                  className="w-6"
                  alt="logo"
                  width={32}
                  height={32}
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Menu size={32} className="text-coolGray-dark5" />
                </SheetTrigger>
                <SheetContent className="overflow-y-auto" side={"right"}>
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1738206290/GradientDrip_wdbdky.svg"
                            className="w-6"
                            alt="logo"
                            width={32}
                            height={32}
                          />
                          <div className="flex flex-col font-headings">
                            <span className="text-2xl font-semibold">DRIP</span>
                            <span className="-mt-2 text-xs font-semibold">
                              Paint Co.
                            </span>
                          </div>
                        </div>
                        <SheetClose>
                          <X size={28} className="text-coolGray-dark5" />
                        </SheetClose>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mb-6 mt-24 flex flex-col gap-4">
                    <a href="#" className="font-semibold">
                      Home
                    </a>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="products" className="border-b-0">
                        <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                          Products
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                          {subMenuItemsOne.map((item, idx) => (
                            <a
                              key={idx}
                              className={cn(
                                "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              )}
                              href="#"
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="resources" className="border-b-0">
                        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                          Resources
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                          {subMenuItemsTwo.map((item, idx) => (
                            <a
                              key={idx}
                              className={cn(
                                "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              )}
                              href="#"
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <a href="#" className="font-semibold">
                      Pricing
                    </a>
                    <a href="#" className="font-semibold">
                      Blog
                    </a>
                  </div>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      <a
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="#"
                      >
                        Press
                      </a>
                      <a
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="#"
                      >
                        Contact
                      </a>
                      <a
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="#"
                      >
                        Imprint
                      </a>
                      <a
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="#"
                      >
                        Sitemap
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button variant="outline">Log in</Button>
                    <Button>Sign up</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      {/* <Button
        variant="outline"
        size="icon"
        className="absolute right-4 z-[9999]"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="size-4" />
      </Button> */}
    </section>
  );
};

export default Navbar;
