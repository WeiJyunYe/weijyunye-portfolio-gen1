import { forwardRef, RefObject } from "react";
import Arrow from "@mui/icons-material/ArrowForwardRounded";

const Main = forwardRef<
  HTMLDivElement,
  {
    workRef: RefObject<HTMLDivElement>;
  }
>((props, ref) => {
  return (
    <div className="flex justify-center bg-[#001e43] w-full h-screen" ref={ref}>
      <div className="flex flex-col justify-center mx-auto text-slate-300 font-sans font-extrabold p-10">
        <p className="rwd-font">Hi,</p>
        <h1 className="rwd-font leading-[48px]">
          I'm <span className="text-[#e5a323]">Weijyun Ye</span>,
        </h1>
        <h2 className="rwd-font">front-end developer.</h2>
        <p className="py-6 leading-5 font-normal text-md text-slate-400 max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          nisl suscipit adipiscing bibendum.
        </p>
        <div>
          <button
            className="group flex items-center px-8 py-4 font-normal hover:bg-[#e5a323]/30 text-md text-[#e5a323] border-[1px] border-[#e5a323] rounded duration-300 select-none"
            onClick={() => {
              if (props.workRef.current !== null) {
                props.workRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Check out my work
            <span className="group-hover:rotate-90 duration-200 pl-1">
              <Arrow />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Main;
