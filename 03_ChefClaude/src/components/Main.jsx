import {useState} from "react";

const Main = () => {
    const [ingredients, setIngredients] = useState([])
    
    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    function onSubmitAddIngredient(event) {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get('ingredient');
        
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log(ingredientsList);
    }
    
    return (
        <main>
            <form onSubmit={onSubmitAddIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name={"ingredient"}
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    );
};

export default Main;