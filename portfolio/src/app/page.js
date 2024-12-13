import React from "react";
import { Boxes } from "./components/Boxes";
import Navbar from "./components/Navbar";
import { GradualSpacing } from "./components/Gradual_Spacing";

const nicknames = ["DEV", "SON", "GAMER", ""];

const page = () => {
  return (
    <div className="snap-y snap-mandatory">
      <header className="sticky top-0 mx-auto z-50">
        <Navbar />
      </header>
      <section id="hero" className="h-screen snap-always snap-center w-full">
        <div className="h-96 w-full overflow-hidden relative flex bg-black font-sans flex-col items-center">
          <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <div className="select-none content text-[8rem] mt-20 z-30">
            <h2>Magesh</h2>
            <h2>Magesh</h2>
          </div>
          <div className="z-30 select-none text-[4rem] mt-40 ml-[20rem]">
            <GradualSpacing text={"DEV"} />
          </div>
        </div>
      </section>
      <section id="about" className="h-screen snap-always snap-center bg-black">
        <div className="text-4xl text-center">ABOUT</div>
      </section>
      <section
        id="projects"
        className="h-screen snap-always snap-center bg-black"
      >
        <div className="text-4xl text-center">PROJECTS</div>
      </section>
      <section
        id="contact"
        className="h-screen snap-always snap-center bg-black"
      >
        <div className="text-4xl text-center">CONTACT</div>
      </section>
    </div>
  );
};

export default page;
