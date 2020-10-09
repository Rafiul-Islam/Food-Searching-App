import React, {useState} from 'react';
import RecipeDetails from "./RecipeDetails";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const MyComponent = ({recipe}) => {
    const [show, setShow] = useState(false);
    const {label, image, url, ingredients} = recipe.recipe;
    return (

        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <button className='recipe-url-button' onClick={() => window.open(`${url}`, '_blank')}>URL</button>
            <button className='recipe-button' onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients}/>}
        </div>
    );
};

export default MyComponent;
