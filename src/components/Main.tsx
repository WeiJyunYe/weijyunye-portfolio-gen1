import { MutableRefObject } from "react";
import Button from "./elements/Button";

/*
interface NavbarRef {
  mainRef: MutableRefObject<null>;
  aboutRef: MutableRefObject<null>;
  workRef: MutableRefObject<null>;
  contactRef: MutableRefObject<null>;
}
*/

const Main /*: React.FC<NavbarRef>*/ = (/*{
  mainRef,
  aboutRef,
  workRef,
  contactRef,
}*/) => {
  return (
    <div className="bg-[#003153] w-full h-screen flex flex-col items-center justify-center">
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
};

export default Main;
