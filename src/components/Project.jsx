import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../assets/property.png";
import netflixImg from "../assets/netflix.png";
import ecomImg from "../assets/ecom.jpg";
import insuranceImg from "../assets/insurance.webp";


const Project = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Project</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque,
        veritatis eveniet libero esse totam impedit, ducimus expedita nobis
        exercitationem molestias magni! Impedit minus tenetur quisquam quas
        deleniti temporibus facere? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptas autem, fuga nam vel explicabo harum atque
        placeat, voluptates, nesciunt debitis quibusdam eos. Aliquid alias
        voluptate necessitatibus ex perferendis, eveniet tempora!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={propertyImg} title="Crypto App"/>
        <ProjectItem img={netflixImg} title="Property App"/>
        <ProjectItem img={ecomImg} title="amazon App"/>
        <ProjectItem img={insuranceImg} title="Resturant App"/>
      </div>
    </div>
  );
};

export default Project;
