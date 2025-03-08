import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface PageHeroProps {
  title: string;
  imageSrc?: string | StaticImport;
  children?: React.ReactNode;
}

export default function PageHero({ title, imageSrc, children }: PageHeroProps) {
  return (
    <section className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
      <h1 className="mx-auto text-pretty py-14 text-center text-4xl font-medium md:py-16 md:text-5xl xl:max-w-4xl">
        {title}
      </h1>
      {!imageSrc ? (
        children
      ) : (
        <div className="container relative mx-auto aspect-video max-w-screen-xl lg:aspect-[5/2]">
          <Image
            src={imageSrc}
            alt="placeholder"
            fill
            className="rounded-md object-cover"
            priority
          />
        </div>
      )}
    </section>
  );
}
