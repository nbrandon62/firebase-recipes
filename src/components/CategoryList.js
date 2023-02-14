import React from "react";
import CategoryCard from "./CategoryCard";
import { TbArrowsDownUp } from "react-icons/tb";

import "../css/category.css";

const categories = [
  {
    key: 1,
    filter: "protein",
    title: "proteins",
    icon: null,
    color: "#FFAF83",
  },
  {
    key: 2,
    filter: "vegetable",
    title: "veggies",
    icon: null,
    color: "#00660A",
  },
  {
    key: 3,
    filter: "starch",
    title: "starch",
    icon: null,
    color: "#FFFDE8",
  },

];

const CategoryList = ({ orderBy, recipesPerPage, handleOrderBy, handleCategoryFilter, handleFetchRecipes }) => {

  const handleOrderByDate = (event) => {
    if (orderBy === "publishDateDesc") {
      handleOrderBy("publishDateAsc");
    } else {
      handleOrderBy("publishDateDesc");
    }
  };

  const renderedList = categories.map((category) => {
    return (
      <CategoryCard
        title={category.title}
        icon={category.icon}
        key={category.key}
        color={category.color}
        filter={category.filter}
        handleCategoryFilter={handleCategoryFilter}
        
      />
    );
  });

  return (
    <div className="card-list-container">
      <div className="card-list">
        <div className="sort-all-title" onClick={(e) => handleCategoryFilter()}>See All</div>
        {renderedList}
      <div className="sort-by-container">
        {orderBy === "publishDateDesc" ? (
          <div className="card-list-sort" onClick={(e) => handleOrderByDate()}>
            <div>Oldest</div>
            <TbArrowsDownUp className="sort-by-icon" />
          </div>
        ) : (
          <div className="card-list-sort" onClick={(e) => handleOrderByDate()}>
            <div>Most Recent</div>
            <TbArrowsDownUp className="sort-by-icon" />
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default CategoryList;
