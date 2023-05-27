import React, {
  forwardRef,
  RefObject,
  useRef,
  useState,
  useEffect,
} from "react";
import emailjs from "@emailjs/browser";
import RocketRoundedIcon from "@mui/icons-material/RocketRounded";
import SnackbarSuccess from "./elements/SnackbarSuccess";
import SnackbarFail from "./elements/SnackbarFail";

const Contact = forwardRef<
  HTMLDivElement,
  {
    mainRef: RefObject<HTMLDivElement>;
    isEng: boolean;
  }
>((props, ref) => {
  const [showSnackbarSuccess, setShowSnackbarSuccess] =
    useState<boolean>(false);
  const [showSnackbarFail, setShowSnackbarFail] = useState<boolean>(false);
  const [closeSnackbarFail, setCloseSnackbarFail] = useState<boolean>(false);
  const [apiResult, setApiResult] = useState<string>("init");

  const form = useRef<HTMLFormElement>(null);

  const emailJSServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
  const emailJSTemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
  const emailJSKey = process.env.REACT_APP_EMAILJS_KEY as string;

  const handleCloseSnackbarFail = () =>
    setCloseSnackbarFail(!closeSnackbarFail);

  useEffect(() => {
    if (apiResult === "OK") {
      setShowSnackbarSuccess(true);
      setTimeout(() => {
        setApiResult("init");
        setShowSnackbarSuccess(false);
      }, 4000);
    }
    if (apiResult === "") {
      setShowSnackbarFail(true);
    }
  }, [apiResult]);

  useEffect(() => {
    if (closeSnackbarFail === true) {
      setTimeout(() => {
        setApiResult("init");
        setCloseSnackbarFail(false);
        setShowSnackbarFail(false);
      }, 2000);
    }
  }, [closeSnackbarFail]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current === null) return;
    emailjs
      .sendForm(emailJSServiceID, emailJSTemplateID, form.current, emailJSKey)
      .then((result) => {
        console.log(result.text);
        if (result.text === "OK") setApiResult(result.text);
      })
      .catch((error) => {
        console.log(error);
        if (error.text === "") setApiResult(error.text);
      });
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
          <p className="text-slate-400 py-4 font-NotoSansCHT">{`// 歡迎您隨時與我聯繫`}</p>
        </div>
        <input
          type="text"
          placeholder="姓名"
          name="visitor"
          className="bg-slate-800 px-4 py-2 rounded shadow-[inset_0_2px_3px_2px_rgba(0,0,0,0.4)] focus:shadow-none outline-none border-[1px] border-[#001e43] focus:border-[#e5a323] hover:border-[#e5a323] duration-300"
          required
        />
        <input
          type="email"
          placeholder="電子信箱"
          name="email"
          className="bg-slate-800 px-4 py-2 my-4 rounded shadow-[inset_0_2px_3px_2px_rgba(0,0,0,0.4)] outline-none border-[1px] border-[#001e43] focus:border-[#e5a323] hover:border-[#e5a323] duration-300"
          required
        />
        <textarea
          name="message"
          rows={10}
          placeholder="請輸入您的留言..."
          className="bg-slate-800 px-4 py-2 rounded shadow-[inset_0_2px_3px_2px_rgba(0,0,0,0.4)] outline-none border-[1px] border-[#001e43] focus:border-[#e5a323] hover:border-[#e5a323] duration-300"
          required
        ></textarea>
        <input
          type="submit"
          value="送出"
          className="p-2 my-4 w-20 text-slate-300 hover:text-[#e5a323] border-slate-300 hover:border-[#e5a323] border-[1px] rounded hover:bg-[#e5a323]/30 duration-300 text-lg font-bold select-none cursor-pointer font-NotoSansCHT"
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
        <button className="text-slate-300 text-sm select-none font-NotoSansCHT">
          <p className="group-hover:hidden">回頂端</p>
          <p className="hidden group-hover:block group-hover:text-[#e5a323] group-hover:animate-pulse">
            發射！
          </p>
        </button>
      </div>
      {showSnackbarSuccess && <SnackbarSuccess isEng={props.isEng} />}
      {showSnackbarFail && (
        <SnackbarFail
          handleCloseSnackbarFail={handleCloseSnackbarFail}
          closeSnackbarFail={closeSnackbarFail}
          isEng={props.isEng}
        />
      )}
    </div>
  );
});

export default Contact;
