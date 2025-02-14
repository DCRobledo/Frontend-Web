import {getRecipeFromChefClaude} from "../AIHandler.js";

const IngredientsList = ({ingredientsList, setShouldShowRecipe, setRecipe}) => {
    async function onGetRecipeClick() {
        setShouldShowRecipe(true);

        const recipe = await getRecipeFromChefClaude(ingredientsList)
        setRecipe(recipe)
    }
    
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
            {ingredientsList.length >= 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button
                    onClick={onGetRecipeClick}
                >Get a recipe
                </button>
            </div>}
        </section>
    );
};
export default IngredientsList;