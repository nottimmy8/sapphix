import React from "react";
import navLinks from "../constants/index";

const NavItems = ({ onClick }) => {
  return (
    <ul className="flex flex-col items-center  sm:flex-row  gap-6 relative z-20">
      {navLinks.map(({ id, href, name }) => (
        <li
          key={id}
          className="text-gray-950 hover:text-gray-800  max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5 text-base cursor-pointer font-semibold"
          onClick={onClick}
        >
          <a href={href}> {name} </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
