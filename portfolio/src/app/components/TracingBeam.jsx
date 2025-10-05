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
    "M -727 -727 V 720 L 740 875 V 1400 L -727 1550 V 4226 L 740 4381 V 5500";

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
        >
          <div className="h-4 w-4 rounded-full">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </motion.div>

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
