import { workDataSheet } from "../../lib/data";
import Button from "./Button";

const Card = () => {
  return (
    <div className="bg-[#003980] w-full h-full shadow-lg shadow-black rounded-md flex justify-center items-center mx-auto p-8">
      <div>
        <span className="text-2xl font-bold text-slate-300 tracking-wider">
          {workDataSheet[0].title}
        </span>
        <p className="text-slate-400">{workDataSheet[0].description}</p>
        <div className=" pt-8 text-center">
          <a href="/">
            <Button children="Demo" />
          </a>
          <a href="/">
            <Button children="Repo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
