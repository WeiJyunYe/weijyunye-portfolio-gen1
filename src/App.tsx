import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import Work from "./components/Work";
import { useRef } from "react";

const App = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Header
        mainRef={mainRef}
        aboutRef={aboutRef}
        workRef={workRef}
        contactRef={contactRef}
      />
      <Main ref={mainRef} />
      <About ref={aboutRef} />
      <Work ref={workRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default App;
