const RecipeCard = ({ id, name, calories, image, servings, remove }) => {
    return (
        <div>
            <div>
                <img src={image} />
            </div>
            <div>
                <h1>{name}</h1>
                {calories && calories > 200 ? (
                    <p>This recipe has high calories!</p>
                ) : (
                    <p>This recipe has a lower calorie. </p>
                )}
                <p>{servings}</p>
            </div>
            <button className="deleteButton" onClick={remove}>Delete</button>
        </div>);
}

export default RecipeCard;