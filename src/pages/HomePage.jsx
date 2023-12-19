import { useState } from "react";
import recipesData from "../assets/recipes.json";
import RecipeCard from "../components/RecipeCard";

const Homepage = () => {
    // eslint-disable-next-line no-unused-vars
    const [recipes, setRecipes] = useState(recipesData);

    const handleDelete = (recipeId) => {
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);

        setRecipes(updatedRecipes);
        console.log(updatedRecipes);
    };

    return (
        <div>
            <h1>Home Page</h1>
            {recipes &&
                recipes.map((recipe) => {
                    return (
                        <RecipeCard key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} remove={handleDelete} />

                    );
                })}
        </div>
    );
}

export default Homepage;