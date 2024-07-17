import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div class="flex flex-col md:flex-row justify-around shadow-md items-center p-2">
      <div class="mb-2 w-[85px] h-[64px] md:mb-0">
        <img src={logo} />
      </div>
      <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <button>Home</button>
        <button>Contact Us</button>
        <button>Features</button>
        <button>Pricing</button>
      </div>
      <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
        <button className="text-[#2092CF] p-2 ">Log in</button>
        <button class="bg-[#2092CF] p-2 rounded-sm text-white text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
