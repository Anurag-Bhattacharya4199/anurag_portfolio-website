import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ContactPage.scss";

const ContactPage = () => (
  <div className="contact-page">
    <Header />
    <main className="content">
      <h1>Contact Me</h1>
      <p>
        This is the Contact page where you can include your contact form and
        details.
      </p>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
