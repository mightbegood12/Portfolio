"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]),
    {
      stiffness: 200,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 200]),
    {
      stiffness: 300,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full mx-auto h-full ", className)}
    >
      <div className="absolute top-3 z-[80]">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(200, 0, 0, 200) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border bg-red-600 border-red-600 shadow-sm flex items-center justify-center"
        ></motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="100%"
          height={svgHeight}
          className="inline-flex ml-1 w-screen"
          aria-hidden="true"
        >
          <motion.path
            d={`M -727 -727 V 720 L 740 875 V 1400 L -727 1555 V 2120 L 727 2275 V 2806`}
            fill="none"
            stroke="#ff0000"
            strokeOpacity="0.16"
            transition={{
              duration: 6,
            }}
          ></motion.path>
          <motion.path
            d={`M -727 -727 V 720 L 740 875 V 1400 L -727 1555 V 2120 L 727 2275 V 2806`}
            // d={`M 2 0V -36 l 18 24V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
            transition={{
              duration: 4,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              // set y1 for gradient
              y1={y1}
              // set y2 for gradient
              y2={y2}
            >
              <stop stopColor="#ff0000" stopOpacity="0"></stop>
              <stop stopColor="#ff0000e2"></stop>
              <stop offset="0.325" stopColor="#a30303"></stop>
              <stop offset="1" stopColor="#ff0000" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
