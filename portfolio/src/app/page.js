"use client";
import { useEffect, useState } from "react";
import { Boxes } from "./components/Boxes";
import Navbar from "./components/Navbar";
import Typewriter from "typewriter-effect";
import { TracingBeam } from "./components/TracingBeam";
import { motion } from "framer-motion";
import { ScaleLoader } from "react-spinners";

const page = () => {
  const [quote, setQuote] = useState({
    content:
      "Power comes in response to a need, not a desire. You have to create that need.",
    anime: {
      id: 525,
      name: "Dragon Ball Z",
    },
    character: {
      id: 2480,
      name: "Goku",
    },
  });
  const [loading, isLoading] = useState(false);
  const fetchQuote = async () => {
    try {
      isLoading(true);
      const response = await fetch("/api/anime-quotes");
      const data = await response.json();
      if (data.status === "success") {
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
  console.log(quote);
  return (
    <div className="snap-y snap-mandatory select-none">
      <header className="sticky top-0 mx-auto z-[99]">
        <Navbar />
      </header>
      <TracingBeam>
        <section id="hero" className="h-screen snap-always snap-center w-full">
          <div className="h-[50%] w-full overflow-hidden relative flex bg-black font-sans flex-col items-center">
            <div className="absolute inset-0 w-full h-full bg-black z-30 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className="select-none content text-[4rem] md:text-[8rem] mt-20 z-30">
              <h2>Magesh</h2>
              <h2>Magesh</h2>
            </div>
            <div className="z-50 font-normal text-[#ff0000] text-end text-[3rem] mt-20 ml-[10rem] md:mt-36 md:ml-[13rem]">
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
          <motion.div
            className="h-[50%] w-full overflow-hidden relative flex font-sans flex-col items-center justify-center "
            initial={{
              opacity: 0,
              translateZ: "-40%",
              scaleX: 0,
              scaleY: 0,
            }}
            whileInView={{ opacity: 1, translateX: 0, scaleX: 1, scaleY: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: "true" }}
          >
            <img
              src="/ink_splash_mask.png"
              className="absolute w-[50%] translate-x-[3rem]  h-auto"
            />
            {!loading ? (
              <motion.div
                className="flex flex-col font-mono items-center gap-2 z-20 text-pre text-white justify-center"
                initial={{
                  opacity: 0,
                  translateX: "-4rem",
                }}
                whileInView={{
                  opacity: 1,
                  translateX: 0,
                }}
                transition={{ duration: 1, type: "tween" }}
              >
                <div className="text-2xl font-sans ">Quote of the day!</div>
                <blockquote className="text-xl w-[24rem]">
                  "{quote.content}"
                </blockquote>
                <div className="self-end mb-4 ">- {quote.character.name}</div>
              </motion.div>
            ) : (
              <ScaleLoader color="#ffffff" height={35} radius={20} />
            )}
          </motion.div>
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
              className="absolute w-[48rem] -top-[5px] right-[15px] skew-y-[6deg]"
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
              className="absolute w-[52rem] top-[5px] left-[15px] -skew-y-[6deg]"
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
              className="absolute w-[52rem] top-6 right-[15px] skew-y-[6deg]"
            ></img>
          </motion.div>
        </section>
      </TracingBeam>
    </div>
  );
};

export default page;
