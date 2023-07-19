import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const recipeHandler = (recipe) => {
    setRecipes([...recipes, recipe])
  }
  
  const deleteRecipe = (event) => {
    let filteredList = []
    recipes.filter((recipe) => {
      if (recipe.name !== event.target.parentElement.parentElement.getAttribute('name')) {
        filteredList.push(recipe)
      }
    })
    setRecipes(filteredList)
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList deleteRecipe={deleteRecipe} recipes={recipes}/>
      <RecipeCreate recipeHandler={recipeHandler} recipes={recipes}/>
    </div>
  );
}

export default App;
