export interface WorkDataSheet {
  Eng?: WorkData[];
  Cht?: WorkData[];
}

interface WorkData {
  id: number;
  title: string;
  bgUrl: string;
  demo: string;
  repo: string;
}

export interface SnackbarDataSheet {
  Eng?: SnackbarData;
  Cht?: SnackbarData;
}

interface SnackbarData {
  success: string;
  fail: {
    beforeUrl: string;
    afterUrl: string;
    Url: string;
  };
}
