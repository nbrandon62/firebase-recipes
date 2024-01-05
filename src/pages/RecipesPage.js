import React, { useEffect } from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

import './styles/recipes.css'
import { sortButtons } from '../utils/staticData'
import ScrollTopButton from '../components/elements/ScrollTopButton'
import RecipeList from '../components/cards/RecipeList'
import ActionButton from '../components/buttons/ActionButton'
import SortButton from '../components/buttons/SortButton'

const RecipesPage = ({
  activeFilter,
  recipes,
  isLoading,
  orderBy,
  handleCategoryFilter,
  handleFormatIngredients,
  handleFormatMethod,
  handleOrderBy,
  handleLoadMoreRecipes,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='recipe-page__wrapper'>
      <div className='sort-button__container'>
        {sortButtons.map((category) => (
          <SortButton
            key={category.id}
            category={category}
            isActive={category.value === activeFilter}
            onClick={() => handleCategoryFilter(category.value)}
          />
        ))}
      </div>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      ) : null}
      {!isLoading && recipes && recipes.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fcede4',
          }}
        >
          <h1>no recipes found...</h1>
        </div>
      ) : null}
      <div className='recipe-list__wrapper' role='list'>
        {recipes && recipes.length > 0 ? (
          <RecipeList
            recipes={recipes}
            handleFormatIngredients={handleFormatIngredients}
            handleFormatMethod={handleFormatMethod}
          />
        ) : null}
        <div className='recipe-page__buttons__container'>
          <ActionButton onClick={handleLoadMoreRecipes}>Load More</ActionButton>
          <ScrollTopButton />
        </div>
      </div>
    </div>
  )
}

export default RecipesPage
