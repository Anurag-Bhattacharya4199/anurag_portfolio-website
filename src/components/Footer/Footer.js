import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 Anurag Bhattacharya</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/anurag-bhattacharya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/Anurag-Bhattacharya4199"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <p>
        Email: <a href="mailto:anuragbtor@gmail.com">anuragbtor@gmail.com</a>
      </p>
    </div>
  </footer>
);

export default Footer;
