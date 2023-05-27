import AboutEng from "./components/AboutEng";
import AboutCht from "./components/AboutCht";
import ContactEng from "./components/ContactEng";
import ContactCht from "./components/ContactCht";
import Header from "./components/Header";
import MainEng from "./components/MainEng";
import MainCht from "./components/MainCht";
import WorkEng from "./components/WorkEng";
import WorkCht from "./components/WorkCht";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isEng, setIsEng] = useState<boolean>(true);

  const languageSwitch = () => {
    setIsEng(!isEng);
  };

  return (
    <div>
      <Header
        mainRef={mainRef}
        aboutRef={aboutRef}
        workRef={workRef}
        contactRef={contactRef}
        languageSwitch={languageSwitch}
        isEng={isEng}
      />
      {isEng ? (
        <MainEng ref={mainRef} workRef={workRef} />
      ) : (
        <MainCht ref={mainRef} workRef={workRef} />
      )}
      {isEng ? <AboutEng ref={aboutRef} /> : <AboutCht ref={aboutRef} />}
      {isEng ? (
        <WorkEng ref={workRef} isEng={isEng} />
      ) : (
        <WorkCht ref={workRef} isEng={isEng} />
      )}
      {isEng ? (
        <ContactEng ref={contactRef} mainRef={mainRef} isEng={isEng} />
      ) : (
        <ContactCht ref={contactRef} mainRef={mainRef} isEng={isEng} />
      )}
    </div>
  );
};

export default App;
