import { Mail, Phone } from "lucide-react";

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
        <a href="tel:+12334567890" className="flex items-center">
          <Phone
            className={`${isNavbar ? "mr-2 size-5" : "mr-4"} text-primary`}
          />
          <span className={isNavbar ? "" : "font-bold"}>
            {!isNavbar && "Phone: "}&nbsp;
          </span>
          <span className={`underline`}>(123) 34567890</span>
        </a>
      </li>
      <li className="flex items-center">
        <Mail className={`${isNavbar ? "mr-2 size-5" : "mr-4"} text-primary`} />
        <span className={isNavbar ? "" : "font-bold"}>
          {!isNavbar && "Email: "}&nbsp;
        </span>
        <a href="mailto:your-email@example.com" className={`underline`}>
          your-email@example.com
        </a>
      </li>
    </ul>
  );
};
