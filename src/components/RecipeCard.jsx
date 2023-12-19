import classes from "./RecipeCard.module.css";

import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ id, name, calories, image, servings, remove }) => {
    const navigate = useNavigate()

    return (
        <div className={classes.container} onClick={() =>
            navigate(`/recipes/${id}`)
        }>
            <div>
                <img className={classes.img} src={image} />
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
            <button type="button" className="deleteButton" onClick={(event) => {
                event.stopPropagation()
                console.log('Delete triggered')
                remove(id)
            }}>Delete</button>
        </div >);
}

export default RecipeCard;