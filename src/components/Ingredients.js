
const Ingredients = props => {
    const mappedIngredients = props.allIngredients.map((ingredient, idx) => 
        <li key={idx} style={{background:ingredient.color}}>{ingredient.name}<button name={ingredient.name} style={{color:ingredient.color}} onClick={(e) => props.moveIngredients(e, idx)}>Go!</button> </li>)
    return(
        <div className="ingredientList">
            <div class="container">
                <div>Menu Items:</div>
                <ul>
                    {mappedIngredients}
                </ul>

            </div>
        </div>
    )
    
}

export default Ingredients;