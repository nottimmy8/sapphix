import React from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import NavItems from "../Data/NavItems";
import { IoMdSearch } from "react-icons/io";
import Wishlist from "../assets/Wishlist.png";
import logo from "../assets/SAPPHIXLOGO.png";
import cart from "../assets/cart.png";
import Profile from "../assets/Profile.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center  py-5 px-4 overflow-hidden  ">
          {/* toggleMenu */}
          <div className="flex md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <IoClose size={25} className="cursor-pointer md:hidden" />
            ) : (
              <IoMenu size={25} className="cursor-pointer md:hidden" />
            )}
          </div>

          {/*  */}
          <div className="flex items-center space-x-8 ">
            {/* LOGO  */}
            <div className="aspect-square w-10 ">
              {" "}
              <img src={logo} alt="" className="w-full h-full object-fit" />
            </div>

            {/* NAVLISTITEMS  */}
            <div className="hidden md:flex">
              <NavItems />
            </div>
          </div>

          {/* right side */}
          <div className=" flex items-center space-x-7">
            {/* Search Input */}
            <div className="rounded-xl  border border-black items-center px-2 w-[300px] hidden md:flex">
              <IoMdSearch size={25} className="text-black" />
              <input
                className="bg-transparent p-2 w-full focus:outline-none text-black"
                type="text"
                placeholder="Search here "
              />
            </div>
            {/* profile */}
            <div className=" w-6 h-6">
              <img src={Profile} alt="" className="w-full h-full" />
            </div>
            {/* wishlist */}
            <div className="w-6 h-6">
              <img src={Wishlist} alt="" className="w-full h-full" />
            </div>

            {/* cart */}
            <div className="  w-6 h-6">
              <img src={cart} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className="absolute left-0 right-0 bg-black/30 backdrop-blur-2xl transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block"
        style={{
          display: isOpen ? "block" : "none",
          height: "50vh",
          width: "100vw",
        }}
      >
        <div>
          {" "}
          <NavItems onClick={closeMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
