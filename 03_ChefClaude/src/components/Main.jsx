import {useState} from "react";
import Recipe from "./Recipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import AddIngredient from "./AddIngredient.jsx";

const Main = () => {
    const [ingredients, setIngredients] = useState([])
    
    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    const [shouldShowRecipe, setShouldShowRecipe] = useState(false)
    
    return (
        <main>
            <AddIngredient 
                setIngredients={setIngredients}
            />
            {ingredientsList.length > 0 && <IngredientsList
                ingredientsList={ingredientsList}
                shouldShowRecipe={shouldShowRecipe}
                setShouldShowRecipe={setShouldShowRecipe}
            />}
            {shouldShowRecipe && <Recipe />}
        </main>
    );
};

export default Main;