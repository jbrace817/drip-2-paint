import { PersonStanding, Timer, Zap, ZoomIn } from 'lucide-react';

const Why = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-xl/7 font-semibold text-primary">Why Us</p>
        <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-5xl">
          Excellence You Can Trust
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E0E8F9] md:size-12">
              <Timer className="size-5 md:size-6 text-support" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Performance
                <span className="absolute -left-px hidden h-6 w-px bg-support md:inline-block"></span>
              </h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FCEFC7] md:size-12">
              <Zap className="size-5 md:size-6 text-[#C99A2E]" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Innovation
                <span className="absolute -left-px hidden h-6 w-px bg-[#C99A2E] md:inline-block"></span>
              </h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#C1EAC5] md:size-12">
              <ZoomIn className="size-5 md:size-6 text-[#2F8132]" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Quality
                <span className="absolute -left-px hidden h-6 w-px bg-[#2F8132] md:inline-block"></span>
              </h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
          <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FACDCD] md:size-12">
              <PersonStanding className="size-5 md:size-6 text-[#A61B1B]" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Accessibility
                <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block bg-[#A61B1B]"></span>
              </h3>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae
                tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
