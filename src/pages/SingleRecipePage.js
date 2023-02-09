import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

import "../css/singlerecipecard.css";

const SingleRecipePage = ({
  user,
  handleFetchRecipeById,
  handleFormatIngredients,
  handleFormatMethod,
  handleFormatDate,
  handleDeleteRecipe,
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [formattedIngredients, setFormattedIngredients] = useState([]);
  const [formattedMethod, setFormattedMethod] = useState([]);
  const [formattedDate, setFormattedDate] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchSingleRecipe();
  }, []);

  const fetchSingleRecipe = async () => {
    const response = await handleFetchRecipeById(`${id}`);
    setSelectedRecipe(response);
    setFormattedMethod(handleFormatMethod(response.method));
    setFormattedIngredients(handleFormatIngredients(response.ingredients));
    setFormattedDate(handleFormatDate(response.publishDate.seconds));
  };

  return (
    <div className="single-recipe-wrapper">
      <div className="single-recipe-container">
        <div className="single-recipe-card">
          {/* <div className="sr-button-container">
          <Link to="/recipes">
            <button className="ui button">Keep Browsing</button>
          </Link>
        </div> */}

          <div className="single-recipe-header-container">
            <h3 className="single-recipe-header">{selectedRecipe.title}</h3>
            {user ? (
              <FaTrashAlt
                onClick={(e) => handleDeleteRecipe(id)}
                className="trash-icon"
              />
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

export default SingleRecipePage;

//TODO: style the single recipe card to be a more blown up version of the recipe card.
