import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.pexels.com/photos/937465/pexels-photo-937465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="main-bg" />
      <div className='w-full h-screen absolute top-10 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Saurabh Kumar</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        2000,
        'Tech Enthusiast',
        2000,

      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
      repeat={Infinity}
    />

            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <BsFacebook size={20} className='cursor-pointer'/>
                <BsTwitter size={20} className='cursor-pointer'/>
                <BsInstagram size={20} className='cursor-pointer'/>
                <BsLinkedin size={20} className='cursor-pointer'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main