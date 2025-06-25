"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const wordsArray = words.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordAnimation = {
    hidden: {
      opacity: 0,
      filter: filter ? "blur(10px)" : "none",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={cn("font-bold", className)}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-4 text-white text-sm md:text-xl leading-snug tracking-wide"
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            variants={wordAnimation}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
