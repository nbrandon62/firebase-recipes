import { useEffect, useState } from "react";
import { Divider, Grid } from "semantic-ui-react";
import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";
import AddEditRecipeForm from "./components/AddEditRecipeForm";
import FirestoreService from "./FirestoreService";
import RecipeList from "./components/RecipeList";

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

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

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="ui container">
      <h1 className="ui header">Firebase Recipes</h1>
      <LoginForm existingUser={user} />

      <Divider />

      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            {user ? (
              <AddEditRecipeForm handleAddRecipe={handleAddRecipe} />
            ) : null}
          </Grid.Column>
          <Grid.Column>
            {user ? <RecipeList recipes={recipes} /> : null}

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
