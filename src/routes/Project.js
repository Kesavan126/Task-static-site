import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Content1 from "../components/Content/Content1";
import Pricing from "../components/Card/Pricing";
import Work from "../components/Work/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Content1 heading="PROJECTS" text="Some of my most recent works." />
      <Work />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Project;
