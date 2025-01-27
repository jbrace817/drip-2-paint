'use client';
import { Book, Sunset, Trees, Zap } from 'lucide-react';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

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
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const subMenuItemsOne = [
  {
    title: 'Blog',
    description: 'The latest industry news, updates, and info',
    icon: <Book className="size-5 shrink-0" />,
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

  function handleNav() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    // Disables scroll when mobile menu is open
    document.body.style.overflow = `${isOpen ? 'hidden' : 'visible'}`;
  }, [isOpen]);

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src="https://shadcnblocks.com/images/block/block-1.svg"
                className="w-8"
                alt="logo"
              />
              <span className="text-lg font-semibold">Shadcnblocks.com</span>
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
                        <NavigationMenuLink>
                          {subMenuItemsOne.map((item, idx) => (
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
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
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
                        </NavigationMenuLink>
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
              <img
                src="https://shadcnblocks.com/images/block/block-1.svg"
                className="w-8"
                alt="logo"
              />
              <span className="text-lg font-semibold">Shadcnblocks.com</span>
            </div>

            <div className="-mt-2 lg:hidden ">
              <div className="z-10 lg:hidden">
                <button
                  aria-expanded={isOpen}
                  aria-controls="mobile-navigation"
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  onClick={handleNav}
                  className={`absolute top-4 right-4 z-20 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
                    isOpen && '-rotate-180'
                  }`}
                >
                  <span
                    className={`mb-1 block h-0.5 w-8 rounded-sm bg-stone-700 transition-all duration-300 ease-out ${
                      isOpen
                        ? '-mb-1 translate-y-2 rotate-45 bg-white/70'
                        : '-translate-y-0.5'
                    }`}
                  ></span>
                  <span
                    className={`my-0.5 block h-0.5 w-8 self-start rounded-sm bg-stone-700 transition-all duration-300 ease-out ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span
                    className={`mt-1 block h-0.5 w-8 rounded-sm bg-stone-700 transition-all duration-300 ease-out ${
                      isOpen
                        ? '-mt-1 -translate-y-2 -rotate-45  bg-white/70'
                        : 'translate-y-0.5'
                    }`}
                  ></span>
                </button>
              </div>
              <div
                className={cn(
                  'fixed top-0 left-0 bottom-0 lg:hidden inset-y-0 h-full w-3/4 bg-white border-l z-10 flex items-center justify-center text-center shadow-lg transition-transform duration-300 ease-in-out sm:max-w-sm overflow-y-auto',
                  {
                    'translate-x-0': isOpen,
                    '-translate-x-full': !isOpen,
                  }
                )}
              >
                <div className="w-3/4 h-3/4">
                  <div className="mb-6 mt-6 flex flex-col gap-4 items-start">
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
                onClick={handleNav}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
