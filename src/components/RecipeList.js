import React from "react";
import { RecipeCard } from "./RecipeCard";

const RecipeList = ({ recipes, user, handleDeleteRecipe }) => {
  const renderedList = recipes.map((recipe) => {
    return (
      <RecipeCard
        user={user}
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        category={recipe.category}
        ingredients={recipe.ingredients}
        method={recipe.method}
        publishDate={recipe.publishDate}
        handleDeleteRecipe={handleDeleteRecipe}
      />
    );
  });
  return <div className="recipe-list">{renderedList}</div>;
};

export default RecipeList;
