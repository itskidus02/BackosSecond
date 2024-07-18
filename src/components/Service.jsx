import React from "react";

const Service = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative py-16  overflow-hidden w-3/4 mx-auto">
        <div className="absolute rounded-[30px] inset-0 bg-blue-500 h-64"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-left text-white">Our best service for you!</h2>
            <p className="text-white text-right max-w-md">
              Our platform takes the hassle out of scheduling, allowing you to focus on what really matters.
              Streamline your workflow and save time with our intuitive and powerful scheduling tools.
            </p>
          </div>
          <div className="relative text-center z-20 grid grid-cols-1 md:grid-cols-3  mx-auto gap-5">
            <div className="relative bg-white text-black p-6 rounded-lg shadow-md transform translate-y-10">
              <div className="text-4xl mb-2">⏰</div>
              <h3 className="text-xl font-semibold mb-2">Easy to use</h3>
              <p>The page is designed for effortless use and seamless access.</p>
            </div>
            <div className="relative bg-white text-black p-6 rounded-lg shadow-md transform translate-y-10">
              <div className="text-4xl mb-2">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Custom Booking page</h3>
              <p>Enhance your professional business with a customized booking page.</p>
            </div>
            <div className="relative bg-white text-black p-6 rounded-lg shadow-md transform translate-y-10">
              <div className="text-4xl mb-2">✔️</div>
              <h3 className="text-xl font-semibold mb-2">Round the clock support</h3>
              <p>Anytime, Anywhere, your customers can access and book an appointment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
