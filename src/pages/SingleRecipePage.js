import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import '../css/singlerecipecard.css';

const SingleRecipePage = ({ handleFetchRecipeById }) => {
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const {id} = useParams();

  const fetchSingleRecipe = async () => {
    const response = await handleFetchRecipeById(`${id}`);
    setSelectedRecipe(response);
  }

  useEffect(() => {
    fetchSingleRecipe();
  }, [])

  //TODO: have this function run after the promise is fulfilled. 

  // const formatDate = (selectedRecipe) => {
  //   const day = publishDate.getUTCDate();
  //   const month = publishDate.getUTCMonth() + 1;
  //   const year = publishDate.getFullYear();
  //   const dateString = `${month}/${day}/${year}`;

  //   return dateString;
  // };

  console.log(selectedRecipe);

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

  return (
    <div>
      <Link to="/recipes">
        <button>back to products</button>
      </Link>
      <div>{selectedRecipe.title}</div>
      <div>{selectedRecipe.ingredients}</div>
      <div>{selectedRecipe.method}</div>
      <div>{selectedRecipe.category}</div>
      {/* <div>{formatDate(selectedRecipe)}</div> */}
      
    </div>
  );
};

export default SingleRecipePage;
