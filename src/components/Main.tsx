import { forwardRef } from "react";
import Button from "./elements/Button";

const Main = forwardRef(
  (props, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <div
        className="bg-[#003153] w-full h-screen flex flex-col items-center justify-center"
        ref={ref}
      >
        <div className="text-left text-slate-300 font-sans font-extrabold p-10">
          <h1 className="py-1 rwd-font">Hi,</h1>
          <h1 className="py-1 rwd-font">
            I'm <span className="text-[#CDA136]">Weijyun Ye</span>,
          </h1>
          <h1 className="py-1 rwd-font">front-end developer.</h1>
        </div>
        <div>
          <Button children="Check out my work!" />
        </div>
      </div>
    );
  }
);

export default Main;
