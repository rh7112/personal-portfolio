import React from "react";

function calculateTimeSpent(dateRange) {
  let startDate, endDate;

  if (dateRange.includes("-")) {
    [startDate, endDate] = dateRange.split(" - ");
  } else if (dateRange.includes("Since")) {
    startDate = dateRange.replace("Since ", "");
    endDate = new Date().toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
  } else {
    startDate = dateRange;
    endDate = new Date().toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  const days = Math.floor((diffDays % 365) % 30);

  if (years > 0) {
    return `${years} yr${years > 1 ? "s" : ""}. and ${months} mo${
      months > 1 ? "s" : ""
    }.`;
  } else if (months > 0) {
    return `${months} mo${months > 1 ? "s" : ""}.`;
  }
}

const ExperienceCard = ({ title, dateRange, jobTitle, description }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow p-4">
      <div className="flex items-center mb-2">
        <h3 className="mr-2">{title}</h3>
        <p className="text-orange-700 font-light text-sm">
          {dateRange} ({calculateTimeSpent(dateRange)})
        </p>
      </div>
      <p className="text-blue-400">{jobTitle}</p>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default ExperienceCard;
