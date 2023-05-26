import SendingFail from "@mui/icons-material/SmsFailedSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface ModalProps {
  handleCloseModal: () => void;
  closeModal: boolean;
}

const ModalEng: React.FC<ModalProps> = ({ handleCloseModal, closeModal }) => {
  return (
    <div>
      <div
        className={`flex fixed z-50 h-[8rem] w-10/12 sm:w-8/12 md:w-6/12 md:h-[7.5rem] lg:w-4/12 lg:h-[7.5rem] xl:w-3/12 xl:h-[7.5rem] justify-center items-center bg-red-800 rounded font-Ubuntu text-sm text-slate-300 transform transition-all ${
          closeModal ? `animate-flyOut` : `animate-flyIn`
        }`}
      >
        <SendingFail className="ml-3 mr-2" />
        <span className="mx-1">
          {`Oops. Something went wrong. Please try again later. If the issue
            still occurs, please assist me by reporting the error at `}
          <a
            href="https://github.com/WeiJyunYe/weijyunye.github.io/issues"
            className="underline text-yellow-400/90 hover:text-yellow-300 cursor-pointer"
          >
            my github page
          </a>
          {` Thank you!`}
        </span>
        <div className="w-auto h-full flex justify-center items-start">
          <CloseRoundedIcon
            className="relative top-1 right-1 cursor-pointer hover:text-yellow-400 hover:bg-slate-300/50 rounded-full"
            onClick={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalEng;
