import React from "react";
import AccordionCard from "./AccordionCard";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const parseDateRange = (dateRange) => {
  if (dateRange.includes("-")) {
    return dateRange.split(" - ");
  } else if (dateRange.includes("Since")) {
    return [
      dateRange.replace("Since ", ""),
      new Date().toLocaleString("default", { month: "long", year: "numeric" }),
    ];
  } else {
    return [
      dateRange,
      new Date().toLocaleString("default", { month: "long", year: "numeric" }),
    ];
  }
};

const calculateTimeSpent = (dateRange) => {
  const [startDate, endDate] = parseDateRange(dateRange);
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffDays = Math.round((end - start) / (1000 * 3600 * 24));
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
};

const ExperienceCard = ({
  title,
  dateRange,
  jobTitle,
  description,
  accordionItems = null,
}) => {
  const titleLabels = {
    "Sweetwater Sound Inc.": "Teams",
    "Zimmer Biomet": "Responsibilities",
    "Black's Concrete Construction": "Positions",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-800 rounded-lg shadow p-4">
      <div className="flex items-center mb-2">
        <h3 className="mr-2">{title}</h3>
        <p className="text-blue-400 font-light text-sm">
          {dateRange} ({calculateTimeSpent(dateRange)})
        </p>
      </div>
      <p className="text-orange-700 mb-3 font-bold">{jobTitle}</p>
      <p className="text-gray-200">{description}</p>

      {accordionItems?.length > 0 && (
        <Accordion>
          <AccordionItem
            className="mt-2 bg-slate-700 text-blue-400"
            aria-label={titleLabels}
            title={titleLabels[title] || ""}
            indicator={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            onPress={() => setIsOpen(!isOpen)}
          >
            <AccordionCard
              items={accordionItems}
              style="w-11/12 m-auto bg-slate-800 text-white"
            />
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

export default ExperienceCard;
