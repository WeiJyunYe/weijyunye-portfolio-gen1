import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MenuOutlined } from "@mui/icons-material";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const expandMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed w-full h-20 text-slate-300 bg-opacity-20 backdrop-blur-lg drop-shadow-2xl flex justify-between items-center p-4 select-none ">
      <Link to="/">
        {" "}
        <h1 className="w-16 h-16 pl-8 pt-[2px] border-slate-300 text-3xl font-sans font-extrabold flex justify-center items-center duration-300 hover:border-[#CDA136] hover:text-[#CDA136] cursor-pointer">
          ARYE
        </h1>
      </Link>

      <nav>
        <div
          className={
            !isExpanded
              ? "absolute right-6 top-6 md:hidden scale-125 cursor-pointer"
              : "hidden"
          }
        >
          <MenuOutlined onClick={expandMenu} fontSize="large" />
        </div>

        <ul className="hidden text-xl md:flex gap-10 p-6">
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

        <Navbar expandMenu={expandMenu} isExpanded={isExpanded} />
      </nav>
    </div>
  );
};

export default Header;
