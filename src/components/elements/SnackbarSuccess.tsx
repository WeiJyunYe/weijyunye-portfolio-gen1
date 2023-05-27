import SendingSuccess from "@mui/icons-material/MarkEmailReadSharp";
import { snackbarData } from "../../lib/snackbarData";

const SnackbarSuccess = ({ isEng }: { isEng: boolean }) => {
  return (
    <div>
      <div
        className={`flex fixed w-1/4 min-w-[20rem] z-50 h-[8vh] justify-center items-center bg-green-700 rounded font-Ubuntu text-sm text-slate-300 transform transition-all animate-flyInAndOut`}
      >
        <SendingSuccess className="mx-1" />
        <span className="mx-1">
          {isEng ? snackbarData.Eng.success : snackbarData.Cht.success}
        </span>
      </div>
    </div>
  );
};

export default SnackbarSuccess;
