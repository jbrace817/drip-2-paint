import {
  ShieldCheck,
  SquareCheckBig,
  CalendarClock,
  SearchCheck,
} from "lucide-react";

const Why = () => {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container mx-auto px-4">
        <p className="inline-block bg-gradient-to-r from-primary-light4 to-primary-dark2 bg-clip-text text-xl/7 font-semibold text-transparent">
          Why Us
        </p>
        <h2 className="text-pretty text-3xl font-medium text-coolGray-dark5 lg:text-5xl">
          Excellence You Can Trust
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-xl bg-coolGray-light1 md:size-12">
              <ShieldCheck className="size-6 text-support md:size-7" />
            </span>
            <div>
              <h3 className="text-lg font-medium md:mb-2 md:text-xl">
                Licensed and Insured
                <span className="absolute -left-px hidden h-6 w-px bg-support md:inline-block"></span>
              </h3>
              <p className="text-base md:text-lg">
                At Drip Painting, your peace of mind is our priority. As a fully
                licensed and insured painting company, we ensure every project
                is completed to professional standards while protecting your
                property and investment.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-xl bg-coolGray-light1 md:size-12">
              <SquareCheckBig className="size-6 text-[#F7D070] md:size-7" />
            </span>
            <div>
              <h3 className="text-lg font-medium md:mb-2 md:text-xl">
                100% Satisfaction Guarantee
                <span className="absolute -left-px hidden h-6 w-px bg-[#F7D070] md:inline-block"></span>
              </h3>
              <p className="text-base md:text-lg">
                Your satisfaction is our guarantee. At Drip Painting, our
                commitment to excellence means we don’t rest until you’re 100%
                satisfied with your space’s transformation.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-xl bg-coolGray-light1 md:size-12">
              <CalendarClock className="size-6 text-[#7BC47F] md:size-7" />
            </span>
            <div>
              <h3 className="text-lg font-medium md:mb-2 md:text-xl">
                Flexible Scheduling
                <span className="absolute -left-px hidden h-6 w-px bg-[#7BC47F] md:inline-block"></span>
              </h3>
              <p className="text-base md:text-lg">
                We understand that life can be busy, which is why Drip Painting
                offers flexible scheduling to fit your needs. We work around
                your timeline to ensure a seamless and stress-free painting
                experience
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-xl bg-coolGray-light1 md:size-12">
              <SearchCheck className="size-6 text-[#E66A6A] md:size-7" />
            </span>
            <div>
              <h3 className="text-lg font-medium md:mb-2 md:text-xl">
                Transparent Pricing
                <span className="absolute -left-px hidden h-6 w-px bg-[#E66A6A] bg-primary md:inline-block"></span>
              </h3>
              <p className="text-base md:text-lg">
                With Drip Painting, you’ll never have to worry about hidden fees
                or surprise costs. Our transparent pricing ensures you know
                exactly what to expect from the start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
