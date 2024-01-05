import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './styles/singlerecipe.css'
import FirestoreService from '../utils/firebase/FirestoreService'
import SingleRecipe from '../components/cards/SingleRecipe'
import EditRecipe from '../components/cards/EditRecipe'
import ActionButton from '../components/buttons/ActionButton'

const SingleRecipePage = ({
  user,
  handleFetchRecipeById,
  handleFormatIngredients,
  handleFormatMethod,
  handleFormatDate,
  handleDeleteRecipe,
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState('')
  const [formattedIngredients, setFormattedIngredients] = useState([])
  const [formattedMethod, setFormattedMethod] = useState([])
  const [formattedDate, setFormattedDate] = useState([])
  const [showEdit, setShowEdit] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    fetchSingleRecipe()
  }, [])

  const handleUpdateRecipe = async (id, updatedRecipe) => {
    await FirestoreService.updateDocument('recipes', id, updatedRecipe)
    fetchSingleRecipe()
    setShowEdit(!showEdit)
    alert(`successfully updated the recipe with the id: ${id}`)
  }

  const fetchSingleRecipe = async () => {
    const response = await handleFetchRecipeById(`${id}`)
    setSelectedRecipe(response)

    setFormattedMethod(handleFormatMethod(response.method))
    setFormattedIngredients(handleFormatIngredients(response.ingredients))
    setFormattedDate(handleFormatDate(response.publishDate.seconds))
  }

  const handleShowEditClick = () => {
    setShowEdit(!showEdit)
  }

  return (
    <div>
      {showEdit ? (
        <div className='single-recipe-wrapper'>
          <EditRecipe
            user={user}
            title={selectedRecipe.title}
            date={selectedRecipe.date}
            ingredients={selectedRecipe.ingredients}
            method={selectedRecipe.method}
            handleEditSubmit={handleUpdateRecipe}
            handleShowEditClick={handleShowEditClick}
          />
          <div className='back-button__container'>
            <Link to='/recipes'>
              <ActionButton onClick={() => {}}>Save</ActionButton>
            </Link>
          </div>
        </div>
      ) : (
        <div className='single-recipe-wrapper'>
          <SingleRecipe
            user={user}
            selectedRecipe={selectedRecipe}
            formattedMethod={formattedMethod}
            formattedIngredients={formattedIngredients}
            formattedDate={formattedDate}
            handleDeleteRecipe={handleDeleteRecipe}
            handleShowEditClick={handleShowEditClick}
          />
          <div className='back-button__container'>
            <Link to='/recipes'>
              <ActionButton>Back to recipes</ActionButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleRecipePage
