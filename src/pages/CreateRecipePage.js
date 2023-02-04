import React from 'react'

import AddEditRecipeForm from '../components/AddEditRecipeForm'

const CreateRecipePage = ({ handleAddRecipe }) => {
  return (
    <AddEditRecipeForm handleAddRecipe={handleAddRecipe} />
    )
}

export default CreateRecipePage