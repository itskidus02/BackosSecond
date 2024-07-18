import React from 'react';
import calander from '../assets/calander.jpg'; // Adjust the path to your image

const Hero = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row justify-center w-3/4 mx-auto space-x-20 mt-[100px] rig-2 ing-blue-300 bg-white p-6 relative">
      <div className="text-center md:text-left ing-2 rng-red-300 lg:w-2/2">
        <h1 className="text-6xl font-bold leading-tight">
          Effortless <span className="text-blue-500"> <br /> Scheduling</span>, 
          Automated for <br /> Your Convenience
        </h1>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg">
          Get Started
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center rig-2 rig-green-300 relative mt-20 lg:mt-0">
        <div className="absolute -top-10 left-0 w-[350px] h-[380px] rounded-3xl bg-blue-100  transform  z-10"></div>
        <img src={calander} alt="Calendar" className="relative rounded-3xl z-20 w-[350px] h-[380px]" />
      </div>
    </div>
  );
};

export default Hero;
