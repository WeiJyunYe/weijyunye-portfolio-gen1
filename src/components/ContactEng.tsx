import React, { forwardRef, RefObject, useRef } from "react";
import emailjs from "@emailjs/browser";
import RocketRoundedIcon from "@mui/icons-material/RocketRounded";

const Contact = forwardRef<
  HTMLDivElement,
  {
    mainRef: RefObject<HTMLDivElement>;
  }
>((props, ref) => {
  const form = useRef<HTMLFormElement>(null);

  const emailJSServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
  const emailJSTemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
  const emailJSKey = process.env.REACT_APP_EMAILJS_KEY as string;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current === null) return;
    emailjs
      .sendForm(emailJSServiceID, emailJSTemplateID, form.current, emailJSKey)
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you! Your email has been sent.");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Oops. Something went wrong. Please try again later. If the issue still occurs, please assist me by reporting the error at https://github.com/WeiJyunYe/weijyunye.github.io/issues Thank you!"
          );
        }
      );
    e.currentTarget.reset();
  };
  return (
    <div className="bg-[#001e43] w-full h-screen min-h-[800px] text-slate-300 flex flex-col justify-center items-center p-10">
      <form
        ref={form}
        action=""
        className="flex flex-col w-full max-w-[900px] font-NotoSerif"
        onSubmit={sendEmail}
      >
        <div className="pt-28" ref={ref}>
          <p className="rwd-font-md font-Ubuntu text-slate-300 inline border-b-4 border-[#e5a323]">
            Contact
          </p>
          <p className="text-slate-400 py-4">{`// Please feel free to contact me at any time`}</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="visitor"
          className="bg-slate-800 px-4 py-2 rounded shadow-[inset_0_2px_3px_2px_rgba(0,0,0,0.4)] focus:shadow-none outline-none border-[1px] border-[#001e43] focus:border-[#e5a323] hover:border-[#e5a323] duration-300"
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          className="bg-slate-800 px-4 py-2 my-4 rounded shadow-[inset_0_2px_3px_2px_rgba(0,0,0,0.4)] outline-none border-[1px] border-[#001e43] focus:border-[#e5a323] hover:border-[#e5a323] duration-300"
          required
        />
        <textarea
          name="message"
          rows={10}
          placeholder="Message"
          className="bg-slate-800 px-4 py-2 rounded shadow-[inset_0_2px_3px_2px_rgba(0,0,0,0.4)] outline-none border-[1px] border-[#001e43] focus:border-[#e5a323] hover:border-[#e5a323] duration-300 "
          required
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="p-2 my-4 w-20 text-slate-300 hover:text-[#e5a323] border-slate-300 hover:border-[#e5a323] border-[1px] rounded hover:bg-[#e5a323]/30 duration-300 text-lg font-bold select-none cursor-pointer"
        />
      </form>
      <div
        className="flex flex-col justify-center items-center group cursor-pointer"
        onClick={() => {
          if (props.mainRef.current !== null) {
            props.mainRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <RocketRoundedIcon
          className="group-hover:animate-bounce duration-300"
          color="error"
          fontSize="large"
        />
        <button className="text-slate-300 text-sm select-none font-Ubuntu">
          <p className="group-hover:hidden">Top</p>
          <p className="hidden group-hover:block group-hover:text-[#e5a323] group-hover:animate-pulse">
            Launch!
          </p>
        </button>
      </div>
    </div>
  );
});

export default Contact;
