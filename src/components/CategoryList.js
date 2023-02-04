import React from "react";
import CategoryCard from "./CategoryCard";

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

const CategoryList = ({ handleCategoryFilter, categoryFilter }) => {
  const renderedList = categories.map((category) => {
    return (
      <CategoryCard
        title={category.title}
        icon={category.icon}
        key={category.key}
        color={category.color}
        filter={category.filter}
        categoryFilter={categoryFilter}
        handleCategoryFilter={handleCategoryFilter}
      />
    );
  });

  return <div className="card-list">{renderedList}</div>;
};

export default CategoryList;
