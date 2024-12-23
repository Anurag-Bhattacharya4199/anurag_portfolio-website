import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tile from "../../components/Tile/Tile";
import ProfilePic from "../../assets/images/profile.jpeg";
import "./HomePage.scss";

const HomePage = () => (
  <div className="homepage">
    <Header />
    <main className="main-content">
      {/* Introduction Section */}
      <section className="intro">
        <img src={ProfilePic} alt="Profile" className="intro-photo" />
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi! I'm Anurag Bhattacharya, a passionate Full-Stack Developer who
          loves building impactful and innovative solutions. Explore my
          portfolio to learn more about me and my work.
        </p>
      </section>

      {/* Navigation Tiles Section */}
      <section className="tiles">
        <Tile
          title="About Me"
          description="Learn more about my journey and skills."
          link="/about"
        />
        <Tile
          title="Projects"
          description="Check out some of the exciting projects I've worked on."
          link="/projects"
        />
        <Tile
          title="Contact"
          description="Get in touch for collaborations or inquiries."
          link="/contact"
        />
        <Tile
          title="Hobbies"
          description="Discover my hobbies and interests outside of work."
          link="/hobbies"
        />
      </section>
    </main>
    <Footer />
  </div>
);

export default HomePage;
