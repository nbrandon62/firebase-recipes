import React from "react";

import "../css/category.css";

const CategoryCard = ({ title, color }) => {
  return (
    <div className="card-container">
      <div className="title" style={{ backgroundColor: `${color}`}}>
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;
