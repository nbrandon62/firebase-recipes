import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import '../components/cards/styles/singlerecipecard.css'
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

  // TODO: secure the read rules per their email to me?

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
  )
  if (showEdit) {
    content = (
      <EditRecipe
        user={user}
        title={selectedRecipe.title}
        date={selectedRecipe.date}
        ingredients={selectedRecipe.ingredients}
        method={selectedRecipe.method}
        handleEditSubmit={handleUpdateRecipe}
        handleShowEditClick={handleShowEditClick}
      />
    )
  }

  return (
    <div>
      {content}
        <Link to='/recipes'>
          <ActionButton className='button__action'>
            Keep Browsing
          </ActionButton>
        </Link>
    </div>
  )
}

export default SingleRecipePage
