import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "Sept 2021 - Present",
    company: "Epam System",
    title: "Software Developer",
    duration: "2 Years 2 Months",
    details:
      "As an Angular Developer at Epam System, I have been responsible for developing and maintaining web applications using Angular, a powerful front-end framework. My role involves creating and optimizing user interfaces, implementing responsive design, and ensuring a seamless user experience. I work closely with cross-functional teams, including designers and back-end developers, to deliver high-quality, interactive web applications. My contributions have played a vital role in enhancing the overall user experience for our projects.",
  },
  {
    year: "Aug 2020 - Aug 2021",
    title: "Software Developer",
    duration: "1 Years",
    company: "GlobalLogic",
    details:
      "As an Angular 7 Developer at GlobalLogic, I specialized in front-end development for various projects. My responsibilities included implementing and maintaining web applications using Angular 7, an advanced front-end framework. I collaborated closely with designers to create responsive, visually appealing user interfaces that offered an exceptional user experience. My work extended to integrating Material UI components for a consistent and modern design. I also implemented JWT (JSON Web Tokens) for secure authentication and authorization, and designed and developed role-based access control systems to manage user permissions effectively. My contributions played a pivotal role in delivering robust, scalable, and user-friendly applications.",
  },
  {
    year: "March 2019 - Aug 2020",
    title: "Software Developer",
    duration: "1 Year 6 Months",
    company: "Alphaserve Technology",
    details:
      "As a UI Developer at Alphaserve Technology, I played a pivotal role in creating and enhancing front-end applications to meet the unique needs of our clients. My focus was on improving both the performance and usability of web applications, ensuring they delivered a seamless and engaging user experience. I worked closely with the development team to implement cutting-edge UI designs and responsive layouts. This role involved a deep understanding of HTML, CSS, and JavaScript to build dynamic and visually appealing user interfaces. I also ensured cross-browser compatibility and optimized application performance for better user engagement. My contributions significantly improved the overall quality and functionality of our web applications, meeting and exceeding our clients' expectations.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-5">
        Work
      </h1>
      {data.map((item, idx) => {
        console.log("called");
        return (
          <WorkItem
            key={idx}
            year={item.year}
            company={item.company}
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
