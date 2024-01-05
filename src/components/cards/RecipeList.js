import React from 'react'

import RecipeCard from './RecipeCard'

const RecipeList = ({
  recipes,
  handleFormatIngredients,
  handleFormatMethod,
}) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          ingredients={handleFormatIngredients(recipe.ingredients)}
          method={handleFormatMethod(recipe.method)}
          publishDate={recipe.publishDate}
        />
      ))}
    </>
  )
}

export default RecipeList
