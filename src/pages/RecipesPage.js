import React, { useEffect } from "react";

import ScrollTopButton from "../components/ScrollTopButton";
import CategoryList from "../components/CategoryList";
import RecipeList from "../components/RecipeList";
import "../css/recipelist.css";

const RecipesPage = ({
  recipes,
  user,
  categoryFilter,
  recipesPerPage,
  handleDeleteRecipe,
  handleCategoryFilter,
  handleLoadMoreRecipes,
  handleRecipesPerPage,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="recipes-container">
        <CategoryList
          handleCategoryFilter={handleCategoryFilter}
          categoryFilter={categoryFilter}
        />
      </div>
      <RecipeList
        recipes={recipes}
        user={user}
        handleDeleteRecipe={handleDeleteRecipe}
      />

      <ScrollTopButton />
    </div>
  );
};

export default RecipesPage;

{
  /* {recipes && recipes.length > 0 ? (
  <>
    <label>
      Recipes per Page:
      <select value={recipesPerPage} onChange={handleRecipesPerPage}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </label>
    <div>
      <button onClick={handleLoadMoreRecipes}>LOAD MORE RECIPES</button>
    </div>
  </>
) : null} */
}
