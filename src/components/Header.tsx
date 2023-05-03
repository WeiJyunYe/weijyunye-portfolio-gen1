import { RefObject, useState } from "react";
import Navbar from "./Navbar";
import { MenuOutlined } from "@mui/icons-material";
import Switch from "@mui/material/Switch";

interface HeaderProps {
  mainRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  workRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  languageSwitch: () => void;
  isEng: boolean;
}

const Header: React.FC<HeaderProps> = ({
  mainRef,
  aboutRef,
  workRef,
  contactRef,
  languageSwitch,
  isEng,
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
    <div className="fixed w-full h-20 text-slate-300 bg-opacity-20 backdrop-blur-lg shadow-[0_0px_15px_3px_rgba(0,0,0,0.2)] flex justify-between items-center p-4 select-none] z-50">
      <a
        href="https://weijyunye.github.io/"
        className="w-16 h-16 ml-4 pt-[2px] border-slate-300 text-2xl font-Meddon flex justify-center items-center duration-300 hover:border-[#e5a323] hover:text-[#e5a323] cursor-pointer"
      >
        Arye
      </a>
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

        <ul className="hidden text-xl md:flex gap-10 p-6 font-Ubuntu select-none">
          <li className="duration-300 hover:text-[#e5a323] cursor-pointer">
            <button onClick={() => smoothScroll(aboutRef)}>About</button>
          </li>
          <li className="duration-300 hover:text-[#e5a323] cursor-pointer">
            <button onClick={() => smoothScroll(workRef)}>Work</button>
          </li>
          <li className="duration-300 hover:text-[#e5a323] cursor-pointer">
            <button onClick={() => smoothScroll(contactRef)}>Contact</button>
          </li>
          <li className="flex items-center text-sm">
            <p
              className={`font-NotoSansCHT ${
                isEng ? "text-slate-300" : "text-[#e5a323]"
              }`}
            >
              中
            </p>
            <Switch defaultChecked size="small" onChange={languageSwitch} />
            <p className={`${isEng ? "text-[#e5a323]" : "text-slate-300"}`}>
              Eng
            </p>
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
          languageSwitch={languageSwitch}
          isEng={isEng}
        />
      </nav>
    </div>
  );
};

export default Header;
