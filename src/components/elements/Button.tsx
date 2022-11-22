interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="px-9 py-6 hover:bg-[#CDA136]/30 text-lg text-[#CDA136] border-[1px] border-[#CDA136] rounded duration-300 select-none">
      {children}
    </button>
  );
};

export default Button;
