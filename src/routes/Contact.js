import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Content1 from "../components/Content/Content1";
import Form from "../components/Contact/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Content1 heading="CONTACT" text="Let's have a chat." />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
