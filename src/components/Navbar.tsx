import { Close } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  expandMenu: () => void;
  isExpanded: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ expandMenu, isExpanded }) => {
  return (
    <ul
      className={
        isExpanded
          ? "flex flex-col items-center fixed inset-0 h-screen gap-20 justify-center text-3xl z-50 md:hidden bg-[#003153] bg-opacity-80 transition "
          : "hidden"
      }
    >
      <Close
        onClick={expandMenu}
        fontSize="large"
        className="absolute right-7 top-7 md:hidden scale-125 cursor-pointer"
      />
      <li className="duration-300 hover:text-[#CDA136] cursor-pointer">
        <Link to="about">About</Link>
      </li>
      <li className="duration-300 hover:text-[#CDA136] cursor-pointer">
        <Link to="work">Work</Link>
      </li>
      <li className="duration-300 hover:text-[#CDA136] cursor-pointer">
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navbar;
