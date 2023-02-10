import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

import "../css/singlerecipecard.css";

const SingleRecipe = ({
  user,
  selectedRecipe,
  formattedMethod,
  formattedIngredients,
  formattedDate,
  handleDeleteRecipe,
  handleShowEditClick
}) => {
  
  const { id } = useParams();

  return (
    <div className="single-recipe-wrapper">
      <div className="single-recipe-container">
        <div className="single-recipe-card">
          <div className="single-recipe-header-container">
            <h3 className="single-recipe-header">{selectedRecipe.title}</h3>
            {user ? (
              <>
                <FaTrashAlt
                  onClick={(e) => handleDeleteRecipe(id)}
                  className="trash-icon"
                />
                <BsPencilSquare 
                  onClick={(e) => handleShowEditClick(id)}
                />
              </>
            ) : null}
          </div>

          <div className="sr-col-wrapper">
            <h5 className="single-recipe-date">{formattedDate}</h5>
            <div className="sr-col-ingredients">
              <h3 className="single-recipe-title">ingredients:</h3>
              <div className="single-recipe-ingredients">
                {formattedIngredients}
              </div>
            </div>
            <div className="sr-col-method">
              <h3 className="single-recipe-title">method:</h3>
              <ol className="single-recipe-method">{formattedMethod}</ol>
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
  );
};

export default SingleRecipe;
