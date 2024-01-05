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
  handleDeleteRecipe,
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState({})
  const [editRecipe, setEditRecipe] = useState({})
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
    setEditRecipe(response)
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
            recipe={editRecipe}
            handleUpdateRecipe={setEditRecipe}
            handleEditSubmit={handleUpdateRecipe}
            handleShowEditClick={handleShowEditClick}
          />
          <div className='back-button__container'>
            <ActionButton
              onClick={() => handleUpdateRecipe(id, editRecipe)}
            >
              Save
            </ActionButton>
          </div>
        </div>
      ) : (
        <div className='single-recipe-wrapper'>
          <SingleRecipe
            user={user}
            selectedRecipe={selectedRecipe}
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
