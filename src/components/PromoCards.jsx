import React from "react";
import Reddress from "../assets/reddress.png";

const PromoCards = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 h-[600px] ">
          {/* Left Card */}
          <div className=" relative col-span-1 md:row-span-2 bg-blue-800   shadow-lg rounded-2xl overflow-hidden">
            <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              VALENTINE'S DAY
            </div>
            <img
              src={Reddress}
              alt="Red Dress"
              className="w-full h-full object-cover"
            />
            <div className="p-4 z-10 absolute bottom-0 left-0 w-full bg-transparent bg-opacity-90">
              <h2 className="text-3xl text-white font-bold mb-2">
                Free gift on all dresses <br /> ordered until February 10
              </h2>
              <p className=" text-white text-sm mb-4">
                Spoil the one you love with the perfect gift for a special
                occasion.
              </p>
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-gray-800">
                Shop now
              </button>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="  bg-red-800 shadow-lg rounded-2xl overflow-hidden">
            <img
              src="/path-to-yellow-item.jpg"
              alt="Yellow Item"
              className="w-full  object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">This is a must have</h2>
              <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                Shop now
              </button>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="  bg-green-400 shadow-lg rounded-2xl overflow-hidden">
            <img
              src="/path-to-pattern-shirt.jpg"
              alt="Pattern Shirt"
              className="w-full  object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">
                The perfect shirt exists!
              </h2>
              <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
