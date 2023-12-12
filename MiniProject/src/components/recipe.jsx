import recipes from "../assets/recipes.json";

const recipeList = ({ jsonData }) => {
  return (
    <ul>
      {jsonData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
export default recipeList;
