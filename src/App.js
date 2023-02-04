import { useEffect, useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import FirestoreService from "./FirestoreService";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import RecipesPage from "./pages/RecipesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateRecipePage from "./pages/CreateRecipePage";

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    fetchRecipes()
      .then((fetchedRecipes) => {
        setRecipes(fetchedRecipes);
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      });

    console.log(categoryFilter);
  }, [user, categoryFilter]);

  const fetchRecipes = async () => {
    const queries = [];

    if (categoryFilter) {
      queries.push({
        field: "category",
        condition: "==",
        value: categoryFilter,
      });
    }

    let fetchedRecipes = [];

    try {
      const response = await FirestoreService.readDocuments({
        collection: "recipes",
        queries: "queries",
      });

      const newRecipes = response.docs.map((recipeDoc) => {
        const id = recipeDoc.id;
        const data = recipeDoc.data();
        data.publishDate = new Date(data.publishDate.seconds * 1000);

        return { ...data, id };
      });

      fetchedRecipes = [...newRecipes];
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    return fetchedRecipes;
  };

  const handleFetchRecipes = async () => {
    try {
      const fetchedRecipes = await fetchRecipes();
      setRecipes(fetchedRecipes);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const handleAddRecipe = async (newRecipe) => {
    try {
      const response = await FirestoreService.createDocument(
        "recipes",
        newRecipe
      );

      handleFetchRecipes();
      alert(`created a recipe with an ID = ${response.id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdateRecipe = async (newRecipe, recipeId) => {
    try {
      await FirestoreService.updateDocument("recipes", recipeId, newRecipe);
      handleFetchRecipes();

      alert(`successfully updated the recipe with the id: ${recipeId}`);
      setCurrentRecipe(null);
    } catch (error) {
      alert(error.message);
      throw error;
    }
  };

  const handleEditRecipeClick = (recipeId) => {
    const selectedRecipe = recipes.find((recipe) => {
      return recipe.id === recipeId;
    });

    if (selectedRecipe) {
      setCurrentRecipe(selectedRecipe);
    }
  };

  const handleEditRecipeCancel = () => {
    setCurrentRecipe(null);
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
              categoryFilter={categoryFilter}
              handleCategoryFilter={setCategoryFilter}
            />
          }
        />
        <Route
          path="/create"
          exact
          element={<CreateRecipePage handleAddRecipe={handleAddRecipe} />}
        />
      </Routes>
      <Footer user={user} />
    </BrowserRouter>
  );
}

export default App;

//   <LoginForm existingUser={user} />

//   {user ? <AddEditRecipeForm handleAddRecipe={handleAddRecipe} /> : null}

//   <RecipeList recipes={recipes} />
