import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./AboutPage.scss";

const AboutPage = () => (
  <div className="about-page">
    <Header />
    <main className="content">
      <h1>About Me</h1>
      <p>
        This is the About Me page where you can include your professional
        background and story.
      </p>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
