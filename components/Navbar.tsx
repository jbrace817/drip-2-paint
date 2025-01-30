'use client';
import { Book, Sunset, Trees, Zap } from 'lucide-react';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { Squash as Hamburger } from 'hamburger-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';

const subMenuItemsOne = [
  {
    title: 'Blog',
    description: 'The latest industry news, updates, and info',
    icon: <Book className="size-5 shrink-0" />,
    link: '/blog',
  },
  {
    title: 'Compnay',
    description: 'Our mission is to innovate and empower the world',
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: 'Careers',
    description: 'Browse job listing and discover our workspace',
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: 'Support',
    description:
      'Get in touch with our support team or visit our community forums',
    icon: <Zap className="size-5 shrink-0" />,
  },
];

const subMenuItemsTwo = [
  {
    title: 'Help Center',
    description: 'Get all the answers you need right here',
    icon: <Zap className="size-5 shrink-0" />,
  },
  {
    title: 'Contact Us',
    description: 'We are here to help you with any questions you have',
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: 'Status',
    description: 'Check the current status of our services and APIs',
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: 'Terms of Service',
    description: 'Our terms and conditions for using our services',
    icon: <Book className="size-5 shrink-0" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(''); //Accordion state for closing when menu is closed

  function handleMobileNav() {
    setIsOpen(!isOpen);
    if (isOpen) {
      setValue('');
    }
  }

  useEffect(() => {
    // Disables scroll when mobile menu is open
    document.body.style.overflow = `${isOpen ? 'hidden' : 'visible'}`;
  }, [isOpen]);

  return (
    <section className="py-6 bg-white sticky top-0 z-50">
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
              {/* <span className="text-lg font-semibold">Shadcnblocks.com</span> */}
            </div>
          </div>
          <div className="flex items-center">
            <a
              className={cn(
                'text-muted-foreground',
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: 'ghost',
                })
              )}
              href="#"
            >
              Home
            </a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="text-muted-foreground">
                  <NavigationMenuTrigger>
                    <span>Products</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-80 p-3">
                      {subMenuItemsOne.map((item, idx) => (
                        <li key={idx}>
                          <a
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href={item.link}
                            //   onClick={handleDesktopNav}
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
                <NavigationMenuItem className="text-muted-foreground">
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-80 p-3">
                      {subMenuItemsTwo.map((item, idx) => (
                        <li key={idx}>
                          <a
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
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
              className={cn(
                'text-muted-foreground',
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: 'ghost',
                })
              )}
              href="#"
            >
              Pricing
            </a>
            <a
              className={cn(
                'text-muted-foreground',
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: 'ghost',
                })
              )}
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
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1738206290/GradientDrip_wdbdky.svg"
                className="w-6"
                alt="logo"
                width={32}
                height={32}
              />
              {/* <span className="text-lg font-semibold">Drip</span> */}
            </div>
            <div className="z-10 lg:hidden">
              <button
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                onClick={handleMobileNav}
                className={`absolute -bottom-2 right-0 z-20 flex flex-col items-center justify-center `}
              >
                <Hamburger
                  color={isOpen ? '#ffffff90' : '#1f2933'}
                  size={28}
                  toggled={isOpen}
                  toggle={setIsOpen}
                />
              </button>
            </div>
          </div>

          <div className="lg:hidden ">
            <div
              className={cn(
                'fixed top-0 left-0 bottom-0 lg:hidden inset-y-0 h-full w-3/4 bg-white border-l z-10 flex items-center justify-center text-center shadow-lg transition-transform duration-300 ease-in-out sm:max-w-sm overflow-y-auto',
                {
                  'translate-x-0': isOpen,
                  '-translate-x-full': !isOpen,
                }
              )}
            >
              <div className="w-3/4 h-full flex flex-col justify-start py-6">
                <div className="flex items-center gap-2 mb-16 ">
                  <Image
                    src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1738206290/GradientDrip_wdbdky.svg"
                    className="w-6"
                    alt="logo"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col font-headings">
                    <span className="text-2xl font-semibold">DRIP</span>
                    <span className="text-xs font-semibold -mt-2 ">
                      Paint Co.
                    </span>
                  </div>
                </div>
                <div className="mb-6 mt-6 flex flex-col gap-4 items-start text-coolGray-dark5">
                  <a href="#" className="font-semibold ">
                    Home
                  </a>
                  <Accordion
                    type="single"
                    value={value}
                    onValueChange={setValue}
                    collapsible
                    className="w-full group"
                  >
                    <AccordionItem value="products" className={`border-b-0`}>
                      <AccordionTrigger
                        className={`mb-4 py-0 font-semibold hover:no-underline`}
                      >
                        Products
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href={item.link}
                          >
                            {item.icon}
                            <div className="text-left">
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
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div className="text-left">
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
                  <div className="w-full">
                    <div className="border-t py-4">
                      <div className="grid grid-cols-2 justify-start">
                        <a
                          className={cn(
                            buttonVariants({
                              variant: 'ghost',
                            }),
                            'justify-center text-muted-foreground'
                          )}
                          href="#"
                        >
                          Press
                        </a>
                        <a
                          className={cn(
                            buttonVariants({
                              variant: 'ghost',
                            }),
                            'justify-center text-muted-foreground'
                          )}
                          href="#"
                        >
                          Contact
                        </a>
                        <a
                          className={cn(
                            buttonVariants({
                              variant: 'ghost',
                            }),
                            'justify-center text-muted-foreground'
                          )}
                          href="#"
                        >
                          Imprint
                        </a>
                        <a
                          className={cn(
                            buttonVariants({
                              variant: 'ghost',
                            }),
                            'justify-center text-muted-foreground'
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
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`fixed inset-0 z-[5] bg-black/80 transition-opacity duration-300 ease-in-out ${
                isOpen
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
              onClick={handleMobileNav}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
