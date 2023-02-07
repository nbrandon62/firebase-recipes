import React from "react";
import { Link } from "react-router-dom";

import "../css/header.css";

const Header = () => {

  return (
    <div className="container">
        <div className="header-container">
      <Link to="/home">
          <div className="header">#cheflife at home </div>
      </Link>
        </div>
    </div>
  );
};

export default Header;
