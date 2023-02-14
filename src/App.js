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
  const [categoryFilter, setCategoryFilter] = useState("");
  const [orderBy, setOrderBy] = useState("publishDateDesc");
  const [recipesPerPage, setRecipesPerPage] = useState(9);
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
      .finally(() => {
        setIsLoading(false);
      });
  }, [user, categoryFilter, orderBy, recipesPerPage]);

  const fetchRecipes = async (cursorId = "") => {
    const queries = [];

    if (categoryFilter) {
      queries.push({
        field: "category",
        condition: "==",
        value: categoryFilter,
      });
    }

    const orderByField = "publishDate";
    let orderByDirection;

    if (orderBy) {
      switch (orderBy) {
        case "publishDateAsc":
          orderByDirection = "asc";
          break;
        case "publishDateDesc":
          orderByDirection = "desc";
          break;
        default:
          break;
      }
    }

    let fetchedRecipes = [];

    const response = await FirestoreService.readDocuments({
      collection: "recipes",
      queries: queries,
      orderByField: orderByField,
      orderByDirection: orderByDirection,
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

  const handleFetchRecipeById = async (id) => {
    const response = await FirestoreService.readSingleDocument("recipes", id);
    return response;
  };

  const handleAddRecipe = async (newRecipe) => {
    const response = await FirestoreService.createDocument(
      "recipes",
      newRecipe
    );

    handleFetchRecipes();
    alert(`created a recipe with an ID = ${response.id}`);
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

  const formatIngredients = (ingredients) => {
    let ingredientsArr = ingredients.split(",");
    let ingredientList = ingredientsArr.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    });
    return ingredientList;
  };

  const formatMethod = (method) => {
    let methodArr = method.split("-").splice(1);
    let methodList = methodArr.map((method, index) => {
      return <li key={index}>{method}</li>;
    });
    return methodList;
  };

  const toDateTime = (secs) => {
    var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
    t.setSeconds(secs);

    const day = t.getUTCDate();
    const month = t.getUTCMonth() + 1;
    const year = t.getFullYear();
    const dateString = `${month}/${day}/${year}`;

    return dateString;
  }

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
              isLoading={isLoading}
              recipesPerPage={recipesPerPage}
              orderBy={orderBy}
              handleFormatIngredients={formatIngredients}
              handleFormatMethod={formatMethod}
              handleOrderBy={setOrderBy}
              handleCategoryFilter={setCategoryFilter}
              handleRecipesPerPage={handleRecipesPerPageChange}
              handleLoadMoreRecipes={handleLoadMoreRecipesClick}
              handleDeleteRecipe={handleDeleteRecipe}
              handleFetchRecipeById={handleFetchRecipeById}
              handleFetchRecipes={handleFetchRecipes}
            />
          }
        />
        <Route
          path="/create-recipes-admin-only"
          exact
          element={<CreateRecipePage handleAddRecipe={handleAddRecipe} />}
        />
        <Route
          path="/recipes/:id"
          exact
          element={
            <SingleRecipePage
              user={user}
              handleFormatDate={toDateTime}
              handleFetchRecipeById={handleFetchRecipeById}
              handleFormatIngredients={formatIngredients}
              handleFormatMethod={formatMethod}
              handleDeleteRecipe={handleDeleteRecipe}
            />
          }
        />
      </Routes>
      <Footer user={user} />
    </BrowserRouter>
  );
}

export default App;
