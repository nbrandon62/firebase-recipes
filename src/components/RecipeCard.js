import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../css/recipecard.css";

export const RecipeCard = ({
  title,
  method,
  ingredients,
  id,
  user,
  handleDeleteRecipe,
  handleFormatIngredients,
  handleFormatMethod
}) => {


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
              {handleFormatIngredients(ingredients)}
            </div>
          </div>
          <div className="recipe-column">
            <h3 className="recipe-title">method:</h3>
            <ol className="recipe-method">{handleFormatMethod(method)}</ol>
          </div>
        </div>
      </Link>
    </div>
  );
};
