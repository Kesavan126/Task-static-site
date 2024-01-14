import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- FullStack -</h3>
          <span className="bar"></span>
          <p>- 20 Days -</p>
          <p>- 6 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
        </div>
        <div className="card">
          <h3>- UI Only -</h3>
          <span className="bar"></span>
          <p>- 10 Days -</p>
          <p>- 6 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
        </div>
        <div className="card">
          <h3>- UI Only -</h3>
          <span className="bar"></span>
          <p>- 10 Days -</p>
          <p>- Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
