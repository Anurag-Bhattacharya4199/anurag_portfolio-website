import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HobbiesPage from "./pages/HobbiesPage/HobbiesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
