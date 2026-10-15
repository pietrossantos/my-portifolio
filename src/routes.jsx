import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import CommandPalette from "./components/CommandPalette";
import NotFound from "./Pages/NotFound";
import ScrollProgress from "./components/ScrollProgress";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <CommandPalette />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
