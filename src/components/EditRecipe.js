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
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newMethod, setNewMethod] = useState(method);
  const [newIngredients, setNewIngredients] = useState(ingredients);

  const { id } = useParams();

  const onEditSubmit = (id) => {

    const updatedRecipe = {
      newTitle,
      newMethod,
      newIngredients
    };
    handleEditSubmit(id, updatedRecipe)
  }

  return (
    <div>
      {newTitle}
      {newIngredients}
      {newMethod}
      <div className="single-recipe-wrapper">
        <div className="single-recipe-container">
          <div className="single-recipe-card">
            <div className="single-recipe-header-container">
              <h3 className="single-recipe-header">{newTitle}</h3>
              {user ? (
                <>
                  <BsPencilSquare onClick={(e) => handleEditSubmit(id)} />
                </>
              ) : null}
            </div>

            <div className="sr-col-wrapper">
              <h5 className="single-recipe-date">{date}</h5>
              <div className="sr-col-ingredients">
                <h3 className="single-recipe-title">ingredients:</h3>
                <textarea
                  className="single-recipe-ingredients"
                  value={newIngredients}
                  onChange={e => setNewIngredients(e.target.value)}
                ></textarea>
              </div>
              <div className="sr-col-method">
                <h3 className="single-recipe-title">method:</h3>
                <textarea
                  className="single-recipe-ingredients"
                  value={newMethod}
                  onChange={e => setNewMethod(e.target.value)}
                ></textarea>
                <button 
                className="ui button"
                onClick={(e) => onEditSubmit(id)}
                >Save</button>
              </div>
            </div>
          </div>
          <div className="sr-button-container">
            <Link to="/recipes">
              <button className="ui button">Keep Browsing</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRecipe;
