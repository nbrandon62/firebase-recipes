import React, { useEffect } from "react";

import "./styles/createrecipe.css";
import AddEditRecipeForm from "../components/form/AddEditRecipeForm";
import CascadingText from "../components/elements/CascadingText";
import { cascadeProps } from "../utils/staticData";

const CreateRecipePage = ({ handleAddRecipe }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="recipe-form-container">
      <div className="recipe-form-header">
        <h1 className="form-header">Submit your recipe here</h1>
      </div>
      <div className="form-subheader">
        <h3>how to submit a recipe</h3>
      </div>
      <CascadingText text={cascadeProps} />
      <AddEditRecipeForm handleAddRecipe={handleAddRecipe} />
    </div>
  );
};

export default CreateRecipePage;
