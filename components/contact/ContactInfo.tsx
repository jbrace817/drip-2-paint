import { Mail, Phone } from "lucide-react";
import Link from "next/link";

interface ContactInfoProps {
  variant?: "navbar" | "contact";
  className?: string;
}

export const ContactInfo = ({
  variant = "contact",
  className = "",
}: ContactInfoProps) => {
  const isNavbar = variant === "navbar";

  return (
    <ul className={`space-y-${isNavbar ? "4" : "6"} ${className}`}>
      <li>
        <Link href="tel:+12334567890" className="flex items-center">
          <Phone
            className={`${isNavbar ? "mr-2 size-5" : "mr-4"} text-primary`}
          />
          <span className={isNavbar ? "" : "font-bold"}>
            {!isNavbar && "Phone: "}&nbsp;
          </span>
          <span className={`text-coolGray-dark5 underline lg:no-underline`}>
            (123) 34567890
          </span>
        </Link>
      </li>
      <li className="flex items-center">
        <Link
          href="mailto:your-email@example.com"
          className="group flex items-center"
        >
          <Mail
            className={`${isNavbar ? "mr-2 size-5" : "mr-4"} text-primary`}
          />
          <span className={isNavbar ? "" : "font-bold"}>
            {!isNavbar && "Email: "}&nbsp;
          </span>
          <span
            className={`${isNavbar ? "underline lg:relative lg:no-underline" : "underline"} text-coolGray-dark5`}
          >
            your-email@example.com
            {isNavbar && (
              <span className="absolute bottom-0 left-0 hidden h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full lg:block"></span>
            )}
          </span>
        </Link>
      </li>
    </ul>
  );
};
