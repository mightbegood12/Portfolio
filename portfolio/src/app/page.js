"use client";
import { useEffect, useState } from "react";
import { Boxes } from "./components/Boxes";
import Navbar from "./components/Navbar";
import Typewriter from "typewriter-effect";
import { TracingBeam } from "./components/TracingBeam";
import { motion } from "framer-motion";
import { ScaleLoader } from "react-spinners";
import { TextGenerateEffect } from "./components/text-generate";

const page = () => {
  const [quote, setQuote] = useState({
    author: "Mingyur Rinpoche",
    quote:
      "At any given moment, you can choose to follow the chain of thoughts, emotions, and sensations that reinforce a perception of yourself as vulnerable and limited, or to remember that your true nature is pure, unconditioned, and incapable of being harmed.",
  });
  const [loading, isLoading] = useState(false);
  const fetchQuote = async () => {
    try {
      isLoading(true);
      const response = await fetch("/api/stoic-quotes");
      const data = await response.json();
      if (data) {
        setQuote(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoading(false);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div className="snap-y w-full h-full snap-mandatory select-none">
      <header className="sticky top-0 mx-auto z-[99]">
        <Navbar />
      </header>
      <TracingBeam>
        <section id="hero" className="h-screen snap-always snap-center w-full">
          <div className="h-[50%] w-full overflow-hidden relative flex bg-black font-sans flex-col items-center">
            <div className="absolute inset-0 w-full h-full bg-black z-30 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className="select-none content text-[4rem] md:text-[8rem] mt-40 md:mt-20 z-30">
              <h2>Magesh</h2>
              <h2>Magesh</h2>
            </div>
            <div className="z-50 font-normal text-[#ff0000] text-end text-[1rem] md:text-[2rem] lg:text-[3rem] mt-20 ml-[4rem] lg:ml-[12rem] md:mt-36 md:ml-[13rem]">
              <Typewriter
                options={{
                  strings: [
                    "WEBDEV",
                    "ARTIST",
                    "INQUISTIVE",
                    "OPTIMIST",
                    "YAREYARE",
                    "??????",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  delay: 100,
                }}
              />
            </div>
          </div>
          <div className="h-[50%] w-full overflow-hidden relative  z-20 flex font-sans flex-col items-center justify-center ">
            {!loading ? (
              <motion.div
                className="flex flex-col md:flex-row font-mono items-center gap-8 text-pretty text-white justify-center"
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
                <div className="text-4xl font-sans ">Quote of the day!</div>
                <div className="w-32 h-[2px] md:w-[2px] md:h-32 bg-slate-400 blur-[1px]" />
                <blockquote className="text-xl w-[12rem] md:w-[28rem]">
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
              <ScaleLoader color="#ffffff" height={35} radius={20} />
            )}
          </div>
        </section>
        <section
          id="about"
          className="h-screen snap-always snap-center bg-black relative"
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
              src="/ABOUT2.svg"
              className="absolute w-[18rem] md:w-[32rem] lg:w-[48rem] -top-[5px] right-[15px] skew-y-[6deg]"
            ></img>
          </motion.div>
        </section>
        <section
          id="projects"
          className="h-screen snap-always snap-center bg-black relative"
        >
          <motion.div
            className="text-8xl text-center"
            initial={{
              opacity: 0,
              translateX: "20%",
              scaleX: 0.5,
              scaleY: 0.6,
            }}
            whileInView={{ opacity: 1, translateX: 0, scaleX: 1, scaleY: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ margin: "60px 0px -60px 0px" }}
          >
            <img
              src="/PROJECTS2.svg"
              className="absolute w-[18rem] md:w-[32rem] lg:w-[52rem] top-[5px] left-[15px] -skew-y-[6deg]"
            ></img>
          </motion.div>
        </section>
        <section
          id="contact"
          className="h-screen snap-always snap-center bg-black relative"
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
        </section>
      </TracingBeam>
    </div>
  );
};

export default page;
