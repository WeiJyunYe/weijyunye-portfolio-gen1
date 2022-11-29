import Button from "./Button";

interface CardProps {
  key: number;
  title: string;
  description: string;
  demoUrl: string;
  repoUrl: string;
}

const Card: React.FC<CardProps> = ({
  key,
  title,
  description,
  demoUrl,
  repoUrl,
}) => {
  return (
    <div
      key={key}
      className="bg-[#192f60] w-full h-full max-w-xl shadow-lg shadow-black rounded-md flex justify-center items-center mx-auto p-8 hover:-translate-y-1 duration-300 group"
    >
      <div>
        <span className="text-2xl font-bold text-slate-300 tracking-wider group-hover:text-[#e5a323] duration-300">
          {title}
        </span>
        <p className="text-slate-400">{description}</p>
        <div className="pt-8 text-center flex justify-between">
          <Button children="Demo" url={demoUrl} />
          <Button children="Repo" url={repoUrl} />
        </div>
      </div>
    </div>
  );
};

export default Card;
