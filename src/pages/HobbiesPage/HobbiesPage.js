import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./HobbiesPage.scss";

const HobbiesPage = () => (
  <div className="hobbies-page">
    <Header />
    <main className="content">
      <h1>Hobbies & Interests</h1>
      <p>
        This is the Hobbies page where you can highlight your personal
        interests.
      </p>
    </main>
    <Footer />
  </div>
);

export default HobbiesPage;
