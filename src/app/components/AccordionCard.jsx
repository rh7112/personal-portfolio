import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const AccordionCard = ({ items, style }) => {
  const [expanded, setExpanded] = useState({});

  const toggle = (title) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <Accordion className={style} variant="splitted">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          indicator={
            expanded[item.title] ? <IoIosArrowUp /> : <IoIosArrowDown />
          }
          onPress={() => toggle(item.title)}
        >
          <p className="text-slate-300">{item.description}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionCard;
