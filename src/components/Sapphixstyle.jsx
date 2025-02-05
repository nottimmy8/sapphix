import React from "react";
import product from "../constants/product";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "../CustomArrows.jsx";

const Sapphixstyle = () => {
  const categories = ["accessorise"];
  const filteredAccessorise = categories.flatMap((category) =>
    product.filter((item) => item.category === category)
  );
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
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
  return (
    <div className=" w-full p-[58px]  ">
      <h1 className=" text-3xl font-bold font-playfair text-center">
        Tag @Sapphix to share your style
      </h1>
      <div className="  max-w-6xl py-6 mx-auto">
        <Slider {...settings} className="w-full">
          {filteredAccessorise.map((item, index) => (
            <div key={index} className="mx-2">
              <div className="shadow-md w-[205px] h-[300px] md:w-[260px] aspect-square bg-bluelight  mx-auto">
                {console.log(item)}
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full  object-cover  rounded-t-2xl "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sapphixstyle;
