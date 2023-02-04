import React from "react";
import { Link } from "react-router-dom";

import "../css/header.css";

const Header = () => {
  return (
    <div className="container">
      <Link to="/">
        <div className="header">#cheflife at home </div>
      </Link>
    </div>
  );
};

export default Header;
