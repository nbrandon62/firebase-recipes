import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";

import "../css/singlerecipecard.css";

const EditRecipe = ({
  title,
  method,
  ingredients,
  date,
  user,
  handleEditSubmit,
  handleShowEditClick,
}) => {

  const [newTitle, setNewTitle] = useState(title);
  const [newMethod, setNewMethod] = useState(method);
  const [newIngredients, setNewIngredients] = useState(ingredients);

  const { id } = useParams();

  const onEditSubmit = (id) => {
    const updatedRecipe = {
      title: newTitle,
      method: newMethod,
      ingredients: newIngredients,
    };
    handleEditSubmit(id, updatedRecipe);
  };

  return (
    <div>
      <div className="single-recipe-wrapper">
        <div className="single-recipe-container">
          <div className="single-recipe-card">
            <div className="single-recipe-header-container">
              <input
                className="edit-title"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
              ></input>
              {user ? (
                <>
                  <BsPencilSquare
                    className="pencil-icon"
                    onClick={(e) => handleShowEditClick()}
                  />
                </>
              ) : null}
            </div>

            <div className="sr-col-wrapper">
              <h5 className="single-recipe-date">{date}</h5>
              <div className="sr-col-ingredients">
                <h3 className="single-recipe-title">ingredients:</h3>
                <textarea
                  className="edit-ingredients"
                  value={newIngredients}
                  onChange={(e) => setNewIngredients(e.target.value)}
                ></textarea>
              </div>
              <div className="sr-col-method">
                <h3 className="single-recipe-title">method:</h3>
                <textarea
                  className="edit-method"
                  value={newMethod}
                  onChange={(e) => setNewMethod(e.target.value)}
                ></textarea>

              </div>
            </div>
          </div>
          <div className="sr-button-container">
            <button className="ui button" onClick={(e) => onEditSubmit(id)}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRecipe;
