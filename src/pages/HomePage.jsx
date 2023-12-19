import { useState } from "react";
import recipesData from "../assets/recipes.json";
import RecipeCard from "../components/RecipeCard";
import RecipeForm from "../components/recipe/RecipeForm";

const Homepage = () => {
    // eslint-disable-next-line no-unused-vars
    const [recipes, setRecipes] = useState(recipesData);

    const handleDelete = (recipeId) => {
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);

        setRecipes(updatedRecipes);
    };

    const initialValues = {
        name: "",
        image: "",
    };

    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        const currentName = e.target.name;
        let currentValue = e.target.value;
        if (e.target.type === "file") {
            currentValue = e.target.file;
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
                <RecipeForm
                    change={handleChange}
                    text={initialValues.name}
                    image={initialValues.image}
                    submit={handleSubmit}
                />
            </div>
            {recipes &&
                recipes.map((recipe) => {
                    return (
                        <div className="container mx-auto p-4" key={recipe.id} >
                            <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                                <RecipeCard
                                    id={recipe.id}
                                    name={recipe.name}
                                    image={recipe.image}
                                    remove={handleDelete}
                                    {...recipe}
                                />

                            </div>
                        </div>
                    );
                })}
        </div >
    );
};

export default Homepage;
