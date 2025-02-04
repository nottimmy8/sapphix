import React from "react";
import product from "../constants/product.js";

const Topselect = () => {
  const categories = ["newinweek"];
  const filteredProducts = categories
    .flatMap((category) => product.filter((item) => item.category === category))
    .slice(0, 5); // Limit to 5 items

  return (
    <div className=" w-full mx-auto min-h-[444px]   bg-bluelight ">
      <div className=" max-w-7xl p-12 mx-auto">
        <div className=" flex flex-col justify-center items-center">
          <h3 className=" md:text-3xl  text-xl font-bold text-textblack">
            New-in this week
          </h3>
          {/* categories */}
          <div className=" grid grid-cols-1 md:grid-cols-5 gap-8 mt-6  ">
            {filteredProducts.map((item, index) => (
              <div
                key={index}
                className="  shadow-md md:w-[200px] w-[295px]   "
              >
                {console.log(item)}
                <img
                  src={item.image}
                  alt={item.name || "Product Image"}
                  className="w-full h-[200px] object-cover  rounded-t-2xl "
                />

                <div className=" bg-white text-textblack text-center w-full py-4 rounded-b-2xl  ">
                  <h2 className="text-base sm:text-sm font-semibold ">
                    {item.title}{" "}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topselect;
