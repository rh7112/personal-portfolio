import { Accordion, AccordionItem } from "@heroui/accordion";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const AccordionCard = ({ items, style }) => {
  const [accordionStates, setAccordionStates] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.title]: false }), {})
  );

  const toggleAccordion = (title) => {
    setAccordionStates((prevState) => {
      const newState = {};
      items.forEach((item) => {
        newState[item.title] =
          item.title === title ? !prevState[item.title] : false;
      });
      return newState;
    });
  };

  return (
    <Accordion className={style} variant="splitted">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={item.title}
          title={item.title}
          indicator={
            accordionStates[item.title] ? <IoIosArrowUp /> : <IoIosArrowDown />
          }
          onPress={() => toggleAccordion(item.title)}
        >
          <p className="text-slate-300">{item.description}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionCard;
