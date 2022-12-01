import React, { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current === null) return;
    emailjs
      .sendForm(
        "contact_service",
        "template_bmxrvut",
        form.current,
        "LF6hpZeDoCiyYYCwO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };
  return (
    <div
      className="bg-[#001e43] w-full h-screen text-slate-300 flex justify-center items-center p-10"
      ref={ref}
    >
      <form
        ref={form}
        action=""
        className="flex flex-col w-full max-w-[900px]"
        onSubmit={sendEmail}
      >
        <div className="pb-8">
          <p className="rwd-font-sm font-bold text-slate-300 inline border-b-4 border-[#e5a323]">
            Contact
          </p>
          <p className="text-slate-400 py-4">{`// Please free feel to contact me at any time`}</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="visitor"
          className="bg-slate-800 p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          className="my-4 p-2 bg-slate-800 rounded"
          required
        />
        <textarea
          name="message"
          rows={10}
          placeholder="Message"
          className="bg-slate-800 p-2 rounded"
          required
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="p-2 my-4 w-20 text-[#e5a323] border-[1px] rounded hover:bg-[#e5a323]/30 duration-300 text-lg font-bold select-none"
        />
      </form>
    </div>
  );
});

export default Contact;
