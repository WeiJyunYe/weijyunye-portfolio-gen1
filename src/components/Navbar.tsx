import { Close } from "@mui/icons-material";
import { RefObject } from "react";

interface NavbarProps {
  expandMenu: () => void;
  isExpanded: boolean;
  smoothScroll: (value: RefObject<HTMLDivElement>) => void;
  mainRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  workRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  expandMenu,
  isExpanded,
  smoothScroll,
  mainRef,
  aboutRef,
  workRef,
  contactRef,
}) => {
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
        <button
          onClick={() => {
            smoothScroll(mainRef);
            expandMenu();
          }}
        >
          Home
        </button>
      </li>
      <li className="duration-300 hover:text-[#CDA136] cursor-pointer">
        <button
          onClick={() => {
            smoothScroll(aboutRef);
            expandMenu();
          }}
        >
          About
        </button>
      </li>
      <li className="duration-300 hover:text-[#CDA136] cursor-pointer">
        <button
          onClick={() => {
            smoothScroll(workRef);
            expandMenu();
          }}
        >
          Work
        </button>
      </li>
      <li className="duration-300 hover:text-[#CDA136] cursor-pointer">
        <button
          onClick={() => {
            smoothScroll(contactRef);
            expandMenu();
          }}
        >
          Contact
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
