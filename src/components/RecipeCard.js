import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../css/recipecard.css";

export const RecipeCard = ({
  title,
  method,
  category,
  ingredients,
  publishDate,
  id,
  user,
  handleDeleteRecipe,
  handleFetchRecipeById,
}) => {

  const formatIngredients = (ingredients) => {
    let ingredientsArr = ingredients.split(",");
    let ingredientList = ingredientsArr.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    });
    return ingredientList;
  };

  const formatMethod = (method) => {
    let methodArr = method.split("-").splice(1);
    let methodList = methodArr.map((method, index) => {
      return <li key={index}>{method}</li>;
    });
    return methodList;
  };

  return (
    <div className="recipe-card-container">
      <Link to={`/recipes/${id}`}>
        <div className="recipe-card">
          <div className="recipe-header-container">
            <h3 className="recipe-header">{title}</h3>
            {user ? (
              <FaTrashAlt
                onClick={(e) => handleDeleteRecipe(id)}
                className="trash-icon"
              />
            ) : null}
          </div>
          <div className="recipe-column">
            <h3 className="recipe-title">ingredients:</h3>
            <div className="recipe-ingredients">
              {formatIngredients(ingredients)}
            </div>
          </div>
          <div className="recipe-column">
            <h3 className="recipe-title">method:</h3>
            <ol className="recipe-method">{formatMethod(method)}</ol>
          </div>
        </div>
      </Link>
    </div>
  );
};
