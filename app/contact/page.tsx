import { ContactForm } from "@/components/contact/ContactForm";
import PageHero from "@/components/PageHero";
import React from "react";

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
          "https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2149721916.jpg?t=st=1741630249~exp=1741633849~hmac=974a5ec97767ba8618f84e746d7965557c9bec369664c3b8a45017c5e7c8f873&w=1060"
        }
      />
      <ContactForm />
    </main>
  );
}
