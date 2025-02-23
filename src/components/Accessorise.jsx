import React from "react";
import product from "../constants/product";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "../CustomArrows.jsx";

const Accessorise = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categories = ["accessorise"];
  const filteredAccessorise = categories.flatMap((category) =>
    product.filter((item) => item.category === category)
  );

  return (
    <div className=" w-full p-[58px]  ">
      <h1 className=" text-3xl font-bold font-playfair text-center">
        Accessorise with us
      </h1>
      <div className="  max-w-6xl p-6 mx-auto">
        <Slider {...settings} className="w-full">
          {filteredAccessorise.map((item, index) => (
            <div key={index} className="mx-2">
              <div className="shadow-md md:w-[200px] w-[295px] bg-bluelight  mx-auto">
                {console.log(item)}
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[200px] object-cover  rounded-t-2xl "
                />
                <div className=" bg-white text-textblack text-center w-full py-4 rounded-b-2xl  ">
                  <h2 className="text-base sm:text-sm font-semibold ">
                    {item.title}{" "}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Accessorise;
