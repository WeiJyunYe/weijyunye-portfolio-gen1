import React, { useState, forwardRef, useImperativeHandle } from "react";
import SendingSuccess from "@mui/icons-material/MarkEmailReadSharp";
import SendingFail from "@mui/icons-material/SmsFailedSharp";

const SnackbarEng = forwardRef((props, ref) => {
  const [showSnackbarEng, setShowSnackBarEng] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    showSwitch: () => {
      setShowSnackBarEng(true);
      setTimeout(() => {
        setShowSnackBarEng(false);
      }, 3000);
    },
  }));

  return (
    <div>
      <button
        className="flex absolute w-10 h-10 bg-green-300 top-20 left-20"
        onClick={() => {
          setShowSnackBarEng(true);
          setTimeout(() => {
            setShowSnackBarEng(false);
          }, 3000);
        }}
      ></button>
      <div
        className={
          showSnackbarEng
            ? `flex fixed w-1/4 min-w-[20rem] z-50 h-[8vh] justify-center items-center bg-green-700 rounded font-Ubuntu text-sm text-slate-300 transform transition-all ease-in-out animate-fadeIn`
            : `flex fixed w-1/4 min-w-[20rem] z-50 h-[8vh] justify-center items-center bg-green-700 rounded font-Ubuntu text-sm text-slate-300 transform transition-all ease-in-out animate-fadeOut`
        }
      >
        <div>
          <SendingSuccess className="mx-1" />
          <span className="mx-1">Thank you! Your email has been sent.</span>
        </div>
      </div>
    </div>
  );
});

export default SnackbarEng;
