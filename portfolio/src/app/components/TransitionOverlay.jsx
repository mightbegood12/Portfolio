"use client";
import { useEffect, useState } from "react";
import { usePageTransition } from "../context/TransitionContext";
import { AnimatePresence, motion } from "framer-motion";

export const PageTransitionOverlay = () => {
  const { isPageTransitioning } = usePageTransition();
  const srcArray = [
    "/shy.svg",
    "/halo.svg",
    "/cryin.svg",
    "/blush.svg",
    "/laugh.svg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isPageTransitioning) return;

    const changeSrc = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === srcArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);

    return () => clearInterval(changeSrc);
  }, [isPageTransitioning]);

  useEffect(() => {
    if (isPageTransitioning) setCurrentIndex(0);
  }, [isPageTransitioning]);

  return (
    <AnimatePresence>
      {isPageTransitioning && (
        <motion.div
          key="page-transition"
          initial={{ opacity: 0, scale: 1.25 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.25 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed h-screen inset-0 z-[9999] flex items-center text-center justify-center bg-black text-white text-xl font-sans tracking-wide"
        >
          <div className="animate-pulse p-4">
            You know what I'm thinking...
            <motion.img
              key={currentIndex}
              src={srcArray[currentIndex]}
              className="w-12 h-12 inline-block"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            />
            <br /> Nevermind.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

{
  /* {isPageTransitioning && (
    <>
      <motion.div
        key="page-transition"
        initial={{ opacity: 0, scale: 1, y: -200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1, y: 200 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed h-screen w-1/2 right-1/2 inset-0 z-[9999] flex items-center text-center justify-center bg-blue-400 text-white text-xl font-mono tracking-wide"
      ></motion.div>
      <motion.div
        key="page-transition-2"
        initial={{ opacity: 0, scale: 1, y: 200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1, y: -200 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed h-screen w-1/2 left-1/2 inset-0 z-[9999] flex items-center text-center justify-center bg-red-500 text-white text-xl font-mono tracking-wide"
      ></motion.div>
    </>
  )} */
}
