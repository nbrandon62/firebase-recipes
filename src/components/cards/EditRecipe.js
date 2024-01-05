import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsPencilSquare } from 'react-icons/bs'

import './styles/editrecipe.css'
import Input from '../form/Input'
import TextArea from '../form/Textarea'

const EditRecipe = ({
  title,
  method,
  ingredients,
  date,
  user,
  handleEditSubmit,
  handleShowEditClick,
}) => {
  const [newTitle, setNewTitle] = useState(title)
  const [newMethod, setNewMethod] = useState(method)
  const [newIngredients, setNewIngredients] = useState(ingredients)

  const { id } = useParams()

  const onEditSubmit = (id) => {
    const updatedRecipe = {
      title: newTitle,
      method: newMethod,
      ingredients: newIngredients,
    }
    handleEditSubmit(id, updatedRecipe)
  }

  return (
    <div className='single-recipe__container'>
      <div className='header__container'>
        <Input
          className='edit__header__title'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
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
            value={newMethod}
            onChange={(e) => setNewMethod(e.target.value)}
          />
        </div>
        <div className='edit-body__ingredients__container'>
          <h2>ingredients:</h2>
          <TextArea
            className='edit-body__textarea'
            value={newIngredients}
            onChange={(e) => setNewIngredients(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default EditRecipe
