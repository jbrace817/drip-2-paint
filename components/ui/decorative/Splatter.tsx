import Image from "next/image";

type SplatterProps = {
  twClass: string;
};

export default function Splatter({ twClass }: SplatterProps) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Image
        src="https://res.cloudinary.com/dsjx8ner3/image/upload/v1739853730/83039045_Paints_lin7ml.svg"
        alt=""
        width={284} //og - 404
        height={384} //og - 384
        className={twClass}
      />
    </div>
  );
}
