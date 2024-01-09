import React from 'react'
import { Link } from 'react-router-dom'

import './styles/recipecard.css'

const RecipeCard = ({ title, method, ingredients, id }) => {
  return (
    <Link to={`/recipes/${id}`}>
      <div className='recipe-card__container' role='listitem'>
        <h1 className='rc__header'>{title}</h1>
        <div className='rc__body'>
          <div className='rc__method'>
            <h2 className='rc__col-header'>ingredients:</h2>
            <p className='rc__content'>{ingredients}</p>
          </div>
          <div className='rc__ingredients'>
            <h2 className='rc__col-header'>method:</h2>
            <p className='rc__content'>{method}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
