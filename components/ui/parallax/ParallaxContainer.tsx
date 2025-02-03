import { jarallax } from "jarallax";
import { useEffect } from "react";

type ParallaxContainerProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
  className: string;
};

export default function ParallaxContainer(props: ParallaxContainerProps) {
  useEffect(() => {
    jarallax(document.querySelectorAll(".parallax-5"), {
      speed: 0.5,
    });
  }, []);
  return (
    <div
      //   ref={parallax.ref}
      {...props}
    >
      {props.children}
    </div>
  );
}
