import React from "react";
import { RecipeCard } from "./RecipeCard";

const RecipeList = ({ recipes, user, handleDeleteRecipe, handleFetchRecipeById, handleFormatIngredients, handleFormatMethod }) => {
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
        handleFetchRecipeById={handleFetchRecipeById}
        handleFormatIngredients={handleFormatIngredients}
        handleFormatMethod={handleFormatMethod}
      />
    );
  });
  return <div className="recipe-list">{renderedList}</div>;
};

export default RecipeList;
