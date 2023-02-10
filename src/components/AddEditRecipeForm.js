import React from "react";
import { useState } from "react";
import $ from "jquery";

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
    if (category.length === 0) {
      alert("Please select a category before submitting");
      return;
    }
    if (method.length === 0) {
      alert("Please add method to the recipe before submitting");
      return;
    }
    if (title.length === 0) {
      alert("Please add title to the recipe before submitting");
      return;
    }

    const isPublished = new Date(publishDate) <= new Date() ? true : false;

    const newRecipe = {
      title,
      category,
      publishDate: new Date(publishDate),
      method,
      isPublished,
      ingredients,
    };

    handleAddRecipe(newRecipe);
    setTitle("");
    setCategory("");
    setMethod("");
    setIngredients("");
  };


  function handleAutoHyphen(event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      var cursorPos = $("#textbox").prop("selectionStart");
      var v = $("#textbox").val();
      var textBefore = v.substring(0, cursorPos);
      var textAfter = v.substring(cursorPos, v.length);
      $("#textbox").val(textBefore + "\n-" + textAfter);

      // setCaretPosition(document.getElementById("textbox"), cursorPos + 2);
      return false;
    }
    event.stopPropagation();
  }
  //   function setCaretPosition(ctrl, pos) {
  //   if (ctrl.setSelectionRange) {
  //     ctrl.focus();
  //     ctrl.setSelectionRange(pos, pos);
  //   } else if (ctrl.createTextRange) {
  //     var range = ctrl.createTextRange();
  //     range.collapse(true);
  //     range.moveEnd("character", pos);
  //     range.moveStart("character", pos);
  //     range.select();
  //   }
  // }
 

  return (
    <div className="recipe-form-container">
      <div className="ui form" onSubmit={handleRecipeSubmit}>
        <div className="fields">
          <div className="twelve wide field">
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
          <div className="twelve wide field">
            <select
              className="ui dropdown"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="0">Category</option>
              <option value="vegetable">Vegetable</option>
              <option value="protein">Protein</option>
              <option value="starch">Starch</option>
            </select>
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="fields">
          <div className="twelve wide field">
            <div className="field">
              <label>Method</label>
              <textarea
                id="textbox"
                value={method}
                onKeyPress={(event) => handleAutoHyphen(event)}
                onChange={(e) => setMethod(e.target.value)}
              >
              </textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="ui form">
        <div className="fields">
          <div className="twelve wide field">
            <div className="field">
              <label>Ingredients</label>
              <textarea
                placeholder="Please separate ingredients by comma like so: milk, flour, sugar, etc...
                or: 
                milk,
                flour,
                sugar,
                "
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
          <div className="twelve wide field">
            <div className="field">
              <label>Date</label>
              <textarea
                placeholder="Today's date..."
                type="date"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                rows="1"
              ></textarea>
              <button
                type="submit"
                className="ui button"
                onClick={handleRecipeSubmit}
              >
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditRecipeForm;
