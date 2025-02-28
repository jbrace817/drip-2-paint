import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          {/* Image Grid */}
          <div className="relative order-2 w-full px-4 lg:order-2 lg:w-1/2">
            {/* Dot Pattern */}
            <div
              className="z[-1] absolute left-[35%] top-[50%] hidden h-40 w-60 -translate-x-1/2 -translate-y-1/2 opacity-50 md:block"
              style={{
                background: "radial-gradient(#3f78e0 2px, transparent 2.5px)",
                backgroundSize: "0.75rem 0.75rem",
              }}
            />

            {/* Images */}
            <div className="relative mt-[15%] flex flex-col gap-4 md:flex-none">
              <div className="relative md:z-30 md:ml-[30%] md:w-[70%]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://img.freepik.com/premium-photo/contractor-worker-assembling-new-apartment-kitchen-cabinets_1304075-298.jpg?w=1060"
                    alt="About Drip 2 Paint"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative md:z-40 md:-mt-[15%] md:w-[55%]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1546552356-3fae876a61ca?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About Drip 2 Paint"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mt-16 scroll-m-24 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
              Our Story
            </h3>
            <p className="mt-6 text-lg text-coolGray-dark2">
              What started as occasional weekend projects for friends and family
              quickly grew through word-of-mouth. By 2015, Floyd took the leap
              to establish Drip Painting as a full-service painting company.
              From those humble beginnings, we&apos;ve grown into a trusted name
              for interior painting, exterior painting, and custom kitchen and
              bathroom remodeling throughout the region.
            </p>

            <h3 className="mt-16 scroll-m-24 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
              Our Mission
            </h3>
            <p className="mt-6 text-lg text-coolGray-dark2">
              At Drip Painting, our mission is to transform ordinary spaces into
              extraordinary environments that inspire and delight. We believe
              every project – whether a simple room refresh or a complete
              kitchen renovation – deserves meticulous attention to detail,
              premium materials, and exceptional craftsmanship. We&apos;re
              committed to creating spaces that not only look beautiful but
              enhance the way you live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
