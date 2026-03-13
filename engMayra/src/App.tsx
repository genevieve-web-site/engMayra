import { Route, Routes } from "react-router-dom";
import AboutSection from "./pages/about.tsx";
import Experiencias from "./pages/Experiencias";
import Cursos from "./pages/Cursos";
import Curso_Plan from "./pages/Curso_Plan";
import Ebook_Plan from "./pages/Ebook";
import Consultoria from "./pages/Consultoria";
import LinkTree from "./componentes/link1";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LinkTree />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/experiencias" element={<Experiencias />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/cursos_plan" element={<Curso_Plan />} />
      <Route path="/ebook" element={<Ebook_Plan />} />
      <Route path="/consultoria" element={<Consultoria />} />
      <Route path="*" element={<LinkTree />} />
    </Routes>
  );
}
