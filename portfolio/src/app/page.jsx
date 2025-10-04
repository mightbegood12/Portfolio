"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { usePageTransition } from "@/app/context/TransitionContext";

gsap.registerPlugin(Draggable);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Page = () => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null); // wrapper for dynamic background
  const router = useRouter();
  const { setIsPageTransitioning, setDirection } = usePageTransition();

  useEffect(() => {
    if (circleRef.current && containerRef.current && wrapperRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const circle = circleRef.current.getBoundingClientRect();
      const padding = 20;

      const draggable = Draggable.create(circleRef.current, {
        type: "x",
        bounds: {
          minX: padding,
          maxX: container.width - circle.width - padding,
        },
        inertia: true,
        onDrag: function () {
          // progress between 0 and 1
          const progress =
            (this.x - padding) / (container.width - circle.width - padding * 2);

          // clamp between 0–1
          const clamped = Math.min(Math.max(progress, 0), 1);

          // gradient shift based on progress
          const stop = Math.round(clamped * 100);

          wrapperRef.current.style.background = `linear-gradient(
            90deg,
            rgba(255,255,255,1) ${stop}%,
            rgba(0,0,0,1) ${stop}%
          )`;
        },
        onRelease: async function () {
          const x = this.x;
          const center = (container.width - circle.width) / 2;
          const leftThreshold = padding + 10;
          const rightThreshold = container.width - circle.width - padding - 10;

          if (x < leftThreshold) {
            // transition to dark (Left Side)
            setIsPageTransitioning(true);
            setDirection("left");
            await sleep(500);
            router.push("/dark");
            await sleep(1400);
            setIsPageTransitioning(false);
          } else if (x >= rightThreshold) {
            // transition to light (Right Side)
            setIsPageTransitioning(true);
            setDirection("right");
            await sleep(500);
            router.push("/light");
            await sleep(1200);
            setIsPageTransitioning(false);
          } else {
            // Animate back to center
            gsap.to(circleRef.current, {
              x: center,
              duration: 0.4,
              ease: "power2.out",
            });

            // Reset gradient to center
            wrapperRef.current.style.background = `linear-gradient(
              90deg,
              rgba(255,255,255,1) 50%,
              rgba(0,0,0,1) 50%
            )`;
          }
        },
      });

      // Set circle at center initially
      gsap.set(circleRef.current, {
        x: (container.width - circle.width) / 2,
      });

      // Initial gradient center
      wrapperRef.current.style.background = `linear-gradient(
        90deg,
        rgba(255,255,255,1) 50%,
        rgba(0,0,0,1) 50%
      )`;

      return () => {
        draggable[0].kill();
      };
    }
  }, [router, setIsPageTransitioning, setDirection]);

  return (
    <div
      ref={wrapperRef}
      className="mix-blend-difference font-geistB overflow-hidden h-screen flex flex-row items-center justify-center transition-colors duration-300"
    >
      <div
        ref={containerRef}
        className="switch-container w-[40%] h-40 rounded-full bg-gray-400 relative"
      >
        <div
          ref={circleRef}
          className="circle rounded-full h-36 w-36 bg-white absolute top-2"
        ></div>
      </div>
    </div>
  );
};

export default Page;
