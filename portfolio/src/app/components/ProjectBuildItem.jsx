import React from "react";

const ProjectBuildItem = ({ src, text }) => {
  return (
    <div className="w-max h-max rounded-full flex gap-2 justify-around bg-slate-700/30 px-4 py-2">
      <img
        src={src}
        className="w-6 h-6 object-cover bg-transparent rounded-full p-[2px] text-center"
        alt={text}
      />
      <div className="text-white text-xs my-auto">{text}</div>
    </div>
  );
};

export default ProjectBuildItem;
