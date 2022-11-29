interface ButtonProps {
  children: React.ReactNode;
  demoUrl: string;
  repoUrl: string;
}

const Button = ({ children, demoUrl, repoUrl }: ButtonProps): JSX.Element => {
  return (
    <a href={repoUrl || demoUrl}>
      <button className="w-16 h-16 p-1 border-[1px] border-[#e5a323] rounded  hover:bg-[#e5a323]/30 duration-300 text-lg text-[#e5a323] font-bold select-none">
        {children}
      </button>
    </a>
  );
};

export default Button;
