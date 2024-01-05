import React from 'react'
import { useParams } from 'react-router-dom'
import { BsPencilSquare } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'

import './styles/singlerecipe.css'
import {
  formatIngredients,
  formatMethod,
  formatDate,
} from '../../utils/formatting'

const SingleRecipe = ({
  user,
  selectedRecipe,
  handleDeleteRecipe,
  handleShowEditClick,
}) => {
  const { id } = useParams()

  const date = formatDate(selectedRecipe.publishDate?.seconds);
  const method = formatMethod(selectedRecipe?.method);
  const ingredients = formatIngredients(selectedRecipe?.ingredients);

  return (
    <div className='single-recipe__container'>
      <div className='header__container'>
        <h1 className='header__title'>{selectedRecipe.title}</h1>
        <div className='header__icons'>
          {user ? (
            <>
              <BsPencilSquare
                className='pencil-icon'
                onClick={(e) => handleShowEditClick(id)}
              />
              <FaTrashAlt
                onClick={(e) => handleDeleteRecipe(id)}
                className='trash-icon'
              />
            </>
          ) : null}
        </div>
      </div>
      <h2 className='single-recipe__date'>
        {date}
      </h2>

      <div className='body__container'>
        <div className='body__method__container'>
          <h2>method:</h2>
          <ol>{method}</ol>
        </div>
        <div className='body__ingredients__container'>
          <h2>ingredients:</h2>
          {ingredients}
        </div>
      </div>
    </div>
  )
}

export default SingleRecipe
