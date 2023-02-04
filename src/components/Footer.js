import React from "react";
import { Link } from "react-router-dom";

import "../css/footer.css";

const Footer = ({ user }) => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/">
          <div className="footer-home">Home</div>
        </Link>
        <Link to='/create' >{user ? <div className="footer-submit">Submit</div> : null}</Link>
      </div>
      <div className="footer-icon">Icon</div>
    </div>
  );
};

export default Footer;
