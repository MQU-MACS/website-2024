"use client";
import { useEffect, useRef, useState } from "react";

type Options = {
  threshold: number;
  reappear?: boolean;
};

const useElementOnScreen = (
  options: Options
): [React.RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const makeAppear = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) setIsVisible(true);
  };

  const makeAppearRepeating = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callBack = options.reappear ? makeAppearRepeating : makeAppear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callBack, options);
    if (containerRefCurrent) observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callBack]);

  return [containerRef, isVisible];
};

type Props = {
  children: React.ReactNode;
  reappear?: boolean;
  threshold?: number;
  animationDirection?:
    | "left-to-right"
    | "right-to-left"
    | "top-to-bottom"
    | "bottom-to-top";
};

const AnimateOnScroll = ({
  children,
  reappear,
  threshold = 0.3,
  animationDirection,
}: Props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  return (
    <>
      <div
        ref={containerRef}
        className={`transition duration-500 ${
          isVisible
            ? `opacity-100 transform ${
                animationDirection === "left-to-right"
                  ? "translate-x-0"
                  : animationDirection === "right-to-left"
                  ? "-translate-x-0"
                  : animationDirection === "bottom-to-top"
                  ? "translate-y-0"
                  : "translate-y-0"
              } blur-none`
            : `opacity-0 transform ${
                animationDirection === "left-to-right"
                  ? "translate-x-20 md:translate-x-50"
                  : animationDirection === "right-to-left"
                  ? "-translate-x-20 md:-translate-x-10"
                  : animationDirection === "bottom-to-top"
                  ? "translate-y-20 md:translate-y-10"
                  : "-translate-y-20 md:-translate-y-10"
              } blur-lg`
        } motion-reduce:hover:transform-none`}
      >
        {children}
      </div>
    </>
  );
};

export default AnimateOnScroll;
