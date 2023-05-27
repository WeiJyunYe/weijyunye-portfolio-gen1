import SendingFail from "@mui/icons-material/SmsFailedSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { snackbarData } from "../../lib/snackbarData";

interface ModalProps {
  handleCloseSnackbarFail: () => void;
  closeSnackbarFail: boolean;
  isEng: boolean;
}

const ModalEng: React.FC<ModalProps> = ({
  handleCloseSnackbarFail,
  closeSnackbarFail,
  isEng,
}) => {
  return (
    <div>
      <div
        className={`flex fixed z-50 h-[8rem] w-10/12 sm:w-8/12 md:w-6/12 md:h-[7.5rem] lg:w-4/12 lg:h-[7.5rem] xl:w-3/12 xl:h-[7.5rem] justify-center items-center bg-red-800 rounded font-Ubuntu text-sm text-slate-300 transform transition-all ${
          closeSnackbarFail ? `animate-flyOut` : `animate-flyIn`
        }`}
      >
        <SendingFail className="ml-3 mr-2" />
        <span className="mx-1">
          {isEng
            ? snackbarData.Eng.fail.beforeUrl
            : snackbarData.Cht.fail.beforeUrl}
          <a
            href="https://github.com/WeiJyunYe/weijyunye.github.io/issues"
            className="underline text-yellow-400/90 hover:text-yellow-300 cursor-pointer"
          >
            {isEng ? snackbarData.Eng.fail.Url : snackbarData.Cht.fail.Url}
          </a>
          {isEng
            ? snackbarData.Eng.fail.afterUrl
            : snackbarData.Cht.fail.afterUrl}
        </span>
        <div className="w-auto h-full flex justify-center items-start">
          <CloseRoundedIcon
            className="relative top-1 right-1 cursor-pointer hover:text-yellow-400 hover:bg-slate-300/50 rounded-full"
            onClick={handleCloseSnackbarFail}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalEng;
