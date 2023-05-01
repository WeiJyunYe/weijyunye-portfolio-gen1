import { Close } from "@mui/icons-material";
import { RefObject } from "react";
import Switch from "@mui/material/Switch";

interface NavbarProps {
  expandMenu: () => void;
  isExpanded: boolean;
  smoothScroll: (value: RefObject<HTMLDivElement>) => void;
  mainRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  workRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  languageSwitch: () => void;
  isEng: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  expandMenu,
  isExpanded,
  smoothScroll,
  mainRef,
  aboutRef,
  workRef,
  contactRef,
  languageSwitch,
  isEng,
}) => {
  return (
    <ul
      className={
        isExpanded
          ? "flex flex-col items-center fixed inset-0 h-screen gap-20 justify-center text-3xl font-Ubuntu z-50 md:hidden bg-[#001e43] bg-opacity-80 transition "
          : "hidden"
      }
    >
      <Close
        onClick={expandMenu}
        fontSize="large"
        className="absolute right-7 top-7 md:hidden scale-125 cursor-pointer"
      />
      <li className="duration-300 hover:text-[#e5a323] cursor-pointer select-none">
        <button
          onClick={() => {
            smoothScroll(mainRef);
            expandMenu();
          }}
        >
          Home
        </button>
      </li>
      <li className="duration-300 hover:text-[#e5a323] cursor-pointer select-none">
        <button
          onClick={() => {
            smoothScroll(aboutRef);
            expandMenu();
          }}
        >
          About
        </button>
      </li>
      <li className="duration-300 hover:text-[#e5a323] cursor-pointer select-none">
        <button
          onClick={() => {
            smoothScroll(workRef);
            expandMenu();
          }}
        >
          Work
        </button>
      </li>
      <li className="duration-300 hover:text-[#e5a323] cursor-pointer select-none">
        <button
          onClick={() => {
            smoothScroll(contactRef);
            expandMenu();
          }}
        >
          Contact
        </button>
      </li>
      <li className="flex items-center text-xl">
        <p
          className={`font-NotoSansCHT ${
            isEng ? "text-slate-300" : "text-[#e5a323]"
          }`}
        >
          中
        </p>
        <Switch defaultChecked size="small" onClick={languageSwitch} />
        <p className={`${isEng ? "text-[#e5a323]" : "text-slate-300"}`}>Eng</p>
      </li>
    </ul>
  );
};

export default Navbar;
