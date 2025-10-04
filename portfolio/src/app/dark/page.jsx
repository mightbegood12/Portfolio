"use client";
import { useCallback, useEffect, useState } from "react";
// import { Boxes } from "@/app/components/Boxes";
import Typewriter from "typewriter-effect";
import { TracingBeam } from "@/app/components/TracingBeam";
import { motion } from "framer-motion";
// import { ScaleLoader } from "react-spinners";
import { TextGenerateEffect } from "@/app/components/TextGenerateEffect";
import { TransitionLink } from "@/lib/TransitionLink";
import SlidngScrollSection from "../components/SlidingScrollSection";
// let item = gsap.utils.toArray(".item");

const Page = () => {
  const [quote, setQuote] = useState({
    author: "Mingyur Rinpoche",
    quote:
      "At any given moment, you can choose to follow the chain of thoughts, emotions, and sensations that reinforce a perception of yourself as vulnerable and limited, or to remember that your true nature is pure, unconditioned, and incapable of being harmed.",
  });
  const [loading, setLoading] = useState(false);
  const fetchQuote = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/stoic-quotes");
      const data = await response.json();
      if (data?.data) {
        setQuote(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div className="snap-y w-full h-full snap-mandatory">
      <TransitionLink
        href="/"
        left
        delay={1400}
        className="group rounded-full w-max p-2 text-center m-4 absolute cursor-pointer right-0 z-[99]"
      >
        <img src="/SWITCH_THEME.svg" className="w-6 h-6"></img>
        <div className="group-hover:opacity-100 opacity-0 transition-all absolute w-max -translate-x-24 font-sans text-white bg-gray-600/40 px-4 py-2 rounded-lg">
          Switch Theme
        </div>
      </TransitionLink>
      <TracingBeam>
        <section id="hero" className="h-screen snap-always snap-center w-full">
          <div className="h-[50%] w-full overflow-hidden relative flex bg-black font-sans flex-col items-center">
            <div className="absolute inset-0 w-full h-full bg-black z-30 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            {/* <Boxes /> */}
            <div className="select-none content text-[4rem] md:text-[8rem] mt-40 md:mt-20 z-30">
              <h2>Magesh</h2>
              <h2>Magesh</h2>
            </div>
            <div className="z-50 will-change-contents font-normal text-[#ff0000] text-end text-[1rem] md:text-[2rem] lg:text-[3rem] mt-20 ml-[1rem] lg:ml-[12rem] md:mt-36 md:ml-[13rem]">
              <Typewriter
                options={{
                  strings: ["WEBDEV", "GAMER", "LURKING", "SIKE", "??????"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: "natural",
                }}
              />
            </div>
          </div>
          <div className="h-[50%] w-full overflow-hidden relative z-20 flex font-sans flex-col items-center justify-center bg-black">
            {!loading ? (
              <motion.div
                className="flex flex-col md:flex-row font-mono items-center gap-4 md:gap-8 text-pretty text-white justify-center"
                initial={{
                  opacity: 0,
                  translateX: "-4rem",
                }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                }}
                transition={{ duration: 1, type: "tween" }}
                viewport={{ once: true }}
              >
                <div className="text-xl md:text-4xl font-sans ">
                  Quote of the day!
                </div>
                <div className="w-32 h-[2px] md:w-[2px] md:h-32 bg-slate-400 blur-[1px]" />
                <blockquote className="text-sm md:text-xl w-[12rem] md:w-[28rem] text-white">
                  <TextGenerateEffect words={`"${quote.quote}"`} />
                </blockquote>
                <motion.div
                  initial={{
                    opacity: 0,
                    translateX: "-8rem",
                  }}
                  whileInView={{
                    opacity: 1,
                    translateX: 0,
                  }}
                  transition={{ duration: 2, type: "tween" }}
                  viewport={{ once: true }}
                  className="self-end mb-4 "
                >
                  - {quote.author ? quote.author : "Anonymous"}
                </motion.div>
              </motion.div>
            ) : (
              <div className="flex flex-col md:flex-row font-mono items-center gap-4 md:gap-8 text-pretty text-white justify-center">
                <div className="text-xl md:text-4xl font-sans ">
                  Quote of the day!
                </div>
                <div className="w-32 h-[2px] md:w-[2px] md:h-32 bg-slate-400 blur-[1px]" />
                <blockquote className="text-sm md:text-xl w-[12rem] md:w-[28rem] text-white flex flex-col gap-2">
                  <div className="animate-pulse w-full h-4 bg-white/40 rounded-lg"></div>
                  <div className="animate-pulse w-96 h-4 bg-white/40 rounded-lg"></div>
                  <div className="animate-pulse w-24 h-4 bg-white/40 rounded-lg"></div>
                </blockquote>
                <div className="self-end mb-4 ">
                  {/* - {quote.author ? quote.author : "Anonymous"} */}{" "}
                  <div className="animate-pulse w-24 h-4 bg-white/40 rounded-lg"></div>
                </div>
              </div>
            )}
          </div>
        </section>
        <section
          id="about"
          className="h-screen snap-always snap-center bg-transparent flex justify-center items-center relative z-40"
        >
          <motion.div
            className="text-8xl text-center absolute -top-[5px] right-[15px]"
            initial={{
              opacity: 0,
              translateX: "-40%",
              scaleX: 0.5,
              scaleY: 0.6,
            }}
            whileInView={{ opacity: 1, translateX: 0, scaleX: 1, scaleY: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ margin: "60px 0px -60px 0px" }}
          >
            <img
              src="/ABOUT2.svg"
              className="w-[18rem] md:w-[32rem] lg:w-[48rem]  skew-y-[6deg]"
            ></img>
          </motion.div>
          <motion.div
            className="bg-transparent w-[80%] h-[80%] flex items-center text-center justify-center text-white text-xl font-mono"
            initial={{
              opacity: 0,
              translateX: "-20%",
              scaleX: 0.5,
              scaleY: 0.6,
            }}
            whileInView={{ opacity: 1, translateX: 0, scaleX: 1, scaleY: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ margin: "60px 0px -60px 0px" }}
          >
            Yet to Implement
          </motion.div>
        </section>
        <SlidngScrollSection id="projects" src="/PROJECTS2.svg" />
        <section
          id="contact"
          className="h-screen snap-always snap-center bg-transparent relative z-40"
        >
          <motion.div
            className="text-8xl text-center"
            initial={{
              opacity: 0,
              translateX: "-20%",
              scaleX: 0.5,
              scaleY: 0.6,
            }}
            whileInView={{ opacity: 1, translateX: 0, scaleX: 1, scaleY: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ margin: "60px 0px -60px 0px" }}
          >
            <img
              src="/CONTACT2.svg"
              className="absolute w-[18rem] md:w-[32rem] lg:w-[52rem] top-6 right-[15px] skew-y-[6deg]"
            ></img>
          </motion.div>
          <motion.div
            className="bg-transparent w-full h-full flex items-center text-center justify-center text-white text-xl font-mono"
            initial={{
              opacity: 0,
              translateX: "-20%",
              scaleX: 0.5,
              scaleY: 0.6,
            }}
            whileInView={{ opacity: 1, translateX: 0, scaleX: 1, scaleY: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ margin: "60px 0px -60px 0px" }}
          >
            Yet to Implement
          </motion.div>
        </section>
        <section
          id="footer"
          className="h-[20vh] snap-always snap-center bg-transparent relative z-40"
        >
          <motion.div
            className="bg-transparent leading-5 w-full h-full flex items-end text-center justify-center text-white/40 text-sm font-mono font-thin"
            initial={{
              opacity: 0,
              translateY: "40%",
            }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ margin: "60px 0px -60px 0px" }}
          >
            <div className="flex flex-row gap-2 h-24 justify-center items-center">
              Made with
              <img src="./nextjs.svg" className="w-6 opacity-80" />
              {"  "} &
              <img src="./gsap.svg" className="w-12 opacity-80" />
            </div>
          </motion.div>
        </section>
      </TracingBeam>
    </div>
  );
};

export default Page;
