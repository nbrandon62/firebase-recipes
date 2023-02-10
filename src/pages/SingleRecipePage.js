import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../css/singlerecipecard.css";
import SingleRecipe from "../components/SingleRecipe";
import EditRecipe from "../components/EditRecipe";

const SingleRecipePage = ({
  user,
  handleFetchRecipeById,
  handleUpdateRecipe,
  handleFormatIngredients,
  handleFormatMethod,
  handleFormatDate,
  handleDeleteRecipe,
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [formattedIngredients, setFormattedIngredients] = useState([]);
  const [formattedMethod, setFormattedMethod] = useState([]);
  const [formattedDate, setFormattedDate] = useState([]);
  const [showEdit, setShowEdit] = useState(false);


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

  const handleShowEditClick = () => {
    setShowEdit(!showEdit);
  };
  
  //  TODO: change the firebase functions to be able to take a new parameter of updatedRecipe. I think that the JSX and Components are structured properly but the console is saying insufficient permissions.

  // TODO: secure the read rules per their email to me? 

  const handleEditSubmit = (id, updatedRecipe) => {
    handleUpdateRecipe(id, updatedRecipe);
    setShowEdit(!showEdit)
  }

  let content = (
    <>
      <SingleRecipe
        user={user}
        selectedRecipe={selectedRecipe}
        formattedMethod={formattedMethod}
        formattedIngredients={formattedIngredients}
        formattedDate={formattedDate}
        handleDeleteRecipe={handleDeleteRecipe}
        handleShowEditClick={handleShowEditClick}
      />
    </>
  );
  if (showEdit) {
    content = (
      <EditRecipe
      user={user}
      title={selectedRecipe.title}
      date={selectedRecipe.date}
      ingredients={selectedRecipe.ingredients}
      method={selectedRecipe.method}
      tite={selectedRecipe.title}
      handleEditSubmit={handleEditSubmit}
      />
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default SingleRecipePage;
