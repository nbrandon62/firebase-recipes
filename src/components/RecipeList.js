import React from "react";
import { RecipeCard } from "./RecipeCard";


const RecipeList = ({ recipes }) => {
  const renderedList = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        category={recipe.category}
        ingredients={recipe.ingredients}
        method={recipe.method}
        publishDate={recipe.publishDate}
      />
    );
  });
  return <div className="recipe-list">{renderedList}</div>;
};

export default RecipeList;
