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
  orderBy,
  recipesPerPage,
  handleCategoryFilter,
  handleFormatIngredients,
  handleFormatMethod,
  handleOrderBy,
  handleLoadMoreRecipes,
  handleRecipesPerPage,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="recipe-list-wrapper">
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
          handleFormatIngredients={handleFormatIngredients}
          handleFormatMethod={handleFormatMethod}
        />
      ) : null}
      <div className="recipe-page-bottom">
        <button className="ui button" onClick={handleLoadMoreRecipes}>
          Load More
        </button>
        <ScrollTopButton />
      </div>
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
