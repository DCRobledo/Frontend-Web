const AddIngredient = ({setIngredients}) => {
    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    return (
        <form action={addIngredient} className="add-ingredient-form">
            <input
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name={"ingredient"}
            />
            <button>Add ingredient</button>
        </form>
    );
};

export default AddIngredient;