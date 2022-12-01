import { useState } from "react";
import { Divider } from "semantic-ui-react"
import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";
import AddEditRecipeForm from "./components/AddEditRecipeForm";
import FirebaseFirestoreService from "./FirestoreService";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  const handleAddRecipe = async (newRecipe) => {
    try {
      const response = await FirebaseFirestoreService.createDocument(newRecipe);

      //TODO: fetch new recipes from firestore
      alert(`created a recipe with an ID = ${response.id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="ui container">
      <h1 className="ui header" >Firebase Recipes</h1>
      <LoginForm existingUser={user} />
      <Divider />
      <AddEditRecipeForm handleAddRecipe={handleAddRecipe} />
    </div>
  );
}

export default App;
