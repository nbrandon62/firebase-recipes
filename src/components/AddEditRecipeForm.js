import React from "react";
// import { useState } from "react";

const AddEditRecipeForm = ({ handleAddRecipe }) => {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [publishDate, setPublishDate] = useState(
  //   new Date().toISOString.split("T")[0]
  // );
  // const [method, setMethod] = useState("");
  // const [ingredients, setIngredients] = useState([]);
  // const [ingredientName, setIngredientName] = useState("");

  return (
    <div className="ui container">
      <div class="ui form">
        <div class="fields">
          <div class="six wide field">
            <label>Recipe Title</label>
            <input type="text" placeholder="Title..." />
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="fields">
          <div className="six wide field">
            <select class="ui dropdown">
              <option value="">Category</option>
              <option value="0">Vegetable</option>
              <option value="1">Protein</option>
              <option value="2">Starch</option>
            </select>
          </div>
        </div>
      </div>

      <div class="ui form">
        <div className="fields">
          <div className="six wide field">
            <div class="field">
              <label>Method</label>
              <textarea placeholder="Write out method here..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditRecipeForm;
