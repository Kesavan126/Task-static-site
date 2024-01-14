import React from "react";
import "./Work.css";
import Pro2 from "../../assets/Project 2.jpg";
import Pro1 from "../../assets/Project 1.jpg";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={Pro2} alt="/" />
          <h2 className="project-title">Ecommerce Website Design</h2>
          <div className="pro-details">
            <p>
              Sound Basket platform is a product-based web application
              infrastructure using React.Js and Next.Js with a high availability
              in a 25% reduction in loading times and an 18% increase in user
              engagement.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://ecommerce-sanity-stripe-next-js.vercel.app/"
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                to="https://github.com/Kesavan126/ecommerce_sanity_stripe_nextJS"
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Pro1} alt="/" />
          <h2 className="project-title">Restaurant UI</h2>
          <div className="pro-details">
            <p>
              Spearheaded the adoption of React.Js, transforming the user
              interface of Gericht Restaurant, leading to a remarkable 50%
              decrease in page load time and a 25% increase in mobile conversion
              rates.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://gericht-restaurants-775a6.web.app/"
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                to="https://drive.google.com/drive/folders/1sYCbpMD8dU8aNrpyt1ZcaF0QwP0zL6-y?usp=drive_link"
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Pro1} alt="/" />
          <h2 className="project-title">Restaurant UI</h2>
          <div className="pro-details">
            <p>
              Spearheaded the adoption of React.Js, transforming the user
              interface of Gericht Restaurant, leading to a remarkable 50%
              decrease in page load time and a 25% increase in mobile conversion
              rates.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://gericht-restaurants-775a6.web.app/"
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                to="https://drive.google.com/drive/folders/1sYCbpMD8dU8aNrpyt1ZcaF0QwP0zL6-y?usp=drive_link"
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
