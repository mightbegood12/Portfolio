"use client";
import { useRef, useEffect } from "react";
// import { useState } from "react";
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
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const rightPanelTextRef = useRef("400px");
  const leftPanelTextRef = useRef("400px");
  // const [progress, setProgress] = useState();

  const router = useRouter();
  const { setIsPageTransitioning, setDirection } = usePageTransition();

  useEffect(() => {
    if (circleRef.current && containerRef.current) {
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
          const progress =
            (this.x - padding) / (container.width - circle.width - padding * 2);
          const clamped = Math.min(Math.max(progress, 0), 1).toFixed(2);
          const size1 = 240 + 320 * (1 - clamped); // smooth reduction
          const size2 = 350 + 110 * clamped; // smooth increase

          // Panels resize based on progress
          gsap.set(leftPanelRef.current, { width: `${(1 - clamped) * 100}%` });
          gsap.set(leftPanelTextRef.current, {
            fontSize: `${size2}px`,
            ease: "bounce.inOut",
          });
          gsap.set(rightPanelRef.current, { width: `${clamped * 100}%` });
          gsap.set(rightPanelTextRef.current, {
            fontSize: `${size1}px`,
            ease: "bounce.inOut",
          });
          // setProgress(`${size2} size, ${clamped} clamped`);
        },
        onRelease: async function () {
          const x = this.x;
          const center = (container.width - circle.width) / 2;
          const leftThreshold = padding + 10;
          const rightThreshold = container.width - circle.width - padding - 10;

          if (x < leftThreshold) {
            setIsPageTransitioning(true);
            setDirection("left");
            await sleep(500);
            router.push("/dark");
            await sleep(1400);
            setIsPageTransitioning(false);
          } else if (x >= rightThreshold) {
            setIsPageTransitioning(true);
            setDirection("right");
            await sleep(500);
            router.push("/light");
            await sleep(1200);
            setIsPageTransitioning(false);
          } else {
            // Snap back to center
            gsap.to(circleRef.current, {
              x: center,
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(leftPanelRef.current, {
              width: "50%",
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(rightPanelRef.current, {
              width: "50%",
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to([rightPanelTextRef.current, leftPanelTextRef.current], {
              fontSize: "400px",
              duration: 0.3,
              ease: "power2.out",
            });
            // setProgress(400);
          }
        },
      });

      // initial setup
      gsap.set(circleRef.current, {
        x: (container.width - circle.width) / 2,
      });
      gsap.set(leftPanelRef.current, { width: "50%" });
      gsap.set(rightPanelRef.current, { width: "50%" });

      return () => {
        draggable[0].kill();
      };
    }
  }, [router, setIsPageTransitioning, setDirection]);

  return (
    <div className="relative font-geistB overflow-hidden h-screen flex items-center justify-center">
      {/* LEFT (LIGHT) */}
      <div
        ref={rightPanelRef}
        className="absolute left-0 top-0 h-full bg-white flex items-center justify-center overflow-hidden"
      >
        <span
          className="text-[100px] md:text-[400px] font-bold text-black select-none"
          ref={rightPanelTextRef}
        >
          PROFESSION
        </span>
      </div>

      {/* RIGHT (DARK) */}
      <div
        ref={leftPanelRef}
        className="absolute right-0 top-0 h-full bg-black flex items-center justify-center overflow-hidden"
      >
        <span
          className="text-[100px] md:text-[400px] font-bold text-white select-none relative"
          ref={leftPanelTextRef}
        >
          PASSION
        </span>
      </div>

      {/* Switch Container */}
      <div
        ref={containerRef}
        className="switch-container w-[60%]  md:w-[40%] h-24 md:h-40 rounded-full bg-gray-400/20 relative z-10"
      >
        <div
          ref={circleRef}
          className="circle rounded-full h-24 w-24 md:h-36 md:w-36 bg-white absolute md:top-2"
        ></div>
      </div>

      {/* debug */}
      {/* <div className="text-orange-700 absolute top-24 left-0 z-50">
        {progress}
      </div> */}
    </div>
  );
};

export default Page;
