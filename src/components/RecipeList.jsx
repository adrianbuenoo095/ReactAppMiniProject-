import { useState } from "react";
import recipeList from "../assets/recipes.json";
import classes from "./Recipe.module.css";


const RecipeList = () => {

  const [recipes, setRecipes] = useState(recipeList);

  const handleDelete = (recipeId) => {
    // Filter out the recipe with the specified ID
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);

    setRecipes(updatedRecipes);
    console.log(updatedRecipes);
  };

  return recipes.map((recipe) => (
    <div className={classes.container} key={recipe.id}>
      <div>
        <img className={classes.img} src={recipe.image} />
      </div>
      <div className={classes.name}>
        <h1>{recipe.name}</h1>
        {recipe.calories && recipe.calories > 200 ? (
          <p>This recipe has high calories!</p>
        ) : (
          <p>This recipe has a lower calorie. </p>
        )}
        <button onClick={() => handleDelete(recipe.id)}>Delete</button>
      </div>
    </div>
  ));
};

export default RecipeList;
