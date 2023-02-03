import React from "react";
import { Divider } from "semantic-ui-react";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";

import '../css/recipelist.css'

const RecipesPage = ({ recipes }) => {
  return (
    <div>
      <Header />
      <div className="recipes-container">
        <CategoryList />
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
