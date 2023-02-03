import React from "react";
import CategoryCard from "./CategoryCard";

import '../css/category.css';

const categories = [
  {
    key: 1,
    title: "proteins",
    icon: null,
    color: "#FFAF83"
  },
  {
    key: 2,
    title: "veggies",
    icon: null,
    color: "#00660A"
  },
  {
    key: 3,
    title: "starch",
    icon: null,
    color: "#FFFDE8"
  },
];

const CategoryList = () => {
  const renderedList = categories.map((category) => {
    return (
      <CategoryCard
        title={category.title}
        icon={category.icon}
        key={category.key}
        color={category.color}
      />
    );
  });

  return <div className="card-list">{renderedList}</div>;
};

export default CategoryList;
