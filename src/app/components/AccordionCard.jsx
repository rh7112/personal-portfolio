import { Accordion, AccordionItem } from "@nextui-org/accordion";

const AccordionCard = ({ items, style }) => {
  return (
    <Accordion className={style}>
      {items.map((item, index) => (
        <AccordionItem key={index} aria-label={item.title} title={item.title}>
          {item.description}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionCard;
