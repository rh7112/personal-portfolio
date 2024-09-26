import React from "react";

const ProjectTag = ({ name, onClick, isSelected, department }) => {
  const buttonStyles = isSelected
    ? "text-black font-bold border-orange-500 bg-slate-400"
    : department
    ? "text-[#ADB7BE] border-blue-400 hover:border-white"
    : "text-[#ADB7BE] border-green-700 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
