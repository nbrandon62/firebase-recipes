import React, { useEffect } from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

import { sortButtons } from '../utils/staticData'
import ScrollTopButton from '../components/elements/ScrollTopButton'
import RecipeList from '../components/cards/RecipeList'
import '../components/cards/styles/recipelist.css'
import ActionButton from '../components/buttons/ActionButton'
import SortButton from '../components/buttons/SortButton'

const RecipesPage = ({
  recipes,
  user,
  isLoading,
  orderBy,
  recipesPerPage,
  handleCategoryFilter,
  handleFormatIngredients,
  handleFormatMethod,
  handleOrderBy,
  handleLoadMoreRecipes,
  handleFetchRecipes,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleOrderByDate = (event) => {
    if (orderBy === "publishDateDesc") {
      handleOrderBy("publishDateAsc");
    } else {
      handleOrderBy("publishDateDesc");
    }
  };

  return (
    <div className='recipe-list-wrapper'>
      <div className='sort-button__container'>
        {sortButtons.map((category) => (
          <SortButton 
          key={category.id}
          category={category}
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
      {recipes && recipes.length > 0 ? (
        <RecipeList
          recipes={recipes}
          handleFormatIngredients={handleFormatIngredients}
          handleFormatMethod={handleFormatMethod}
        />
      ) : null}
      <div className='recipe-page-bottom'>
        <ActionButton
          className='button__action'
          onClick={handleLoadMoreRecipes}
        >
          Load More
        </ActionButton>
        <ScrollTopButton />
      </div>
    </div>
  )
}

export default RecipesPage
