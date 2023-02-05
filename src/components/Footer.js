import React from "react";
import { Link } from "react-router-dom";
import { TfiYoutube } from "react-icons/tfi";

import "../css/footer.css";

const Footer = ({ user }) => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/recipes">
          <div className="footer-home">Recipes</div>
        </Link>
        <Link to="/create-recipes-admin-only">
          {user ? <div className="footer-submit">Submit</div> : null}
        </Link>
      </div>
      <Link to="https://www.youtube.com/">
        <div className="footer-icon">
          <TfiYoutube />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
