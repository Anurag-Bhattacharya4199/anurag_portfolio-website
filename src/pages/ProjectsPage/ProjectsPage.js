import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProjectsPage.scss";

const ProjectsPage = () => (
  <div className="projects-page">
    <Header />
    <main className="content">
      <h1>Projects</h1>
      <p>This is the Projects page where you can showcase your work.</p>
    </main>
    <Footer />
  </div>
);

export default ProjectsPage;
