import React from "react";

import "../css/recipecard.css";

export const RecipeCard = ({
  title,
  method,
  category,
  ingredients,
  publishDate,
  id
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
      <div className="recipe-column">
        <h3 className="recipe-title">ingredients:</h3>
        <li className="recipe-ingredients">{ingredients}</li>
      </div>
      <div className="recipe-column">
        <h3 className="recipe-title">method:</h3>
        <p className="recipe-method">{method}</p>
      </div>
    </div>

  );
};
