import React from "react";
import { useState } from "react";

const AddEditRecipeForm = ({ handleAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [publishDate, setPublishDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [method, setMethod] = useState("");
  const [ingredients, setIngredients] = useState("");


  const handleRecipeSubmit = (e) => {
    e.preventDefault();
    
    if (ingredients.length === 0) {
      alert("Please add ingredients to the recipe before submitting");
      return;
    }

    const isPublished = new Date(publishDate) <= new Date() ? true : false;

    const newRecipe = {
      title,
      category,
      publishDate: new Date(publishDate),
      isPublished,
      ingredients,
    };

    handleAddRecipe(newRecipe);
  };

  return (
    <div className="ui container" >
      <div className="ui form" onSubmit={handleRecipeSubmit}>
        <div className="fields">
          <div className="eight wide field">
            <label>Recipe Title</label>
            <input
              type="text"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="fields">
          <div className="eight wide field">
            <select
              className="ui dropdown"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="0">Category</option>
              <option value="1">Vegetable</option>
              <option value="2">Protein</option>
              <option value="3">Starch</option>
            </select>
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="fields">
          <div className="eight wide field">
            <div className="field">
              <label>Method</label>
              <textarea
                placeholder="Write out method here..."
                type="text"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="fields">
          <div className="eight wide field">
            <div className="field">
              <label>Ingredients</label>
              <textarea
                placeholder="List ingredients..."
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="fields">
          <div className="eight wide field">
            <div className="field">
              <label>Date</label>
              <textarea
                placeholder="Today's date..."
                type="date"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                rows="1"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <button className="ui button primary" onClick={handleRecipeSubmit}>
        Add Recipe
      </button>
    </div>
  );
};

export default AddEditRecipeForm;
