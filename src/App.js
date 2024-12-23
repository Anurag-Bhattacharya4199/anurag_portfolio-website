import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactMePage from "./pages/ContactMePage/ContactMePage";
import HobbiesInterestsPage from "./pages/HobbiesInterestsPage/HobbiesInterestsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactMePage />} />
        <Route path="/hobbies" element={<HobbiesInterestsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
