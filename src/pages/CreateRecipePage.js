import React, { useEffect } from "react";
import { Grid, Segment } from "semantic-ui-react";

import "../css/createrecipe.css";
import AddEditRecipeForm from "../components/AddEditRecipeForm";

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
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <p>
              Make the recipe as specific as you want. Describe the cooking process how you make it and others can make their twists if they want.

            </p>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <p>
              For the ingredients, enter rough amounts by measurement, whether it's cups, tablespoons, grams, etc  as long as you separate them by
              comma. The card will reformat it to a bulleted list.
            </p>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <p>For the method, you can write out a paragraph describing what to do so long as someone with cooking experience can decipher what to do. The card can also reformat the method into a numbered list, you just have to hyphenate each step</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* <h3 className="form-instruction">
            Make it as specific as you want so long as someone with cooking
            experience can follow it
          </h3>
          <h3 className="form-instruction-2">
            You can use grams in your recipe if you want
          </h3> */}

      <AddEditRecipeForm handleAddRecipe={handleAddRecipe} />
    </div>
  );
};

export default CreateRecipePage;
