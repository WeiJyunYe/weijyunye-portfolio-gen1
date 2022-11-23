import { forwardRef } from "react";

const About = forwardRef(
  (props, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <div className="flex bg-[#003153] w-full" ref={ref}>
        <div className="flex flex-col w-1/2 h-screen text-slate-300 justify-center">
          <h3 className="flex justify-center text-4xl">About</h3>
          <p className="flex justify-center px-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            sapien faucibus et molestie ac feugiat. Diam volutpat commodo sed
            egestas egestas fringilla.
          </p>
        </div>

        <div className="w-1/2">
          <ul className="flex flex-col h-screen bg-gray-500 text-slate-300 items-center justify-center">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>react</li>
            <li>typescript</li>
            <li>switch testing msg</li>
          </ul>
        </div>
      </div>
    );
  }
);

export default About;
