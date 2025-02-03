"use client";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/ui/parallax/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  },
);

const CTA = () => {
  return (
    <ParallaxContainer
      className="parallax-5"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1669317139155-912572c38362?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="relative">
        <div className="my-14 px-4 py-[clamp(3.75rem,7.82vw,6.25rem)] sm:px-6 sm:py-32 md:my-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="sm:text-5x text-balance text-4xl font-semibold tracking-tight text-coolGray-light1">
              Bring your vision to life. Get a free quote today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty font-headings text-xl/8 font-medium text-coolGray-light2">
              Beautiful interiors and polished exteriors start with the right
              team. Contact us today for expert painting that lasts.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 font-body">
              <button
                className="mx-auto cursor-pointer rounded-md bg-orange-500 px-[1em] py-[.75em] font-body text-lg font-bold text-orange-950 transition hover:bg-orange-700"
                aria-label="View Gallery of Drip's work"
              >
                SCHEDULE TODAY
              </button>
            </div>
            <div className="absolute inset-0 -z-10 bg-[rgba(30,34,40,.5)]" />
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default CTA;
