"use client";
import { useEffect, useState } from "react";
import { usePageTransition } from "../context/TransitionContext";
import { AnimatePresence, motion } from "framer-motion";

export const PageTransitionOverlay = () => {
  const { isPageTransitioning, direction } = usePageTransition();
  const srcArray = [
    "/shy.svg",
    "/halo.svg",
    "/cryin.svg",
    "/blush.svg",
    "/laugh.svg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle emojis/images while transitioning
  useEffect(() => {
    if (!isPageTransitioning) return;

    const changeSrc = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === srcArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);

    return () => clearInterval(changeSrc);
  }, [isPageTransitioning]);

  // Reset index each time transition starts
  useEffect(() => {
    if (isPageTransitioning) setCurrentIndex(0);
  }, [isPageTransitioning]);

  // Decide styles based on direction
  const isLight = direction === "right";
  const bgColor = isLight ? "bg-white" : "bg-black";
  const textColor = isLight ? "text-black" : "text-white";

  return (
    <AnimatePresence>
      {isPageTransitioning && (
        <motion.div
          key="page-transition"
          initial={{ opacity: 0, scale: 1.25 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.25 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed h-screen inset-0 z-[9999] flex items-center text-center justify-center ${bgColor} ${textColor} text-xl font-sans tracking-wide`}
        >
          <div className="animate-pulse p-4">
            Don't be afraid to try something <br /> new...
            <motion.img
              key={currentIndex}
              src={srcArray[currentIndex]}
              className="w-12 h-12 inline-block"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
