import Image from "next/image";

import {
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import WhoWeAre from "@/components/about/WhoWeAre";

async function AboutPage() {
  return (
    <main className="py-0 md:px-4 xl:px-6">
      <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
        <h1 className="py-14 text-center text-4xl font-medium md:py-16 md:text-5xl">
          About Us
        </h1>
        <div className="container relative mx-auto aspect-video max-w-screen-xl lg:aspect-[5/2]">
          <Image
            src="https://img.freepik.com/premium-photo/enthusiastic-worker-work-clothes-happily-decorating-walls-fresh-color-transforming-room-home_372999-45305.jpg?w=1380"
            alt="About Drip 2 Paint"
            fill
            className="rounded-md object-cover object-top"
            priority
          />
        </div>
      </div>
      <WhoWeAre />

      <section className="py-16 md:py-24">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="order-2 w-full px-4 md:order-none lg:w-1/2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="col-span-1 sm:col-span-2">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg sm:aspect-[2/1]">
                  <Image
                    src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1733885002/samples/imagecon-group.jpg"
                    alt="Drip 2 Paint Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative aspect-[3/2] h-auto overflow-hidden rounded-lg sm:aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1711856714985-c2b10006dc18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our Work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                <Image
                  src="https://img.freepik.com/premium-photo/painter-professionally-painting-house-exterior-white-balancing-ladder-against-window-with-blue_985815-4175.jpg?w=1060"
                  alt="Our Work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-12 w-full px-4 lg:mt-0 lg:w-1/2">
            <h2 className="bg-gradient-to-r from-primary-light4 to-primary-dark2 bg-clip-text text-lg/7 font-semibold text-transparent md:text-left">
              What Sets Us Apart
            </h2>
            <h3 className="mb-8 text-3xl font-semibold text-coolGray-dark5 md:mb-6 md:text-left md:text-4xl lg:mb-8">
              We create <span className="apart">finishes</span> that transform
              your home.
            </h3>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  icon: ShieldCheckIcon,
                  title: "Uncompromising Quality",
                  description:
                    "EPA and Green Seal certified. Precision at every step from prep to finishing.",
                  color: "text-fuchsia-500",
                },
                {
                  icon: UserGroupIcon,
                  title: "Customer-First Approach",
                  description:
                    "Clear communication, detailed estimates, and results you'll love.",
                  color: "text-violet-500",
                },
                {
                  icon: WrenchScrewdriverIcon,
                  title: "Comprehensive Expertise",
                  description:
                    "Full-service solutions from color selection to final walkthrough.",
                  color: "text-orange-500",
                },
                {
                  icon: HeartIcon,
                  title: "Community Commitment",
                  description:
                    "Proud Habitat for Humanity partner, donating time and expertise.",
                  color: "text-emerald-500",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`${feature.color} h-8 w-8 shrink-0`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
