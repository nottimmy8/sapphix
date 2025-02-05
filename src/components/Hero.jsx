import React from "react";
import banner from "../assets/bannerr.png";

const Hero = () => {
  return (
    <div className=" w-full ">
      <div className="max-w-6xl mx-auto bg-black h-[600px] relative   ">
        {/*  */}

        <div className="absolute top-0 left-0 w-full h-full bg-blend-overlay bg-gradient-to-r from-black/75    "></div>
        {/* banner */}
        <img src={banner} alt="" className=" w-full object-cover h-full" />
        {/* text */}

        <div className=" absolute top-1/2 mx-10 ">
          <h1 className=" font-medium font-playfair text-2xl md:text-3xl text-white">
            It’s the season of love
          </h1>
          <p className="font-playfair font-medium text-2xl md:text-5xl text-white">
            20%{" "}
            <span className=" text-2xl md:text-3xl ">
              off all Kimono pieces <br /> from now till Feb 15
            </span>
          </p>
          <button className="bg-green500 mt-4 text-white text-xs md:text-xl font-semibold py-1 px-4 md:px-5 md:py-2 rounded-lg ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
