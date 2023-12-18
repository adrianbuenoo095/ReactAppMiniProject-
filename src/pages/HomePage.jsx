import { useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../assets/recipes.json";
import RecipeCard from "../components/RecipeCard";

const Homepage = () => {
    // eslint-disable-next-line no-unused-vars
    const [recipes, setRecipes] = useState(recipesData);

    const handleDelete = (recipeId) => {
        // Filter out the recipe with the specified ID
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
                        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                            <RecipeCard id={recipe.id} name={recipe.name} image={recipe.image} remove={handleDelete} />
                        </Link>
                    );
                })}
        </div>
    );
}

export default Homepage;