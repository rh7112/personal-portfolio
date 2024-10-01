import { Accordion, AccordionItem } from "@nextui-org/accordion";
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
          className="ml-5 mr-5 text-white"
          indicator={
            accordionStates[item.title] ? <IoIosArrowUp /> : <IoIosArrowDown />
          }
          onPress={() => toggleAccordion(item.title)}
        >
          {item.description}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionCard;
