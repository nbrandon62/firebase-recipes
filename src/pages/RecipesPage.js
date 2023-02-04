import React from "react";
import CategoryList from "../components/CategoryList";
import RecipeList from "../components/RecipeList";

import "../css/recipelist.css";

const RecipesPage = ({ recipes, categoryFilter, handleCategoryFilter }) => {
  return (
    <div>
      <div className="recipes-container">
        <CategoryList
          handleCategoryFilter={handleCategoryFilter}
          categoryFilter={categoryFilter}
        />
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
