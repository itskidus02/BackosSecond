import React from "react";
import alarm from "../assets/alarm.png";
import tick from "../assets/tick.png";
import bag from "../assets/bag.png";

const Service = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Blue circle overlaying the outside div */}
      {/* <div className="hidden lg:block absolute bottom-[9rem] left-[83rem] transform z-10 overflow-hidden">
        <div className="w-52 h-52 bg-[#BCE1F5] rounded-full"></div>
      </div> */}
      <div className="hidden lg:block absolute bottom-[14rem] left-36 transform z-10 overflow-hidden">
        <div className="w-28 h-28 bg-[#BCE1F5] rounded-full"></div>
      </div>
      
      <div className="relative py-16 overflow-hidden w-3/4 mx-auto">
        <div className="absolute rounded-[30px] inset-0 bg-[#2092CF] h-64"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex lg:flex-row flex-col justify-between items-center mb-8">
            <h2 className="lg:text-3xl text-[20px] font-poppins font- ml-5 text-white">
              Our best service for you!
            </h2>
            <p className="text-white text-[14px] font-poppins mr-9 text-left max-w-md">
              Our platform takes the hassle out of scheduling, allowing you to
              focus on what really matters. Streamline your workflow and save
              time with our intuitive and powerful scheduling tools.
            </p>
          </div>
          <div className="relative text-center z-20 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4">
            <div className="relative rounded-[15px] p-12 m-4 bg-[#FAFAFA] text-black shadow-md transform translate-y-[-20px] h-80">
              <div className="flex items-center justify-center text-4xl text-center mb-2">
                <img src={alarm} className="w-[55px] h-[50px] text-center" />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-[#5A5555] mb-6 mt-7">
                Easy to use
              </h3>
              <p className="lg:text-[16px] font-poppins text-[10px] text-[#5A5555]">
                The page is designed for effortless use and seamless access.
              </p>
            </div>
            <div className="relative rounded-[15px] bg-[#FAFAFA] text-black p-12 m-4 shadow-md transform translate-y-[-20px] h-80">
              <div className="flex items-center justify-center text-4xl mb-2">
                <img src={bag} className="w-[55px] h-[50px] text-center" />
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-6 mt-7 text-[#5A5555]">
                Custom Booking page
              </h3>
              <p className="lg:text-[16px] font-poppins text-[10px] text-[#5A5555]">
                Enhance your professional business with a customized booking
                page.
              </p>
            </div>
            <div className="relative rounded-[15px] bg-[#FAFAFA] text-black p-12 m-4 shadow-md transform translate-y-[-20px] h-80">
              <div className="flex items-center justify-center text-4xl mb-2">
                <img src={tick} className="w-[55px] h-[50px] text-center" />
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-6 mt-7 text-[#5A5555]">
                Round the clock support
              </h3>
              <p className="lg:text-[16px] font-poppins text-[10px] text-[#5A5555]">
                Anytime, Anywhere, your customers can access and book an
                appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
