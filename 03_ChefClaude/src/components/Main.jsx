import {useState} from "react";

import IngredientsList from "./IngredientsList.jsx";
import AddIngredient from "./AddIngredient.jsx";
import ClaudeRecipe from "./ClaudeRecipe.jsx";

const Main = () => {
    const [ingredients, setIngredients] = useState([])
    
    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    const [shouldShowRecipe, setShouldShowRecipe] = useState(false)
    const [recipe, setRecipe] = useState(null);
    
    return (
        <main>
            <AddIngredient 
                setIngredients={setIngredients}
            />
            {ingredientsList.length > 0 && <IngredientsList
                ingredientsList={ingredientsList}
                setShouldShowRecipe={setShouldShowRecipe}
                setRecipe={setRecipe}
            />}
            {shouldShowRecipe && <ClaudeRecipe
                recipe={recipe}
            />}
        </main>
    );
};

export default Main;