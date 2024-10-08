import React from "react";

const EducationCard = ({ degree, institution, icon }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow p-4 mb-4 flex items-center">
      {icon}
      <div className="ml-4">
        <h4 className="text-orange-700 font-bold">{degree}</h4>
        <p className="text-blue-400 font-light">{institution}</p>
      </div>
    </div>
  );
};

export default EducationCard;
