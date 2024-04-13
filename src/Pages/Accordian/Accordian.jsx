import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function Accordian() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="w-10/12 m-auto p-4">
        <h2 className="text-center text-4xl font-sans my-3">
          Frequently Ask Questions
        </h2>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className="text-blue-500"
            onClick={() => handleOpen(1)}
          >
            Why to Join Aic Computer
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            illum, vero, maiores odit deleniti fuga quo sit dignissimos nemo
            magni alias praesentium debitis voluptatum voluptas illo laudantium!
            Aspernatur, voluptate iure.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className="text-blue-500"
            onClick={() => handleOpen(2)}
          >
            What is different in Aic Computer
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className="text-blue-500"
            onClick={() => handleOpen(3)}
          >
            Is ADCA course Good
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
