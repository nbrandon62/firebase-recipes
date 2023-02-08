import React, { useEffect } from "react";
import { Loader, Dimmer } from "semantic-ui-react";

import ScrollTopButton from "../components/ScrollTopButton";
import CategoryList from "../components/CategoryList";
import RecipeList from "../components/RecipeList";
import "../css/recipelist.css";

const RecipesPage = ({
  recipes,
  user,
  isLoading,
  recipesPerPage,
  orderBy,
  handleOrderBy,
  handleDeleteRecipe,
  handleCategoryFilter,
  handleLoadMoreRecipes,
  handleRecipesPerPage,
  handleFetchRecipeById,
  handleFormatIngredients,
  handleFormatMethod,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="recipes-container">
        <CategoryList
          handleCategoryFilter={handleCategoryFilter}
          orderBy={orderBy}
          handleOrderBy={handleOrderBy}
        />
      </div>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      ) : null}
      {!isLoading && recipes && recipes.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#fcede4",
          }}
        >
          <h1>no recipes found...</h1>
        </div>
      ) : null}
      {recipes && recipes.length > 0 ? (
        <RecipeList
          recipes={recipes}
          user={user}
          handleDeleteRecipe={handleDeleteRecipe}
          handleFetchRecipeById={handleFetchRecipeById}
          handleFormatIngredients={handleFormatIngredients}
          handleFormatMethod={handleFormatMethod}
        />
      ) : null}

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
