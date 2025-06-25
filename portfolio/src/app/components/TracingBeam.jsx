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
  const [viewBox, setViewBox] = useState("0 0 20 0"); // Initialize with proper format

  // Original path data preserved
  const staticPath =
    "M -727 -727 V 720 L 740 875 V 1400 L -727 1550 V 4226 L 740 4381 V 5008";

  useEffect(() => {
    const updateDimensions = () => {
      if (contentRef.current) {
        const height = contentRef.current.offsetHeight;
        setSvgHeight(height);
        // Maintain original viewBox aspect ratio
        setViewBox(`0 0 20 ${height}`);
      }
    };

    const observer = new ResizeObserver(updateDimensions);
    if (contentRef.current) observer.observe(contentRef.current);

    // Initial update
    updateDimensions();

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]),
    { stiffness: 200, damping: 90 }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 200]),
    { stiffness: 300, damping: 90 }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full mx-auto h-full", className)}
    >
      <div className="absolute top-3 z-40 w-full lg:block hidden">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(200, 0, 0, 200) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border bg-red-600 border-red-600 shadow-sm flex items-center justify-center"
        ></motion.div>
        <svg
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height={svgHeight}
          className="inline-flex ml-1 w-full"
          aria-hidden="true"
        >
          <motion.path
            d={staticPath}
            fill="none"
            stroke="#ff0000"
            strokeOpacity="0.16"
            vectorEffect="non-scaling-stroke" // Preserve stroke width
            transition={{ duration: 6 }}
          />
          <motion.path
            d={staticPath}
            fill="none"
            stroke="url(#gradient)"
            vectorEffect="non-scaling-stroke" // Preserve stroke width
            className="motion-reduce:hidden"
            transition={{ duration: 4 }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
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
