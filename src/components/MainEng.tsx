import { forwardRef, RefObject } from "react";
import Arrow from "@mui/icons-material/ArrowForwardRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Main = forwardRef<
  HTMLDivElement,
  {
    workRef: RefObject<HTMLDivElement>;
  }
>((props, ref) => {
  return (
    <div className="flex justify-center bg-[#001e43] w-full h-screen" ref={ref}>
      <div
        className="flex flex-col [max-w-[1080px] justify-center mx-auto text-slate-300 usm:p-5 sm:p-10 font-Ubuntu leading-loose
        "
      >
        <p className="rwd-font">Hi,</p>
        <h2 className="rwd-font leading-7">
          {"I'm "}
          <span className="text-[#e5a323]">{"Weijyun Ye"}</span>,
        </h2>
        <h2 className="rwd-font">
          {"a "}
          <span className="text-[#e5a323]">{"front-end"}</span>
          {" developer."}
        </h2>
        <div className="pb-4 gap-2 flex justify-start items-center">
          <a
            href="https://github.com/WeiJyunYe"
            className="hover:bg-[#e5a323] rounded-sm duration-300"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/weijyunye"
            className="hover:bg-[#e5a323] rounded-sm duration-300"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <div>
          <button
            className="group flex items-center px-6 py-4 font-normal font-NotoSerif hover:bg-[#e5a323]/10 text-md hover:text-[#e5a323] text-slate-300 border-[1px] hover:border-[#e5a323] border-slate-300 rounded duration-300 select-none"
            onClick={() => {
              if (props.workRef.current !== null) {
                console.log(props.workRef.current);
                props.workRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Check out my work
            <span className="group-hover:rotate-90 duration-150 pl-1">
              <Arrow />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Main;
