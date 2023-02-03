import { useEffect, useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";
import AddEditRecipeForm from "./components/AddEditRecipeForm";
import FirestoreService from "./FirestoreService";
import RecipeList from "./components/RecipeList";
import Home from "./pages/Home";
import RecipesPage from "./pages/RecipesPage";

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes()
      .then((fetchedRecipes) => {
        setRecipes(fetchedRecipes);
      })
      .catch((error) => {
        console.error(error.message);
        throw error;
      });
  }, [user]);

  const fetchRecipes = async () => {
    let fetchedRecipes = [];

    try {
      const response = await FirestoreService.readDocuments("recipes");

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
    // <Home existingUser={user} />
    <RecipesPage recipes={recipes}/>
    // <div className="ui container">
    //   <h1 className="ui header">Firebase Recipes</h1>
    //   <LoginForm existingUser={user} />

    //   <Divider />

    //   {user ? <AddEditRecipeForm handleAddRecipe={handleAddRecipe} /> : null}

    //   <Divider />

    //   <RecipeList recipes={recipes} />
    // </div>
  );
}

export default App;
