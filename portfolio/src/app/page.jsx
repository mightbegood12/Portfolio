"use client";

import { TransitionLink } from "@/lib/TransitionLink";

const page = () => {
  return (
    <div className="glow-bg h-screen overflow-y-scroll flex flex-row items-center justify-center">
      <TransitionLink
        href="/light"
        id="light-mode"
        delay={2400}
        className="h-screen absolute bg-white text-black left-0 w-[89%] text-center flex flex-row justify-start items-center"
      >
        <div className=" ml-24 text-lg p-4">Light</div>
      </TransitionLink>
      <TransitionLink
        href="/dark"
        id="dark-mode"
        delay={2400}
        className="h-screen absolute bg-black text-white right-0 w-[89%] text-center flex flex-row justify-end items-center"
      >
        <div className=" mr-24 text-lg p-4">Dark</div>
      </TransitionLink>
    </div>
  );
};

export default page;
