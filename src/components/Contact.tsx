import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="bg-[#001e43] w-full h-screen" ref={ref}>
      <h3 className="flex justify-center text-4xl text-slate-300 pt-20">
        Contact
      </h3>
    </div>
  );
});

export default Contact;
