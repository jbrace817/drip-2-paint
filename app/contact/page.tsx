import PageHero from "@/components/PageHero";
import React from "react";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  ssr: false,
});

export default function ContactPage() {
  const title = (
    <div className="mx-auto lg:text-left">
      <h1 className="mx-auto mb-2 text-pretty pt-14 text-center text-4xl font-medium md:pt-16 md:text-5xl xl:max-w-4xl">
        Contact Us
      </h1>
      <p className="mx-auto text-pretty pb-14 text-center text-muted-foreground md:max-w-xl md:pb-16">
        Ready to transform your home with a fresh coat of paint? We&apos;re here
        to discuss your project and provide free estimates.
      </p>
    </div>
  );
  return (
    <main className="py-0 md:px-4 xl:px-6">
      <PageHero
        title={title}
        imageSrc={
          "https://res.cloudinary.com/dsjx8ner3/image/upload/v1742866400/contactHero_luayxo.webp"
        }
      />
      <ContactForm />
    </main>
  );
}
