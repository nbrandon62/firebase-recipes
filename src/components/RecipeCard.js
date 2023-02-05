import React from "react";

import "../css/recipecard.css";

export const RecipeCard = ({
  title,
  method,
  category,
  ingredients,
  publishDate,
  id,
}) => {
  const formatDate = (publishDate) => {
    const day = publishDate.getUTCDate();
    const month = publishDate.getUTCMonth() + 1;
    const year = publishDate.getFullYear();
    const dateString = `${month}/${day}/${year}`;

    return dateString;
  };

  const formatIngredients = (ingredients) => {
    let ingredientsArr = ingredients.split(",");
    let ingredientList = ingredientsArr.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    });
    return ingredientList;
  };

  const formatMethod = (method) => {
    let methodArr = method.split("-");
    let methodList = methodArr.map((method, index) => {
      return <li key={index}>{method}</li>;
    });
    return methodList;
  };

  return (
    <div className="recipe-card">
      <h3 className="recipe-header">{title}</h3>
      <div className="recipe-column">
        <h3 className="recipe-title">ingredients:</h3>
        <li className="recipe-ingredients">{formatIngredients(ingredients)}</li>
      </div>
      <div className="recipe-column">
        <h3 className="recipe-title">method:</h3>
        <ol className="recipe-method">{formatMethod(method)}</ol>
      </div>
    </div>
  );
};
