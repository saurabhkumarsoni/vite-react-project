import React from 'react';
import AboutImg from "../assets/developer.svg";
import { BsGithub } from 'react-icons/bs';


const AboutMe = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">About Me</h1>

    <section className="bg-secondery  px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info gap-3">

          <p className="pb-5 text-stone-600">
            Hi, My Name is Saurabh Kumar. I am a
            Frontend Developer. I build beautifull websites with Angular, React, Bootstrap and
            Tailwind CSS.
          </p>
          <p className="pb-5 text-stone-600">
            I am proficient in Frontend skills like Angular, React, Bootstrap, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p className='text-stone-600'>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p className='text-stone-600'>
            In my spare time I create small small project and publish on my github.
           
          </p>
          <p className='text-sm font-semibold text-[#001b5e]'>
          <a
              href="https://github.com/saurabhkumarsoni"
              target="_blank"
              rel="noopener noreferrer"
            > Go to github
            </a>
          </p>
        </div>

        <div className="about-img gap-x-8">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>

    </div>
  )
}

export default AboutMe
