import { useEffect, useState } from 'react'
import FirebaseAuthService from '././utils/firebase/FirebaseAuthService'
import FirestoreService from '././utils/firebase/FirestoreService'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import RecipesPage from './pages/RecipesPage'
import Footer from './components/elements/Footer'
import NavBar from './components/elements/NavBar'
import CreateRecipePage from './pages/CreateRecipePage'
import SingleRecipePage from './pages/SingleRecipePage'
import './index.css'

const PAGE_SIZE = 9

function App() {
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState('')
  const [recipes, setRecipes] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('')
  const [orderBy, setOrderBy] = useState('publishDateDesc')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetchRecipes()
      .then((fetchedRecipes) => {
        setRecipes(fetchedRecipes)
      })
      .catch((error) => {
        console.error(error.message)
        throw error
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [user, categoryFilter])

  const fetchRecipes = async (cursorId = '') => {
    const queries = []

    if (categoryFilter) {
      queries.push({
        field: 'category',
        condition: '==',
        value: categoryFilter,
      })
    }

    const orderByField = 'publishDate'
    let orderByDirection

    if (orderBy) {
      switch (orderBy) {
        case 'publishDateAsc':
          orderByDirection = 'asc'
          break
        case 'publishDateDesc':
          orderByDirection = 'desc'
          break
        default:
          break
      }
    }

    let fetchedRecipes = []

    const response = await FirestoreService.readDocuments({
      collection: 'recipes',
      queries: queries,
      orderByField: orderByField,
      orderByDirection: orderByDirection,
      perPage: PAGE_SIZE,
      cursorId: cursorId,
    })

    const newRecipes = response.docs.map((recipeDoc) => {
      const id = recipeDoc.id
      const data = recipeDoc.data()
      data.publishDate = new Date(data.publishDate.seconds * 1000)

      return { ...data, id }
    })

    if (cursorId) {
      fetchedRecipes = [...recipes, ...newRecipes]
    } else {
      fetchedRecipes = [...newRecipes]
    }

    return fetchedRecipes
  }

  const handleFetchRecipes = async (cursorId = '') => {
    try {
      const fetchedRecipes = await fetchRecipes(cursorId)
      setRecipes(fetchedRecipes)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  }

  const handleLoadMoreRecipesClick = () => {
    const lastRecipe = recipes[recipes.length - 1]
    const cursorId = lastRecipe.id

    handleFetchRecipes(cursorId)
  }

  const handleFetchRecipeById = async (id) => {
    const response = await FirestoreService.readSingleDocument('recipes', id)
    return response
  }

  const handleAddRecipe = async (newRecipe) => {
    const response = await FirestoreService.createDocument('recipes', newRecipe)

    handleFetchRecipes()
    alert(`Congrats! You've created a recipe with an ID = ${response.id}`)
  }

  const handleDeleteRecipe = async (recipeId) => {
    const deleteConfirmation = window.confirm(
      'Are you sure you want to delete this recipe?'
    )

    if (deleteConfirmation) {
      await FirestoreService.deleteDocument('recipes', recipeId)
      handleFetchRecipes()
      alert(`successfully deleted a recipe with an ID = ${recipeId}`)
    }
  }

  FirebaseAuthService.subscribeToAuthChanges(setUser)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path='/'
          exact
          element={<Home existingUser={user} handleSetUserId={setUserId} />}
        />
        <Route
          path='/recipes'
          exact
          element={
            <RecipesPage
              activeFilter={categoryFilter}
              recipes={recipes}
              user={user}
              isLoading={isLoading}
              handleCategoryFilter={setCategoryFilter}
              handleLoadMoreRecipes={handleLoadMoreRecipesClick}
              handleDeleteRecipe={handleDeleteRecipe}
              handleFetchRecipeById={handleFetchRecipeById}
              handleFetchRecipes={handleFetchRecipes}
            />
          }
        />
        <Route
          path='/create-recipes-admin-only'
          exact
          element={<CreateRecipePage handleAddRecipe={handleAddRecipe} />}
        />
        <Route
          path='/recipes/:id'
          exact
          element={
            <SingleRecipePage
              user={user}
              handleFetchRecipeById={handleFetchRecipeById}
              handleDeleteRecipe={handleDeleteRecipe}
            />
          }
        />
      </Routes>
      <Footer user={user} />
    </BrowserRouter>
  )
}

export default App
