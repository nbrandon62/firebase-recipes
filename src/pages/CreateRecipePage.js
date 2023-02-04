import React from "react";

import "../css/createrecipe.css";
import AddEditRecipeForm from "../components/AddEditRecipeForm";

const CreateRecipePage = ({ handleAddRecipe }) => {
  return (
    <div>
      <div className="recipe-form-header">
        <h1 className="form-header">Submit your recipe here</h1>
        <h3 className="form-instruction">
          Make it as specific as you want so long as someone with cooking
          experience can follow it
        </h3>
        <h3 className="form-instruction-2">
         You can use grams in your recipe if you want 
        </h3>
      </div>
      <AddEditRecipeForm handleAddRecipe={handleAddRecipe} />
    </div>
  );
};

export default CreateRecipePage;
