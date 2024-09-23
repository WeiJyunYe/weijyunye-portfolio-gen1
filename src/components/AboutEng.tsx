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
          <div className="text-slate-400 font-NotoSerif">
            <p>
              Hello! I am a front-end developer based in Taipei, Taiwan,
              passionate about building digital products or tools that solve
              people's problems to make their lives easier or even better.
            </p>
            <br />
            <p>
              I learned front-end development through self-study and being
              capable of developing independently. About my work, check out the
              "Work" section.
            </p>
            <br />
            <p>
              Currently, I am open to job opportunities where I can contribute
              and grow. If you have any positions that match my skills, feel
              free to contact me via email anytime.
            </p>
            <br />
            <p className="pb-4">
              Here are a few technologies I've been working with lately:
            </p>
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
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
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
              className="rounded h-48 w-auto md:h-60 lg:h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
