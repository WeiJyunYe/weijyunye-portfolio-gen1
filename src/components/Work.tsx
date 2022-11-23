import { forwardRef } from "react";

const Work = forwardRef(
  (props, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <div className="bg-[#003153] w-full h-screen" ref={ref}>
        <h3 className="flex justify-center text-4xl text-slate-300 pt-20">
          Work
        </h3>
      </div>
    );
  }
);

export default Work;
