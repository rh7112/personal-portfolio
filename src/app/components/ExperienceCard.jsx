import React from "react";
import AccordionCard from "./AccordionCard";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function calculateTimeSpent(startDateStr, endDateStr) {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);

  if (years > 0) {
    return `${years} yr${years > 1 ? "s" : ""}. and ${months} mo${months !== 1 ? "s" : ""}.`;
  } else if (months > 0) {
    return `${months} mo${months !== 1 ? "s" : ""}.`;
  } else {
    return "Less than a month.";
  }
}

const ExperienceCard = ({
  title,
  startDate,
  endDate,
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
        {(() => {
          const formatDate = (dateStr) => {
            const date = new Date(dateStr);
            const monthIndex = date.getMonth();

            const monthNames = [
              "Jan.",
              "Feb.",
              "Mar.",
              "Apr.",
              "May",
              "Jun.",
              "Jul.",
              "Aug.",
              "Sep.",
              "Oct.",
              "Nov.",
              "Dec.",
            ];

            const month = monthNames[monthIndex];
            const year = "'" + date.getFullYear().toString().slice(-2);

            return `${month} ${year}`;
          };

          const formattedStart = formatDate(startDate);
          const formattedEnd = endDate ? formatDate(endDate) : "";

          return (
            <p className="text-blue-400 font-light text-sm">
              {formattedEnd === ""
                ? `${formattedStart}`
                : `${formattedStart} - ${formattedEnd}`}{" "}
              ({calculateTimeSpent(startDate, endDate)})
            </p>
          );
        })()}
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
