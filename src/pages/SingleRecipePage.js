import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
