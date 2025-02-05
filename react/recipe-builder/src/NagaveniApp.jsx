import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState({ name: '', quantity: '' , unit: 'grams' });
  const [instructions, setInstructions] = useState("");
  const [prpTime, setPrpTime] = useState();
  const [recipeSummary, setRecipeSummary] = useState(null);
  const [errors, setErrors] = useState({ name: '', prepTime: '' });

  // const addIngredient = () => {
  //   setIngredients([...ingredients, { name: '', quantity: '', unit: 'grams' }]);
    
  // };

  const addIngredient = () => {
    if (ingredientInput.name && ingredientInput.quantity) {
      // Add current ingredient to the list
      setIngredients([...ingredients, ingredientInput]);

      // Reset input for next ingredient
      setIngredientInput({ name: '', quantity: '', unit: 'grams' });
    }
  };
  const handleIngredientChange = ( field, value) => {
    setIngredientInput({ ...ingredientInput, [field]: value });
  };

  const removeIngredient =(index)=>{
    const updateIngredient = ingredients.filter((ingredient, i)=> i !== index);
    setIngredients(updateIngredient);
  }

  return (
    <>
      <h1>Recipe Builder</h1>
      {/* <form> */}
      <label htmlFor="recipe-name">Recipe Name:</label>
      <input type='text'
        value={recipeName} id='recipe-name'
        onChange={(e) => setRecipeName(e.target.value)}
      />
        <h3>Ingredients:</h3>
        
              <label htmlFor='ingredient-name'>Name</label>
              <input
                type="text"
                placeholder="Name" 
                value={ingredientInput.name} id='ingredient-name'
                onChange={(e)=>handleIngredientChange('name', e.target.value)}
              // Add onChange handlers to manage updates if needed
              />
              
              <label htmlFor='ingredient-quantity'>Quantity</label>
              <input
                type="number"
                placeholder="Quantity"
                value={ingredientInput.quantity || ''} id='ingredient-quantity'
                  onChange={(e)=>handleIngredientChange( 'quantity', e.target.value)}
              // Add onChange handlers to manage updates if needed
              />
               <label htmlFor='ingredient-unit'>Unit</label>
             
              <select value={ingredientInput.unit} id='ingredient-unit'
              onChange={(e)=>handleIngredientChange( 'unit', e.target.value)}>
                <option value="grams">grams</option>
                <option value="cups">cups</option>
                <option value="tablespoons">tablespoons</option>
              </select>
               <button type="button" id='adding' onClick={addIngredient}>Add Ingredient</button>
      
      <label htmlFor="instructions">Instructions:</label>
      <textarea
        id="instructions"
        rows="5"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <label htmlFor='prp-time'>Prp-time</label>
      <input type='number' value={prpTime || ''} id='prp-time' onChange={(e)=>{setPrpTime(e.target.value)}}/>
      <button id='submit'>Submit</button>

      <div className="card">
        {recipeName}
      
        {ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <div key={index}>
              {ingredient.name} - {ingredient.quantity} {ingredient.unit}
              <button onClick={() => removeIngredient(index)}>Remove</button>
            </div>
          ))
        ) : (
          <div>No ingredients added yet!</div>
        )}
      </div>
      
     
      {/* </form> */}
    </>
  )
}

export default App