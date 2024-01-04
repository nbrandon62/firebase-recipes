import React, { useState, useEffect } from 'react'

import './styles/createrecipe.css'
import CascadingText from '../components/elements/CascadingText'
import Label from '../components/form/Label'
import Input from '../components/form/Input'
import { cascadeProps, categoryOptions } from '../utils/staticData'
import Select from '../components/form/Select'
import Textarea from '../components/form/Textarea'
import ActionButton from '../components/buttons/ActionButton'

const CreateRecipePage = ({ handleAddRecipe }) => {
  const [recipe, setRecipe] = useState({
    title: '',
    category: '',
    publishDate: new Date().toISOString().split('T')[0],
    method: '',
    ingredients: '',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleOnEnter = () => {}
  const handleRecipeSubmit = (e) => {
    e.preventDefault()

    if (recipe.category.length === 0) {
      alert('Please select a category before submitting')
      return
    }
    if (recipe.method.length === 0) {
      alert('Please add method to the recipe before submitting')
      return
    }

    const isPublished =
      new Date(recipe.publishDate) <= new Date() ? true : false

    const newRecipe = {
      ...recipe,
      publishDate: new Date().toISOString().split('T')[0],
      isPublished,
    }

    handleAddRecipe(newRecipe)
    setRecipe({
      ...recipe,
      title: '',
      category: '',
      method: '',
      ingredients: '',
    })
  }

  return (
    <div className='recipe-form-container'>
      <div className='recipe-form-header'>
        <h1 className='form-header'>Submit your recipe here</h1>
      </div>
      <div className='form-subheader'>
        <h3>how to submit a recipe</h3>
      </div>
      
      <CascadingText text={cascadeProps} />

      <div className='recipe-form__wrapper'>
        <form className='recipe-form__container' onSubmit={handleRecipeSubmit}>
          <Label htmlFor='recipe-form__title'>Recipe Title</Label>
          <Input
            id='recipe-form__title'
            placeholder='Title...'
            required={true}
            value={recipe.title}
            onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
          />
          <Select
            options={categoryOptions}
            value={recipe.category}
            onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
          />
          <Label htmlFor='recipe-form__method'>Method</Label>
          <Textarea
            id='recipe-form__method'
            required={true}
            onChange={(e) => setRecipe({ ...recipe, method: e.target.value })}
            onKeyDown={handleOnEnter}
            value={recipe.method}
          />
          <Label htmlFor='recipe-form__ingredients'>Ingredients</Label>
          <Textarea
            id='recipe-form__ingredients'
            onChange={(e) =>
              setRecipe({ ...recipe, ingredients: e.target.value })
            }
            required={true}
            value={recipe.ingredients}
            placeholder='Please separate ingredients by comma like so: milk, flour, sugar, etc...
            or: 
            milk,
            flour,
            sugar,
            '
          />
          <div>
            <ActionButton
              className='button__action'
            >
              Add Recipe
            </ActionButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateRecipePage
