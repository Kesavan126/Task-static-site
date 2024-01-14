import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Content1 from "../components/Content/Content1";
import AboutContent from "../components/About/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Content1
        heading="ABOUT"
        text="Dedicated to React Front-End Developer with 1‑year of hands‑on experience in designing, developing, and deploying front-end web applications. Proven expertise in utilizing HTML, CSS, Bootstrap, JavaScript, React.js, Next.js and MySQL to create scalable and responsive solutions. Ability to collaborate effectively with cross‑functional teams to deliver high‑quality software solutions, lifecycles and databases."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
