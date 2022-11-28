interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="px-4 py-3 m-2 border-[1px] border-[#CDA136] rounded  hover:bg-[#CDA136]/30 duration-300 text-lg text-[#CDA136] font-bold select-none">
      {children}
    </button>
  );
};

export default Button;
