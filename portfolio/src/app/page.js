import React from "react";
import { Boxes } from "./components/Boxes";
import Navbar from "./components/Navbar";

const nicknames = ["DEV", "SON", "GAMER", ""];

const page = () => {
  return (
    <>
      <header className="sticky top-0 mx-auto z-50">
        <Navbar />
      </header>
      <section
        id="hero"
        className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center font-sans rounded-lg"
      >
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="select-none content text-[8rem] mt-20 z-30">
          <h2>Magesh</h2>
          <h2>Magesh</h2>
        </div>
      </section>
      <section id="about" className="h-screen bg-black"></section>
      <section id="projects"></section>
      <section id="contact"></section>
    </>
  );
};

export default page;
