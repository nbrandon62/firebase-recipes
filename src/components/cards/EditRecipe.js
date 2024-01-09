import React, { useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'

import './styles/editrecipe.css'
import Input from '../form/Input'
import TextArea from '../form/Textarea'

const EditRecipe = ({
  recipe,
  user,
  handleUpdateRecipe,
  handleShowEditClick,
}) => {

  return (
    <div className='single-recipe__container'>
      <div className='header__container'>
        <Input
          className='edit__header__title'
          value={recipe.title}
          onChange={(e) => handleUpdateRecipe({...recipe, title: e.target.value})}
        />
        <div className='header__icons'>
          {user ? (
            <>
              <BsPencilSquare
                className='pencil-icon'
                onClick={(e) => handleShowEditClick()}
              />
            </>
          ) : null}
        </div>
      </div>
      
      <div className='edit-body__container'>
        <div className='edit-body__method__container'>
          <h2>method:</h2>
          <TextArea
            className='edit-body__textarea'
            value={recipe.method}
            onChange={(e) => handleUpdateRecipe({...recipe, method: e.target.value})}
          />
        </div>
        <div className='edit-body__ingredients__container'>
          <h2>ingredients:</h2>
          <TextArea
            className='edit-body__textarea'
            value={recipe.ingredients}
            onChange={(e) => handleUpdateRecipe({...recipe, ingredients: e.target.value})}
          />
        </div>
      </div>
    </div>
  )
}

export default EditRecipe
