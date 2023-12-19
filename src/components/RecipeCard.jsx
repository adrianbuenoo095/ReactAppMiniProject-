import { faFire, faUser, faX } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import classes from "./RecipeCard.module.css";
const RecipeCard = ({ id, name, calories, image, servings, remove }) => {
    const navigate = useNavigate()

    return (
        <div className="bg-white rounded-md overflow-hidden relative shadow-md">
            <div className="p-4">
                <h1 className="text-2xl text-green-400">{name}</h1>
                <div>
                    <img className={classes.img} src={image} />
                </div>
                <div className="flex justify-between mt-4 mb-4 text-gray-500">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="ml-1 lg:text-xl">{servings}</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faFire} />

                        <span className="ml-1 lg:text-xl">{calories}</span>
                    </div>
                </div>
                {calories && calories > 200 ? (
                    <p className="mb-4 text-gray-500">This recipe has high calories!</p>
                ) : (
                    <p className="mb-4 text-gray-500">This recipe has a lower calorie. </p>
                )}
                <button className="text-white bg-green-400 p-4 rounded-md w-full uppercase" onClick={() => {
                    console.log("View recipe trigered")
                    navigate(`/recipes/${id}`)
                }}>View Recipe</button>
            </div>
            <div className="absolute top-0 right-0 mt-4 mr-4  text-blue-700 rounded-full pt-1 pb-1 pl-4 pr-5 text-lg uppercase">
                <button type="button" className=" hover:bg-blue-700 text-green-400 font-bold py-2 px-4 rounded" onClick={(event) => {
                    event.stopPropagation()
                    console.log('Delete triggered')
                    remove(id)
                }}><FontAwesomeIcon icon={faX} />
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;