import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import companyLogo from "@/public/images/dripLogo/gradientDrip.svg";

const sections = [
  {
    title: "Sitemap",
    links: [
      { name: "Home", href: "#" },
      { name: "Services", href: "#" },
      { name: "Projects", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-coolGray-light2 pb-10 pt-32">
      <div className="container mx-auto px-4">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div className="mb-4 flex flex-col items-center gap-2 lg:items-start">
                <div className="flex items-center gap-2">
                  <Image
                    src={companyLogo}
                    className="w-8"
                    alt="logo"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col items-start font-headings">
                    <span className="text-left text-3xl font-semibold text-coolGray-dark5">
                      DRIP
                    </span>
                    <span className="-mt-2 pl-[0.125rem] text-sm font-semibold text-coolGray-dark5">
                      Paint Co.
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-coolGray-dark3">
                  More than paint, we deliver expert remodels and lasting
                  craftsmanship. Your neighbors love the results—you will too.
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-coolGray-dark3">
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="#">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 font-headings text-sm text-coolGray-dark3">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-coolGray-light3 pt-8 text-center text-sm font-medium text-coolGray-dark3 lg:flex-row lg:items-center lg:text-left">
            <p className="text-coolGray-dark3">
              © 2025 Drip Painting Company. All rights reserved.
            </p>
            <ul className="flex justify-center gap-4 font-body lg:justify-start">
              <li className="hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
