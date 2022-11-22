import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  /*const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
