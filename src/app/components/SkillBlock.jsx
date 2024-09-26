import React from "react";

const SkillBlock = (icon, title, level) => {
  const levelColor = {
    Experienced: "text-orange-700",
    Intermediate: "text-blue-400",
    Beginner: "text-green-700",
  }[level];

  return (
    <article className="flex gap-2 bg-slate-800 p-2.4 rounded-2 border border-transparent transition-all hover:bg-bg-variant-transparent hover:border-white justify-start items-center">
      {React.createElement(icon, { className: "h-6 w-6 sm:ml-2 sm:mt-2 sm:mb-2" })}
      <div className="flex-1 flex flex-wrap gap-2 justify-center">
        <h4>{title}</h4>
        <small className={`${levelColor}`}>{level}</small>
      </div>
    </article>
  );
};

export default SkillBlock;
