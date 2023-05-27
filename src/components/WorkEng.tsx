import { forwardRef } from "react";
import Card from "./elements/Cards";
import { workDataSheet } from "../lib/workDataSheet";

const Work = forwardRef<HTMLDivElement, { isEng: boolean }>((props, ref) => {
  return (
    <div className="bg-[#001e43] w-full h-full text-slate-300">
      <div className="w-full h-full mx-auto flex flex-col justify-center p-10 max-w-[1080px]">
        <div className="pt-28" ref={ref}>
          <p className="rwd-font-md font-bold inline border-b-4 border-[#e5a323] font-Ubuntu">
            Work
          </p>
          <p className="py-2 text-slate-400 font-NotoSerif">{`// Some side projects I have built`}</p>
        </div>
        <div className="usm:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workDataSheet[0].Eng?.map((currentCard) => (
            <Card
              key={currentCard.id}
              title={currentCard.title}
              bgUrl={currentCard.bgUrl}
              demoUrl={currentCard.demo}
              repoUrl={currentCard.repo}
              isEng={props.isEng}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Work;
