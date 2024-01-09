import React from 'react'

import RecipeCard from './RecipeCard'
import { formatIngredients, formatMethod } from '../../utils/formatting'

const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          ingredients={formatIngredients(recipe.ingredients)}
          method={formatMethod(recipe.method)}
          publishDate={recipe.publishDate}
        />
      ))}
    </>
  )
}

export default RecipeList
