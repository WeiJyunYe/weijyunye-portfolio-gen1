import { RefObject, useState } from "react";
import Navbar from "./Navbar";
import { MenuOutlined } from "@mui/icons-material";

interface HeaderProps {
  mainRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  workRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  mainRef,
  aboutRef,
  workRef,
  contactRef,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const smoothScroll = (value: RefObject<HTMLDivElement>) => {
    if (value.current !== null) {
      value.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const expandMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed w-full h-20 text-slate-300 bg-opacity-20 backdrop-blur-lg shadow-[0_0px_15px_3px_rgba(0,0,0,0.2)] flex justify-between items-center p-4 select-none]">
      <button
        className="w-16 h-16 ml-4 pt-[2px] border-slate-300 rwd-font-sm font-sans font-extrabold flex justify-center items-center duration-300 hover:border-[#e5a323] hover:text-[#e5a323] cursor-pointer"
        onClick={() => smoothScroll(mainRef)}
      >
        ARYE
      </button>
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
          <li className="duration-300 hover:text-[#e5a323] cursor-pointer select-none">
            <button onClick={() => smoothScroll(aboutRef)}>About</button>
          </li>
          <li className="duration-300 hover:text-[#e5a323] cursor-pointer select-none">
            <button onClick={() => smoothScroll(workRef)}>Work</button>
          </li>
          <li className="duration-300 hover:text-[#e5a323] cursor-pointer select-none">
            <button onClick={() => smoothScroll(contactRef)}>Contact</button>
          </li>
        </ul>

        <Navbar
          expandMenu={expandMenu}
          isExpanded={isExpanded}
          smoothScroll={smoothScroll}
          mainRef={mainRef}
          aboutRef={aboutRef}
          workRef={workRef}
          contactRef={contactRef}
        />
      </nav>
    </div>
  );
};

export default Header;
