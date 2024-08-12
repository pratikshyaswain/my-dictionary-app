import React from "react";
import { Link } from "react-router-dom";

const Mainsection = () => {
  return (
    <div className="main">
      <div className="content">
        <h1 className="heading">Welcome to WordWiz</h1>
        <p className="para">
          Find the meaning of words, explore definitions, and expand your
          vocabulary with ease.
        </p>
        <Link to="/content" className="link">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Mainsection;
