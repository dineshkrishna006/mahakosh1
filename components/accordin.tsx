import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordin = () => {
  const words = [
    {
      text: "Is it accessible?",
      ans: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      text: "Is it styled?",
      ans: "Yes. It comes with default styles that matches the othercomponents.",
    },
    {
      text: "Is it animatedafds jfdlajskdfjdskjfdsjfaj?",
      ans: "Yes. It&apos;s animated by default, but you can disable it if youprefer.",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <Accordion
        type="single"
        collapsible
        className="grid  grid-cols-1 md:grid-cols-2 gap-4"
      >
        {words.map((word, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{word.text}</AccordionTrigger>
            <AccordionContent>{word.ans}</AccordionContent>
          </AccordionItem>
        ))}
        {/* <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem> */}
      </Accordion>
    </div>
  );
};

export default Accordin;
