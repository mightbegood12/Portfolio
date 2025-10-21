import React from "react";

const ProjectBuildItem = ({ src, text }) => {
  return (
    <>
      <div className="relative group overflow-hidden w-max cursor-default h-max rounded-full flex gap-2 justify-around bg-slate-700/30 px-4 py-2">
        <div className="w-4 h-full bg-white absolute top-0 -skew-x-12 group-hover:animate-shine group-hover:opacity-10 opacity-0 blur-sm"></div>
        <img
          src={src}
          className="w-6 h-6 object-cover bg-transparent rounded-full p-[2px] text-center"
          alt={text}
        />
        <div className="md:block hidden text-white text-xs my-auto">{text}</div>
      </div>
    </>
  );
};

export default ProjectBuildItem;
