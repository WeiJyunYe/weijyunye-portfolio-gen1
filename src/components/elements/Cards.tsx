import Button from "./Button";

interface CardProps {
  key: number;
  title: string;
  bgUrl: string;
  demoUrl: string;
  repoUrl: string;
  isEng: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  bgUrl,
  demoUrl,
  repoUrl,
  isEng,
}) => {
  return (
    <div className="bg-[#202f55] w-full h-full max-w-xl shadow-lg shadow-black rounded flex justify-center items-center mx-auto py-4 hover:-translate-y-1 duration-300 hover:border-[#e5a323] border-[1px] border-transparent group">
      <div className="flex flex-col w-full h-full">
        <h3
          className={`px-6 pb-4 text-2xl ${
            isEng ? "font-Ubuntu" : "font-NotoSansCHT"
          } text-slate-300 group-hover:text-[#e5a323] duration-300`}
        >
          {title}
        </h3>
        <div
          style={{
            backgroundImage: `url("${bgUrl}")`,
          }}
          className={`bg-cover bg-top brightness-[0.3] group-hover:brightness-100 w-full h-full min-h-[300px] duration-300 z-20`}
        >
          <div className="w-full h-full backdrop-blur-sm group-hover:backdrop-blur-none z-30 duration-300">
            <p className="hidden group-hover:flex justify-center p-2"></p>
          </div>
        </div>
        <div className="px-4 pt-4 text-center flex justify-between">
          <Button children="Demo" url={demoUrl} />
          <Button children="Repo" url={repoUrl} />
        </div>
      </div>
    </div>
  );
};

export default Card;
