import React from "react";

import "../css/category.css";

const CategoryCard = ({ title, color, filter, handleCategoryFilter }) => {

  return (

      <div
        className="category-card-container"
        onClick={() => handleCategoryFilter(filter)}
      >
        <div className="title" style={{ backgroundColor: `${color}` }}>
          {title}
        </div>
      </div>

  );
};

export default CategoryCard;
