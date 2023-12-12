import recipes from "../assets/recipes.json";

//not sure about jsonData as props 
const RecipeList = () => {
  return (
    <ul>
      {recipes.map((item) => (
        <div key={item.id}>
          <h1 >{item.name}</h1>
          <div>
            <img src={item.image} />
          </div>
          <div>
            <p><span>Calories:</span>{item.calories}</p>
            <p><span>Servings:</span>{item.servings}</p>
          </div>
        </div>
      ))
      }
    </ul >
  );
};
export default RecipeList;
