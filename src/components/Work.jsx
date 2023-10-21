import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2021,
    title: "Software Developer",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur sequi atque corrupti consequuntur esse magni natus adipisci non libero earum voluptas ea rerum sapiente illo laudantium alias, ab qui?",
  },
  {
    year: 2019,
    title: "Software Developer",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur sequi atque corrupti consequuntur esse magni natus adipisci non libero earum voluptas ea rerum sapiente illo laudantium alias, ab qui?",
  },
  {
    year: 2018,
    title: "Software Developer",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur sequi atque corrupti consequuntur esse magni natus adipisci non libero earum voluptas ea rerum sapiente illo laudantium alias, ab qui?",
  },
  {
    year: 2019,
    title: "Software Developer",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur sequi atque corrupti consequuntur esse magni natus adipisci non libero earum voluptas ea rerum sapiente illo laudantium alias, ab qui?",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => {
        console.log("called");
        return (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        );
      })}
    </div>
  );
};

export default Work;
