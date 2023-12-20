import { useState } from "react";
import recipesData from "../assets/recipes.json";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/recipe/RecipeForm";

const Homepage = () => {
    // eslint-disable-next-line no-unused-vars
    const initialValues = {
        name: "",
        image: "",
    };

    const [recipes, setRecipes] = useState(recipesData);
    const [formData, setFormData] = useState(initialValues);

    const handleDelete = (recipeId) => {
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);

        setRecipes(updatedRecipes);
    };

    const handleChange = (e) => {
        const currentName = e.target.name;
        let currentValue = e.target.value;
        if (e.target.type === "file") {
            if (e.target.files.length !== 0) {
                currentValue = URL.createObjectURL(e.target.files[0])
            }
        }
        setFormData({ ...formData, [currentName]: currentValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = { ...formData };
        setRecipes([...recipes, newRecipe]);
        setFormData(initialValues);
    };

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <RecipeForm change={handleChange} text={initialValues.name} image={initialValues.image} submit={handleSubmit} />
            </div>
            <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16"  >
                {recipes &&
                    recipes.map((recipe) => {
                        return (
                            <RecipeCard key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} remove={handleDelete} {...recipe} />
                        );
                    })}
            </div>
        </div >
    );
};

export default Homepage;
