"use client";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import companyLogo from "@/public/images/dripLogo/dripLogo.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
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
import Link from "next/link";
import { ContactInfo } from "./contact/ContactInfo";

const subMenuItemsOne = [
  {
    title: "Interior Painting",
    description:
      "Transform your space with our expert interior painting services",
    icon: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1742095025/paint-roller_nd5vno.svg",
    alt: "Paint Roller",
    link: "/services/interior-painting-services",
  },
  {
    title: "Exterior Painting",
    description: "Protect your curb appeal with our exterior painting services",
    icon: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1742095026/house_j3iddq.svg",
    alt: "Two Story House",

    link: "/services/exterior-painting-services",
  },
  {
    title: "Bathroom Remodels",
    description:
      "Relax, refresh and renew with our bathroom remodeling services",
    icon: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1742095024/bathtub_binabp.svg",
    alt: "Bathtub",
    link: "/services/custom-bathroom-remodels",
  },
  {
    title: "Kitchen Remodels",
    description: "Create a functional and stylish kitchen with our remodels",
    icon: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1742095025/kitchen_1606657_bx07gr.svg",
    alt: "Kitchen",
    link: "/services/custom-kitchen-remodels",
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
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image
                    src={companyLogo}
                    className="w-8"
                    alt="logo"
                    width={32}
                    height={32}
                  />
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-between lg:w-3/4 xl:w-2/3">
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="font-headings text-lg font-medium text-coolGray-dark4"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="font-headings text-lg font-medium text-coolGray-dark4"
                >
                  About Us
                </Link>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem className="text-coolGray-dark4">
                      <NavigationMenuTrigger className="bg-transparent font-headings text-lg font-medium">
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-80 p-3">
                          {subMenuItemsOne.map((item, idx) => (
                            <li key={idx}>
                              <NavigationMenuLink asChild>
                                <Link
                                  className={cn(
                                    "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  )}
                                  href={item.link}
                                >
                                  <Image
                                    src={item.icon}
                                    className="size-8 shrink-0"
                                    alt={item.alt}
                                    width={32}
                                    height={32}
                                    priority
                                  />
                                  <div>
                                    <div className="text-sm font-semibold">
                                      {item.title}
                                    </div>
                                    <p className="text-sm leading-snug text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <Link
                  href="/gallery"
                  className="font-headings text-lg font-medium text-coolGray-dark4"
                >
                  Gallery
                </Link>
                <Link
                  className="font-headings text-lg font-medium text-coolGray-dark4"
                  href="/blog"
                >
                  Blog
                </Link>
              </div>

              <div className="flex gap-2">
                <Link href="/contact">
                  <Button size="sm">Contact Us</Button>
                </Link>
                {/* <div className="hidden lg:block">
                  <ContactInfo
                    variant="navbar"
                    className="flex items-center gap-4"
                  />
                </div> */}
              </div>
            </div>
          </nav>
          {/* Mobile Navbar */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image
                    src={companyLogo}
                    className="w-6"
                    alt="logo"
                    width={32}
                    height={32}
                  />
                </div>
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="flex items-center"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                    aria-label="Open menu"
                  >
                    <Menu size={32} className="text-coolGray-dark5" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  id="mobile-menu"
                  className="pb-safe flex min-h-[100dvh] flex-col justify-between overflow-y-auto"
                  side={"right"}
                >
                  <div className="flex-1">
                    <SheetHeader>
                      <SheetTitle>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src={companyLogo}
                              className="w-6"
                              alt="logo"
                              width={32}
                              height={32}
                            />
                            <div className="flex flex-col font-headings">
                              <span className="text-2xl font-semibold">
                                DRIP
                              </span>
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
                      <SheetClose asChild>
                        <Link href="/" className="font-semibold">
                          Home
                        </Link>
                      </SheetClose>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="products" className="border-b-0">
                          <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                            Services
                          </AccordionTrigger>
                          <AccordionContent className="mt-2">
                            {subMenuItemsOne.map((item, idx) => (
                              <SheetClose key={idx} asChild>
                                <Link
                                  className={cn(
                                    "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  )}
                                  href={item.link}
                                >
                                  <Image
                                    src={item.icon}
                                    className="size-8 shrink-0"
                                    alt={item.alt}
                                    width={32}
                                    height={32}
                                    priority
                                  />
                                  <div>
                                    <div className="text-sm font-semibold">
                                      {item.title}
                                    </div>
                                    <p className="text-sm leading-snug text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </SheetClose>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <SheetClose asChild>
                        <Link href="/about" className="font-semibold">
                          About Us
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/gallery" className="font-semibold">
                          Gallery
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/blog" className="font-semibold">
                          Blog
                        </Link>
                      </SheetClose>
                    </div>
                    <div className="border-t py-4">
                      <SheetClose asChild>
                        <ContactInfo variant="navbar" />
                      </SheetClose>
                    </div>
                  </div>

                  {/* Footer content that sticks to bottom */}
                  <div className="safe-area-bottom mt-auto space-y-6 pb-8 pt-4">
                    <SheetClose asChild>
                      <Link className="block w-full" href="/contact">
                        <Button className="w-full">Contact Us</Button>
                      </Link>
                    </SheetClose>
                    <div className="flex justify-center">
                      <ul className="flex items-center space-x-6 text-coolGray-dark4">
                        <li className="font-medium hover:text-primary">
                          <SheetClose asChild>
                            <Link href="#">
                              <FaInstagram className="size-6" />
                            </Link>
                          </SheetClose>
                        </li>
                        <li className="font-medium hover:text-primary">
                          <SheetClose asChild>
                            <Link href="#">
                              <FaFacebook className="size-6" />
                            </Link>
                          </SheetClose>
                        </li>
                        <li className="font-medium hover:text-primary">
                          <SheetClose asChild>
                            <Link href="#">
                              <FaTwitter className="size-6" />
                            </Link>
                          </SheetClose>
                        </li>
                        <li className="font-medium hover:text-primary">
                          <SheetClose asChild>
                            <Link href="#">
                              <FaLinkedin className="size-6" />
                            </Link>
                          </SheetClose>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
