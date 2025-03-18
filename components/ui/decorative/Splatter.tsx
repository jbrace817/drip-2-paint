import Image from "next/image";
import splatter from "@/public/images/decorative/splatter.svg";

type SplatterProps = {
  twClass: string;
};

export default function Splatter({ twClass }: SplatterProps) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Image
        src={splatter}
        alt=""
        width={284} //og - 404
        height={384} //og - 384
        className={twClass}
      />
    </div>
  );
}
