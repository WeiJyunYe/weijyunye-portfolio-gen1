import { forwardRef } from "react";
import myPortrait from "../assets/portrait.png";
import TerminalIcon from "@mui/icons-material/TerminalSharp";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="bg-[#001e43] w-full h-screen" ref={ref}>
      <div className="w-full h-screen mx-auto flex flex-col  justify-center items-center text-slate-300">
        <div className="w-full max-w-[1080px] grid md:grid-cols-2 gap-3 p-10">
          <div className="pt-16">
            <p className="rwd-font-sm font-bold inline border-b-4 border-[#e5a323]">
              About
            </p>
          </div>
          <div></div>
          <div className="">
            <p className="text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
              sapien faucibus et molestie ac feugiat.
            </p>
            <br />
            <p className="text-slate-400">
              Diam volutpat commodo sed egestas egestas fringilla:
            </p>
            <ul className="grid grid-cols-2 text-slate-400 pt-2 pb-4 gap-1">
              <li className="flex items-center gap-2">
                <TerminalIcon />
                HTML
              </li>
              <li className="flex items-center gap-2">
                <TerminalIcon />
                CSS
              </li>
              <li className="flex items-center gap-2">
                <TerminalIcon />
                Javascript
              </li>
              <li className="flex items-center gap-2">
                <TerminalIcon />
                React
              </li>
              <li className="flex items-center gap-2">
                <TerminalIcon />
                Typescript
              </li>
              <li className="flex items-center gap-2">
                <TerminalIcon />
                Git
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={myPortrait}
              alt="portrait of Weijyun"
              className="rounded-md h-48 w-auto md:h-60 lg:h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
