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
                        <div className="container mx-auto p-4" key={recipe.id}>
                            < div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16" >
                                <RecipeCard id={recipe.id} name={recipe.name} image={recipe.image} calories={recipe.calories} servings={recipe.servings} remove={handleDelete} />
                            </div>
                        </div >

                    );
                })}
        </div >
    );
}

export default Homepage;