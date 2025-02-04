import React from "react";
import banner from "../assets/bannerr.png";

const Hero = () => {
  return (
    <div className=" w-full max-h-screen mt-20 mx-auto ">
      <div className="    ">
        {/*  */}
        <div className=" relative  w-full max-h-[600px]  ">
          <div className="absolute top-0 left-0 w-full h-full bg-blend-overlay bg-gradient-to-r from-black    "></div>
          {/* banner */}
          <img src={banner} alt="" className=" w-full object-cover h-full" />
          {/* text */}
          <div className="max-w-7xl  mx-auto"></div>
          <div className=" absolute top-[30%] left-14  md:left-20 ">
            <h1 className=" text-lg sm:text-2xl md:text-2xl   font-bold text-white mb-3">
              It’s the season of love
            </h1>
            <p className=" text-xs md:text-2xl text-white mb-2">
              20% off all Kimono pieces <br /> from now till Feb 15
            </p>
            <button className="bg-green500 text-white text-xs md:text-xl font-semibold py-1 px-4 md:px-5 md:py-2 rounded-lg ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
