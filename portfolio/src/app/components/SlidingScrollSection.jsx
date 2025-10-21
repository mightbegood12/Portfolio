import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "@/lib/isomorphicLayout";
import { motion } from "framer-motion";
import HorizontalSectionPanel from "./HorizontalSectionPanel";

gsap.registerPlugin(ScrollTrigger);

export default function SlidngScroll({ id, src }) {
  const horizontalSection = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".horizontal-panel");
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: "top top",
          end: "+=300%",
          scrub: 0.5,
          snap: {
            snapTo: 1 / (slides.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
          },
        },
      });
    }, horizontalSection);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id={id}
        className="h-screen snap-always snap-center flex z-40 bg-transparent relative"
        ref={horizontalSection}
      >
        <motion.div
          className="text-8xl text-center z-20 absolute top-[5px] left-[15px]"
          initial={{
            opacity: 0,
            translateX: "40%",
            scaleX: 0.5,
            scaleY: 0.6,
          }}
          whileInView={{ opacity: 1, translateX: 0, scaleX: 1, scaleY: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ margin: "60px 0px -60px 0px" }}
        >
          <img
            src={src}
            className=" w-[18rem] md:mt-0 mt-12 md:w-[32rem] lg:w-[52rem] -skew-y-[6deg]"
          ></img>
        </motion.div>
        <HorizontalSectionPanel
          src="cine-rush-demo-cropped.gif"
          title="CineRush"
          subtitle="AI agent for Movie Ticket Booking"
          href="https://cine-rush.vercel.app/"
          github="https://github.com/mightbegood12/cineRush"
          content="CineRush is an AI-powered movie ticket booking platform designed to
streamline and modernize the reservation process. Unlike traditional systems that
require manual filtering and multiple steps, CineRush leverages natural language
processing (NLP) and intelligent automation to offer a seamless and user-friendly
experience"
          react
          hyperbrowser
          nodejs
          tailwind
        />
        <HorizontalSectionPanel
          src="fresh-mart-demo.gif"
          title="Fresh Mart"
          subtitle="eGrocery web app"
          github="https://github.com/mightbegood12/Fresh_Mart"
          href="https://freshmart-tau.vercel.app/"
          content="Fresh Mart is a comprehensive grocery web application built
                using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                It is designed to revolutionize the online grocery shopping
                experience by combining modern technology with user-centric
                features."
          react
          vite
          tailwind
          nodejs
          // express
        />
        <HorizontalSectionPanel
          src="enotes-app.png"
          title="eNotes"
          subtitle="Apple like notes in web"
          github="https://github.com/mightbegood12/eNotes-app"
          href="https://enotes-app.vercel.app"
          content="eNotes is a modern note-taking web application built using React,
           Vite, Tailwind CSS, and Supabase (PostgreSQL). It is designed to streamline 
           personal productivity by combining a rich text and Markdown editor with 
           real-time data synchronization, secure authentication, and an intuitive, 
           user-friendly interface."
          react
          tailwind
          nodejs
          supabase
        />
      </section>
    </>
  );
}
