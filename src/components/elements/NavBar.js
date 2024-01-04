import React from "react";
import { Link } from "react-router-dom";

import "./styles/header.css";

const NavBar = () => {

  return (
    <div className="header-wrapper">
        <div className="header-container">
      <Link to="/">
          <div className="header">#cheflife at home </div>
      </Link>
        </div>
    </div>
  );
};

export default NavBar;
