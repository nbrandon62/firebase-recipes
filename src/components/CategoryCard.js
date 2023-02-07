import React from "react";
import { Link } from "react-router-dom";

import "../css/category.css";

const CategoryCard = ({ title, color, filter, handleCategoryFilter }) => {

  return (
    <Link to="/recipes">
      <div
        className="card-container"
        onClick={() => handleCategoryFilter(filter)}
      >
        <div className="title" style={{ backgroundColor: `${color}` }}>
          {title}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
