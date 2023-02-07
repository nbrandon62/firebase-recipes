import { useEffect, useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import FirestoreService from "./FirestoreService";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import RecipesPage from "./pages/RecipesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateRecipePage from "./pages/CreateRecipePage";
import SingleRecipePage from "./pages/SingleRecipePage";

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [recipesPerPage, setRecipesPerPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchRecipes()
      .then((fetchedRecipes) => {
        setRecipes(fetchedRecipes);
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      })
      .finally(() => {setIsLoading(false)})
      ;

  }, [user, categoryFilter, recipesPerPage]);

  const fetchRecipes = async (cursorId = "") => {
    const queries = [];

    if (categoryFilter) {
      queries.push({
        field: "category",
        condition: "==",
        value: categoryFilter,
      });
    }

    let fetchedRecipes = [];

    const response = await FirestoreService.readDocuments({
      collection: "recipes",
      queries: queries,
      perPage: recipesPerPage,
      cursorId: cursorId,
    });

    const newRecipes = response.docs.map((recipeDoc) => {
      const id = recipeDoc.id;
      const data = recipeDoc.data();
      data.publishDate = new Date(data.publishDate.seconds * 1000);

      return { ...data, id };
    });

    if (cursorId) {
      fetchedRecipes = [...recipes, ...newRecipes];
    } else {
      fetchedRecipes = [...newRecipes];
    }

    return fetchedRecipes;
  };

  const handleFetchRecipes = async (cursorId = "") => {
    try {
      const fetchedRecipes = await fetchRecipes(cursorId);
      setRecipes(fetchedRecipes);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const handleAddRecipe = async (newRecipe) => {
    const response = await FirestoreService.createDocument(
      "recipes",
      newRecipe
    );

    handleFetchRecipes();
    alert(`created a recipe with an ID = ${response.id}`);
  };

  const handleRecipesPerPageChange = (event) => {
    const recipesPerPage = event.target.value;

    setRecipes([]);
    setRecipesPerPage(recipesPerPage);
  };

  const handleLoadMoreRecipesClick = () => {
    const lastRecipe = recipes[recipes.length - 1];
    const cursorId = lastRecipe.id;

    handleFetchRecipes(cursorId);
  };

  const handleUpdateRecipe = async (newRecipe, recipeId) => {
    await FirestoreService.updateDocument("recipes", recipeId, newRecipe);
    handleFetchRecipes();

    alert(`successfully updated the recipe with the id: ${recipeId}`);
    setCurrentRecipe(null);
  };

  const handleEditRecipeClick = (recipeId) => {
    const selectedRecipe = recipes.find((recipe) => {
      return recipe.id === recipeId;
    });

    if (selectedRecipe) {
      setCurrentRecipe(selectedRecipe);
    }
  };

  const handleDeleteRecipe = async (recipeId) => {
    const deleteConfirmation = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (deleteConfirmation) {
      await FirestoreService.deleteDocument("recipes", recipeId);
      handleFetchRecipes();
      alert(`successfully deleted a recipe with an ID = ${recipeId}`);
    }
  };

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home existingUser={user} />} />
        <Route
          path="/recipes"
          exact
          element={
            <RecipesPage
              recipes={recipes}
              user={user}
              categoryFilter={categoryFilter}
              isLoading={isLoading}
              handleCategoryFilter={setCategoryFilter}
              recipesPerPage={recipesPerPage}
              handleRecipesPerPage={handleRecipesPerPageChange}
              handleLoadMoreRecipes={handleLoadMoreRecipesClick}
              handleDeleteRecipe={handleDeleteRecipe}
            />
          }
        />
        <Route
          path="/create-recipes-admin-only"
          exact
          element={
            <CreateRecipePage
              handleAddRecipe={handleAddRecipe}
            />
          }
        />
        <Route path="/recipe/:id" exact element={<SingleRecipePage />} />
      </Routes>
      <Footer user={user} />
    </BrowserRouter>
  );
}

export default App;

