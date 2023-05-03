import { forwardRef } from "react";
import myPortrait from "../assets/portrait.jpg";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="bg-[#001e43] w-full h-full">
      <div className="w-full h-full mx-auto flex flex-col  justify-center items-center text-slate-300">
        <div className="w-full max-w-[1080px] grid md:grid-cols-2 gap-3 p-10">
          <div className="pt-28" ref={ref}>
            <p className="rwd-font-md font-Ubuntu inline border-b-4 border-[#e5a323]">
              About
            </p>
          </div>
          <div></div>
          <div className="text-slate-400 font-NotoSansCHT">
            <p>
              嗨！我是一位前端工程師，熱衷於打造便民數位服務或工具，希望幫助使用者解決問題或讓他們的生活更輕鬆。
            </p>
            <br />
            <p>
              我透過自學來學習前端開發，具備獨立開發專案的能力。關於我的作品，請看看作品區。
            </p>
            <br />
            <p>
              目前我正在尋找一份能夠貢獻所學且能繼續精進能力的工作機會，如您有任何相關職缺，歡迎隨時透過電子郵件與我聯絡。
            </p>
            <br />
            <p className="pb-4">以下是我正在使用的語言、函數庫或框架：</p>
            <ul className="grid grid-cols-3 items-center text-slate-400 pt-2 pb-4 gap-4 font-NotoSerif">
              <li className="flex flex-col items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="icon of html"
                  className="w-2/5 h-2/5"
                />
                HTML
              </li>
              <li className="flex flex-col items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="icon of css"
                  className="w-2/5 h-2/5"
                />
                CSS
              </li>
              <li className="flex flex-col items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="icon of javascript"
                  className="w-2/5 h-2/5"
                />
                Javascript
              </li>
              <li className="flex flex-col items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="icon of react"
                  className="w-2/5 h-2/5"
                />
                React
              </li>
              <li className="flex flex-col items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="icon of typescript"
                  className="w-2/5 h-2/5"
                />
                Typescript
              </li>
              <li className="flex flex-col items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  alt="icon of tailwind css"
                  className="w-2/5 h-2/5"
                />
                TailwindCSS
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={myPortrait}
              alt="portrait of Weijyun"
              className="rounded-md h-48 w-auto md:h-60 lg:h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
