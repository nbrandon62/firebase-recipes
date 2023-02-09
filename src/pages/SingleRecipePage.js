import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "../css/singlerecipecard.css";

const SingleRecipePage = ({
  handleFetchRecipeById,
  handleFormatIngredients,
  handleFormatMethod,
  handleFormatDate
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [formattedIngredients, setFormattedIngredients] = useState([]);
  const [formattedMethod, setFormattedMethod] = useState([]);
  const [formattedTime, setFormattedTime] = useState([]);

  const { id } = useParams();
  
  useEffect(() => {
    fetchSingleRecipe();
  }, []);
  
  const fetchSingleRecipe = async () => {
    const response = await handleFetchRecipeById(`${id}`);
    setSelectedRecipe(response);
    setFormattedMethod(handleFormatMethod(response.method))
    setFormattedIngredients(handleFormatIngredients(response.ingredients))
    setFormattedTime(handleFormatDate(response.publishDate.seconds));
  };


  return (
    <div>
      <Link to="/recipes">
        <button>back to products</button>
      </Link>
      <div>{selectedRecipe.title}</div>
      <div>{formattedIngredients}</div>
      <ol>{formattedMethod}</ol>
      <div>{selectedRecipe.category}</div>
      <div>{formattedTime}</div>
    </div>
  );
};

export default SingleRecipePage;

//TODO: style the single recipe card to be a more blown up version of the recipe card.

//   <div className="recipe-card-container">
//     <div className="recipe-card">
//       <div className="recipe-header-container">
//         <h3 className="recipe-header">{title}</h3>
//         {user ? (
//           <FaTrashAlt
//             onClick={(e) => handleDeleteRecipe(id)}
//             className="trash-icon"
//           />
//         ) : null}
//       </div>
//       <div className="recipe-column">
//         <h3 className="recipe-title">ingredients:</h3>
//         <div className="recipe-ingredients">
//           {formatIngredients(ingredients)}
//         </div>
//       </div>
//       <div className="recipe-column">
//         <h3 className="recipe-title">method:</h3>
//         <ol className="recipe-method">{formatMethod(method)}</ol>
//       </div>
//     </div>
// </div>