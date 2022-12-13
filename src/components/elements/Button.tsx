interface ButtonProps {
  children: React.ReactNode;
  url: string;
}

const Button = ({ children, url }: ButtonProps): JSX.Element => {
  return (
    <a href={url}>
      <button className="w-16 h-16 p-1 border-[1px] border-slate-300 hover:border-[#e5a323] rounded  hover:bg-[#e5a323]/30 duration-300 text-lg text-slate-300 hover:text-[#e5a323] font-bold font-NotoSerif select-none">
        {children}
      </button>
    </a>
  );
};

export default Button;
