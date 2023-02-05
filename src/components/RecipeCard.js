import React from "react";


import "../css/recipecard.css";

export const RecipeCard = ({
  title,
  method,
  category,
  ingredients,
  publishDate,
}) => {
  const formatDate = (publishDate) => {
    const day = publishDate.getUTCDate();
    const month = publishDate.getUTCMonth() + 1;
    const year = publishDate.getFullYear();
    const dateString = `${month}/${day}/${year}`;

    return dateString;
  };

  return (
    <div className="recipe-card">
      <h3 className="recipe-title">{title}</h3>
      <div className="column">
        <h3 className="recipe-title">ingredients:</h3>
        <li>{ingredients}</li>
      </div>
      <div className="column">
        <h3 className="recipe-title">method:</h3>
        <p>{method}</p>
      </div>
    </div>
  );
};
