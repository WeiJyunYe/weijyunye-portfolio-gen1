import { forwardRef } from "react";
import Button from "./elements/Button";
import Card from "./elements/Cards";
import { workDataSheet } from "../lib/data";

const Work = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="bg-[#001e43] w-full h-full text-slate-400" ref={ref}>
      <div className="w-full h-full mx-auto flex flex-col justify-center p-10 max-w-[1080px]">
        <div className="pt-16">
          <p className="rwd-font-sm font-bold inline border-b-4 border-[#CDA136]">
            Work
          </p>
          <p className="py-2">{`// Some side projects I have built`}</p>
        </div>
        <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
});

export default Work;
