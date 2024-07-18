import React from "react";

const Service = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center w-3/4 text-center mx-auto gap-8 relative">
        {/* Main blue div */}
        <div className="lg:text-[55px] bg-blue-400 rounded-3xl md:text-[30px] text-[21px] text-[#2092CF] p-16 relative">
          {/* Left text */}
          <div className="absolute top-4 left-4 text-left text-black text-2xl">
            Our best service for you!
          </div>
Lorem ipsum dolor sit amet consectetur 
          {/* Right text */}
          <div className="absolute top-4 right-4 text-right text-white text-sm">
            Our platform takes the hassle out of scheduling, allowing you to focus on what really matters. Streamline your workflow and save time with our intuitive and powerful scheduling tools.
          </div>

          {/* Grid content */}
          <div className="grid grid-cols-3 gap-4 absolute top-20 left-9 right-9 bottom-20">
            <div className="bg-black text-white p-4">
              Easy
              <p className="text-sm">The page is designed for effortless use and seamless access.</p>
            </div>
            <div className="bg-black text-white p-4">Custom</div>
            <div className="bg-black text-white p-4">Round</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
