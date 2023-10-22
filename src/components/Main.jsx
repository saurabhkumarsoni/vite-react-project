import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsDownload,
} from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import mainImg from "../assets/main.jpg";
import resume from "../assets/saurabh_resume.pdf";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-center scale-x-[-1]"
        src={mainImg}
        alt="main-bg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Saurabh Kumar
          </h1>
          <h2 className="pt-4 font-bold text-gray-900">
            Javacript / Angular / React / Node Developer
          </h2>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://facebook.com/saurabh2406"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={20} className="cursor-pointer" />
            </a>
            <a
              href="https://github.com/saurabhkumarsoni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={20} className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/saurabh24692/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={20} className="cursor-pointer" />
            </a>

            <BsTwitter size={20} className="cursor-pointer" />
          </div>
          <div className="mt-10">
            <a
              href={resume}
              target="_blank"
              download="Saurabh_resume.pdf"
              className="bg-[#001b5e] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            >
            <BsDownload  className="w-4 h-4 mr-2"/>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
